import React from "react";
import {IssueRequestCardStyle} from "./style";
import Question from '../ExplainTag/icons/question.svg'
import CardMain from "../CardMain";
import CardFooter from "./CardFooter";
import { useLeftBlock } from "../../hooks/useLeftBlock";
import { stringToHex } from '@polkadot/util'
import useAccountModel from "../../hooks/useAccountModel";

interface IssueSuccessProps {
    currAddress: React.ReactNode;
    hypothecateNum: React.ReactNode;
    chargeNum?: React.ReactNode;
    IssueAmount: number;
    vaultBtcAddress: string;
    coinSymol: any;
    openTime: any;
}
function IssueRequestSuccessCard({currAddress, hypothecateNum, chargeNum, IssueAmount, vaultBtcAddress, coinSymol, openTime }: IssueSuccessProps): React.ReactElement {
    const leftBlock = useLeftBlock(+openTime[0]);
    const {currentAccount} = useAccountModel();
    return (
        <IssueRequestCardStyle>
            <div className={"card-header"}>
                <img src={coinSymol.img_url} alt=""/>
                <div className={"assets-text"}>
                    <div className={"assets-number"}>{IssueAmount}</div>
                    <div>{coinSymol.coinName}</div>
                </div>
                <div className={"time"}>
                    <div className={"time-title"}>剩余时间</div>
                    <div className={"time-content"}>{new Date(leftBlock * 6 * 1000).toISOString().substr(11,8)}</div>
                    <img src={Question} alt="" />
                </div>
            </div>
            <CardMain opreturn={stringToHex(currentAccount?.address)} address={vaultBtcAddress} issueAmount={IssueAmount}/>
            <div className={"line"}/>
            <CardFooter lockCollateral={hypothecateNum} issueAmount={IssueAmount} toAccount={currAddress}/>
        </IssueRequestCardStyle>
    )
}

export default IssueRequestSuccessCard;