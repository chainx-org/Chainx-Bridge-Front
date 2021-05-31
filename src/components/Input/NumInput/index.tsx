import { InputNumber, Tooltip } from "antd";
import React from "react";
import { RedeemCoinProps } from "../../../page/Bridge";
import Question from '../../ExplainTag/icons/question.svg'
import { Wrapper } from "./style";

interface NumInputProps {
  children?: React.ReactNode;
  className?: string;
  coinSymol: RedeemCoinProps;
  setRedeemAmount: (e:number)=>void;
  tooltip?: string;
  icon?: boolean
  title?: string;
  description?: string;
  placeholder?: string;
  RedeemAmount?: number
  symol?: string;
}

export default function NumInput({children, className = '' , coinSymol, symol, setRedeemAmount, title, tooltip, icon, description, placeholder, RedeemAmount }:NumInputProps): React.ReactElement<NumInputProps>{
    
    return (
        <Wrapper className={` ${className}`}>
            <div className='topTitle'>
                <p>{title}</p>
                <div className='righTooltip'>
                   { icon &&
                    <Tooltip title={tooltip}>
                        <img src={Question} alt=""/>
                    </Tooltip>
                    }
                  { description && <p className='tradeTip'>{coinSymol.coinName}{description}{" "}{children}</p> }
                </div>
            </div>
            <div className='issueNum'>
                <InputNumber
                  value={RedeemAmount}
                  placeholder={placeholder}
                  onChange={(e) =>setRedeemAmount(+e) }
                />
                <div className='line' />
                <div className={`btc-title`}>{symol}</div>
            </div>
        </Wrapper>
    )
}