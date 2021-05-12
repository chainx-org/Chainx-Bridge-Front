import React, {useEffect, useState} from "react";
import { SelectAccountStyle, AccountLists, CurrentAccount } from "./style";
import dropdown from "../SelectAccount/icons/Drop_down.svg"
import selectAccount from "../SelectAccount/icons/selected_Account.svg"
import { Modal, Radio } from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import { useAccountInfo } from "../../../hooks/useAccountInfo";
import {useApi} from "../../../hooks/useApi"
function SelectAccount() {
  const accountModel = useAccountModel();
  const [AccountListModal, SetAccountListModal] = useState(false);
  const [isShowAccountList, setIsShowAccountList] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const { currentAccount } = useAccountModel();
  const { accounts } = useAccountModel();
  const [value, setValue] = useState(currentAccount);
  const currentAddress = currentAccount?.address;
  const currAddress = currentAddress?.substring(0, 5) + '...' + currentAddress?.substring(currentAddress.length - 5)
  const list = accountModel.accounts
  function accountSelected(val: any) {
    setIsSelected(true)
    setValue(val)
    accountModel.setCurrentAccount(val)
    setIsShowAccountList(!isShowAccountList)
  }
  return (
    <SelectAccountStyle>
      <CurrentAccount className='currentAccount' onClick={()=>setIsShowAccountList(!isShowAccountList)}>
        <div className={"avatar"}></div>
        <div className={"current-account"}>{ value && value?.name ? value?.name : currentAccount?.name }</div>
        <div className={"icon"}>
            <img src={dropdown} alt=""/>
        </div>
      </CurrentAccount>
      {
        isShowAccountList && 
        <div className='accountList'>
          {list.map(function (item: any) {
            return (
              <AccountLists className="accountItem" onClick={()=>accountSelected(item)} key={item.address}>
                <div className='selectImg'>
                  { isSelected && item.name === value?.name ? <img src={selectAccount} alt='selected' /> : <div className='circle' /> }
                </div>
                <div className='accountMsg'>
                  <div className='nameMsg'>{item.name}</div>
                  <div className='adressMsg'>{item.address.substring(0, 5) + '...' + currentAddress?.substring(currentAddress.length - 5)}</div>
                </div>
              </AccountLists>
            );
          })}
        </div>
      }
    </SelectAccountStyle>
  );
}

export default SelectAccount;
