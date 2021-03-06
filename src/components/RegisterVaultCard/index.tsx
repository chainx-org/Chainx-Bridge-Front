import React, { useEffect, useState } from "react";
import { AgreementStyle, Line, RegisterAccountStyle, RegisterVaultCardStyle } from "./style";
import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input, InputNumber, message, notification } from "antd";
import { useAccountInfo } from "../../hooks/useAccountInfo";
import FormatBalance from "../../hooks/useFormatBalance";
import useAccountModel from "../../hooks/useAccountModel";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useApi } from "../../hooks/useApi";
import VaultCard from "../VaultCard";
import RegisterInput from "./RegisterInput";
import { useLocation } from 'react-router-dom'
// var WAValidator = require('wallet-address-validator');
interface formProps {
  collateral: number;
  address: string;
  checked: boolean;
}
function RegisterVaultCard(): React.ReactElement {
  const { t } = useTranslation();
  const { currentAccount } = useAccountModel();
  const accountInfo = useAccountInfo(currentAccount?.address!!);
  const { api, isApiReady } = useApi();
  const [regVault, setRegVault] = useState(false);
  const [BtcAddress, setBtcAddress] = useState("");
  const [pcxBalance, setPcxBalance] = useState(0);
  const [path, setPath] = useState("")
  let location = useLocation()
  async function getPCXBalance() {
    const res = await api?.query.system.account(currentAccount?.address!! || "");
    setPcxBalance(res?.data.free.toNumber());
    setPath(location.pathname.slice(7))
  }
  useEffect(() => {
    getPCXBalance();
  }, [currentAccount, isApiReady]);
  async function onFinish(values: formProps) {
    // let valid =  WAValidator.validate(BtcAddress,'BTC')
    // if(!valid){
    //     notification.warn({message: "请输入合法的BTC地址"});
    //     return
    // }
    const injector = await web3FromAddress(currentAccount!!.address);
    if (path === "btc") {
      api.tx.xGatewayBitcoinBridge
        .registerVault(values.collateral * 100000000, values.address)
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
                  message: `注册失败！原因：${section}.${name}: ${documentation.join(
                    " "
                  )}`,
                  duration: 0,
                });
              }
            } else {
              notification["success"]({
                message: `Current status: ${status.type}`,
                duration: 0,
              });
              if (status.type === "Finalized") {
                message.success({
                  content: "注册成功！",
                  className: "MsgSuccess",
                  duration: 3,
                });
                setRegVault(true);
              }
            }
          }
        )
        .catch((error: any) => {
          notification["error"]({
            message: `:( transaction failed', ${error}`,
            duration: 0,
          });
        });
    } else {
      api.tx.xGatewayDogecoinBridge
        .registerVault(values.collateral * 100000000, values.address)
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
                  message: `注册失败！原因：${section}.${name}: ${documentation.join(
                    " "
                  )}`,
                  duration: 0,
                });
              }
            } else {
              notification["success"]({
                message: `Current status: ${status.type}`,
                duration: 0,
              });
              if (status.type === "Finalized") {
                message.success({
                  content: "注册成功！",
                  className: "MsgSuccess",
                  duration: 3,
                });
                setRegVault(true);
              }
            }
          }
        )
        .catch((error: any) => {
          notification["error"]({
            message: `:( transaction failed', ${error}`,
            duration: 0,
          });
        });
    }
  }
  return (
    <>
      {regVault ? (
        <VaultCard />
      ) : (
        <RegisterVaultCardStyle>
          <div className={"card-title"}>{t("Register as an Asset Vault")}</div>
          <div className="cardContent">
            <Form name={"register"} onFinish={onFinish}>
              <RegisterAccountStyle>
                <div>{t("Register Account")}</div>
                <div className={"current-account"}>
                  {currentAccount?.address}
                </div>
              </RegisterAccountStyle>
              <Line className="line" />
              <RegisterInput
                balance={FormatBalance(pcxBalance)}
                icon={false}
                num={true}
                children={
                  <Form.Item
                    name={"collateral"}
                    rules={[
                      {
                        required: true,
                        message: t("Please enter the number of collateral"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={1000}
                      placeholder={t("Please enter the number of collateral")}
                    />
                  </Form.Item>
                }
              />
              <RegisterInput
                balance={FormatBalance(accountInfo?.data.free)}
                icon={true}
                num={false}
                children={
                  <Form.Item
                    name={"address"}
                    rules={[
                      {
                        required: true,
                        message: t(`Please enter ${path} address`),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t(`Please enter ${path} address`)}
                      onChange={(e) => setBtcAddress(e.target.value)}
                    />
                  </Form.Item>
                }
              />
              <AgreementStyle>
                <Form.Item
                  name={"checked"}
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                            new Error(t("Should accept agreement"))
                          ),
                    },
                  ]}
                >
                  <Checkbox onChange={() => console.log("checked")}>
                    <span>{t("Confirmation of consent")}</span>
                    <a href={"/"}>{t("Asset Vault Agreement")}</a>
                  </Checkbox>
                </Form.Item>
              </AgreementStyle>
              <Form.Item>
                <Button htmlType="submit">{t("Register")}</Button>
              </Form.Item>
            </Form>
          </div>
        </RegisterVaultCardStyle>
      )}
    </>
  );
}
export default RegisterVaultCard;