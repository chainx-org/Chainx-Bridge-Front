import React, { useState } from "react";
import { BridgeCardStyle, FunctionSwitchButton } from "./style";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import { Link, Route } from "react-router-dom";
// import BCHs from "../../components/CoinSelect/icons/BCH_s.svg";
import BTCs from "../../components/CoinSelect/icons/BTC_S.svg";
import DOGEs from "../../components/CoinSelect/icons/DOGE_s.svg";
// import sBCHs from "../../components/TabCoinSelect/icons/SBCH.svg";
import sBTCs from "../../components/TabCoinSelect/icons/SBTC.svg";
import sDOGs from "../../components/TabCoinSelect/icons/SDOG.svg";

export interface coinProps {
  img_url: string;
  coinName: string;
  symol: string;
  img_urls: string,
}
export const optionList = [
  {
    img_url: BTCs,
    coinName: "BTC",
    symol: "Bitcoin",
    img_urls: sBTCs,
  },
  // {
  //   img_url: BCHs,
  //   coinName: "BCH",
  //   symol: "Bitcoin Cash",
  //   img_urls: sBCHs,
  // },
  {
    img_url: DOGEs,
    coinName: "DOGE",
    symol: "Dogecoin",
    img_urls: sDOGs,
  },
];

export interface RedeemCoinProps {
  img_url: string;
  coinName: string;
  symol: string;
  balance: number;
  img_urls: string;
}
export const RedeemOptionList = [
  {
    img_url: sBTCs,
    coinName: "XBTC",
    symol: "Bitcoin",
    balance: 9999.0024,
    img_urls: BTCs,
  },
  // {
  //   img_url: sBCHs,
  //   coinName: "XBCH",
  //   symol: "Bitcoin Cash",
  //   balance: 9999.0024,
  //   img_urls: BCHs,
  // },
  {
    img_url: sDOGs,
    coinName: "XDOGE",
    symol: "Dogecoin",
    balance: 9999.0024,
    img_urls: DOGEs,
  },
];

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
          tabList.map((item) => {
            return <div className='tabList' key={item.title}>
              <Link to={item.link} onClick={() => changeTab(item.title)} className={item.title === isActive ? 'active' : ''}>{item.nodeName}</Link>
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