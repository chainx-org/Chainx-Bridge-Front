import React, { useState } from "react";
import {AgreementStyle, CollateralStyle, Line, RegisterAccountStyle, RegisterVaultCardStyle} from "./style";
import {useTranslation} from "react-i18next";
import ErrorImg from './RegisterInput/icons/error.svg'
import SuccessedImg from './RegisterInput/icons/successed.svg'
import { Button, Checkbox, Form, Input, InputNumber, notification} from "antd";
import {BtcAddressStyle} from "../Redeem/style";
import { useAccountInfo} from "../../hooks/useAccountInfo";
import FormatBalance from "../../hooks/useFormatBalance";
import useAccountModel from "../../hooks/useAccountModel";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useApi } from "../../hooks/useApi";
import VaultCard from "../VaultCard";
import RegisterInput from "./RegisterInput";
function RegisterVaultCard() {
    const {t} = useTranslation()
    const {currentAccount} = useAccountModel()
    const accountInfo = useAccountInfo(currentAccount?.address!!)
    const { api, isApiReady } = useApi();
    const [regVault,setRegVault] = useState(false)
    async function onFinish(values: any) {
        console.log(values)
        notification["success"]({
          message: `注册成功！`,
          icon: <img src={SuccessedImg} alt='success' />,
          duration: 3,
          className: 'notificationSuccessContent',
        });
        notification["error"]({
          message: `注册失败！原因：${'XXX'}`,
          icon: <img src={ErrorImg} alt='error' />,
          duration: 3,
          className: 'notificationErrorsContent',
        });

        
        // const injector = await web3FromAddress(currentAccount!!.address);
        // api.tx.xGatewayBitcoinV2
        //   .registerVault(values.collateral * 100000000, values.address)
        //   .signAndSend(
        //     currentAccount!!.address,
        //     { signer: injector.signer },
        //     ({ status, dispatchError, events }) => {
        //       if (status.isInBlock) {
        //         notification["success"]({
        //           message: `Completed at block hash ${status.asInBlock.toString()}`,
        //           duration: 0,
        //         });
        //       } else if (dispatchError) {
        //         if (dispatchError.isModule) {
        //           const decoded = api.registry.findMetaError(
        //             dispatchError.asModule
        //           );
        //           const { documentation, name, section } = decoded;
        //           notification["error"]({
        //             message: `${section}.${name}: ${documentation.join(" ")}`,
        //             duration: 0,
        //           });
        //         }
        //       } else {
        //         notification["success"]({
        //           message: `Current status: ${status.type}`,
        //           duration: 0,
        //         });
        //         if (status.type === "Finalized") {
        //            setRegVault(true)
        //         }
        //       }
        //     }
        //   )
        //   .catch((error: any) => {
        //     notification["error"]({
        //       message: `:( transaction failed', ${error}`,
        //       duration: 0,
        //     });
        //   });
      }
    return (
      <>
        {regVault ? <VaultCard/> : 
        <RegisterVaultCardStyle>
          <div className={"card-title"}>注册成为资产保险库</div>
          <div className='cardContent'>
            <Form name={"register"} onFinish={onFinish}>
                <RegisterAccountStyle>
                    <div>{t('Register Account')}</div>
                    <div className={"current-account"}>{currentAccount?.address}</div>
                </RegisterAccountStyle>
                <Line  className='line'/>
                  <RegisterInput balance={FormatBalance(accountInfo?.data.free)} icon={false} num={true}
                    children={<Form.Item name={"collateral"} 
                      rules={[{required: true, message: t('Please enter the number of collateral')}]}>
                        <InputNumber min={1000} placeholder={t('Please enter the number of collateral')}/>
                      </Form.Item>} 
                  />
                  <RegisterInput balance={FormatBalance(accountInfo?.data.free)} icon={true} num={false}
                    children={<Form.Item name={"address"} rules={[{required: true, message: t('Please enter BTC address')}]}>
                      <Input placeholder={t('Please enter BTC address')}/>
                    </Form.Item>} 
                  />
                <AgreementStyle>
                    <Form.Item name={"checked"} valuePropName="checked" rules={[
                      {validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error(t('Should accept agreement'))),},]}>
                        <Checkbox onChange={() => console.log('checked')}>
                            <span>确认是否同意</span>
                            <a href={"/"}>资产保险库协议</a>
                        </Checkbox>
                    </Form.Item>
                </AgreementStyle>
                <Form.Item>
                    <Button htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
          </div>
        </RegisterVaultCardStyle>
        }
      </>
    )
}
export default RegisterVaultCard;
