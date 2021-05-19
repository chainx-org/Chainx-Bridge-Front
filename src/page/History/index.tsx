import React from "react";
import { HistoryStyle } from "./style";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import SwitchTabs, { TabInfo } from "../../components/SwitchTabs";
import IssueHistory from './IssueHistory'
import RedeemHistory from "./RedeemHistory";

const TabsWrapper = styled(SwitchTabs)`
  .ant-tabs-nav{
    margin: 0;
    height: 100%;
    width: 500px;
    height: 52px;
    background-image: linear-gradient(134deg, #FAFAFB 0%, #F4F4F5 100%);
    box-shadow: -3px -3px 4px 0 rgba(0,0,0,0.10), 3px 3px 4px 0 #FFFFFF;
    border-radius: 19px;
    margin: 28px;
    .ant-tabs-nav-list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #8E8E8E;
      text-align: center;
      font-weight: 400;
      &::before{
        display: none;
      }
      .ant-tabs-tab{   
        width: 244px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        background: transparent;
        border: 0;
        &:hover .ant-tabs-tab-btn{
          background: #F4F4F5;
          color: #F6C94A;
        }
      }
      .ant-tabs-tab-active {   
        background: #F4F4F5;
        box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
        border-radius: 16px;
        text-align: center;
        .ant-tabs-tab-btn {
          color: #282828;
          font-size: 16px;
          font-weight: 600;
        }
        &:hover .ant-tabs-tab-btn{
          color: #F6C94A;
        }
      }
    }
  }
  .ant-tabs-content-holder {
    padding: 0 28px;
  }
`;

function History():React.ReactElement {
    const {t} = useTranslation()
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
    
    const setList = (key: string) => {
        console.log(key)
    };

    return (
        <HistoryStyle>
            <TabsWrapper 
              onTabClick={(key: string) => setList(key)} 
              size='lg' 
              tabList={tabList}
            />
        </HistoryStyle>
    )
}

export default History;