import React from "react";
import { RedeemRequestCardStyle } from "./style";
import warningYellowLogo from "../../icons/warm_yellow.svg";
import { RedeemCoinProps } from "../../page/Bridge";
import ExplainTag from "../ExplainTag";
import { RedeemStatus } from "../RedeemStatusModal/RedeemStatusFooter/style";
import { useTranslation } from "react-i18next";

interface RedeemRequestProps {
    RedeemAmount: number;
    coinSymol: RedeemCoinProps;
    BtcAddress: string;
    vaultAddress: string;
    vaultBtcAddress: string;
    requestId: string;
}
function RedeemRequestSuccessCard({ RedeemAmount, coinSymol, BtcAddress, vaultAddress, vaultBtcAddress, requestId }: RedeemRequestProps): React.ReactElement<RedeemRequestProps> {
    const { t } = useTranslation();
    return (
        <RedeemRequestCardStyle>
            <div className={"card-header"}>
                <img src={coinSymol.img_urls} alt="" />
                <div className={"assets-text"}>
                    <div className={"assets-number"}>{RedeemAmount}</div>
                    <div>{coinSymol.coinName.slice(1, 5)}</div>
                </div>
                <div className={"time"}>
                    <div className={"time-title"}>{t("You will receive")}{' '}{coinSymol.coinName.slice(1, 5)} {t('amount')}</div>
                </div>
                <div className={"tip-redeem"}>
                    <div>
                        <img src={warningYellowLogo} alt="" />
                    </div>
                    <div className='tipMsg'>{t('If the redeemed ')}{coinSymol.coinName.slice(1, 5)}
                        {t(` is not received after 8 hours`)}，{t('the redeemed request can be made after the redemption.')}</div>
                </div>
            </div>
            <RedeemStatus>
                <div className={"line"} />
                <ExplainTag title={t('Request') +`ID`} children={requestId} className='bold' />
                <div className={"dotted-line"} />
                <ExplainTag title={`${coinSymol.coinName.slice(1, 5)}`+t(' Receive address')} children={<div>{BtcAddress}</div>} />
                <ExplainTag title={t('ChainX address of asset vault')} children={<div>{vaultAddress}</div>} />
                <ExplainTag title={t(" ")+`${coinSymol.symol}`+t(' address of asset vault')} children={<div>{vaultBtcAddress}</div>} />
            </RedeemStatus>
        </RedeemRequestCardStyle>
    )
}

export default RedeemRequestSuccessCard;