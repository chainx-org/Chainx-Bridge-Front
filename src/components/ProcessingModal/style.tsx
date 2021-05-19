import styled from "styled-components"

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

`
export const IssueStatusContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const SuccessStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .issueSuccess, .issueFail {
        padding-top: 17px;
    }
    .titleCon{
        opacity: 0.85;
        font-size: 20px;
        color: #000000;
        line-height: 28px;
        font-weight: bold;
        margin-top: 24px;
    }
    .number{
        margin: 8px 0;
        opacity: 0.45;
        font-size: 14px;
        color: #000000;
        text-align: center;
        line-height: 22px;
        font-weight: 400;
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