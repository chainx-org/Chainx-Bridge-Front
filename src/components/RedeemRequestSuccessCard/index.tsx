import React from "react";
import { RedeemRequestCardStyle } from "./style";
import warningYellowLogo from "../../icons/warm_yellow.svg";
import { RedeemCoinProps } from "../../page/Bridge";
import ExplainTag from "../ExplainTag";
import { RedeemStatus } from "../RedeemStatusModal/RedeemStatusFooter/style";

interface RedeemRequestProps {
    RedeemAmount: number;
    coinSymol: RedeemCoinProps;
    BtcAddress: string;
    vaultAddress: string;
    vaultBtcAddress: string;
    requestId: string;
}
function RedeemRequestSuccessCard({ RedeemAmount, coinSymol, BtcAddress, vaultAddress, vaultBtcAddress, requestId }: RedeemRequestProps): React.ReactElement<RedeemRequestProps> {

    return (
        <RedeemRequestCardStyle>
            <div className={"card-header"}>
                <img src={coinSymol.img_urls} alt="" />
                <div className={"assets-text"}>
                    <div className={"assets-number"}>{RedeemAmount}</div>
                    <div>{coinSymol.coinName.slice(1, 5)}</div>
                </div>
                <div className={"time"}>
                    <div className={"time-title"}>您将收到的{coinSymol.coinName.slice(1, 5)}金额</div>
                </div>
                <div className={"tip-redeem"}>
                    <div>
                        <img src={warningYellowLogo} alt="" />
                    </div>
                    <div className='tipMsg'>如果在 8 小时后仍未收到赎回的 {coinSymol.coinName.slice(1, 5)}，可取消赎回后重新发起赎回请求</div>
                </div>
            </div>
            <RedeemStatus>
                <div className={"line"} />
                <ExplainTag title='请求ID' children={requestId} className='bold' />
                <div className={"dotted-line"} />
                <ExplainTag title={`${coinSymol.coinName.slice(1, 5)}接收地址`} children={<div>{BtcAddress}</div>} />
                <ExplainTag title='资产保险库ChainX地址' children={<div>{vaultAddress}</div>} />
                <ExplainTag title={`资产保险库${coinSymol.symol}地址`} children={<div>{vaultBtcAddress}</div>} />
            </RedeemStatus>
        </RedeemRequestCardStyle>
    )
}

export default RedeemRequestSuccessCard;