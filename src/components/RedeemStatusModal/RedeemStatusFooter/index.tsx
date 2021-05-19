import React from "react";
import { IssueStatus } from "./style";
import ExplainTag from "../../ExplainTag";

interface RedeemStatusProps{
    btcReceiveAddress :string;
    lockCollateral :number;
    issueAmount: number;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}

function RedeemStatusFooter():React.ReactElement {
    return (
        <IssueStatus>
            <div className={"line"}/>
            <ExplainTag title='请求ID' children={'3123213123'} className='bold' />
            <div className={"dotted-line"}/>
            <ExplainTag title='BTC接收地址' children={"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"} />
            <ExplainTag title='资产保险库PCX地址' children={'5HpAy3ahw2S7…G6wWRg1WBb'} />
            <ExplainTag title='资产保险库BTC地址' children={'5HpAy3ahw2S7…G6wWRg1WBb'} />
        </IssueStatus>
    )
}
export default RedeemStatusFooter;
