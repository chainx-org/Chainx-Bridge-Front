import React, { useState } from "react";
import { WalletStyle, WalletWrapperStyle, DropListStyle } from "./style";
import walletLogo from "../Wallet/icons/wallet.svg";
import PCXLogo from "./icons/PCX_W.svg"
import SBTCLogo from "./icons/SBTC.svg"
import SBCHLogo from "./icons/SBCH.svg"
import SDOGLogo from "./icons/SDOG.svg"
import { useTranslation } from "react-i18next";
import useAccountModel from "../../../hooks/useAccountModel";
import FormatBalance from "../../../hooks/useFormatBalance";
import { useApi } from "../../../hooks/useApi";

function Wallet(): React.ReactElement {
    const { currentAccount } = useAccountModel()
    const { t } = useTranslation();
    const [xBtcBalance, setXbtcBalance] = useState(0)
    const [pcxBalance, setPcxBalance] = useState(0)
    const [sDoge, setSDoge] = useState(0)
    const { api } = useApi();
    async function getAssets(account: string) {
        const res = await api.query.xAssets.assetBalance(account, 3221225473);
        const dogeRes = await api.query.xAssets.assetBalance(account, 3221225475);
        setXbtcBalance(JSON.parse(JSON.stringify(res)).Usable / 100000000)
        setSDoge(JSON.parse(JSON.stringify(dogeRes)).Usable / 100000000)
    }
    async function getPCXBalance() {
        const res = await api.query.system.account(currentAccount?.address!!)
        setPcxBalance(res.data.free.toNumber())
    }
    const showMenu = (e: { nativeEvent: { stopImmediatePropagation: () => void; }; }) => {
        e.nativeEvent.stopImmediatePropagation()
        getAssets(currentAccount?.address!!)
        getPCXBalance()
    }
    const WalletList = [
        {
            icon: PCXLogo,
            title: 'PCX',
            balance: FormatBalance(pcxBalance)
        },
        {
            icon: SBTCLogo,
            title: 'SBTC',
            balance: `${xBtcBalance ? xBtcBalance : FormatBalance(0)}`
        },
        {
            icon: SBCHLogo,
            title: 'SBCH',
            balance: FormatBalance(0)
        },
        {
            icon: SDOGLogo,
            title: 'SDOG',
            balance: `${sDoge ? sDoge : FormatBalance(0)}`
        }
    ]

    return (
        <WalletWrapperStyle className='wallets'>
            <WalletStyle onMouseEnter={showMenu}>
                <img src={walletLogo} alt="" />
                {t('Wallet')}
            </WalletStyle>
            <DropListStyle className='walletList'>
                {
                    WalletList.map((item) => {
                        return <div className={"assets-item"} key={item.title}>
                            <div className={"item-left"}>
                                <img src={item.icon} alt="" />
                                <div className={"item-text"}>{item.title}</div>
                            </div>
                            <div className={"item-balance"}>{item.balance}</div>
                        </div>
                    })
                }
            </DropListStyle>
        </WalletWrapperStyle>
    )
}

export default Wallet;