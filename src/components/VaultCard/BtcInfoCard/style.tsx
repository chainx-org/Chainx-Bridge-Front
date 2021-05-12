import styled from "styled-components";

export const BtcInfoCardStyle = styled.div`
  width: 35%;
  background: #F4F4F5;
  box-shadow: 8px 8px 13px 0 rgba(0,0,0,0.08), -8px -8px 13px 0 #FFFFFF;
  border-radius: 16px;
  margin-left: 36px;
  padding: 30px 40px 48px;
  .addressBalance {
    display: flex;
    flex-direction: column;
  }
  .allAmount {
    display: flex;
    .tradeAmount {
      margin-left: 20px;
    }
  }
  .line {
    width: 100%;
    height: 2px;
    margin: 22px 0 44px;
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
  }
  .card-item {
    margin-bottom: 21px;
    .card-title {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #8E8E8E;
      font-weight: 400;
      margin-bottom: 6px;
    }
    .card-address {
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #EFB40B;
      line-height: 16px;
      font-weight: 500;
    }
    .card-balance {
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #282828;
      font-weight: 500;
    }
  }
`
export const TradeInfoStyle = styled.div`
  margin-top: 50px;
  padding: 16px;
  height: 107px;
  width: 360px;
  background: #F6F6F6;
  border-radius: 6px;
  .trade-info-header{
    display: flex;
    justify-content: space-between;
    .header-title{
      font-size: 12px;
      color: #3D3D3D;
    }
    .trade-hash{
      font-size: 12px;
      color: #009FCF;
      width: 125px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;
    li{
      .trade-title{
        font-size: 12px;
        color: #8E8E8E;
      }
      .trade-data{
        margin-top: 12px;
        font-size: 12px;
        color: #282828;
      }
    }
  }
  
  
`
