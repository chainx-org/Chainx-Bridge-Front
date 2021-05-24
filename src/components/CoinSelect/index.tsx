import React from "react";
import { coinProps } from "../../page/Bridge";
import Fill from './icons/fill.svg'
import { Wrapper } from "./style";

interface CoinSelectProps {
  className?: string;
  optionList: coinProps[];
  isShow?: boolean;
  currCoin: (value: coinProps)=>void;
  ShowSelect?: ()=>void;
  coinSymol: coinProps;
}

export default function CoinSelect({className = '' , optionList, isShow, currCoin, ShowSelect, coinSymol }:CoinSelectProps): React.ReactElement<CoinSelectProps>{
    
    return (
       <Wrapper className={` ${className}`}>
           {
            <>
                <div className='currContents' onClick={ShowSelect}>
                    <img src={coinSymol.img_url} alt=""/>
                    <p className='currName'>{coinSymol.coinName}</p>
                    <img src={Fill} alt=""/> 
                </div>
                { isShow && <div className='option'>
                    <p className='optinTitle'>ASSET</p>
                    {
                        optionList.map((item: coinProps)=>{
                            return ( <div className='optionContent' key={item.coinName} onClick={()=>currCoin(item)}>
                                <img src={item.img_url} alt=""/>
                                <div className='coinSymol'>
                                    <p className='coinName'>{item.coinName}</p>
                                    <p className='symol'>{item.symol}</p>
                                </div>
                            </div>)
                        })
                    }
                </div> }
            </>
            }
       </Wrapper>
    )
}