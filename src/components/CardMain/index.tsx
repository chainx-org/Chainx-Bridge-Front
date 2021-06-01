import React from "react";
import copy from 'copy-to-clipboard';
import CopyLogo from "../IssueRequestSuccessCard/icons/COPY.svg";
import WarmRedLogo from "../IssueRequestSuccessCard/icons/warm_red.svg";
import Question from '../ExplainTag/icons/question.svg'
import { CardMainStyle } from "./style";
import { message, Tooltip } from "antd";
import { coinProps } from "../../page/Bridge";
import { useTranslation } from "react-i18next";

interface MainProps{
    opreturn :string;
    address: string;
    issueAmount?: number;
    coinSymol?: coinProps | any;
}

const CardMain:React.FunctionComponent<MainProps> = ({opreturn,address,issueAmount,coinSymol}) =>{
    const {t} = useTranslation();
    const copyOpreturn = () => {
        copy(opreturn.substring(2,99));
        message.success({
            content: '已复制！',
            duration: 3,
        });
    }
    const copyAddress = () => {
        copy(address);
        message.success({
            content: '已复制！',
            duration: 3,
        });
    }
    return (
        <CardMainStyle>
            <div>
                <div className={"opreturn-title"}>
                    <div className={"step-one"}>1</div>
                    <div className={"cp-op"}>复制OP_RETURN</div>
                    <Tooltip title={t('Please use a wallet that supports OP_RETURN and enter OP_RETURN information')}>
                        <img src={Question} alt="" />
                    </Tooltip>
                </div>
                <div className='opreturn-res'>
                    <div className='verticalLine' />
                    <div>
                        <div className={"opreturn-content-wrapper"}>
                            <div className={"opreturn-content"}>
                                <div className={"op-return-text"}>
                                    {opreturn.substring(2,99)}
                                </div>
                                <hr className='line' />
                                <div className={"copy"} onClick={copyOpreturn}>
                                    <img src={CopyLogo} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={"tip-wrapper"}>
                            <div className={"tip"}>
                                <img src={WarmRedLogo} alt=""/>
                                <div>必须在{coinSymol.coinName === 'BTC' ? '比特币' : '狗狗币'}交易中添加op_return,否则会造成资产损失</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={"opreturn-title"}>
                    <div className={"step-one"}>2</div>
                    <div className={"cp-op"}>发送 {issueAmount} {coinSymol.coinName} 到下面的地址</div>
                    <div className={"info"}>(请在单笔交易中完成)</div>
                    <Tooltip title={t('If the correct amount is not entered in a single trade, it will result in a loss of assets')}>
                        <img src={Question} alt="" />
                    </Tooltip>
                </div>
                <div className={"opreturn-content-wrapper"}>
                    <div className={"btc-content"}>
                        <div className={"op-return-text"}>
                            {address}
                        </div>
                        <hr className='line' />
                        <div className={"copy"} onClick={copyAddress}>
                            <img src={CopyLogo} alt=""/>
                        </div>
                    </div>
                </div>
                {/* <div className={"qr-wrapper"}>
                    <img src={QrLogo} alt=""/>
                    <div className={"qr"}>
                        地址二维码
                    </div>
                </div> */}
            </div>
        </CardMainStyle>
    )
}
export default CardMain;