import { useState, useEffect } from "react";
import * as definitions from "../interfaces/definitions";
import { ApiPromise, WsProvider } from "@polkadot/api";

function useApiStatus() {
    const [isApiReady, setIsReady] = useState(false)
    const [api, setApi] = useState<ApiPromise | null>(null)
    useEffect(() => {
        const types = Object.values(definitions).reduce(
            (res, { types }) => ({ ...res, ...types }),
            {}
        );
        const provider = new WsProvider("wss://xbridge.spiderx.pro/ws");
        const api = new ApiPromise({ provider, types });
        api.on("disconnected", () => setIsReady(false));
        api.on("ready", () => {
            setApi(api);
            setIsReady(true);
            // notification.info({ message: "Endpoint connected." });
        });
    }, [])
    return { api, isApiReady }
}
export default useApiStatus;