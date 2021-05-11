import React from "react";
import { RedeemModalFooterStyle } from "./styel";
import ExplainTag from "../ExplainTag";

interface FooterProps{
    btcReceiveAddress :string;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}
const RedeemModalFooter:React.FunctionComponent<FooterProps> = ({btcReceiveAddress,vaultPCXAddress,vaultBTCAddress}) =>{
    return (
        <RedeemModalFooterStyle>
            <ExplainTag title='BTC接收地址' children={btcReceiveAddress} />
            <ExplainTag title='资产保险库PCX地址' children={vaultPCXAddress} />
            <ExplainTag title='资产保险库BTC地址' children={vaultBTCAddress} />
        </RedeemModalFooterStyle>
    )
}
export default RedeemModalFooter;
