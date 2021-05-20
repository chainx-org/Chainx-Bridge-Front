import React, { useContext, useEffect, useMemo, useState } from "react";
import { IssueBtcInputStyle, IssueStyle, AccountSwitch } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import BCHs from "../CoinSelect/icons/BCH_s.svg";
import BTCs from "../CoinSelect/icons/BTC_S.svg";
import DOGEs from "../CoinSelect/icons/DOGE_s.svg";
import Sherpaxs from "../CoinSelect/icons/sherpax_s.svg";
import arrowYellow from "./icons/arrow_yellow.svg";
import arrowGray from "./icons/arrow_gray.svg";
import { InputNumber, Button, notification } from "antd";
import { useTranslation } from "react-i18next";
import ExplainTag from "../ExplainTag";
import CoinSelect from "../CoinSelect";
import useAccountModel from "../../hooks/useAccountModel";
import { FeeContext } from "../../hooks/useFeeContext";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useApi } from "../../hooks/useApi";
import ChangeChainXAddress from "../../util";
import IssueRequestSuccessCard from "../IssueRequestSuccessCard";
import { IssueRequestsContext } from "../../hooks/useIssueRequests";

interface coinProps {
  img_url: any;
  coinName: string;
  symol: string;
}

function Issue(): React.ReactElement {
  const value = useContext(IssueRequestsContext);
  const [IssueRequestList, SetIssueRequestList] = useState([] as any[]);
  const Fee = useContext(FeeContext);
  const pcxPrice = Fee.pcxPrice;
  const { api } = useApi();
  const { t } = useTranslation();
  const { currentAccount } = useAccountModel();
  const [showIssueNext, setShowIssueNext] = useState(false);
  const [IssueAmount, setIssueAmount] = useState(0);
  const [vaultAddress, setVaultAddress] = useState("");
  const [vaultBtcAddress, setVaultBtcAddress] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const optionList = [
    {
      img_url: BTCs,
      coinName: "BTC",
      symol: "Bitcoin",
    },
    {
      img_url: BCHs,
      coinName: "BCH",
      symol: "Bitcoin Cash",
    },
    {
      img_url: DOGEs,
      coinName: "DOG",
      symol: "Dogecoin",
    },
  ];
  const [isShow, setIsShow] = useState(false);
  const [coinSymol, setCoinSymol] = useState<coinProps>({
    img_url: BTCs,
    coinName: "BTC",
    symol: "Bitcoin",
  });
  const currCoin = (value: any) => {
    setCoinSymol(value);
    setIsShow(!isShow);
  };
  const ShowSelect = () => {
    setIsShow(!isShow);
  };
  const currAddress = <>{currentAccount?.address}</>;
  const hypothecateNum = <>{IssueAmount / pcxPrice / 10 || 0} PCX</>;
  const chargeNum = <>0.00 {coinSymol.coinName}</>;
  const key = "testIssue";
  const handleMatchVault = async () => {
    if (IssueAmount <= 0) {
      notification.warn({ message: "发行的值必须大于0" });
      return;
    }
    setButtonLoading(true);
    const vaults = await api.query.xGatewayBitcoinBridge.vaults.entries();
    const results = await Promise.all(
      vaults.map(async ([key, value]) => {
        const vault = value.unwrap();
        const collateral = await (await api.query.system.account(vault.id)).data
          .reserved;
        const maxToken = collateral.muln(pcxPrice).divn(3);
        return [
          vault.id,
          maxToken
            .sub(vault.issuedTokens)
            .sub(vault.issuedTokens)
            .sub(vault.toBeIssuedTokens),
          vault.wallet,
        ];
      })
    );
    setVaultAddress(
      results.length > 0
        ? ChangeChainXAddress(JSON.parse(JSON.stringify(results))[0][0])
        : ""
    );
    setVaultBtcAddress(
      results.length > 0 ? JSON.parse(JSON.stringify(results))[0][2] : ""
    );
    const injector = await web3FromAddress(currentAccount!!.address);
    api.tx.xGatewayBitcoinBridge
      .requestIssue(vaultAddress, IssueAmount * 100000000)
      .signAndSend(
        currentAccount!!.address,
        { signer: injector.signer },
        ({ status, dispatchError, events }) => {
          if (status.isInBlock) {
            notification["success"]({
              key,
              // message: `Completed at block hash ${status.asInBlock.toString()}`,
              message: `Waiting For Confirmation`,
              duration: 0,
              icon: (
                <LoadingOutlined style={{ fontSize: 24, color: "#F6C94A" }} />
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
                  <LoadingOutlined style={{ fontSize: 24, color: "#F6C94A" }} />
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
          hypothecateNum={hypothecateNum}
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
                <img src={Sherpaxs} alt="" />
                <p className="currNames">SherpaX</p>
              </div>
            </AccountSwitch>
            <IssueBtcInputStyle>
              <div className="issueNum">
                <InputNumber
                  type={"number"}
                  value={IssueAmount}
                  placeholder={"0"}
                  onChange={(e) => {
                    setIssueAmount(+e);
                  }}
                />
                <div className="line" />
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
                  onChange={(e) => setIssueAmount(+e)}
                />
                <div className="line" />
                <div className={`btc-title`}>S{coinSymol.coinName}</div>
              </div>
            </IssueBtcInputStyle>
          </div>
          <div className="bottomContent">
            <ExplainTag title="目标账户" children={currAddress} />
            <ExplainTag title="锁定抵押品" children={hypothecateNum} />
            <ExplainTag title="手续费" children={chargeNum} />
            <Button loading={buttonLoading} onClick={handleMatchVault}>
              {t("next")}
            </Button>
          </div>
        </IssueStyle>
      )}
    </>
  );
}

export default Issue;
