import styled from "styled-components"

export const NoExtensionsStyle = styled.div`
background-image: linear-gradient(180deg, #E2E1E6 0%, #F4F3F8 85%);
position: fixed;
z-index: 99;
width: 100vw;
height: 100vh;
`
export const DescribeText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
margin-top: -79px;
.bgShape1 {
    position: relative;
    h1 {
        font-family: PingFangSC;
        font-size: 42px;
        color: #282828;
        line-height: 44px;
        font-weight: 500;
        margin-bottom: 54px;
    }
    .shape1 {
        position: absolute;
        z-index: -1;
        top: -116%;
        left: -12%;
    }
    .shape2 {
        position: absolute;
        bottom: -176px;
        right: 0;
    }
}

.info{
    opacity: 0.8;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #282828;
    letter-spacing: 5px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 10px;
}
.tip{
    position: relative;
    .tiplogo {
        position: absolute;
        left: 60px;
        top: 26px;
    }
}
`