import React, { useContext, useEffect, useMemo, useState } from "react";
import { BridgeCardStyle, FunctionSwitchButton } from "./style";
import { useTab } from "../../hooks/useTab";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import { Link, NavLink, Route, Switch } from "react-router-dom";

function BridgeHome(): React.ReactElement {
  const { t } = useTranslation();
  const [isActive, setisActive] = useState('issue')
  function changeTab(val: string) {
    setisActive(val)
  }
  const tabList = ([
    {
      title: 'issue',
      nodeName: t<string>('issue'), 
      link: '/bridge/', 
    },
    {  
      title: 'redeem',
      nodeName: t<string>('Redeem'), 
      link: '/bridge/redeem', 
    }
  ]);
  return (
    <BridgeCardStyle>
      <FunctionSwitchButton>
        {
          tabList.map((item)=>{
            return <div className='tabList' key={item.title}>
              <Link to={item.link} onClick={()=>changeTab(item.title)} className={item.title === isActive ? 'active': ''}>{item.nodeName}</Link>
            </div>
          })
        }
      </FunctionSwitchButton>
      <div>
        <Route path="/bridge/" exact component={Issue} />
        <Route path="/bridge/redeem" component={Redeem} />
      </div>
    </BridgeCardStyle>
  );
}
export default BridgeHome