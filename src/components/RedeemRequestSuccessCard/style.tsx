import styled from "styled-components";
import React from "react";

export const RedeemRequestCardStyle = styled.div`
  width: 500px;
  height: 496px;
  background: #F4F4F5;
  box-shadow: 10px 10px 16px 0 rgba(0, 0, 0, 0.06), -10px -10px 16px 0 #FFFFFF;
  border-radius: 16px;
  padding: 30px 40px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
    img {
      height: 32px;
    }
    .time {
      display: flex;
      margin-top: 8.5px;
      align-items: center;

      .time-title {
        font-size: 14px;
        color: #AEAEAE;
        letter-spacing: 0.12px;
        line-height: 20px;
        font-weight: 400;
      }

      .time-content {
        font-size: 14px;
        color: #282828;
        letter-spacing: 0.12px;
        line-height: 20px;
        font-weight: 500;
        margin-left: 6px;
        margin-right: 5px;
      }

      img {
        width: 12px;
        height: 12px;
      }
    }

    .assets-text {
      display: flex;
      margin-top: 20.5px;
      font-size: 32px;
      color: #22BE8F;
      text-align: center;
      line-height: 44px;
      font-weight: 600;

      .assets-number {
        margin-right: 20px;
      }
    }
  }
  .tip-redeem{
    margin-top: 24px;
    padding: 6px 18px;
    display: flex;
    align-items: center;
    border: 1px solid #FAAD14;
    text-align: left;
    border-radius: 6px;
    width: 374px;
    height: 44px;
    background:rgba(250,173,20,0.1);
    img{
      margin-right: 8px;
      width: 15px;
    }
    .tipMsg {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #554D4E;
      line-height: 16px;
      font-weight: 400;
    }
  }
  .dotted-line{
    width: 420px;
    height: 2px;
    border: 1px dashed #E5E5E5;
    box-shadow: 0 2px 1px 0 #FFFFFF;
    margin-bottom: 23.5px;
  }
  .line{
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
    border-radius: 1px;
    width: 420px;
    height: 2px;
    margin: 32px 0 24px;
  }
`
