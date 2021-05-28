import React, { useState } from "react";
import { SelectAccountStyle, AccountLists, CurrentAccount } from "./style";
import dropdown from "../SelectAccount/icons/Drop_down.svg"
import selectAccount from "../SelectAccount/icons/selected_Account.svg"
import useAccountModel, { AccountInfo } from "../../../hooks/useAccountModel";

function SelectAccount(): React.ReactElement {
  const accountModel = useAccountModel();
  const [isShowAccountList, setIsShowAccountList] = useState(false)
  const [isSelected, setIsSelected] = useState(true)
  const { currentAccount } = useAccountModel();
  const [value, setValue] = useState(currentAccount);
  const list = accountModel.accounts
  
  function accountSelected(val: AccountInfo) {
    setIsSelected(true)
    setValue(val)
    accountModel.setCurrentAccount(val)
    setIsShowAccountList(!isShowAccountList)
  }
  return (
    <SelectAccountStyle>
      <CurrentAccount className='currentAccount' onClick={() => setIsShowAccountList(!isShowAccountList)}>
        <div className={"avatar"}></div>
        <div className={"current-account"}>{value && value?.name ? value?.name : currentAccount?.name}</div>
        <div className={"icon"}>
          <img src={dropdown} alt="" />
        </div>
      </CurrentAccount>
      {
        isShowAccountList &&
        <div className='accountList'>
          {list.map(function (item: AccountInfo) {
            return (
              <AccountLists className="accountItem" onClick={() => accountSelected(item)} key={item.address}>
                <div className='selectImg'>
                  {isSelected && (item.name === value?.name) || (item.name === currentAccount?.name) ? <img src={selectAccount} alt='selected' /> : <div className='circle' />}
                </div>
                <div className='accountMsg'>
                  <div className='nameMsg'>{item.name}</div>
                  <div className='adressMsg'>{item.address.substring(0, 5) + '...' + item.address?.substring(item.address.length - 5)}</div>
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