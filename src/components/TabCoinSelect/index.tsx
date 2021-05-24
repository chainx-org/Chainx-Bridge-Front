import React from "react";
import { RedeemCoinProps } from "../../page/Bridge";
import Fill from './icons/fill.svg'
import { Wrapper } from "./style";

interface CoinSelectProps {
    className?: string;
    optionList: RedeemCoinProps[];
    isShow: boolean;
    coinSymol: RedeemCoinProps;
    ShowSelect: () => void;
    currCoin: (value: RedeemCoinProps) => void;
}

export default function TabCoinSelect({ className = '', optionList, isShow, coinSymol, ShowSelect, currCoin }: CoinSelectProps): React.ReactElement<CoinSelectProps> {

    return (
        <Wrapper className={` ${className}`}>
            <div className='currContent' onClick={ShowSelect}>
                <img src={coinSymol.img_url} alt="" />
                <p className='currName'>{coinSymol.coinName}</p>
                <img src={Fill} alt="" />
            </div>
            { isShow && <div className='option'>
                <div className='optinTitle'>
                    <p>ASSET</p>
                    <p>YOUR BALANCE</p>
                </div>
                {
                    optionList.map((item: RedeemCoinProps) => {
                        return (<div className='optionContent' key={item.coinName} onClick={() => currCoin(item)}>
                            <div className='left'>
                                <img src={item.img_url} alt="" />
                                <div className='coinSymol'>
                                    <p className='coinName'>{item.coinName}</p>
                                    <p className='symol'>{item.symol}</p>
                                </div>
                            </div>
                            <div className='right'>{item.balance}</div>
                        </div>)
                    })
                }
            </div>}
        </Wrapper>
    )
}