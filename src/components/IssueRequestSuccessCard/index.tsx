import React from "react";
import { CardFooterStyle, IssueRequestCardStyle } from "./style";
import Question from '../ExplainTag/icons/question.svg'
import CardMain from "../CardMain";
import { useLeftBlock } from "../../hooks/useLeftBlock";
import { stringToHex } from '@polkadot/util'
import useAccountModel from "../../hooks/useAccountModel";
import ExplainTag from "../ExplainTag";
import { coinProps } from "../../page/Bridge";

interface IssueSuccessProps {
    currAddress: React.ReactNode;
    hypothecateNum: React.ReactNode;
    IssueAmount: number;
    vaultBtcAddress: string;
    coinSymol: coinProps;
    openTime: any;
}

function IssueRequestSuccessCard({ currAddress, hypothecateNum, IssueAmount, vaultBtcAddress, coinSymol, openTime }: IssueSuccessProps): React.ReactElement {
    const leftBlock = useLeftBlock(+openTime[0]);
    const { currentAccount } = useAccountModel();
    return (
        <IssueRequestCardStyle>
            <div className={"card-header"}>
                <img src={coinSymol.img_urls} alt="" />
                <div className={"assets-text"}>
                    <div className={"assets-number"}>{IssueAmount}</div>
                    <div>X{coinSymol.coinName}</div>
                </div>
                <div className={"time"}>
                    <div className={"time-title"}>剩余时间</div>
                    <div className={"time-content"}>{new Date(leftBlock * 6 * 1000).toISOString().substr(11, 8)}</div>
                    <img src={Question} alt="" />
                </div>
            </div>
            <CardMain opreturn={stringToHex(currentAccount?.address)} address={vaultBtcAddress} issueAmount={IssueAmount} coinSymol={coinSymol} />
            <div className={"line"} />
            <CardFooterStyle>
                <ExplainTag title='锁定抵押品' children={hypothecateNum} />
                <ExplainTag title='发行总额' children={<>{IssueAmount}<span className='issueNum'>{coinSymol.coinName}</span></>} />
                <ExplainTag title='目标账户' children={currAddress} />
            </CardFooterStyle>
        </IssueRequestCardStyle>
    )
}

export default IssueRequestSuccessCard;