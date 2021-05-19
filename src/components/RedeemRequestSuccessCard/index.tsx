import React from "react";
import {RedeemRequestCardStyle} from "./style";
import BTCLogo from "../../icons/BTC.svg"
import warningYellowLogo from "../../icons/warm_yellow.svg";
import RedeemStatusFooter from "../RedeemStatusModal/RedeemStatusFooter";

function RedeemRequestSuccessCard(): React.ReactElement {
    return (
        <RedeemRequestCardStyle>
            <div className={"card-header"}>
                <img src={BTCLogo} alt=""/>
                <div className={"assets-text"}>
                    <div className={"assets-number"}>10.8273</div>
                    <div>SBTC</div>
                </div>
                <div className={"time"}>
                    <div className={"time-title"}>您将收到的BTC金额</div>
                </div>
                <div className={"tip-redeem"}>
                    <div>
                        <img src={warningYellowLogo} alt=""/>
                    </div>
                    <div className='tipMsg'>如果在 8 小时后仍未收到赎回的 BTC，可取消赎回后重新发起赎回请求</div>
                </div>
            </div>
            <RedeemStatusFooter />
        </RedeemRequestCardStyle>
    )
}

export default RedeemRequestSuccessCard;