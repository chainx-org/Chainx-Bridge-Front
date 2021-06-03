import React from "react";
import { RedeemStatus } from "./style";
import ExplainTag from "../../ExplainTag";
import { useTranslation } from "react-i18next";

interface RedeemStatusProps {
    vaultAddress: string;
    requestID: number;
    vaultDogeAndBtc: string;
    btcAddress: string;
    RedeemDataKind: string;
}

function RedeemStatusFooter({requestID, vaultAddress, btcAddress, vaultDogeAndBtc, RedeemDataKind }: RedeemStatusProps): React.ReactElement<RedeemStatusProps> {
    const { t } = useTranslation();
    return (
        <RedeemStatus>
            <div className={"line"} />
            <ExplainTag title={t('Request') +`ID`} children={requestID} className='bold' />
            <div className={"dotted-line"} />
            <ExplainTag title={`${RedeemDataKind.slice(1,5)}`+t(' Receive address')} children={btcAddress} />
            <ExplainTag title={t('ChainX address of asset vault')} children={vaultAddress} />
            <ExplainTag title={t(" ")+`${RedeemDataKind === 'XBTC' ? 'Bitcoin' : 'Dogecoin'}`+t(' address of asset vault')} children={vaultDogeAndBtc} />
        </RedeemStatus>
    )
}
export default RedeemStatusFooter;
