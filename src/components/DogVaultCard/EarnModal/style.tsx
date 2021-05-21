import { Modal } from "antd";
import styled from "styled-components";

export const AddCollateralModalStyle =styled(Modal)`
  width: 440px !important;
  .ant-modal-content {
    padding: 40px 0;
    .ant-modal-header {
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #282828;
      text-align: center;
      font-weight: 600;
      padding: 8px 0 1px;
      border: 0;
    }
    .ant-modal-footer {
      padding: 0 40px;
      display: flex;
      border: 0;
      .ant-btn {
        background: #F4F4F5;
        box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
        border-radius: 6px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #282828;
        text-align: center;
        font-weight: 400;
      }
      .ant-btn + .ant-btn {
        margin-left: 20px;
        background: #F6C94A;
        font-family: PingFangSC-Semibold;
        color: #FFFFFF;
        font-weight: 600;
      }
    }
  }
  .email {
    height: 40px;
    background: #EFEFEF;
    box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
    border-radius: 4px;
    margin-bottom: 30px;
    .ant-input {
      height: 40px;
      background: transparent;
      border: 0;
    }
  }
`

export const CollateralDisplayStyle =styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #979797;
  border-radius: 6px;
  margin: 16px 0 30px;
  .arrowYellow {
    transform: rotate(-90deg);
  }
`

export const CollateralRate =styled.div`
  display: flex;
  flex-direction: column;
  
  .title {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #282828;
    line-height: 16px;
    font-weight: 400;
    margin-bottom: 4px;
  }
  .collateralNum {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #34C69A;
    line-height: 16px;
    font-weight: 600;
  }
`
