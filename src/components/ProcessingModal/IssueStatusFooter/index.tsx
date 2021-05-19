import React from "react";
import { IssueStatus } from "./style";
import ExplainTag from "../../ExplainTag";

interface IssueStatusProps{
    btcReceiveAddress :string;
    lockCollateral :number;
    issueAmount: number;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}

function IssueStatusFooter():React.ReactElement {
    return (
        <IssueStatus>
            <div className={"line"}/>
            <ExplainTag title='请求ID' children={'3123213123'} className='bold' />
            <div className={"dotted-line"}/>
            <ExplainTag title='BTC接收地址' children={<div>{"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"}</div>} />
            <ExplainTag title='发行总额' children={<div>{'23'} BTC</div>} />
            <ExplainTag title='锁定抵押品' children={'2'} />
            <ExplainTag title='资产保险库PCX地址' children={"5HpAy3ahw2S7…G6wWRg1WBb"} />
            <ExplainTag title='资产保险库BTC地址' children={"5HpAy3ahw2S7…G6wWRg1WBb"} />
        </IssueStatus>
    )
}
export default IssueStatusFooter;
