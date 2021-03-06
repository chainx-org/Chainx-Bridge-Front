import React, {useContext, useEffect, useMemo, useState} from "react";
import {IssueBtcInputStyle, IssueStyle, AccountSwitch} from "./style";
import {LoadingOutlined} from "@ant-design/icons";
import {decodeAddress, encodeAddress} from "@polkadot/keyring";
import BTCs from "../CoinSelect/icons/BTC_S.svg";
import sBTCs from "../TabCoinSelect/icons/SBTC.svg";
import Sherpaxs from "../CoinSelect/icons/sherpax_s.svg";
import arrowYellow from "./icons/arrow_yellow.svg";
import arrowGray from "./icons/arrow_gray.svg";
import {InputNumber, Button, notification} from "antd";
import {useTranslation} from "react-i18next";
import ExplainTag from "../ExplainTag";
import CoinSelect from "../CoinSelect";
import useAccountModel from "../../hooks/useAccountModel";
import {FeeContext} from "../../hooks/useFeeContext";
import {web3FromAddress} from "@polkadot/extension-dapp";
import {useApi} from "../../hooks/useApi";
import IssueRequestSuccessCard from "../IssueRequestSuccessCard";
import {IssueRequestsContext} from "../../hooks/useIssueRequests";
import {Vault} from "../../interfaces";
import {coinProps, optionList} from "../../page/Bridge";

function Issue(): React.ReactElement {
    const value = useContext(IssueRequestsContext);
    const [IssueRequestList, SetIssueRequestList] = useState([] as any[]);
    const Fee = useContext(FeeContext);
    const pcxPrice = Fee.pcxPrice;
    const dogePCXPrice = Fee.dogePCXprice;
    const {api} = useApi();
    const {t} = useTranslation();
    const {currentAccount} = useAccountModel();
    const [showIssueNext, setShowIssueNext] = useState(false);
    const [IssueAmount, setIssueAmount] = useState(0);
    // const [vaultAddress, setVaultAddress] = useState("");
    const [vaultBtcAddress, setVaultBtcAddress] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [coinSymol, setCoinSymol] = useState<coinProps>({
        img_url: BTCs,
        coinName: "BTC",
        symol: "Bitcoin",
        img_urls: sBTCs,
    });
    const currCoin = (value: coinProps) => {
        setCoinSymol(value);
        setIsShow(!isShow);
    };
    const ShowSelect = () => {
        setIsShow(!isShow);
    };
    const currAddress = <>{currentAccount?.address}</>;
    const hypothecateNum = <>{(IssueAmount / pcxPrice * 0.1 || 0).toFixed(8)} PCX</>;
    const dogHypothecateNum = <>{(IssueAmount / dogePCXPrice * 0.1 || 0).toFixed(8)} PCX</>;
    const chargeNum = <>0.00 {coinSymol.coinName}</>;
    const key = "testIssue";
    const handleMatchVault = async () => {
        if (IssueAmount <= 0) {
            notification.warn({message: "????????????????????????0"});
            return;
        }
        setButtonLoading(true);
        if (coinSymol.coinName === 'BTC') {
            const vaults = await api.query.xGatewayBitcoinBridge.vaults.entries();
            const results = await Promise.all(
                vaults.map(async ([key, value]) => {
                    const vault: Vault = value.unwrap();
                    const collateral = await (await api.query.system.account(key.args[0])).data.reserved;
                    const assetId = api.consts.xGatewayBitcoinBridge.tokenAssetId;
                    const balance = await api.query.xAssets.assetBalance(key.args[0], assetId);
                    const maxToken = collateral.muln(pcxPrice).divn(3);
                    return [
                        key.args[0],
                        maxToken.sub(vault.toBeIssuedTokens).toNumber() - ((balance.toJSON()["Usable"] as number) || 0),
                        vault.wallet,
                    ];
                })
            );
            // setVaultAddress(
            //     results.length > 0
            //         ? JSON.parse(JSON.stringify(results))[0][0]
            //         : ""
            // );
            setVaultBtcAddress(
                results.length > 0 ? JSON.parse(JSON.stringify(results))[0][2] : ""
            );
            const injector = await web3FromAddress(currentAccount!!.address);
            api.tx.xGatewayBitcoinBridge
                .requestIssue(results.length > 0
                    ? JSON.parse(JSON.stringify(results))[0][0]
                    : "", IssueAmount * 100000000)
                .signAndSend(
                    currentAccount!!.address,
                    {signer: injector.signer},
                    ({status, dispatchError, events}) => {
                        if (status.isInBlock) {
                            notification["success"]({
                                key,
                                // message: `Completed at block hash ${status.asInBlock.toString()}`,
                                message: `Waiting For Confirmation`,
                                duration: 0,
                                icon: (
                                    <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                                ),
                            });
                        } else if (dispatchError) {
                            if (dispatchError.isModule) {
                                const decoded = api.registry.findMetaError(
                                    dispatchError.asModule
                                );
                                const {documentation, name, section} = decoded;
                                notification["error"]({
                                    key,
                                    message: `${section}.${name}: ${documentation.join(" ")}`,
                                    duration: 3,
                                });
                                setButtonLoading(false);
                            }
                        } else {
                            if (status.type === "Finalized") {
                                notification["success"]({
                                    key,
                                    message: `Current status: ${status.type}`,
                                    duration: 3,
                                });
                                setShowIssueNext(true);
                            } else {
                                notification["success"]({
                                    key,
                                    message: `Waiting For Confirmation`,
                                    duration: 0,
                                    icon: (
                                        <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                                    ),
                                });
                            }
                        }
                    }
                )
                .catch((error) => {
                    notification["error"]({
                        key,
                        message: `:( transaction failed', ${error}`,
                        duration: 3,
                    });
                    setButtonLoading(false);
                });
        };
        if (coinSymol.coinName === 'DOGE') {
            const vaults = await api.query.xGatewayDogecoinBridge.vaults.entries();
            const results = await Promise.all(
                vaults.map(async ([key, value]) => {
                    const vault: Vault = value.unwrap();
                    const collateral = await (await api.query.system.account(key.args[0])).data.reserved;
                    const assetId = api.consts.xGatewayDogecoinBridge.tokenAssetId;
                    const balance = await api.query.xAssets.assetBalance(key.args[0], assetId);
                    const maxToken = collateral.muln(pcxPrice).divn(3);
                    return [
                        key.args[0],
                        maxToken.sub(vault.toBeIssuedTokens).toNumber() - ((balance.toJSON()["Usable"] as number) || 0),
                        vault.wallet,
                    ];
                })
            );
            // setVaultAddress(
            //     results.length > 0
            //         ? JSON.parse(JSON.stringify(results))[0][0]
            //         : ""
            // );
            setVaultBtcAddress(
                results.length > 0 ? JSON.parse(JSON.stringify(results))[0][2] : ""
            );
            const injector = await web3FromAddress(currentAccount!!.address);
            api.tx.xGatewayDogecoinBridge
                .requestIssue(results.length > 0 ? JSON.parse(JSON.stringify(results))[0][0] : "", IssueAmount * 100000000)
                .signAndSend(
                    currentAccount!!.address,
                    {signer: injector.signer},
                    ({status, dispatchError, events}) => {
                        if (status.isInBlock) {
                            notification["success"]({
                                key,
                                // message: `Completed at block hash ${status.asInBlock.toString()}`,
                                message: `Waiting For Confirmation`,
                                duration: 0,
                                icon: (
                                    <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                                ),
                            });
                        } else if (dispatchError) {
                            if (dispatchError.isModule) {
                                const decoded = api.registry.findMetaError(
                                    dispatchError.asModule
                                );
                                const {documentation, name, section} = decoded;
                                notification["error"]({
                                    key,
                                    message: `${section}.${name}: ${documentation.join(" ")}`,
                                    duration: 0,
                                });
                                setButtonLoading(false);
                            }
                        } else {
                            if (status.type === "Finalized") {
                                notification["success"]({
                                    key,
                                    message: `Current status: ${status.type}`,
                                    duration: 3,
                                });
                                setShowIssueNext(true);
                            } else {
                                notification["success"]({
                                    key,
                                    message: `Waiting For Confirmation`,
                                    duration: 0,
                                    icon: (
                                        <LoadingOutlined style={{fontSize: 24, color: "#F6C94A"}}/>
                                    ),
                                });
                            }
                        }
                    }
                )
                .catch((error) => {
                    notification["error"]({
                        key,
                        message: `:( transaction failed', ${error}`,
                        duration: 0,
                    });
                    setButtonLoading(false);
                });
        }
    }

    let polkaAccount = encodeAddress(
        decodeAddress(
            currentAccount
                ? currentAccount.address
                : "16aVMBpJEdRe3PW2E3AsWENYhoKUaeTfDT6P6fdUCQtiiHVL"
        ),
        0
    );
    useMemo(() => {
        let AllIssueRequestList: Array<any> = JSON.parse(JSON.stringify(value))
            .requests;
        let issueList = AllIssueRequestList.filter(
            (item) => item.requester === polkaAccount
        );
        SetIssueRequestList(issueList);
    }, [value]);
    return (
        <>
            {showIssueNext ? (
                <IssueRequestSuccessCard
                    currAddress={currAddress}
                    hypothecateNum={coinSymol.coinName === 'BTC' ? hypothecateNum : dogHypothecateNum}
                    IssueAmount={IssueAmount}
                    vaultBtcAddress={vaultBtcAddress}
                    coinSymol={coinSymol}
                    openTime={IssueRequestList.map((item) => {
                        return item.openTime;
                    })}
                />
            ) : (
                <IssueStyle>
                    <div className="topContent">
                        <AccountSwitch>
                            <CoinSelect
                                optionList={optionList}
                                isShow={isShow}
                                currCoin={currCoin}
                                ShowSelect={ShowSelect}
                                coinSymol={coinSymol}
                            />
                            <div className="to">To</div>
                            <div className="currContent">
                                <img src={Sherpaxs} alt=""/>
                                <p className="currNames">SherpaX</p>
                            </div>
                        </AccountSwitch>
                        <IssueBtcInputStyle>
                            <div className="issueNum">
                                <InputNumber
                                    // type={"number"}
                                    value={IssueAmount}
                                    placeholder={"0"}
                                    min={0}
                                    onChange={(e) => {
                                        setIssueAmount(+e);
                                    }}
                            />
                                <div className="line"/>
                                <div className={`btc-title`}>{coinSymol.coinName}</div>
                            </div>
                            <img
                                src={true ? arrowYellow : arrowGray}
                                alt="to"
                                className="arrow"
                            />
                            <div className="issueNum">
                                <InputNumber
                                    value={IssueAmount}
                                    placeholder={"-"}
                                    min={0}
                                    onChange={(e) => setIssueAmount(+e)}
                                />
                                <div className="line"/>
                                <div className={`btc-title`}>X{coinSymol.coinName}</div>
                            </div>
                        </IssueBtcInputStyle>
                    </div>
                    <div className="bottomContent">
                        <ExplainTag title={t('The target account')} children={currAddress} tooltip={t('After the token is issued, it will be deposited in the target account')} />
                        <ExplainTag title={t('Lock up collateral')} tooltip={t('After the issue is successful, it will be unlocked. If you do not complete the transfer in the corresponding currency as required, you will lose the locked collateral')}
                                    children={coinSymol.coinName === 'BTC' ? hypothecateNum : dogHypothecateNum}/>
                        <ExplainTag title={t('Service charge')} children={chargeNum} tooltip={t('The fee will be used to reward the asset vault')} />
                        <Button loading={buttonLoading} onClick={handleMatchVault}>
                            {t("Next")}
                        </Button>
                    </div>
                </IssueStyle>
            )}
        </>
    );
}

export default Issue;
