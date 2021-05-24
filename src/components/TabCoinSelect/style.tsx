import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
.currContent {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #F4F4F5;
    box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
    border-radius: 15px;
    width: 153px;
    height: 40px;
    cursor: pointer;
    .currName {
        opacity: 0.85;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #000000;
        text-align: center;
        line-height: 22px;
        font-weight: 500;
    }
}
.option {
    position: absolute;
    top: 50px;
    min-width: 260px;
    background: #FFFFFF;
    box-shadow: 6px 6px 8px 0 rgba(0,0,0,0.06);
    border-radius: 8px;
    padding: 12px 0 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #8E8E8E;
    z-index: 99;
    .optinTitle {
        padding: 6px 16px;
        font-size: 11px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .optionContent {
        padding: 8px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        &:hover {
            cursor: pointer;
            background: #F7F7F7;
        }
        .left {
            display: flex;
            img {
                margin-right: 8px;
            }
            .coinName {
                font-size: 16px;
                color: #282828;
                margin-bottom: 2px;
            }
            .symol {
                font-size: 12px;
            }
        }
        .right {
            opacity: 0.85;
            font-size: 14px;
            color: #000000;
            line-height: 22px;
        }
    }
}
`