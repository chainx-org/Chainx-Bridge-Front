import React from "react";
import BTC from "../../CoinSelect/icons/BTC_S.svg";
import DOGE from './icons/DOGE.svg'
import Faucet from './icons/faucet.svg'
import { useTranslation } from "react-i18next";
import { LinkLists } from "./style";
import { Tooltip } from "antd";

function LinkList(): React.ReactElement {

    const { t } = useTranslation()
    const iconList = [
        {
            title: 'faucet',
            icon: Faucet,
            toolTip: t('Faucet'),
            link: 'https://faucet.chainx.cc',
            pre: 'https://faucet-pre.chainx.cc'
        },
        {
            title: 'btc wallet',
            icon: BTC,
            toolTip: t('BTC Wallet'),
            link: 'https://bit-x.chainx.org/',
            pre: 'https://bit-x.chainx.org/'
        },
        {
            title: 'doge wallet',
            icon: DOGE,
            toolTip: t('DOGE Wallet'),
            link: 'http://ab0ed44e5fd1c4b88b37358874eac76b-546139718.us-east-2.elb.amazonaws.com/',
            pre: 'http://ab0ed44e5fd1c4b88b37358874eac76b-546139718.us-east-2.elb.amazonaws.com/'
        },
    ]
    const path = window.location.origin
    return (
        <LinkLists>
            {
                iconList.map((item)=>{
                    return <a key={item.title} target='_blank' href={ path === 'https://chainxbridge.chainx.cc' ? item.link : item.pre} className='linkMore'>
                        <Tooltip title={item.toolTip} placement={"left"}><img  src={item.icon} alt={item.title} /></Tooltip>
                    </a>
                })
            }  
        </LinkLists>
    )
}
export default LinkList;