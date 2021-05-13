import React, { useContext, useEffect, useState } from "react";
import { SideBarStyle, SideBarTab, Line } from "./style";
import Home from './icons/home.svg'
import History from './icons/history.svg'
import Vault from './icons/Vault.svg'
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

function SideBar(): React.ReactElement {

  return (
    <SideBarStyle>
      <SideBarTab>
        <Tooltip placement="topLeft" title='回到首页' arrowPointAtCenter>
          <NavLink to={"/"} exact >
            <img src={Home} alt="" />
          </NavLink>
        </Tooltip>
        <Line />
        <NavLink to={"/history"} >
          <img src={History} alt="" />
        </NavLink>
      </SideBarTab>
      <NavLink to={"/Vault"} className='vault'>
        <img src={Vault} alt="" />
      </NavLink>
    </SideBarStyle>
  );
}

export default SideBar;
