import styled from "styled-components";

export const RegisterVaultCardStyle = styled.div`
  width: 500px;
  margin: auto;
  .alert {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    width: 320px;
    margin: auto;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-alert-content {
      flex: inherit;
    }
  }
  .ant-form-item {
    margin: 0;
  }
  button{
    width: 100%;
    height: 44px;
  }
  .card-title{
    font-family: PingFangSC-Semibold;
    font-size: 32px;
    color: #282828;
    line-height: 44px;
    font-weight: 600;
    margin-bottom: 24px;
    text-align: center;
  }
  .cardContent {
    padding: 40px 40px 60px;
    background: #F4F4F5;
    box-shadow: 8px 8px 13px 0 rgba(0,0,0,0.08), -8px -8px 13px 0 #FFFFFF;
    border-radius: 16px;
  }
  
`
export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin: 24px 0;
  background: #F4F4F5;
  box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
`
export const RegisterAccountStyle = styled.div`
  border: 1px solid #282828;
  border-radius: 6px;
  padding: 16px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #282828;
  font-weight: 400;
  .current-account {
    margin-top: 4px;
    color: #8E8E8E;
  }
`
export const CollateralStyle = styled.div`
  .collateral-info{
    display: flex;
    margin-top: 20px;
    .collateral-title{
      font-size: 12px;
      color: #282828;
      font-weight: bold;
    }
    .collateral-minimum{
      margin-left: 5px;
      font-size: 12px;
      color: #8E8E8E;
    }
  }
  .input-collateral{
    margin-top: 8px;
    display: flex;
    align-items: center;
    .ant-input-number {
      width: 240px;
      height: 40px;
      font-size: 14px;
      color: #8E8E8E;
      line-height: 40px;
      margin-right: 16px;
    }
    .pcx-balance{
      font-size: 12px;
      color: #282828;
    }
  }
`
export const AgreementStyle = styled.div`
  margin: 4px 0 12px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #282828;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  a {
    font-family: PingFangSC-Medium;
    color: #F4BC1D;
    font-weight: 500;
    margin-left: 4px;
  }
`
