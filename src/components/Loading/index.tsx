import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import lottie from 'lottie-web';
import animationData from './loading.json'; // 使用本地资源

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
function Loading(){
    const XbrigeLoading = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: XbrigeLoading.current as Element, // the dom element that will contain the animation
            renderer: 'svg',
            // loop: true,
            autoplay: true,
            animationData
        });
        animation.play();
        animation.setSpeed(1.5);
    }, [])
    return(
        <LoadingStyle >
            <div ref={XbrigeLoading} className='loading' />
        </LoadingStyle>
    )
}
export default Loading;
