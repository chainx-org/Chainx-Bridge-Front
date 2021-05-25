import React from "react";
import { HistoryStyle, TabsWrapper } from "./style";
import { useTranslation } from "react-i18next";
import { TabInfo } from "../../components/SwitchTabs";
import IssueHistory from './IssueHistory'
import RedeemHistory from "./RedeemHistory";

function History(): React.ReactElement {
  const { t } = useTranslation()
  const tabList: TabInfo[] = [
    {
      title: t('issue'),
      content: <IssueHistory />
    },
    {
      title: t('Redeem'),
      content: <RedeemHistory />
    }
  ];

  return (
    <HistoryStyle>
      <TabsWrapper
        size='lg'
        tabList={tabList}
      />
    </HistoryStyle>
  )
}

export default History;