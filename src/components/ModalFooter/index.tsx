import React from "react";
import { ModalFooterStyle } from "./style";
import warningLogo from "../IssueRequestSuccessCard/icons/warm.svg";
import ExplainTag from "../ExplainTag";

interface FooterProps{
    btcReceiveAddress :string;
    lockCollateral :number;
    issueAmount: number;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}
const ModalFooter:React.FunctionComponent<FooterProps> = ({btcReceiveAddress,lockCollateral,issueAmount,vaultPCXAddress,vaultBTCAddress}) =>{
    return (
        <ModalFooterStyle>
            <ExplainTag title='BTC接收地址' children={<div>{btcReceiveAddress}</div>} />
            <ExplainTag title='发行总额' children={<div>{issueAmount} BTC</div>} />
            <ExplainTag title='锁定抵押品' children={lockCollateral} />
            <ExplainTag title='资产保险库PCX地址' children={vaultPCXAddress} />
            <ExplainTag title='资产保险库BTC地址' children={vaultBTCAddress} />
        </ModalFooterStyle>
    )
}
export default ModalFooter;
