import styled from "styled-components";

export const EarnCardStyle = styled.div`
  width: 65%;
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0,0,0,0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  padding: 30px 40px 18px;
  .line {
    width: 100%;
    height: 2px;
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
    margin: 10px 0 16px;
  }
  .action {
    display: flex;
    justify-content: flex-end;
    button{
      width: 102px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #282828;
      border-radius: 8px;
    }
  }
`
export const EarnCardTopStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  .earnItem {
    margin-bottom: 20px;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #3D3D3D;
    font-weight: 500;
  }
  .earn-pcx-num{
    color: #34C69A;
  }
  .chainx-address{
    width: 239px;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #EFB40B;
    line-height: 16px;
    word-break:break-all;
  }
  .collateral-rate{
    display: flex;
    align-items: center;
    .collateral-rate-num{
      font-size: 20px;
      color: #34C69A;
      line-height: 28px;
    }
  }
  .email-edit, .earn-card-title{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    font-weight: 400;
  }
  .email-edit {
    color: #282828;
    line-height: 16px;
    cursor: pointer;
  }
  .earn-card-title {
    color: #8E8E8E;
    margin-bottom: 4px;
  }
`
