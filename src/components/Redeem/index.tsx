import React, { useEffect, useState } from "react";
import { AccountSwitch, RedeemBtcInputStyle, RedeemStyle } from "./style";
import { Button, notification } from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import arrowYellow from "../Issue/icons/arrow_yellow.svg";
import arrowGray from "../Issue/icons/arrow_gray.svg";
import { useTranslation } from "react-i18next";
import AddressInput from "../Input/AddressInput";
import TabCoinSelect from "../TabCoinSelect";
import useAccountModel from "../../hooks/useAccountModel";
import { useApi } from "../../hooks/useApi";
// import useXbtcAssets from "../../hooks/useXbtcAssets";
import { web3FromAddress } from "@polkadot/extension-dapp";
import NumInput from "../Input/NumInput";
import RedeemRequestSuccessCard from "../RedeemRequestSuccessCard";
import { RedeemCoinProps } from "../../page/Bridge";
import sBTCs from "../TabCoinSelect/icons/SBTC.svg";
import BTCs from "../CoinSelect/icons/BTC_S.svg";
import DOGEs from "../CoinSelect/icons/DOGE_s.svg";
// import sBCHs from "../TabCoinSelect/icons/SBCH.svg";
import sDOGs from "../TabCoinSelect/icons/SDOG.svg";
import {Vault} from "../../interfaces";

function Redeem(): React.ReactElement {
  const { t } = useTranslation();
  const [showRedeemNext, setShowRedeemNext] = useState(false);
  const { currentAccount } = useAccountModel();
  const [RedeemAmount, setRedeemAmount] = useState(0);
  const [BtcAddress, setBtcAddress] = useState("");
  const [vaultAddress, setVaultAddress] = useState("");
  const [vaultBtcAddress, setVaultBtcAddress] = useState("");
  const [n, setN] = useState(0);
  const [requestId, setRequestId] = useState('');
  const { api } = useApi();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [sDoge, setSDoge] = useState(0);
  const [xBtcBalance, setXbtcBalance] = useState(0);
  const [allBalance, setAllBalance] = useState(0);
  const [coinSymol, setCoinSymol] = useState<RedeemCoinProps>({
    img_url: sBTCs,
    coinName: "XBTC",
    symol: "Bitcoin",
    balance: 9999.0024,
    img_urls: BTCs,
  });
  const RedeemOptionList = [
    {
      img_url: sBTCs,
      coinName: "XBTC",
      symol: "Bitcoin",
      balance: xBtcBalance ? xBtcBalance : 0,
      img_urls: BTCs,
    },
    // {
    //   img_url: sBCHs,
    //   coinName: "XBCH",
    //   symol: "Bitcoin Cash",
    //   balance: 0,
    // },
    {
      img_url: sDOGs,
      coinName: "XDOGE",
      symol: "Dogecoin",
      balance: sDoge ? sDoge : 0,
      img_urls: DOGEs,
    },
  ];
  const currCoin = (value: RedeemCoinProps) => {
    setCoinSymol(value);
    setIsShow(!isShow);
  };
  async function getAssets(account: string) {
    const res = await api.query.xAssets.assetBalance(account, 3221225473);
    const dogeRes = await api.query.xAssets.assetBalance(account, 3221225475);
    setXbtcBalance(JSON.parse(JSON.stringify(res)).Usable / 100000000)
    setSDoge(JSON.parse(JSON.stringify(dogeRes)).Usable / 100000000)
  }
  useEffect(() => {
    getAssets(currentAccount?.address!!);
  }, [currentAccount])
  const ShowSelect = () => {
    setIsShow(!isShow);
  };
  const key = "testRedeem";
  const handleReedem = async () => {
    // let valid =  WAValidator.validate(BtcAddress,'BTC')
    // if(!valid){
    //     notification.warn({message: "??????????????????BTC??????"});
    //     return
    // }
    if(BtcAddress === ""){
      notification.warn({ message: "BTC??????????????????" });
      return;
    }
    if (RedeemAmount <= 0) {
      notification.warn({ message: "????????????????????????0" });
      return;
    }
    setButtonLoading(true);
    const injector = await web3FromAddress(currentAccount!!.address);
    if (coinSymol.coinName === 'XBTC') {
      const vaults = await api.query.xGatewayBitcoinBridge.vaults.entries();
      const results = await Promise.all(
          vaults.map(async ([key, value]) => {
            const vault: Vault = value.unwrap();
            const assetId = api.consts.xGatewayBitcoinBridge.tokenAssetId;
            const issuedBalance = await api.query.xAssets.assetBalance(key.args[0], assetId)
            return [
              key.args[0],
              ((issuedBalance.toJSON()["Usable"] as number) || 0) > RedeemAmount,
              vault.wallet,
            ];
          })
      )
      setVaultAddress(
        results.length > 0
          ? JSON.parse(JSON.stringify(results))[0][0]
          : ""
      );
      setVaultBtcAddress(
        results.length > 0 ? JSON.parse(JSON.stringify(results))[0][2] : ""
      );
      api.tx.xGatewayBitcoinBridge
        .requestRedeem(
            results.length > 0
                ? JSON.parse(JSON.stringify(results))[0][0]
                : "",
          RedeemAmount * 100000000,
          BtcAddress
        )
        .signAndSend(
          currentAccount!!.address,
          { signer: injector.signer },
          ({ status, dispatchError, events }) => {
            if (status.isInBlock) {
              notification["success"]({
                key,
                message: `Waiting For Confirmation`,
                // message: `Completed at block hash ${status.asInBlock.toString()}`,
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
                const { documentation, name, section } = decoded;
                notification["error"]({
                  key,
                  message: `${section}.${name}: ${documentation.join(" ")}`,
                  duration: 3,
                });
                setButtonLoading(false);
              }
            } else {
              if (status.type === "Finalized") {
                const dataList = events.map(({ event: { data } }) => { return data});
                setRequestId(dataList[1].toString())
                notification["success"]({
                  key,
                  message: `Current status: ${status.type}`,
                  duration: 3,
                });
                setN(n + 1);
                setShowRedeemNext(true);
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
    } else if (coinSymol.coinName === "XDOG") {
      const vaults = await api.query.xGatewayDogecoinBridge.vaults.entries();
      const results = await Promise.all(
          vaults.map(async ([key, value]) => {
            const vault: Vault = value.unwrap();
            const assetId = api.consts.xGatewayDogecoinBridge.tokenAssetId;
            const issuedBalance = await api.query.xAssets.assetBalance(key.args[0], assetId)
            return [
              key.args[0],
              ((issuedBalance.toJSON()["Usable"] as number) || 0) > RedeemAmount,
              vault.wallet,
            ];
          })
      )
      setVaultAddress(
        results.length > 0
          ? JSON.parse(JSON.stringify(results))[0][0]
          : ""
      );
      setVaultBtcAddress(
        results.length > 0 ? JSON.parse(JSON.stringify(results))[0][2] : ""
      );
      api.tx.xGatewayDogecoinBridge
        .requestRedeem(
            results.length > 0
                ? JSON.parse(JSON.stringify(results))[0][0]
                : "",
          RedeemAmount * 100000000,
          BtcAddress
        )
        .signAndSend(
          currentAccount!!.address,
          { signer: injector.signer },
          ({ status, dispatchError, events }) => {
            if (status.isInBlock) {
              notification["success"]({
                key,
                message: `Waiting For Confirmation`,
                // message: `Completed at block hash ${status.asInBlock.toString()}`,
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
                const { documentation, name, section } = decoded;
                notification["error"]({
                  key,
                  message: `${section}.${name}: ${documentation.join(" ")}`,
                  duration: 3,
                });
                setButtonLoading(false);
              }
            } else {
              if (status.type === "Finalized") {
                const dataList = events.map(({ event: { data } }) => { return data});
                setRequestId(dataList[1].toString())
                setN(n + 1);
                setShowRedeemNext(true);
                notification["success"]({
                  key,
                  message: `Current status: ${status.type}`,
                  duration: 3,
                });
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
        });
    }
  };
  return (
    <>
      {showRedeemNext ? (
        <RedeemRequestSuccessCard
          coinSymol={coinSymol}
          RedeemAmount={RedeemAmount}
          BtcAddress={BtcAddress}
          vaultAddress={vaultAddress}
          vaultBtcAddress={vaultBtcAddress}
          requestId={requestId}
        />
      ) : (
        <RedeemStyle>
          <div className="topContent">
            <AccountSwitch>
              <TabCoinSelect
                  optionList={RedeemOptionList}
                isShow={isShow}
                coinSymol={coinSymol}
                currCoin={currCoin}
                ShowSelect={ShowSelect}
              />
            </AccountSwitch>
            <RedeemBtcInputStyle>
              <NumInput
                RedeemAmount={RedeemAmount}
                title={t("Redemption amount")}
                setRedeemAmount={setRedeemAmount}
                coinSymol={coinSymol}
                placeholder={''}
                description={t("Balance")}
                children={<span>{coinSymol.coinName === 'XBTC' &&  xBtcBalance ? xBtcBalance : coinSymol.coinName === 'XDOGE' && sDoge ? sDoge : '0'}</span>}
                symol={coinSymol.coinName}
              />
              <AddressInput
                coinSymol={coinSymol}
                address={BtcAddress}
                changeAddress={(e: string) => setBtcAddress(e)}
              />
              <img
                src={true ? arrowYellow : arrowGray}
                alt="to"
                className="arrow"
              />
              <NumInput
                RedeemAmount={RedeemAmount}
                title={t("You will receive")}
                placeholder=''
                setRedeemAmount={setRedeemAmount}
                coinSymol={coinSymol}
                symol={coinSymol.coinName.slice(1)}
              />
              <Button
                loading={buttonLoading}
                className="yellow"
                onClick={handleReedem}
              >
                {t("Next")}
              </Button>
            </RedeemBtcInputStyle>
          </div>
        </RedeemStyle>
      )}
    </>
  );
}

export default Redeem;

function BN(arg0: number): any {
  throw new Error("Function not implemented.");
}
