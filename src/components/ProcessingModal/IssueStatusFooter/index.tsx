import React from "react";
import { IssueStatus } from "./style";
import ExplainTag from "../../ExplainTag";
import { useTranslation } from "react-i18next";

interface IssueStatusProps {
    btcReceiveAddress: string;
    IssueAmount: number;
    griefingCollateral: number;
    vaultAddress: string;
    requestID: number;
    requester: string;
    IssueDataKind: string;
}

const IssueStatusFooter: React.FunctionComponent<IssueStatusProps> = ({ requester, requestID, btcReceiveAddress, IssueAmount, griefingCollateral, vaultAddress, IssueDataKind }) => {
    const { t } = useTranslation();
    return (
        <IssueStatus>
            <div className={"line"} />
            <ExplainTag title={t('Request') +`ID`} children={requestID} className='bold' />
            <div className={"dotted-line"} />
            <ExplainTag title={t('The target account')} children={<div>{requester}</div>} />
            <ExplainTag title={t('Total Amount')} children={<div>{IssueAmount/100000000} {IssueDataKind}</div>} />
            <ExplainTag title={t('Lock up collateral')} children={<div>{griefingCollateral/100000000} PCX</div>} />
            <ExplainTag title={t('ChainX address of asset vault')} children={vaultAddress} />
            <ExplainTag title={t(" ")+`${IssueDataKind === 'XBTC' ? 'Bitcoin' : 'Dogecoin'}`+t(' address of asset vault')} children={btcReceiveAddress} />
        </IssueStatus>
    )
}
export default IssueStatusFooter;
