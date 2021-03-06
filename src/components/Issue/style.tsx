import styled from "styled-components";

export const IssueStyle = styled.div`
  margin-top: 24px;
  width: 500px;
  background: #F4F4F5;
  box-shadow: 10px 10px 16px 0 rgba(0,0,0,0.06), -10px -10px 16px 0 #FFFFFF;
  border-radius: 16px;
  padding: 40px;
  .topContent {
    padding: 8px 0 31px;
    border-bottom: 1px dashed #DBDBDB;
    box-shadow: 0 1px 1px 0 #FFFFFF;
  }
  .bottomContent {
    padding: 20px 0 ;
  }
`
export const AccountSwitch = styled.div`
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .to {
    opacity: 0.85;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000000;
    line-height: 22px;
    font-weight: 500;
    padding: 0 50px;
  }
  .currContent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 40px;
    .currNames {
      opacity: 0.85;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #000000;
      text-align: center;
      line-height: 22px;
      font-weight: 500;
      margin-left: 10px;
    }
  }
`
export const IssueBtcInputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 54px;
  color: #282828;
  .issueNum {
    width: 100%;
    display: flex;
    background: #EFEFEF;
    box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
    border-radius: 4px;
    .ant-input-number {
      width: 100%;
      height: 56px;
      font-size: 16px;
      border: 0;
      font-family: PingFangSC-Medium;
      color: #000000;
      line-height: 22px;
      font-weight: 500;
      .ant-input-number-input-wrap {
        height: 56px;
        display: flex;
        align-items: center;
        background: #EFEFEF;
      }
    }
    .line {
      width: 1px;
      height: 56px;
      border: 1px solid #DBDBDB;
      box-shadow: 1px 0 1px 0 #FFFFFF;
    }
    .btc-title {
      opacity: 0.85;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #000000;
      text-align: center;
      line-height: 22px;
      font-weight: 400;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .arrow {
    padding: 17px 0;
  }
  .receive {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .issueResNum {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 4px;
  }
`

// export const CurrentAccountStyle = styled.div`
//   background: #F6F6F6;
//   border-radius: 6px;
//   width: 419px;
//   height: 70px;
//   padding: 16px;
//   font-size: 12px;
//   color: #282828;
//   .current-account {
//     margin-top: 4px;
//     font-size: 12px;
//     color: #8E8E8E;
//   }
// `

// export const LockingCollateralStyle = styled.div`
//   color: #282828;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 24px;
//   .locking-title {
//     font-size: 14px;
//   }
//   .locking-num {
//     margin-left: 8px;
//     font-size: 14px;
//   }
//   .locking-tip {
//     margin-left: 8px;
//     padding: 0 4px;
//     height: 20px;
//     background: #FDF5E0;
//     border-radius: 4px;
//     font-size: 12px;
//     color: #9B7E2E;
//     line-height: 20px;
//     text-align: center;
//   }
// `
// export const IssueFooterStyle = styled.footer`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   .issue-footer-title {
//     font-size: 12px;
//     color: #282828;
//   }
//   .issue-footer-num {
//     font-size: 24px;
//     color: #282828;
//     margin-top: 8px;
//   }
//   button {
//     width: 419px;
//     height: 44px;
//     margin-top: 20px;
//   }
// `
// export const ConfirmationIssueModalStyle = styled.div`
//   position: absolute;
//   display: flex;
//   .ant-modal-body{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `
// export const ConfirmationIssueModalFooter = styled.div`
//   margin-top: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   .issue-footer-title {
//     font-size: 12px;
//     color: #282828;
//   }
//   .issue-footer-num {
//     font-size: 24px;
//     color: #282828;
//     margin-top: 8px;
//   }
// `
// export const VaultAccountStyle = styled.div`
//   margin-top: 10px;
//   background: #F6F6F6;
//   border-radius: 6px;
//   width: 419px;
//   height: 70px;
//   padding: 16px;
//   font-size: 12px;
//   color: #282828;

//   .current-account {
//     margin-top: 4px;
//     font-size: 12px;
//     color: #8E8E8E;
//   }
// `
// export const PCXbalanceStyle = styled.div`
//   margin-top: 20px;
//   display: flex;
//   justify-content: center;
//   font-size: 14px;
//   color: #282828;
//   font-weight: bold;
// `

