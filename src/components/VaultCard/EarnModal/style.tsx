import styled from "styled-components";

export const AddCollateralModalStyle =styled.div`
  
`
export const AddCollateralInput = styled.div`
  .addCollateral-info{
    display: flex;
    justify-content: space-between;
    .addCollateral-title{
      font-size: 12px;
      color: #282828;
      font-weight: bold;
    }
    .addCollateral-amount{
      font-size: 12px;
      color: #282828;
    }
  }
  .ant-input-number{
    width: 472px;
    height: 44px;
    margin-top: 7px;
    line-height: 44px;
  }
`

export const CollateralDisplayStyle =styled.div`
  ul{
    background: #F6F6F6;
    border-radius: 6px;
    margin-top: 16px;
    width: 472px;
    height: 60px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .collateral-num{
      font-size: 16px;
      color: #34C69A;
      font-weight: bold;
    }
    .before{
      display: flex;
      justify-content: flex-end;
    }
  }
`
