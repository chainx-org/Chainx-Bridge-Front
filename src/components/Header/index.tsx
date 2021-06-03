import React from "react";
import {HeaderStyle} from "./style";
import SelectAccount from "./SelectAccount";
import ChainStatus from "./ChainStatus";
import ChangeLanguage from "./ChangeLanguage";
import Wallet from "./Wallet";
import LinkList from "./LinkList";

function Header():React.ReactElement{
    return (
        <HeaderStyle>
                <ChainStatus/>
                <div className={"header-right"}>
                    <LinkList />
                    <Wallet/>
                    <SelectAccount/>
                    <ChangeLanguage/>
                </div>
        </HeaderStyle>
    )
}
export default Header;
