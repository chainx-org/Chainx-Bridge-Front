import styled from "styled-components";
import SwitchTabs from "../../components/SwitchTabs";

export const HistoryStyle = styled.div`
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0, 0, 0, 0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  padding: 20px 12px 0;
  width: 100%;
  margin: 0 30px;
`

export const FunctionSwitchButton = styled.div`
  font-size: 16px;
  color: #8E8E8E;
  text-align: center;
  font-weight: 400;
  margin-bottom: 28px;
  ul{
    width: 500px;
    height: 52px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(134deg, #FAFAFB 0%, #F4F4F5 100%);
    box-shadow: -3px -3px 4px 0 rgba(0,0,0,0.10), 3px 3px 4px 0 #FFFFFF;
    border-radius: 19px;
  }
  li{
    width: 244px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    &.active{
      background: #F4F4F5;
      box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
      border-radius: 16px;
      font-size: 16px;
      color: #282828;
      text-align: center;
      font-weight: 600;
    }
  }
`
export const TableStyle = styled.div`
  width: 100%;
  .ant-table-pagination.ant-pagination {
    margin: 24px 0;
  }
  .ant-table-tbody {
    tr {
      border-bottom: 1px solid #979797;
      box-shadow: 0 0 1px 0 rgba(0,0,0,0.04), 0 0 1px 0 #FFFFFF;
      border-radius: 1px;
      .ant-table-cell{
        color: #282828;
        padding: 22px 0;
      }
    }
  }
  .ant-table-thead {
    tr {
      border-bottom: 1px solid #F4F4F5;
      box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
      background: #F4F4F5;
      border-radius: 1px;
      .ant-table-cell{
        color: #8E8E8E;
        padding: 8px 0;
      }
    }
  }
  .ant-table-cell{
    background: #F4F4F5;
    font-size: 12px;
    font-weight: 400;
  }
  .historyFail, .historySuccess, .historyProcessing, .historyCancel {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      margin-left: 6px;
    }
  }
  .historyCancel{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    cursor: pointer;
    .cancel {
      color: #FFFFFF;
      padding: 4px 16px;
      background: #282828;
      border-radius: 5px;
    }
    .canceled {
      color: #282828;
    }
  }
  .historyProcessing {
    background: rgba(250,173,20,0.10);
    border: 1px solid rgba(250,84,28,0.30);
    border-radius: 4px;
    padding: 2px 8px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FA541C;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
  }
  .processing{
    font-size: 12px;
    color: #E88B00;
    text-align: right;
    line-height: 16px;
    font-weight: 400;
    cursor: pointer;
  }
  .fail{
    font-size: 12px;
    color: #F5222D;
    text-align: right;
    line-height: 16px;
    font-weight: 400;
    cursor: pointer;
  }
  .redeemHashAddress {
    color: #34C69A;
  }
  .tradeHashAddress {
    color: #EFB40B;
  }
  .hash {
    color: #34C69A;
  }
  .ant-table-tbody{
    > tr:hover:not(.ant-table-expanded-row) > td,.ant-table-row-hover,.ant-table-row-hover>td{
      background: #EAEAEA  !important;
    }
  }
  .ant-table-fixed{
    .ant-table-row-hover, .ant-table-row-hover>td{
      background: #F4F4F5!important;
    }
  }
`

export const TabsWrapper = styled(SwitchTabs)`
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
