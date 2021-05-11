import React from "react";
import {ModalStyle} from "../../page/History/style";
import CardMain from "../CardMain";
import RequestID from "../RequestID";
import ModalFooter from "../ModalFooter";
import {Modal} from "antd";
import Question from '../ExplainTag/icons/question.svg'
import ExplainTag from "../ExplainTag";
interface ProcessingModalPrps{
    visible:boolean,
    cancle:any
}
const ProcessingModal:React.FunctionComponent<ProcessingModalPrps> = ({visible,cancle}) =>{
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <ModalStyle>
                <div className={"card-header"}>
                    <div className='timeRemaining '>
                        <div className='remaining'>剩余时间</div>
                        <img src={Question} alt="Question"/>
                    </div>
                    <div className={"time"}>
                        47:56:10
                    </div>
                </div>
                <CardMain opreturn={"81e71f40d31aa46f09da3f5d58a879c54708725f96730df2d8ac67050b6e2a07"} address={"ms3tsPc5nJZWunt3vXotJoDcoTHGohKiHC"}/>
                <div className={"line"}/>
                <ExplainTag title='请求ID' children={'3123213123'} className='bold' />
                <div className={"dotted-line"}/>
                <ModalFooter btcReceiveAddress={"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"} lockCollateral={2} issueAmount={23} vaultPCXAddress={"5HpAy3ahw2S7…G6wWRg1WBb"} vaultBTCAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}/>
            </ModalStyle>
        </Modal>
    )
}
export default ProcessingModal;