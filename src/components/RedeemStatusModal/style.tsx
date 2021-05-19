import styled from "styled-components"

export const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17px;
`
export const RedeemStatusContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    .tip-redeem{
        margin-top: 24px;
        padding: 14px 20px;
        display: flex;
        align-items: center;
        border: 1px solid #FAAD14;
        text-align: left;
        border-radius: 6px;
        width: 366px;
        height: 44px;
        background:rgba(250,173,20,0.1);
        font-size: 12px;
        color: #554D4E;
        font-weight: 400;
        img{
            margin-right: 8px;
        }
    }
    .redeem-btc{
        margin-top: 20.5px;
        font-size: 32px;
        color: #22BE8F;
        text-align: center;
        line-height: 44px;
        font-weight: 600;
        margin-bottom: 8.5px;
    }
`
export const SuccessStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .redeemFail, .redeemSuccess {
        padding-top: 27px;
        text-align: center;
        width: 100%;
    }
    .titleCon{
        opacity: 0.85;
        font-size: 20px;
        color: #000000;
        line-height: 28px;
        font-weight: bold;
        margin-top: 24px;
    }
    .number{
        margin: 8px 0;
        opacity: 0.45;
        font-size: 14px;
        color: #000000;
        text-align: center;
        line-height: 22px;
        font-weight: 400;
    }
    .number-redeem{
        margin-bottom: 32px;
        margin-top: 8px;
        opacity: 0.45;
        font-size: 14px;
        color: #000000;
        text-align: center;
        line-height: 22px;
        font-weight: 400;
    }
    .force-redeem{
        font-size: 14px;
        color: #E9B112;
        font-weight: bold;
        margin-top: 16px;
    }
`
