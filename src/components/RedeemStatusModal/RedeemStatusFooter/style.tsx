import styled from "styled-components";

export const IssueStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .line{
        width: 100%;
        height: 2px;
        background: #F4F4F5;
        box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
        margin: 32px 0 24px;
    }
    .dotted-line{
        width: 100%;
        height: 2px;
        border: 1px dashed #E5E5E5;
        box-shadow: 0 2px 1px 0 #FFFFFF;
        margin-bottom: 23.5px;
    }
`