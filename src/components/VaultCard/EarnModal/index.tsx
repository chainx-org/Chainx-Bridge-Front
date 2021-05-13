import React, { useContext, useEffect, useState } from "react";
import {
  AddCollateralInput,
  AddCollateralModalStyle,
  CollateralDisplayStyle
} from "./style";
import { Button, InputNumber, Modal, notification } from "antd";
import { useTranslation } from "react-i18next";
import useAccountModel from "../../../hooks/useAccountModel";
import { AccountId, Balance } from "@polkadot/types/interfaces";
import { BtcAddress } from "../../../interfaces";
import { useApi } from "../../../hooks/useApi";
import { BalanceSpan } from "../../BalanceSpan";
import { useFeeContext, FeeContext } from "../../../hooks/useFeeContext";
import {useAccountInfo} from "../../../hooks/useAccountInfo";
import FormatBalance from "../../../hooks/useFormatBalance";
import { web3FromAddress } from "@polkadot/extension-dapp";

interface VaultModel {
  address: string;
  btcAddress: BtcAddress;
  issuedToken: Balance;
  toBeIssuedToken: Balance;
  toBeRedeemToken: Balance;
  collateral: Balance;
}
interface EarnModalProps {
    SetAddCollateralModal: (bool:boolean)=>void;
}
function EarnModal({SetAddCollateralModal}: EarnModalProps): React.ReactElement {
  const value = useContext(FeeContext);
  const pcxPrice = value.pcxPrice;
  const { t } = useTranslation();
  const [vault, setVault] = useState<VaultModel | null>(null);
  const [upperBound, setUpperBound] = useState("-");
  const [secureThreshold,SetsecureThreshold] = useState(0)
  const { exchangeRate } = useFeeContext();
  const [addPCX,setaddPCX] = useState(0)
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();

  const accountInfo = useAccountInfo(currentAccount?.address!!)
  async function ConfirmationIssueTrade() {
    const injector = await web3FromAddress(currentAccount!!.address);
    api.tx.xGatewayBitcoinV2
      .addExtraCollateral(addPCX * 100000000)
      .signAndSend(
        currentAccount!!.address,
        { signer: injector.signer },
        ({ status, dispatchError, events }) => {
          console.log(status);
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
  const AddCollateralHandle = () => {
    ConfirmationIssueTrade()
    SetAddCollateralModal(false);
  };

  useEffect(() => {
    if (isApiReady && currentAccount) {
      (async () => {
        const vault = await api.query.xGatewayBitcoinV2.vaults(
          currentAccount.address
        );
        if (vault.isSome) {
          let vaultInfo = vault.unwrap();
          let collateral = await api.query.system.account(
            currentAccount.address
          );
          setVault({
            address: currentAccount.address,
            btcAddress: vaultInfo.wallet,
            toBeRedeemToken: vaultInfo.toBeRedeemedTokens,
            toBeIssuedToken: vaultInfo.toBeIssuedTokens,
            issuedToken: vaultInfo.issuedTokens,
            collateral: collateral.data.reserved,
          });
        }
      })();
    }
  }, [currentAccount, isApiReady]);

  useEffect(() => {
    if (vault) {
      const pcxInBtc = exchangeRate.price
        .mul(vault.collateral)
        .divn(Math.pow(10, exchangeRate.decimal.toNumber()));
      setUpperBound(pcxInBtc.toNumber().toFixed(2));
    } else {
      setUpperBound("-");
    }
  }, [vault, exchangeRate]);

  useEffect(() => {
    if (isApiReady) {
        const secureThreshold = api.consts.xGatewayBitcoinV2.secureThreshold;
        SetsecureThreshold(secureThreshold.toNumber() / 100)
    }
  }, [isApiReady]);
  return (
        <Modal
          title={t("adding collateral")}
          // onCancel={() => SetAddCollateralModal(false)}
          footer={[
            <Button onClick={() => SetAddCollateralModal(false)}>取消</Button>,
            <Button onClick={AddCollateralHandle}>确认</Button>,
          ]}
        >
          <AddCollateralInput>
            <div className={"addCollateral-info"}>
              <div className={"addCollateral-title"}>
                {t("adding collateral")}
              </div>
              <div className={"addCollateral-amount"}>{t('balance')} {FormatBalance(accountInfo?.data.free)} PCX</div>
            </div>
            <InputNumber value={addPCX} onChange={ 
                (e) => {
                  if(e){
                    console.log(e)
                      setaddPCX(e)
                  }else{
                    console.log(e)
                    setaddPCX(0)
                  }
                
                }
            }/>
          </AddCollateralInput>
          <CollateralDisplayStyle>
            <ul>
              <li>
                <div>当前抵押率</div>
                {/* <div className={"collateral-num"}>{isFinite(((+vault?.collateral!! / 100000000) / +((vault?.issuedToken.toNumber()!!/ 1000000000) / pcxPrice))) ? ((+vault?.collateral!! / 100000000) / +((vault?.issuedToken.toNumber()!!/ 1000000000) / pcxPrice)).toFixed(5) : "-"}%</div> */}
              </li>
              <li>
            
              </li>
              <li>
                <div>增加后抵押率</div>
                <div className={"collateral-num before"}>{isFinite(((+vault?.collateral!! + addPCX )/ 100000000) / +((vault?.issuedToken.toNumber()!!/ 1000000000) / pcxPrice)) ? (((+vault?.collateral!! + addPCX )/ 100000000) / +((vault?.issuedToken.toNumber()!!/ 1000000000) / pcxPrice)).toFixed(5) : "-"}%</div>
              </li>
            </ul>
          </CollateralDisplayStyle>
        </Modal>
  );
}

export default EarnModal;