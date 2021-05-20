import React from "react";
import {ModalStyle, IssueStatusContent, SuccessStatus} from "./style";
import CardMain from "../CardMain";
import {Modal} from "antd";
import Question from '../ExplainTag/icons/question.svg'
import IssueStatusFooter from "./IssueStatusFooter";
import successIcon from "../../icons/complete.svg"
import failIcon from "../../icons/fail.svg"

interface ProcessingModalProps{
    visible:boolean,
    cancle: ()=>void;
    type: string;
}

function ProcessingModal({visible, cancle, type}:ProcessingModalProps): React.ReactElement<ProcessingModalProps> {
    
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <ModalStyle>
                <IssueStatusContent>
                    {
                        type === "processing" ? <>
                            <div className={"card-header"}>
                                <div className='timeRemaining '>
                                    <div className='remaining'>剩余时间</div>
                                    <img src={Question} alt="Question"/>
                                </div>
                                <div className={"time"}>
                                    47:56:10
                                </div>
                            </div>
                            <CardMain opreturn={"81e71f40d31aa46f09da3f5d58a879c54708725f96730df2d8ac67050b6e2a07"} address={"ms3tsPc5nJZWunt3vXotJoDcoTHGohKiHC"} issueAmount={1}/>
                        </> : type === 'success' ?
                        <SuccessStatus className='issueSuccess'>
                            <img src={successIcon} alt=""/>
                            <div className={"titleCon"}>发行成功</div>
                            <div className={"number"}>您已经成功发行 {0.001} XBTC</div>
                        </SuccessStatus> : 
                        <SuccessStatus className='issueFail'>
                            <img src={failIcon} alt=""/>
                            <div className={"titleCon"}>发行失败</div>
                            <div className={"number"}>您未能及时完成BTC转账或者转账金额不准确</div>
                        </SuccessStatus>
                    }
                </IssueStatusContent>
                <IssueStatusFooter />
            </ModalStyle>
        </Modal>
    )
}

export default ProcessingModal;