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
import { RedeemCoinProps, RedeemOptionList } from "../../page/Bridge";

function Redeem(): React.ReactElement {
  const { t } = useTranslation();
  const [showRedeemNext, setShowRedeemNext] = useState(false);
  const { currentAccount } = useAccountModel();
  const [RedeemAmount, setRedeemAmount] = useState(0);
  const [BtcAddress, setBtcAddress] = useState("");
  const [n, setN] = useState(0);
  const { api } = useApi();
  const [buttonLoading, setButtonLoading] = useState(false);
  // const {XbtcBalance} = useXbtcAssets(currentAccount?.address!!,n)
  
  const [isShow, setIsShow] = useState(false);
  const [coinSymol, setCoinSymol] = useState<RedeemCoinProps>({
    img_url: sBTC,
    coinName: "SBTC",
    symol: "Bitcoin",
    balance: 9999.0024,
  });
  const currCoin = (value: RedeemCoinProps) => {
    setCoinSymol(value);
    setIsShow(!isShow);
  };
  const ShowSelect = () => {
    setIsShow(!isShow);
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
    console.log(coinSymol.coinName)
    const injector = await web3FromAddress(currentAccount!!.address);
    if (coinSymol.coinName === 'SBTC'){
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
    }else if(coinSymol.coinName === "SDOG"){
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
      {!showRedeemNext ? (
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
                description={t("balance")}
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