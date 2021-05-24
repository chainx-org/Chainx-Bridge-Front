import React from "react";
import { SideBarStyle, SideBarTab, Line } from "./style";
import Home from './icons/home.svg'
import History from './icons/history.svg'
import Vault from './icons/Vault.svg'
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideBar(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <SideBarStyle>
      <SideBarTab>
        <Tooltip placement="topLeft" title={t('back to top')} arrowPointAtCenter>
          <NavLink to={"/"} exact >
            <img src={Home} alt="bridge" />
          </NavLink>
        </Tooltip>
        <Line />
        <Tooltip placement={"left"} title={t('history')} arrowPointAtCenter>
          <NavLink to={"/history"} >
            <img src={History} alt="history" />
          </NavLink>
        </Tooltip>
      </SideBarTab>
      {/*<Tooltip placement={"left"} title={t('vault')}>*/}
      {/*    <NavLink to={"/Vault"} className='vault'>*/}
      {/*        <img src={Vault} alt="vault" />*/}
      {/*    </NavLink>*/}
      {/*</Tooltip>*/}
    </SideBarStyle>
  );
}

export default SideBar;
