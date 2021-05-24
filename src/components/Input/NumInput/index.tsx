import { InputNumber, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import { coinProps } from "../../../page/Bridge";
import Question from '../../ExplainTag/icons/question.svg'

interface NumInputProps {
  children?: React.ReactNode;
  className?: string;
  coinSymol: coinProps;
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
                  { description && <p className='tradeTip'>{coinSymol.coinName}{" "}{description}{children}</p> }
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
    width: 100%;
    margin-bottom: 32px;
    .issueNum {
        width: 100%;
        display: flex;
        background: #EFEFEF;
        box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
        border-radius: 4px;
        .ant-input-number {
          width: 100%;
          height: 56px;
          font-size: 16px;
          border: 0;
          font-family: PingFangSC-Medium;
          color: #000000;
          line-height: 22px;
          font-weight: 500;
          .ant-input-number-input-wrap {
            height: 56px;
            display: flex;
            align-items: center;
            background: #EFEFEF;
          }
        }
        .line {
          width: 1px;
          height: 56px;
          border: 1px solid #DBDBDB;
          box-shadow: 1px 0 1px 0 #FFFFFF;
        }
        .btc-title {
          opacity: 0.85;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #000000;
          text-align: center;
          line-height: 22px;
          font-weight: 400;
          width: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    .topTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 8px;
        .righTooltip {
            display: flex;
            align-items: center;
            .tradeTip {
                margin-left: 5px;
                color: #282828;
            }
        }
    }
    .addressIpt {
        background: #EFEFEF;
        box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
        border-radius: 4px;
        width: 100%;
        .ant-input {
            border: none;
            background: #EFEFEF;
            box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
            border-radius: 4px;
            height: 40px;
            ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #CDCDCD;
                line-height: 16px;
                font-weight: 400;
            }
        }
    }
`