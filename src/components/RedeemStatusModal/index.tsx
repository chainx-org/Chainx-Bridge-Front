import React from "react";
import {ModalStyle, RedeemStatusContent, SuccessStatus} from "./style";
import {Button, Modal} from "antd";
import BTCLogo from "../../icons/BTC.svg"
import warningYellowLogo from "../../icons/warm_yellow.svg"
import RedeemStatusFooter from "./RedeemStatusFooter";
import successIcon from "../../icons/complete.svg"
import failIcon from "../../icons/fail.svg"
// import Question from './icons/question.svg'

interface RedeemStatusModalProps{
    visible:boolean,
    cancle: ()=>void;
    type: string;
}

function RedeemStatusModal({visible, cancle, type}:RedeemStatusModalProps): React.ReactElement<RedeemStatusModalProps> {
    
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <ModalStyle>
                <RedeemStatusContent>
                    {
                        type === "processing" ? 
                        <div className='redeemPending'>
                            <img src={BTCLogo} alt=""/>
                            <div className={"redeem-btc"}>1.8273 BTC</div>
                            <div className={"number"}>您将收到的BTC金额</div>
                            <div className={"tip-redeem"}>
                                <div>
                                    <img src={warningYellowLogo} alt=""/>
                                </div>
                                <div>如果在 8 小时后仍未收到赎回的 BTC，可取消赎回后重新发起赎回请求</div>
                            </div>
                        </div> : type === 'success' ?
                        <SuccessStatus className='redeemSuccess'>
                            <img src={successIcon} alt=""/>
                            <div className={"titleCon"}>赎回成功</div>
                            <div className={"number"}>您已经成功赎回 {0.001} XBTC</div>
                        </SuccessStatus> : 
                        <SuccessStatus className='redeemFail'>
                            <img src={failIcon} alt=""/>
                            <div className={"titleCon"}>Vault未按时将BTC发送给您</div>
                            <div className={"number-redeem"}>请放心你的资产很安全！同时你将获得10PCX的补偿</div>
                            <Button>取消赎回</Button>
                            <div className={"force-redeem"}>强制赎回</div>
                        </SuccessStatus>
                    }
                </RedeemStatusContent>
                <RedeemStatusFooter />
            </ModalStyle>
        </Modal>
    )
}

export default RedeemStatusModal;