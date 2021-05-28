import React, { useState } from "react";
import { AccountSwitch, RedeemBtcInputStyle, RedeemStyle } from "./style";
import { Button, notification } from "antd";
import arrowYellow from "../Issue/icons/arrow_yellow.svg";
import arrowGray from "../Issue/icons/arrow_gray.svg";
import { useTranslation } from "react-i18next";
import AddressInput from "../Input/AddressInput";
import TabCoinSelect from "../TabCoinSelect";
import sBTC from "../TabCoinSelect/icons/SBTC.svg";
import useAccountModel from "../../hooks/useAccountModel";
import { useApi } from "../../hooks/useApi";
// import useXbtcAssets from "../../hooks/useXbtcAssets";
import { web3FromAddress } from "@polkadot/extension-dapp";
import NumInput from "../Input/NumInput";
import RedeemRequestSuccessCard from "../RedeemRequestSuccessCard";
import { RedeemCoinProps } from "../../page/Bridge";
import sBTCs from "../TabCoinSelect/icons/SBTC.svg";
import sBCHs from "../TabCoinSelect/icons/SBCH.svg";
import sDOGs from "../TabCoinSelect/icons/SDOG.svg";
function Redeem(): React.ReactElement {
  const { t } = useTranslation();
  const [showRedeemNext, setShowRedeemNext] = useState(false);
  const { currentAccount } = useAccountModel();
  const [RedeemAmount, setRedeemAmount] = useState(0);
  const [BtcAddress, setBtcAddress] = useState("");
  const [n, setN] = useState(0);
  const { api } = useApi();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [sDoge, setSDoge] = useState(0);
  const [xBtcBalance, setXbtcBalance] = useState(0);
  const [coinSymol, setCoinSymol] = useState<RedeemCoinProps>({
    img_url: sBTC,
    coinName: "XBTC",
    symol: "Bitcoin",
    balance: 9999.0024,
  });
  const RedeemOptionList = [
    {
      img_url: sBTCs,
      coinName: "XBTC",
      symol: "Bitcoin",
      balance: xBtcBalance ? xBtcBalance : 0,
    },
    // {
    //   img_url: sBCHs,
    //   coinName: "XBCH",
    //   symol: "Bitcoin Cash",
    //   balance: 0,
    // },
    {
      img_url: sDOGs,
      coinName: "XDOG",
      symol: "Dogecoin",
      balance: sDoge ? sDoge : 0,
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
  const ShowSelect = () => {
    setIsShow(!isShow);
    getAssets(currentAccount?.address!!);
  };
  const handleReedem = async () => {
    // let valid =  WAValidator.validate(BtcAddress,'BTC')
    // if(!valid){
    //     notification.warn({message: "请输入合法的BTC地址"});
    //     return
    // }
    if (RedeemAmount <= 0) {
      notification.warn({ message: "赎回的值必须大于0" });
      return;
    }
    setButtonLoading(true);
    const injector = await web3FromAddress(currentAccount!!.address);
    if (coinSymol.coinName === 'XBTC') {
      api.tx.xGatewayBitcoinBridge
        .requestRedeem(
          currentAccount!!.address,
          RedeemAmount * 100000000,
          BtcAddress
        )
        .signAndSend(
          currentAccount!!.address,
          { signer: injector.signer },
          ({ status, dispatchError, events }) => {
            if (status.isInBlock) {
              notification["success"]({
                message: `Completed at block hash ${status.asInBlock.toString()}`,
                duration: 0,
              });
            } else if (dispatchError) {
              if (dispatchError.isModule) {
                const decoded = api.registry.findMetaError(
                  dispatchError.asModule
                );
                const { documentation, name, section } = decoded;
                notification["error"]({
                  message: `${section}.${name}: ${documentation.join(" ")}`,
                  duration: 0,
                });
                setButtonLoading(false);
              }
            } else {
              notification["success"]({
                message: `Current status: ${status.type}`,
                duration: 0,
              });
              if (status.type === "Finalized") {
                setN(n + 1);
                setShowRedeemNext(true);
              }
            }
          }
        )
        .catch((error) => {
          notification["error"]({
            message: `:( transaction failed', ${error}`,
            duration: 0,
          });
          setButtonLoading(false);
        });
    } else if (coinSymol.coinName === "XDOG") {
      api.tx.xGatewayDogecoinBridge
        .requestRedeem(
          currentAccount!!.address,
          RedeemAmount * 100000000,
          BtcAddress
        )
        .signAndSend(
          currentAccount!!.address,
          { signer: injector.signer },
          ({ status, dispatchError, events }) => {
            if (status.isInBlock) {
              notification["success"]({
                message: `Completed at block hash ${status.asInBlock.toString()}`,
                duration: 0,
              });
            } else if (dispatchError) {
              if (dispatchError.isModule) {
                const decoded = api.registry.findMetaError(
                  dispatchError.asModule
                );
                const { documentation, name, section } = decoded;
                notification["error"]({
                  message: `${section}.${name}: ${documentation.join(" ")}`,
                  duration: 0,
                });
                setButtonLoading(false);
              }
            } else {
              notification["success"]({
                message: `Current status: ${status.type}`,
                duration: 0,
              });
              if (status.type === "Finalized") {
                setN(n + 1);
                setShowRedeemNext(true);
              }
            }
          }
        )
        .catch((error) => {
          notification["error"]({
            message: `:( transaction failed', ${error}`,
            duration: 0,
          });
        });
    }
  };
  return (
    <>
      {showRedeemNext ? (
        <RedeemRequestSuccessCard
          coinSymol={coinSymol}
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
                // description={t("balance")}
                // children={<span>{XbtcBalance ? XbtcBalance : "0"}</span>}
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
                title={t("you will receive")}
                setRedeemAmount={setRedeemAmount}
                coinSymol={coinSymol}
                symol={coinSymol.coinName.slice(1)}
              />
              <Button
                loading={buttonLoading}
                className="yellow"
                onClick={handleReedem}
              >
                {t("next")}
              </Button>
            </RedeemBtcInputStyle>
          </div>
        </RedeemStyle>
      )}
    </>
  );
}

export default Redeem;