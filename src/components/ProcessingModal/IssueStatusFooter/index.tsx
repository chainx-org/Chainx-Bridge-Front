import React from "react";
import { IssueStatus } from "./style";
import ExplainTag from "../../ExplainTag";

interface IssueStatusProps {
    btcReceiveAddress: string;
    IssueAmount: number;
    griefingCollateral: number;
    vaultAddress: string;
    requestID: number;
    requester: string;
}

const IssueStatusFooter: React.FunctionComponent<IssueStatusProps> = ({ requester, requestID, btcReceiveAddress, IssueAmount, griefingCollateral, vaultAddress }) => {
    return (
        <IssueStatus>
            <div className={"line"} />
            <ExplainTag title='请求ID' children={requestID} className='bold' />
            <div className={"dotted-line"} />
            <ExplainTag title='BTC接收地址' children={<div>{requester}</div>} />
            <ExplainTag title='发行总额' children={<div>{IssueAmount/100000000} BTC</div>} />
            <ExplainTag title='锁定抵押品' children={<div>{griefingCollateral/100000000} PCX</div>} />
            <ExplainTag title='资产保险库PCX地址' children={vaultAddress} />
            <ExplainTag title='资产保险库BTC地址' children={btcReceiveAddress} />
        </IssueStatus>
    )
}
export default IssueStatusFooter;
