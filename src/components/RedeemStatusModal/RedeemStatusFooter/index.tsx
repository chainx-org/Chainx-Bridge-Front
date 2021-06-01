import React from "react";
import { RedeemStatus } from "./style";
import ExplainTag from "../../ExplainTag";

interface RedeemStatusProps {
    vaultAddress: string;
    requestID: number;
    requester: string;
    btcAddress: string;
}

function RedeemStatusFooter({requestID, vaultAddress, btcAddress, requester }: RedeemStatusProps): React.ReactElement<RedeemStatusProps> {

    return (
        <RedeemStatus>
            <div className={"line"} />
            <ExplainTag title='请求ID' children={requestID} className='bold' />
            <div className={"dotted-line"} />
            <ExplainTag title='BTC接收地址' children={requester} />
            <ExplainTag title='资产保险库PCX地址' children={vaultAddress} />
            <ExplainTag title='资产保险库BTC地址' children={btcAddress} />
        </RedeemStatus>
    )
}
export default RedeemStatusFooter;
