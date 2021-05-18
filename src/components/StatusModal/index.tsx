import React from "react";
import {StatusModalStyle} from "../../page/History/style";
import ModalFooter from "../ModalFooter";
import {Button, Modal} from "antd";
import successLogo from "./icons/complete.svg"
import failLogo from "./icons/fail.svg"
import BTCLogo from "../../icons/BTC.svg"
import warningYellowLogo from "../../icons/warm_yellow.svg"
import RedeemModalFooter from "../RedeemModalFooter";
import ExplainTag from "../ExplainTag";

interface StatusModalProps {
    visible: boolean,
    cancle: any,
    type: string
}

const StatusModal: React.FunctionComponent<StatusModalProps> = ({visible, cancle, type}) => {
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <StatusModalStyle>
                <>
                    {
                        type === "issue-success" ?
                            <div className='issueSuccess'>
                                <img src={successLogo} alt=""/>
                                <div className={"titleCon"}>发行成功</div>
                                <div className={"number"}>您已经成功发行 {0.001} XBTC</div>
                            </div> :
                            type === "redeem-success" ?
                                <div className='redeemSuccess'>
                                    <img src={successLogo} alt=""/>
                                    <div className={"titleCon"}>赎回成功</div>
                                    <div className={"number"}>您已经成功赎回 {0.001} XBTC</div>
                                </div> : type === "issue-fail" ? <div className='issueFail'>
                                    <img src={failLogo} alt=""/>
                                    <div className={"titleCon"}>发行失败</div>
                                    <div className={"number"}>您未能及时完成BTC转账或者转账金额不准确</div>
                                </div> : type === "redeem-fail" ? <div className='redeemFail'>
                                    <img src={failLogo} alt=""/>
                                    <div className={"titleCon"}>Vault未按时将BTC发送给您</div>
                                    <div className={"number-redeem"}>请放心你的资产很安全！同时你将获得10PCX的补偿</div>
                                    <Button>取消赎回</Button>
                                    <div className={"force-redeem"}>强制赎回</div>
                                </div> : <div className='redeemPending'>
                                    <img src={BTCLogo} alt=""/>
                                    <div className={"redeem-btc"}>1.8273 BTC</div>
                                    <div className={"number"}>您将收到的BTC金额</div>
                                    <div className={"tip-redeem"}>
                                        <div>
                                            <img src={warningYellowLogo} alt=""/>
                                        </div>
                                        <div>如果在 8 小时后仍未收到赎回的 BTC，可取消赎回后重新发起赎回请求</div>
                                    </div>
                                </div>
                    }
                </>
                <div className={"line"}/>
                <ExplainTag title='请求ID' children={'3123213123'} className='bold' />
                <div className={"dotted-line"}/>
                <div className='modalFooterContent'>
                    {type === "issue-success" || type === "issue-fail" ?
                        <ModalFooter btcReceiveAddress={"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"} lockCollateral={2}
                        issueAmount={23}
                        vaultPCXAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}
                        vaultBTCAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}/> :
                        <RedeemModalFooter btcReceiveAddress={"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"}
                        vaultPCXAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}
                        vaultBTCAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}
                        />}
                </div>
            </StatusModalStyle>
        </Modal>
    )
}
export default StatusModal;