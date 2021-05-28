import styled from "styled-components";

export const SelectAccountStyle = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  margin-right: 24px;
  .accountList {
    position: absolute;
    top: 46px;
    background: #FFFFFF;
    box-shadow: 6px 6px 8px 0 rgba(0,0,0,0.06);
    border-radius: 8px;
    z-index: 99;
    max-height: 300px;
    overflow: overlay;
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width 6px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
        background: #535353;
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background: #ededed;
      }
  }
`

export const CurrentAccount = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  background: #F4F4F5;
  box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  border-radius: 16px;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  .avatar {
    margin-right: 8px;
  }
  .icon{
    margin-left: 4px;
  }
  .current-account{
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    white-space: nowrap;
  }
`
export const AccountLists = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px 30px;
  width: 190px;
  cursor: pointer;
  &:hover {
    background: #F7F7F7;
  }
  &:hover .selectImg .circle{
    border: 1px solid #F6C94A;
  }
  .selectImg {
    .circle {
      width: 16px;
      height: 16px;
      background: #FFFFFF;
      border: 1px solid #8E8E8E;
      border-radius: 50%;
      // &:hover {
      //   border: 1px solid #F6C94A;
      // }
    }
  }
  .accountMsg {
    margin-left: 16px;
    font-size: 14px;
    // overflow: hidden;
    // text-overflow: ellipsis;
    .nameMsg {
      font-family: NotoSansSC-Medium;
      color: #282828;
      font-weight: 500;
      margin-bottom: 2px;
    }
    .adressMsg {
      font-family: NotoSansSC-Regular;
      font-weight: 400;
      color: #8E8E8E;
    }
  }

`