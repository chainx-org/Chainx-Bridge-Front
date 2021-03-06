import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-family: PingFangSC-Regular;
font-size: 12px;
color: #282828;
width: 100%;
margin-bottom: 32px;
.topTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 7px;
    .righTooltip {
        display: flex;
        align-items: center;
        .verify {
            color: #F4BC1D;
            line-height: 16px;
            font-weight: 600;
            margin-left: 4px;
        }
    }
    .title {
        display: flex;
        align-items: center;
        .collateralNum {
            color: #8E8E8E;
            margin-left: 5px;
        }
    }
}
.addressIpt {
    background: #EFEFEF;
    box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    .ant-input-number-input-wrap, .ant-input-number-input {
        height: 40px !important;
    }
    .ant-input-number {
        width: 100% !important;
        height: 40px !important;
        border: 0 !important;
        background: transparent;
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #CDCDCD;
            line-height: 16px;
            font-weight: 400;
        }
    }
    .ant-input {
        border: none;
        background: #EFEFEF;
        box-shadow: -2px -2px 3px 0 rgba(0,0,0,0.10), 2px 2px 3px 0 #FFFFFF;
        border-radius: 4px;
        height: 40px;
        width: 100% !important;
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #CDCDCD;
            line-height: 16px;
            font-weight: 400;
        }
    }
}
`