import React, {useEffect, useState} from "react";
import {WalletStyle, WalletWrapperStyle, DropListStyle} from "./style";
import walletLogo from "../Wallet/icons/wallet.svg";
import PCXLogo from "./icons/PCX_W.svg"
import SBTCLogo from "./icons/SBTC.svg"
import SBCHLogo from "./icons/SBCH.svg"
import SDOGLogo from "./icons/SDOG.svg"
import {useTranslation} from "react-i18next";
import {useAccountInfo} from "../../../hooks/useAccountInfo";
import useAccountModel from "../../../hooks/useAccountModel";
import FormatBalance from "../../../hooks/useFormatBalance";
import {useApi} from "../../../hooks/useApi";

function Wallet() {
    const {currentAccount} = useAccountModel()
    const accountInfo = useAccountInfo(currentAccount?.address!!)
    const {t, i18n} = useTranslation();
    const [dropToggle,setDropToggle] = useState(false)
    const [xBtcBalance,setXbtcBalance] = useState(0)
    const [pcxBalance,setPcxBalance] = useState(0)
    const {api} = useApi();
    async function getAssets(account: string) {
        const res = await api.query.xAssets.assetBalance(account,1);
        setXbtcBalance(JSON.parse(JSON.stringify(res)).Usable / 100000000)
    }
    async function getPCXBalance(){
        const res = await api.query.system.account(currentAccount?.address!!)
        setPcxBalance(res.data.free.toNumber())
    }
    const hideAllMenu = ()=> {
        setDropToggle(false)
    }
    const showMenu = (e: { nativeEvent: { stopImmediatePropagation: () => void; }; })=> {
        e.nativeEvent.stopImmediatePropagation()
        setDropToggle(!dropToggle)
        getAssets(currentAccount?.address!!)
        getPCXBalance()
    }
    useEffect(()=> {
        document.addEventListener('click',hideAllMenu)
    },[])

    return (
        <WalletWrapperStyle className='wallets'>
            <WalletStyle onMouseEnter={showMenu}>
                <img src={walletLogo} alt=""/>
                {t('Wallet')}
            </WalletStyle>
            <DropListStyle className='walletList'>
                <ul>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={PCXLogo} alt=""/>
                                <div className={"item-text"}>PCX</div>
                            </div>
                            <div className={"item-balance"}>{FormatBalance(pcxBalance)}</div>
                        </div>
                    </li>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={SBTCLogo} alt=""/>
                                <div className={"item-text"}>SBTC</div>
                            </div>
                            <div className={"item-balance"}>{xBtcBalance ? xBtcBalance : 0}</div>
                        </div>
                    </li>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={SBCHLogo} alt=""/>
                                <div className={"item-text"}>SBCH</div>
                            </div>
                            <div className={"item-balance"}>0.0054</div>
                        </div>
                    </li>
                    <li>
                        <div className={"assets-item"}>
                            <div className={"item-left"}>
                                <img src={SDOGLogo} alt=""/>
                                <div className={"item-text"}>SDOG</div>
                            </div>
                            <div className={"item-balance"}>0.0064</div>
                        </div>
                    </li>
                </ul>
            </DropListStyle>
        </WalletWrapperStyle>
    )
}

export default Wallet;