import { Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import Question from './icons/question.svg'

interface ExplainTagProps {
    className?: string;
    title: string;
    children: React.ReactNode;
    tooltip?: string | undefined;
}

export default function ExplainTag({ className = '', title, children, tooltip }: ExplainTagProps): React.ReactElement<ExplainTagProps> {

    return (
        <Wrapper className={``}>
            <div className='leftTitle'>
                <div className={`title ${className} `}>{title}</div>
                {
                    tooltip &&  <Tooltip title={tooltip}><img src={Question} alt="" /></Tooltip>
                }  
            </div>
            <div className={`rightContent  ${className}`}>{children}</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
    margin-bottom: 24px;
    width: 100%;
    .leftTitle {
        display: flex;
        align-items: center;
        .title {
            white-space: nowrap;
            margin-right: 5px;
        }
    }
    .rightContent {
        max-width: 280px;
        word-break: break-all;
        text-align: right;
        line-height: 16px;
    }
    .bold {
        color: #282828;
    }
`