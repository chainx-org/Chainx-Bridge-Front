import React from "react";
import { RedeemModalFooterStyle } from "./styel";
import warningLogo from "../IssueRequestSuccessCard/icons/warm.svg";
interface FooterProps{
    btcReceiveAddress :string;
    vaultPCXAddress: string;
    vaultBTCAddress: string;
}
const RedeemModalFooter:React.FunctionComponent<FooterProps> = ({btcReceiveAddress,vaultPCXAddress,vaultBTCAddress}) =>{
    return (
        <RedeemModalFooterStyle>
            <ul>
                <li>
                    <div className={"font"}>
                        <div>
                            BTC接收地址
                        </div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{btcReceiveAddress}</div>
                </li>
                <li>
                    <div className={"font"}>
                        <div>资产保险库PCX地址</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{vaultPCXAddress}</div>
                </li>
                <li>
                    <div className={"font"}>
                        <div>资产保险库BTC地址</div>
                        <img src={warningLogo} alt=""/>
                    </div>
                    <div>{vaultBTCAddress}</div>
                </li>
            </ul>
        </RedeemModalFooterStyle>
    )
}
export default RedeemModalFooter;
