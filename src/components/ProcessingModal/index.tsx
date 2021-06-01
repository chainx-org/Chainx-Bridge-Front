import React from "react";
import { ModalStyle, IssueStatusContent, SuccessStatus } from "./style";
import CardMain from "../CardMain";
import { Modal, Tooltip } from "antd";
import Question from '../ExplainTag/icons/question.svg'
import IssueStatusFooter from "./IssueStatusFooter";
import successIcon from "../../icons/complete.svg"
import failIcon from "../../icons/fail.svg"
import { stringToHex } from "@polkadot/util";
import useAccountModel from "../../hooks/useAccountModel";
import { useTranslation } from "react-i18next";
import useExpireTime from "../../hooks/useExpireTime";

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
    openTimes: number;
    IssueDataKind: string
}

function ProcessingModal({ visible, cancle, type, requestID, requester, btcAddress, IssueAmount, griefingCollateral, vaultAddress, IssueDataKind, openTimes }: ProcessingModalProps): React.ReactElement<ProcessingModalProps> {
    const {t} = useTranslation();
    const {currentAccount } = useAccountModel();
    const {lastBlockNumber,IssueExpireTime} = useExpireTime()
    function countdowm (openTime:number, type:number){
        let hours = ((((openTime + type) - lastBlockNumber) * 30)/60 / 60 %24).toFixed(0)
        let minute = ((((openTime + type) - lastBlockNumber) * 30)/60 % 60).toFixed(0)
        let second = ((((openTime + type) - lastBlockNumber) * 30) % 60).toFixed(0)
        let time = hours.toString()+ ":" + minute.toString() + ":" + second.toString()
        return time
    }
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <ModalStyle>
                <IssueStatusContent>
                    {
                        type === 'processing' ? <>
                            <div className={"card-header"}>
                                <div className='timeRemaining '>
                                    <div className='remaining'>剩余时间</div>
                                    <Tooltip title={t('Please complete the transfer before the countdown ends, otherwise the issue will fail')}>
                                        <img src={Question} alt="" />
                                    </Tooltip>
                                </div>
                                <div className={"time"}>
                                {countdowm(openTimes,IssueExpireTime)}
                                </div>
                            </div>
                            <CardMain IssueDataKind={IssueDataKind} opreturn={stringToHex(currentAccount?.address!!)} address={btcAddress} issueAmount={IssueAmount/100000000} />
                        </> : type === 'success' ?
                            <SuccessStatus className='issueSuccess'>
                                <img src={successIcon} alt="" />
                                <div className={"titleCon"}>发行成功</div>
                                <div className={"number"}>您已经成功发行 {IssueAmount/100000000} {IssueDataKind}</div>
                            </SuccessStatus> :
                            <SuccessStatus className='issueFail'>
                                <img src={failIcon} alt="" />
                                <div className={"titleCon"}>发行失败</div>
                                <div className={"number"}>您未能及时完成 {IssueDataKind.slice(1,4)} 转账或者转账金额不准确</div>
                            </SuccessStatus>
                    }
                </IssueStatusContent>
                <IssueStatusFooter requester={requester} btcReceiveAddress={btcAddress} IssueAmount={IssueAmount} griefingCollateral={griefingCollateral} vaultAddress={vaultAddress} requestID={requestID} IssueDataKind={IssueDataKind}/>
            </ModalStyle>
        </Modal>
    )
}

export default ProcessingModal;