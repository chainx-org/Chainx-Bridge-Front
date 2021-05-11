import React from "react";
import {RedeemRequestCardStyle} from "./style";
import BTCLogo from "../../icons/BTC.svg"
import Question from '../ExplainTag/icons/question.svg'
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";
import warningYellowLogo from "../../icons/warm_yellow.svg";
import RequestID from "../RequestID";
import RedeemModalFooter from "../RedeemModalFooter";

function RedeemRequestSuccessCard() {
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
                    <div>如果在 8 小时后仍未收到赎回的 BTC，可取消赎回后重新发起赎回请求</div>
                </div>
            </div>
            <div className={"line"}/>
            <RequestID requestID={"3123213123"}/>
            <div className={"dotted-line"}/>
            <RedeemModalFooter btcReceiveAddress={"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"}
                               vaultPCXAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}
                               vaultBTCAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}
            />
        </RedeemRequestCardStyle>
    )
}

export default RedeemRequestSuccessCard;