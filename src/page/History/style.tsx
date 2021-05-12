import styled from "styled-components";

export const HistoryStyle = styled.div`
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0, 0, 0, 0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  padding: 48px 40px 0;
  width: 100%;
`
export const FunctionSwitchButton = styled.div`
  font-size: 16px;
  color: #8E8E8E;
  text-align: center;
  font-weight: 400;
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
  };
`
export const TableStyle = styled.div`
  width: 100%;
  margin-top: 28px;
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
      }
    }
  }
  .ant-table-thead {
    tr {
      border-bottom: 1px solid #F4F4F5;
      box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
      border-radius: 1px;
      .ant-table-cell{
        color: #8E8E8E;
      }
    }
  }
  .ant-table-cell{
    background: #F4F4F5;
    font-size: 12px;
    font-weight: 400;
    padding: 22px 0;
  }
  .historyFail, .historySuccess, .historyProcessing, .historyCancel {
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
  .fail{
    font-size: 12px;
    color: #F5222D;
    text-align: right;
    line-height: 16px;
    font-weight: 400;
  }
  .redeemHashAddress {
    color: #34C69A;
  }
  .tradeHashAddress {
    color: #EFB40B;
  }
  .ant-table-tbody{
    > tr:hover:not(.ant-table-expanded-row) > td,.ant-table-row-hover,.ant-table-row-hover>td{
      background: #F4F4F5!important;
    }
  }
  .ant-table-fixed{
    .ant-table-row-hover, .ant-table-row-hover>td{
      background: #F4F4F5!important;
    }
  }
`

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 17px;
  .card-header{
    font-size: 14px;
    color: #282828;
    text-align: center;
    font-weight: 400;
    .timeRemaining {
      display: flex;
      justify-content: center;
      .remaining {
        font-family: PingFangSC-Regular;
        margin-right: 5px;
      }
    }
  }
  .time{
    font-size: 32px;
    color: #EA754B;
    text-align: right;
    font-weight: 600;
  }
  .line{
    width: 100%;
    height: 2px;
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
    margin: 32px 0 24px;
  }
  .dotted-line{
    width: 100%;
    height: 2px;
    border: 1px dashed #E5E5E5;
    box-shadow: 0 2px 1px 0 #FFFFFF;
    margin-bottom: 23.5px;
  }
`

export const StatusModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    .redeemFail, .redeemSuccess {
      padding-top: 27px;
      width: 100%;
    }
    .redeemPending, .issueSuccess, .redeemFail, .redeemSuccess, .issueFail {
      text-align: center;
    }
    .issueSuccess, .issueFail {
      padding-top: 17px;
    }
    .titleCon{
      opacity: 0.85;
      font-size: 20px;
      color: #000000;
      line-height: 28px;
      font-weight: bold;
      margin-top: 22px;
    }
    .number{
      margin-top: 8px;
      opacity: 0.45;
      font-size: 14px;
      color: #000000;
      text-align: center;
      line-height: 22px;
      font-weight: 400;
    }
    .tip-redeem{
      margin-top: 24px;
      padding: 14px 20px;
      display: flex;
      align-items: center;
      border: 1px solid #FAAD14;
      text-align: left;
      border-radius: 6px;
      width: 366px;
      height: 44px;
      background:rgba(250,173,20,0.1);
      font-size: 12px;
      color: #554D4E;
      font-weight: 400;
      img{
        margin-right: 8px;
      }
    }
    .number-redeem{
      margin-bottom: 32px;
      margin-top: 8px;
      opacity: 0.45;
      font-size: 14px;
      color: #000000;
      text-align: center;
      line-height: 22px;
      font-weight: 400;
    }
    .force-redeem{
      font-size: 14px;
      color: #E9B112;
      font-weight: bold;
      margin-top: 16px;
    }
    .redeem-btc{
      margin-top: 20.5px;
      font-size: 32px;
      color: #22BE8F;
      text-align: center;
      line-height: 44px;
      font-weight: 600;
      margin-bottom: 8.5px;
    }
    .title-redeem{
      margin-top: 8px;
      opacity: 0.45;
      font-size: 14px;
      color: #000000;
      text-align: center;
      line-height: 22px;
      font-weight: 400;
    }
  .modalFooterContent {
    width: 100%;
    padding-bottom: 18px;
  }
  .time{
    font-size: 32px;
    color: #EA754B;
    text-align: right;
    font-weight: 600;
  }
  .line{
    width: 100%;
    height: 2px;
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
    margin: 32px 0 24px;
  }
  .dotted-line{
    width: 100%;
    height: 2px;
    border: 1px dashed #E5E5E5;
    box-shadow: 0 2px 1px 0 #FFFFFF;
    margin-bottom: 23.5px;
  }
`
