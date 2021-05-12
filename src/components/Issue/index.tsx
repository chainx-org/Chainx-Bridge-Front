import React, { useContext, useEffect, useState } from "react";
import { IssueBtcInputStyle, IssueStyle, AccountSwitch } from "./style";
import BCHs from '../CoinSelect/icons/BCH_s.svg'
import BTCs from '../CoinSelect/icons/BTC_S.svg'
import DOGEs from '../CoinSelect/icons/DOGE_s.svg'
import Sherpaxs from '../CoinSelect/icons/sherpax_s.svg'
import arrowYellow from './icons/arrow_yellow.svg'
import arrowGray from './icons/arrow_gray.svg'
import {InputNumber, Divider, Button, notification} from "antd";
import { useTranslation } from "react-i18next";
import ExplainTag from '../ExplainTag'
import CoinSelect from "../CoinSelect";
import useAccountModel from "../../hooks/useAccountModel";
import {FeeContext } from "../../hooks/useFeeContext";
import { web3FromAddress } from "@polkadot/extension-dapp";
import {useApi} from "../../hooks/useApi";
import ChangeChainXAddress from "../../util";

interface coinProps {
  img_url: any;
  coinName: string;
  symol: string;
}

interface IssueProps {
    setShowIssueNext: (bool: boolean)=>void;
}
function Issue({ setShowIssueNext }: IssueProps): React.ReactElement<IssueProps> {
    const Fee = useContext(FeeContext)
    const pcxPrice = Fee.pcxPrice
    const {api} = useApi();
  const { t } = useTranslation();
  const {currentAccount} = useAccountModel();
  const [IssueAmount, setIssueAmount] = useState(0)
  const [vaultAddress,setVaultAddress] = useState("")
  const [vaultBtcAddress,setVaultBtcAddress] = useState("")
  const [buttonLoading,setButtonLoading] = useState(false)
  async function ConfirmationIssueTrade(){
      const injector = await web3FromAddress(currentAccount!!.address);
  }
  const optionList = [
    {
        img_url: BTCs,
        coinName: 'BTC',
        symol: 'Bitcoin'
    },
    {
        img_url: BCHs,
        coinName: 'BCH',
        symol: 'Bitcoin Cash'
    },
    {
        img_url: DOGEs,
        coinName: 'DOG',
        symol: 'Dogecoin'
    }
  ]
  const [isShow, setIsShow] = useState(false)
  
  const [coinSymol, setCoinSymol] = useState<coinProps>({
      img_url: BTCs,
      coinName: 'BTC',
      symol: 'Bitcoin'
  })
  const currCoin = (value:any) => {
      setCoinSymol(value)
      setIsShow(!isShow)
  }
  const ShowSelect = () =>{
      setIsShow(!isShow)
  }
  const address = <>{currentAccount?.address}</>
  const hypothecateNum = <>{IssueAmount / pcxPrice / 10 || 0} PCX</>
  const chargeNum = <>0.00 {coinSymol.coinName}</>
  const handleMatchVault = async ()=> {
      if(IssueAmount <=0){
          notification.warn({message:"发行的值必须大于0"})
          return;
      }
      setButtonLoading(true)
      const vaults = await api.query.xGatewayBitcoinV2.vaults.entries();
      const results = await Promise.all(
          vaults.map(async([key,value])=>{
              const vault = value.unwrap();
              const collateral = await (await api.query.system.account(vault.id)).data.reserved;
              const maxToken = collateral.muln(pcxPrice).divn(3)
              return [vault.id, maxToken.sub(vault.issuedTokens).sub(vault.issuedTokens).sub(vault.toBeIssuedTokens),vault.wallet]
          }))
      setVaultAddress(
          results ? ChangeChainXAddress(JSON.parse(JSON.stringify(results))[0][0]): ""
      );
      setVaultBtcAddress(results ? JSON.parse(JSON.stringify(results))[0][2] : "");
      setShowIssueNext(true)
  }
  return (
    <IssueStyle>
      <div className='topContent'>
        <AccountSwitch>
          <CoinSelect optionList={optionList} isShow={isShow} currCoin={currCoin} ShowSelect={ShowSelect} coinSymol={coinSymol}/>
          <div className='to'>To</div>
          <div className='currContent'>
            <img src={Sherpaxs} alt=""/>
            <p className='currName'>SherpaX</p>
          </div>
        </AccountSwitch>
        <IssueBtcInputStyle>
          <div className='issueNum'>
            <InputNumber
              value={IssueAmount}
              onChange={(e) => {
                  if(e){
                      setIssueAmount(+e)
                  }else{
                      setIssueAmount(0)
                  }
              }}
            />
            <div className={`btc-title`}>{coinSymol.coinName}</div>
          </div>
          <img src={ true ? arrowYellow : arrowGray } alt='to' className='arrow' />
          <p className='receive'>{t("You will receive")}</p>
          <div className={`issueResNum`}>{IssueAmount} S{coinSymol.coinName}</div>
        </IssueBtcInputStyle>
      </div>
      <div className='bottomContent'>
        <ExplainTag  title='目标账户' children={address} />
        <ExplainTag  title='锁定抵押品' children={hypothecateNum} />
        <ExplainTag  title='手续费' children={chargeNum} />
        <Button  loading={buttonLoading} onClick={handleMatchVault}>{t("next")}</Button>
      </div>
    </IssueStyle>
  );
}

export default Issue;
