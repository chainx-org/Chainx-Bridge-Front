import React from "react";
import ExplainTag from "../ExplainTag";

interface FooterProps{
    btcReceiveAddress :string;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}

const RedeemModalFooter:React.FunctionComponent<FooterProps> = ({btcReceiveAddress,vaultPCXAddress,vaultBTCAddress}) =>{
    return (
        <div>
            <ExplainTag title='BTC接收地址' children={btcReceiveAddress} />
            <ExplainTag title='资产保险库PCX地址' children={vaultPCXAddress} />
            <ExplainTag title='资产保险库BTC地址' children={vaultBTCAddress} />
        </div>
    )
}
export default RedeemModalFooter;
