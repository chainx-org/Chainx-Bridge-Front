import React, { useEffect, useState } from "react";
import { ModalStyle, RedeemStatusContent, SuccessStatus } from "./style";
import { Button, Modal } from "antd";
import BTCLogo from "../../icons/BTC.svg"
import warningYellowLogo from "../../icons/warm_yellow.svg"
import RedeemStatusFooter from "./RedeemStatusFooter";
import successIcon from "../../icons/complete.svg"
import failIcon from "../../icons/fail.svg"
import { useApi } from "../../hooks/useApi";
import { BtcAddress, Vault } from "../../interfaces";
import { useTranslation } from "react-i18next";

interface RedeemStatusModalProps {
    visible: boolean,
    cancle: () => void;
    type: string;
    requestID: number;
    RedeemAmount: number;
    vaultAddress: string;
    btcAddress: string;
    requester: string;
    RedeemDataKind: string;
    vaultDogeAndBtc: string;
}

function RedeemStatusModal({ visible, cancle, type, requestID, RedeemAmount, vaultAddress, btcAddress, vaultDogeAndBtc, RedeemDataKind }: RedeemStatusModalProps): React.ReactElement<RedeemStatusModalProps> {
    const { t } = useTranslation();
    return (
        <Modal visible={visible} footer={null} getContainer={false} onCancel={cancle}>
            <ModalStyle>
                <RedeemStatusContent>
                    {
                        type === "processing" ?
                            <div className='redeemPending'>
                                <img src={BTCLogo} alt="" />
                                <div className={"redeem-btc"}>{RedeemAmount/100000000} {RedeemDataKind.slice(1,5)}</div>
                                <div className={"number"}>{t("You will receive")}{' '}{RedeemDataKind.slice(1,5)} {t('amount')}</div>
                                <div className={"tip-redeem"}>
                                    <div>
                                        <img src={warningYellowLogo} alt="" />
                                    </div>
                                    <div>{t('If the redeemed ')}{RedeemDataKind.slice(1,5)}{t(` is not received after 8 hours`)}???{t('the redeemed request can be made after the redemption.')}</div>
                                </div>
                            </div> : type === 'success' ?
                                <SuccessStatus className='redeemSuccess'>
                                    <img src={successIcon} alt="" />
                                    <div className={"titleCon"}>????????????</div>
                                    <div className={"number"}>????????????????????? {RedeemAmount/100000000} {RedeemDataKind}</div>
                                </SuccessStatus> :
                                <SuccessStatus className='redeemFail'>
                                    <img src={failIcon} alt="" />
                                    <div className={"titleCon"}>Vault????????????{RedeemDataKind.slice(1,5)}????????????</div>
                                    <div className={"number-redeem"}>???????????????????????????????????????????????????10PCX?????????</div>
                                    <Button>????????????</Button>
                                    <div className={"force-redeem"}>????????????</div>
                                </SuccessStatus>
                    }
                </RedeemStatusContent>
                <RedeemStatusFooter RedeemDataKind={RedeemDataKind} requestID={requestID} vaultAddress={vaultAddress} btcAddress={btcAddress} vaultDogeAndBtc={vaultDogeAndBtc} />
            </ModalStyle>
        </Modal>
    )
}

export default RedeemStatusModal;