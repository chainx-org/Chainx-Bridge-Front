import React, { lazy, Suspense} from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Loading from "./components/Loading";
import styled from "styled-components";
import { ApiContext } from "./hooks/useApi";
import { IssueRequestsContext } from "./hooks/useIssueRequests";
import { RedeemRequestsContext } from "./hooks/useRedeemRequest";
import { FeeContext } from "./hooks/useFeeContext";
import NoExtensions from "./components/NoExtensions";
import useApiStatus from "./hooks/useApiStatus";
import useInitialAccounts from "./hooks/useInitialAccounts";
import useInitialFee from "./hooks/useInitialFee";
import useInitialBridgeStatus from "./hooks/useInitialBridgeStatus";
import useInitialRequests from "./hooks/useInitialRequests";
const Bridge = lazy(() => import("./page/Bridge/index"));
const History = lazy(() => import("./page/History"));
const btcVault = lazy(() => import("./page/Vault/btcVault"));
const dogeVault = lazy(()=> import("./page/Vault/dogeVault"))

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  padding: 30px 40px;
  .empty {
    width: 40px;
  }
`;

export const App: React.FC = () => {
  const {isApiReady,api} = useApiStatus()
  const {downExtensions} = useInitialAccounts()
  const {dogePcxPrice,percent,exchangeRate,pcxPrice} = useInitialFee()
  const  {bridgeStatus} = useInitialBridgeStatus()
  const {issueRequests,redeemRequest} =useInitialRequests()
  return (
    <>
      {  
      downExtensions ? <NoExtensions /> : !isApiReady ? <Loading /> :
      // <Suspense fallback={<Loading />}>
      <LayoutWrapper id={"LayoutWrapper"}>
        <ApiContext.Provider
          value={{
            api: api!!,
            isApiReady,
          }}
          >
          <IssueRequestsContext.Provider
            value={{
              requests: issueRequests,
            }}
            >
            <RedeemRequestsContext.Provider
              value={{
                requests: redeemRequest,
              }}
              >
              <FeeContext.Provider
                value={{
                  exchangeRate: exchangeRate!!,
                  percent: percent!!,
                  pcxPrice: pcxPrice!!,
                  dogePCXprice: dogePcxPrice!!
                }}
                >
                <bridgeStatusContext.Provider value={bridgeStatus}>
                  <Header />
                </bridgeStatusContext.Provider>
                <Content>
                  <SideBar />
                    <Switch>
                      <Route path="/bridge" component={Bridge} />
                      <Route path="/history" component={History} />
                      <Route path="/vault/btc" exact={true} component={btcVault} />
                      <Route path="/vault/doge" exact={true} component={dogeVault} />
                      <Redirect from="/" to="/bridge" />
                    </Switch>
                  <div className="empty" />
                </Content>
              </FeeContext.Provider>
            </RedeemRequestsContext.Provider>
          </IssueRequestsContext.Provider>
        </ApiContext.Provider>
      </LayoutWrapper>
      // </Suspense>
      }
    </>
  );
};
export const bridgeStatusContext = React.createContext("");