import React, { useContext, useEffect, useMemo, useState } from "react";
import { BridgeCardStyle, FunctionSwitchButton } from "./style";
import { useTab } from "../../hooks/useTab";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import IssueRequestSuccessCard from "../../components/IssueRequestSuccessCard";
import RedeemRequestSuccessCard from "../../components/RedeemRequestSuccessCard";
enum Tab { Issue, Redeem, }

function BridgeHome(): React.ReactElement {
  const { t } = useTranslation();
  const { setActiveTab, isActive } = useTab(Tab.Issue);
  const [showIssueNext, setShowIssueNext] = useState(false)
  const [showRedeemNext, setShowRedeemNext] = useState(false)
  return (
    <BridgeCardStyle>
      { 
      // showIssueNext ? <IssueRequestSuccessCard /> : showRedeemNext ? <RedeemRequestSuccessCard /> : 
      <>
        <FunctionSwitchButton>
          <ul>
            <li
              onClick={() => {
                setActiveTab(Tab.Issue);
              }}
              className={isActive(Tab.Issue) ? "active" : ""}
            >
              {t("issue")}
            </li>
            <li
              onClick={() => {
                setActiveTab(Tab.Redeem);
              }}
              className={isActive(Tab.Redeem) ? "active" : ""}
            >
              {t("Redeem")}
            </li>
          </ul>
        </FunctionSwitchButton>
        {isActive(Tab.Issue) ? <Issue /> : <Redeem />} </>
      }
    </BridgeCardStyle>
  );
}

export default BridgeHome