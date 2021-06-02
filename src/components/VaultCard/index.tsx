import React from "react";
import { VaultCardStyle, VaultTopStyle } from "./style";
import EarnCard from "./EarnCard";
import BtcInfoCard from "./BtcInfoCard";
import HistoryCard from "./HistoryCard";
import { useTranslation } from "react-i18next";

function VaultCard(): React.ReactElement {
    const { t } = useTranslation()
    return (
        <VaultCardStyle>
            <div className={"vault-card-title"}>
                {t('Vault') + "(XBTC)"}
            </div>
            <VaultTopStyle>
                <EarnCard />
                <BtcInfoCard />
            </VaultTopStyle>
            <HistoryCard />
        </VaultCardStyle>
    )
}

export default VaultCard;
