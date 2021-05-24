import React from "react";
import PolkadotJS from './icons/polkadotjs.svg'
import BgBtn from './icons/polkadotBgBtn.svg'
import Shape1 from './icons/shape1.svg'
import Shape2 from './icons/shape2.svg'
import { HeaderStyle } from "../Header/style";
import ChainStatus from "../Header/ChainStatus";
import ChangeLanguage from "../Header/ChangeLanguage";
import { DescribeText, NoExtensionsStyle } from "./style";

function NoExtensions(): React.ReactElement {

    return (
        <NoExtensionsStyle>
            <HeaderStyle>
                <ChainStatus />
                <ChangeLanguage />
            </HeaderStyle>
            <DescribeText>
                <div className='bgShape1'>
                    <h1>去信任、去中心化的实现比特币跨链到 ChainX</h1>
                    <img src={Shape1} alt='bgShape' className='shape1' />
                    <img src={Shape2} alt='bgShape' className='shape2' />
                </div>
                <p className="info">请使用 PolkadotJS 插件登陆</p>
                <a href="https://polkadot.js.org/extension/" target='_blank' className='tip'>
                    <img src={BgBtn} alt="" />
                    <img src={PolkadotJS} alt="" className='tiplogo' />
                </a>
            </DescribeText>
        </NoExtensionsStyle>
    )
}
export default NoExtensions;