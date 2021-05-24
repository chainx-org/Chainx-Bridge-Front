import React from "react";
import styled from "styled-components";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .loading {
        width: 212px;
        height: 212px;
    }
`
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#F6C94A" }} spin />

function Loading(): React.ReactElement {
    return (
        <LoadingStyle >
            <Spin indicator={antIcon} size={"large"} />
        </LoadingStyle>
    )
}
export default Loading;
