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
    IssueDataKind?: string
}

const CardMain:React.FunctionComponent<MainProps> = ({opreturn,address,issueAmount,coinSymol,IssueDataKind}) =>{
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
                    <div className={"cp-op"}>{t('Copy')} OP_RETURN</div>
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
                                <div>{t('OP_RETURN must be added to the')}{' '}
                                    {
                                        IssueDataKind ? <>{IssueDataKind === 'XBTC' ? t('Bitcoin') : t('Dogecoin')}</> : <>{coinSymol?.coinName === 'BTC' ? t('Bitcoin') : t('Dogecoin')}</>
                                    }    
                                    {' '}{t('transaction, otherwise the asset will be lost')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={"opreturn-title"}>
                    <div className={"step-one"}>2</div>
                    <div className='step-two'>
                        <div className={"cp-op"}>{t('Send')} {issueAmount} 
                            {
                                IssueDataKind ? <>{IssueDataKind === 'XBTC' ? 'BTC' : 'DOG'}</> : <>{coinSymol?.coinName} </>
                            }
                            {t(' to the address below')}
                        </div>
                        <div className={"info"}>({t('Please do it in a single transaction')})</div>
                        <Tooltip title={t('If the correct amount is not entered in a single trade, it will result in a loss of assets')}>
                            <img src={Question} alt="" />
                        </Tooltip>
                    </div>
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