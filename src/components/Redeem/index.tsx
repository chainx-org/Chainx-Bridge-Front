import React, { useEffect, useState } from "react";
import {AccountSwitch, RedeemBtcInputStyle, RedeemStyle} from "./style";
import {Button, InputNumber, notification} from "antd";
import arrowYellow from '../Issue/icons/arrow_yellow.svg'
import arrowGray from '../Issue/icons/arrow_gray.svg'
import {useTranslation} from "react-i18next";
import AddressInput from "../AddressInput";
import TabCoinSelect from "../TabCoinSelect";
import BCHs from '../TabCoinSelect/icons/SBCH.svg'
import BTCs from '../TabCoinSelect/icons/SBTC.svg'
import DOGs from '../TabCoinSelect/icons/SDOG.svg'
import useAccountModel from "../../hooks/useAccountModel";
import {useApi} from "../../hooks/useApi";
import useXbtcAssets from "../../hooks/useXbtcAssets";
import { web3FromAddress } from "@polkadot/extension-dapp";

interface coinProps {
    img_url: any,
    coinName: string,
    symol: string,
    balance: number
}

interface RedeemProps {
    setShowRedeemNext: (bool: boolean)=>void;
  }

function Redeem({setShowRedeemNext}: RedeemProps): React.ReactElement<RedeemProps> {
    const {t} = useTranslation()
    const {currentAccount} = useAccountModel();
    const [RedeemAmount,setRedeemAmount] = useState(0)
    const [BtcAddress,setBtcAddress] = useState("")
    const [n,setN] = useState(0)
    const {api} = useApi();
    const [buttonLoading,setButtonLoading] = useState(false)
    const {XbtcBalance} = useXbtcAssets(currentAccount?.address!!,n)
    const optionList = [
        {
            img_url: BTCs,
            coinName: 'SBTC',
            symol: 'Bitcoin',
            balance: 9999.0024
        },
        {
            img_url: BCHs,
            coinName: 'SBCH',
            symol: 'Bitcoin Cash',
            balance: 9999.0024
        },
        {
            img_url: DOGs,
            coinName: 'SDOG',
            symol: 'Dogecoin',
            balance: 9999.0024
        }
    ]
    const [isShow, setIsShow] = useState(false)
    const [coinSymol, setCoinSymol] = useState<coinProps>({
        img_url: BTCs,
        coinName: 'SBTC',
        symol: 'Bitcoin',
        balance: 9999.0024
    })
    const currCoin = (value:any) => {
        setCoinSymol(value)
        setIsShow(!isShow)
    }
    const ShowSelect = () =>{
        setIsShow(!isShow)
    }
    const handleReedem = async()=>{
        // let valid =  WAValidator.validate(BtcAddress,'BTC')
        // if(!valid){
        //     notification.warn({message: "请输入合法的BTC地址"});
        //     return
        // }
        if(RedeemAmount <= 0){
            notification.warn({message: "赎回的值必须大于0"});
            return
        }
        setButtonLoading(true)
        const injector = await web3FromAddress(currentAccount!!.address)
        api.tx.xGatewayBitcoinV2.requestRedeem(currentAccount!!.address,RedeemAmount * 100000000,BtcAddress)
            .signAndSend(currentAccount!!.address,{signer:injector.signer},({status,dispatchError,events})=>{
                if(status.isInBlock){
                    notification['success']({
                        message: `Completed at block hash ${ status.asInBlock.toString()}`,
                        duration: 0
                    })
                }else if(dispatchError){
                    if(dispatchError.isModule){
                        const decoded = api.registry.findMetaError(dispatchError.asModule);
                        const { documentation, name, section } = decoded;
                        notification['error']({
                            message: `${section}.${name}: ${documentation.join(' ')}`,
                            duration: 0
                        })
                        setButtonLoading(false)
                    }
                }else{
                    notification['success']({
                        message: `Current status: ${status.type}`,
                        duration: 0
                    })
                    if(status.type === "Finalized"){
                        setN(n + 1)
                        setShowRedeemNext(true)
                    }
                }
            }).catch((error)=> {
            notification['error']({
                message: `:( transaction failed', ${error}`,
                duration: 0
            })
        })
    }
    return (
        <RedeemStyle>
            <div className='topContent'>
                <AccountSwitch>
                    <TabCoinSelect optionList={optionList} isShow={isShow} coinSymol={coinSymol} currCoin={currCoin} ShowSelect={ShowSelect}/>
                </AccountSwitch>
                <RedeemBtcInputStyle>
                    <div className='redeemNum'>
                        <InputNumber
                        value={RedeemAmount}
                        onChange={(e) => {
                            setRedeemAmount(e)
                        }}
                        />
                        <div className={`btc-title`}>{coinSymol.coinName}</div>
                    </div>
                    <div className='balance'>{coinSymol.coinName} 余额 <span>{XbtcBalance ? XbtcBalance : "0"}</span></div>
                    <AddressInput coinSymol={coinSymol} address={BtcAddress} changeAddress={(e : string) => setBtcAddress(e)}/>
                    <img src={ true ? arrowYellow : arrowGray } alt='to' className='arrow' />
                    <p className='receive'>{t("You will receive")}</p>
                    <div className={`redeemResNum`}>{RedeemAmount} {coinSymol.coinName}</div>
                    <Button  loading={buttonLoading} className='yellow' onClick={handleReedem}>{t("next")}</Button>
                </RedeemBtcInputStyle>
            </div>
        </RedeemStyle>
    )
}

export default Redeem;
