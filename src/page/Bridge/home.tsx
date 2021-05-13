import React, { useContext, useEffect, useMemo, useState } from "react";
import { BridgeCardStyle, FunctionSwitchButton } from "./style";
import { useTab } from "../../hooks/useTab";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import { Link, NavLink, Route, Switch } from "react-router-dom";

function BridgeHome(): React.ReactElement {
  const { t } = useTranslation();
  const [isActive, setisActive] = useState(true)
  return (
    <BridgeCardStyle>
      <FunctionSwitchButton>
        <div className='tabList'>
          <Link to={"/bridge/"} onClick={()=>setisActive(!isActive)} className={isActive ? 'active': ''}>{t("issue")}</Link>
        </div>
        <div className='tabList'>
          <Link to={"/bridge/redeem"} onClick={()=>setisActive(!isActive)} className={isActive ? '': 'active'}>{t("Redeem")}</Link>
        </div>
      </FunctionSwitchButton>
      <div>
        <Route path="/bridge/" exact component={Issue} />
        <Route path="/bridge/redeem" component={Redeem} />
      </div>
    </BridgeCardStyle>
  );
}

export default BridgeHome