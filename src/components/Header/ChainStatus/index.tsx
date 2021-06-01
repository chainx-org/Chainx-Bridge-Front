import React, { useContext } from "react";
import { PointStyle, ChainStatusStyle } from "./style";
import logo from "../ChainStatus/icons/chainX_bridge.svg";
import { bridgeStatusContext } from "../../../App";
import { useTranslation } from "react-i18next";

function ChainStatus(): React.ReactElement {
    const value = useContext(bridgeStatusContext)
    const { t } = useTranslation()
    return (
        <ChainStatusStyle>
            <div className={"chainStatus-content"}>
                <img src={logo} alt="" />
                <div className={"status-content"}>
                    <PointStyle className={value === "Running" ? "status running" : ""} />
                    <div>
                        <div className={"status-info"}>
                            {value === "Running" ? t(`${value}`) : ''}
                        </div>
                    </div>
                </div>
            </div>
        </ChainStatusStyle>
    )
}
export default ChainStatus;