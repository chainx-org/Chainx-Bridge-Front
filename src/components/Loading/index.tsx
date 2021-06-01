import React from "react";
import styled from "styled-components";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Maskbg from "./background.webp";

const MaskStyle = styled.div`
  // background: rgba(0, 0, 0, 0.4);
  background-image: url(${Maskbg});
  background-size: cover;
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
`;

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
const antIcon = <LoadingOutlined style={{ fontSize: 48, color: "#000000" }} spin />

function Loading(): React.ReactElement {
    return (
        <MaskStyle>
            <LoadingStyle >
                <Spin indicator={antIcon} size={"large"} />
            </LoadingStyle>
        </MaskStyle>
    )
}
export default Loading;