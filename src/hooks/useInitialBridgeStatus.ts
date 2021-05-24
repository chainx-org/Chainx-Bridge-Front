import {useState,useEffect} from "react";
import useApiStatus from "./useApiStatus";

function useInitialBridgeStatus(){
    const {isApiReady,api} = useApiStatus()
    const [bridgeStatus, setBridgeStatus] = useState("");
    useEffect(() => {
        if (isApiReady) {
            (async () => {
                const status = await api!!.query.xGatewayBitcoinBridge.bridgeStatus();
                setBridgeStatus(status.toString());
            })();
        }
    }, [isApiReady]);
    return {bridgeStatus}
}
export default useInitialBridgeStatus;