import React from "react";
import { ModalStyle, IssueStatusContent, SuccessStatus } from "./style";
import CardMain from "../CardMain";
import { Modal } from "antd";
import Question from '../ExplainTag/icons/question.svg'
import IssueStatusFooter from "./IssueStatusFooter";
import successIcon from "../../icons/complete.svg"
import failIcon from "../../icons/fail.svg"
import { stringToHex } from "@polkadot/util";
import useAccountModel from "../../hooks/useAccountModel";

interface ProcessingModalProps {
    visible: boolean,
    cancle: () => void;
    type: string;
    requestID: number;
    requester: string;
    btcAddress: string;
    IssueAmount: number;
    griefingCollateral: number;
    vaultAddress: string;
}

function ProcessingModal({ visible, cancle, type, requestID, requester, btcAddress, IssueAmount, griefingCollateral, vaultAddress }: ProcessingModalProps): React.ReactElement<ProcessingModalProps> {
    const { currentAccount } = useAccountModel();
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <ModalStyle>
                <IssueStatusContent>
                    {
                        type === 'processing' ? <>
                            <div className={"card-header"}>
                                <div className='timeRemaining '>
                                    <div className='remaining'>剩余时间</div>
                                    <img src={Question} alt="Question" />
                                </div>
                                <div className={"time"}>
                                    47:56:10
                                </div>
                            </div>
                            <CardMain coinSymol={{ coinName: "BTC" }} opreturn={stringToHex(currentAccount?.address!!)} address={btcAddress} issueAmount={IssueAmount/100000000} />
                        </> : type === 'success' ?
                            <SuccessStatus className='issueSuccess'>
                                <img src={successIcon} alt="" />
                                <div className={"titleCon"}>发行成功</div>
                                <div className={"number"}>您已经成功发行 {IssueAmount/100000000} XBTC</div>
                            </SuccessStatus> :
                            <SuccessStatus className='issueFail'>
                                <img src={failIcon} alt="" />
                                <div className={"titleCon"}>发行失败</div>
                                <div className={"number"}>您未能及时完成BTC转账或者转账金额不准确</div>
                            </SuccessStatus>
                    }
                </IssueStatusContent>
                <IssueStatusFooter requester={requester} btcReceiveAddress={btcAddress} IssueAmount={IssueAmount} griefingCollateral={griefingCollateral} vaultAddress={vaultAddress} requestID={requestID} />
            </ModalStyle>
        </Modal>
    )
}

export default ProcessingModal;