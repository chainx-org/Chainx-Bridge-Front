import React from "react";
import { IssueStatus } from "./style";
import ExplainTag from "../../ExplainTag";

interface IssueStatusProps {
    btcReceiveAddress: string;
    IssueAmount: number;
    griefingCollateral: number;
    vaultAddress: string;
}

const IssueStatusFooter: React.FunctionComponent<IssueStatusProps> = ({ btcReceiveAddress, IssueAmount, griefingCollateral, vaultAddress }) => {
    return (
        <IssueStatus>
            <div className={"line"} />
            <ExplainTag title='请求ID' children={'3123213123'} className='bold' />
            <div className={"dotted-line"} />
            <ExplainTag title='BTC接收地址' children={<div>{btcReceiveAddress}</div>} />
            <ExplainTag title='发行总额' children={<div>{IssueAmount} BTC</div>} />
            <ExplainTag title='锁定抵押品' children={griefingCollateral} />
            <ExplainTag title='资产保险库PCX地址' children={vaultAddress} />
            <ExplainTag title='资产保险库BTC地址' children={btcReceiveAddress} />
        </IssueStatus>
    )
}
export default IssueStatusFooter;
