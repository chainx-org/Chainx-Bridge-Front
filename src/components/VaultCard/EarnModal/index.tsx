import React, { useContext, useEffect, useState } from "react";
import { AddCollateralModalStyle, CollateralDisplayStyle, CollateralRate } from "./style";
import { Button, InputNumber, notification } from "antd";
import { useTranslation } from "react-i18next";
import useAccountModel from "../../../hooks/useAccountModel";
import { Balance, BlockNumber } from "@polkadot/types/interfaces";
import { BtcAddress } from "../../../interfaces";
import { useApi } from "../../../hooks/useApi";
// import { BalanceSpan } from "../../BalanceSpan";
import { useFeeContext, FeeContext } from "../../../hooks/useFeeContext";
import { useAccountInfo } from "../../../hooks/useAccountInfo";
import FormatBalance from "../../../hooks/useFormatBalance";
import { web3FromAddress } from "@polkadot/extension-dapp";
import RegisterInput from "../../RegisterVaultCard/RegisterInput";
import arrowYellow from "../../Issue/icons/arrow_yellow.svg";

interface VaultModel {
  address: string;
  toBeRedeemedTokens: Balance,
  wallet: BtcAddress,
  bannedUntil: BlockNumber,
  toBeIssuedTokens: Balance
}
interface EarnModalProps {
  AddCollateralModal: boolean;
  SetAddCollateralModal: (bool: boolean) => void;
}
function EarnModal({ SetAddCollateralModal, AddCollateralModal }: EarnModalProps): React.ReactElement {
  const value = useContext(FeeContext);
  const pcxPrice = value.pcxPrice;
  const { t } = useTranslation();
  const [vault, setVault] = useState<VaultModel | null>(null);
  const [upperBound, setUpperBound] = useState("-");
  const [secureThreshold, SetsecureThreshold] = useState(0);
  const { exchangeRate } = useFeeContext();
  const [addPCX, setaddPCX] = useState(0);
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();

  const accountInfo = useAccountInfo(currentAccount?.address!!);
  async function ConfirmationIssueTrade() {
    if (addPCX === 0) {
      notification["warning"]({
        message: "增加的抵押品不能小于等于0",
        duration: 1,
      });
    } else {
      const injector = await web3FromAddress(currentAccount!!.address);
      api.tx.xGatewayBitcoinBridge
        .addExtraCollateral(addPCX * 100000000)
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
              }
            } else {
              notification["success"]({
                message: `Current status: ${status.type}`,
                duration: 0,
              });
              if (status.type === "Finalized") {
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
  }
  const AddCollateralHandle = () => {
    ConfirmationIssueTrade();
    SetAddCollateralModal(false);
  };

  useEffect(() => {
    if (isApiReady && currentAccount) {
      (async () => {
        const vault = await api.query.xGatewayBitcoinBridge.vaults(
          currentAccount.address
        );
        if (vault.isSome) {
          let vaultInfo = vault.unwrap();
          let collateral = await api.query.system.account(
            currentAccount.address
          );
          setVault({
            address: currentAccount.address,
            // btcAddress: vaultInfo.wallet,
            // toBeRedeemToken: vaultInfo.toBeRedeemedTokens,
            // toBeIssuedToken: vaultInfo.toBeIssuedTokens,
            // // @ts-ignore
            // issuedToken: vaultInfo.issuedTokens,
            // collateral: collateral.data.reserved,
            toBeIssuedTokens: vaultInfo.toBeIssuedTokens,
            toBeRedeemedTokens: vaultInfo.toBeRedeemedTokens,
            wallet: vaultInfo.wallet,
            bannedUntil: vaultInfo.bannedUntil,
          });
        }
      })();
    }
  }, [currentAccount, isApiReady]);

  // useEffect(() => {
  //   if (vault) {
  //     const pcxInBtc = exchangeRate.price
  //       .mul(vault.collateral)
  //       .divn(Math.pow(10, exchangeRate.decimal.toNumber()));
  //     setUpperBound(pcxInBtc.toNumber().toFixed(2));
  //   } else {
  //     setUpperBound("-");
  //   }
  // }, [vault, exchangeRate]);

  useEffect(() => {
    if (isApiReady) {
      const secureThreshold = api.consts.xGatewayBitcoinBridge.secureThreshold;
      SetsecureThreshold(secureThreshold.toNumber() / 100);
    }
  }, [isApiReady]);
  return (
    <AddCollateralModalStyle
      title={t("adding collateral")}
      visible={AddCollateralModal}
      onCancel={() => SetAddCollateralModal(false)}
      footer={[
        <Button onClick={() => SetAddCollateralModal(false)}>取消</Button>,
        <Button onClick={AddCollateralHandle}>确认</Button>,
      ]}
    >
      <RegisterInput
        balance={FormatBalance(accountInfo?.data.free)}
        icon={false}
        num={false}
        title={t("adding collateral")}
        children={
          <InputNumber
            placeholder={"输入要增加的抵押品数 PCX"}
            value={addPCX}
            onChange={(e) => {
              if (e) {
                setaddPCX(e);
              } else {
                setaddPCX(0);
              }
            }}
          />
        }
      />
      <CollateralDisplayStyle>
        <CollateralRate>
          <div className="title">当前抵押率</div>
          {/* <div className={"collateralNum"}>
            {isFinite(
              +vault?.collateral!! /
                100000000 /
                +(vault?.issuedToken.toNumber()!! / 1000000000 / pcxPrice)
            )
              ? (
                  +vault?.collateral!! /
                  100000000 /
                  +(vault?.issuedToken.toNumber()!! / 1000000000 / pcxPrice)
                ).toFixed(5)
              : "-"}
            %
          </div> */}
        </CollateralRate>
        <img src={arrowYellow} alt="arrowYellow" className="arrowYellow" />
        <CollateralRate>
          <div className="title">增加后抵押率</div>
          {/* <div className={"collateralNum"}>
            {isFinite(
              (+vault?.collateral!! + addPCX) /
                100000000 /
                +(vault?.issuedToken.toNumber()!! / 1000000000 / pcxPrice)
            )
              ? (
                  (+vault?.collateral!! + addPCX) /
                  100000000 /
                  +(vault?.issuedToken.toNumber()!! / 1000000000 / pcxPrice)
                ).toFixed(5)
              : "-"}
            %
          </div> */}
        </CollateralRate>
      </CollateralDisplayStyle>
    </AddCollateralModalStyle>
  );
}

export default EarnModal;