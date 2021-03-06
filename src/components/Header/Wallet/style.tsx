import styled from "styled-components";

export const WalletStyle = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  height: 32px;
  margin-right: 24px;
  align-items: center;
  background: #F4F4F5;
  box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  border-radius: 16px;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  img{
    margin-right: 8.56px;
  }
`
export const WalletWrapperStyle = styled.div`
  margin-right: 24px;
  cursor: pointer;
  &.wallets:hover .walletList {
    display: block;
  }
`
export const DropListStyle = styled.div`
  &.walletList {
    display: none;
  }
  position: absolute;
  margin-top: 10.5px;
  width: 257px;
  // height: 200px;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 6px 6px 8px 0 rgba(0,0,0,0.06);
  border-radius: 8px;
  padding: 12px 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .assets-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 16px;
    .item-balance{
      font-size: 14px;
      color: #000000;
      text-align: center;
      line-height: 22px;
      font-weight: 600;
      opacity: 0.85;
    }
    .item-left{
      display: flex;
      align-items: center;
      .item-text{
        font-size: 16px;
        color: #282828;
        font-weight: bold;
      }
      img{
        margin-right: 14.82px;
      }
    }
  }
`
