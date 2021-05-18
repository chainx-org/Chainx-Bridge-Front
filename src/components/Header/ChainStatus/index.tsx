import React, {useContext} from "react";
import {PointStyle, ChainStatusStyle} from "./style";
import logo from "../ChainStatus/icons/chainx_logo.svg";
import {bridgeStatusContext} from "../../../App";
import {useTranslation} from "react-i18next";
import { Tooltip } from "antd";

function ChainStatus(): React.ReactElement {
    const value = useContext(bridgeStatusContext)
    const {t} = useTranslation()
    return (
        <ChainStatusStyle>
            <div className={"chainStatus-content"}>
                <img src={logo} alt=""/>
                <div className={"status-content"}>
                    <PointStyle className={value === "Running" ? "status running" : "status error"}/>
                    <div><Tooltip title={value} placement="right">
                        <div className={"status-info"}>
                            {value === "Running" ? t(`${value}`) : t("Error")}
                        </div>
                    </Tooltip></div>
                </div>
            </div>
        </ChainStatusStyle>
    )
}
export default ChainStatus;