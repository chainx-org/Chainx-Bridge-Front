import styled from "styled-components"

export const ChainStatusStyle = styled.div`
  width: 218px;
  height: 58px;
  background: #F4F4F5;
  box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  border-radius: 16px;
  img{
    height: 27px;
  }
  .status-info{
    font-size: 10px;
    color: #8E8E8E;
    font-weight: 400;
  }
  .chainStatus-content{
    padding: 7.5px 18px;
  }
  .status-content{
    margin-top: 2px;
     display: flex;
    align-items: center;
    .status-text{
      font-size: 10px;
      color: #8E8E8E;
      font-weight: 400;
    }
  }
`
export const PointStyle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  &&.running{
    background:#34C69A ;
  }
  &&.error{
    background: red;
  }
`