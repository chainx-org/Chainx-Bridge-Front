import {useState,useEffect} from "react";
import useApiStatus from "./useApiStatus";
import {IssueRequestRow} from "./useIssueRequests";
import {RedeemRequestRow} from "./useRedeemRequest";
function useInitialRequests(){
    const {isApiReady,api} = useApiStatus()
    const [issueRequests, setIssueRequests] = useState<IssueRequestRow[]>([]);
    const [redeemRequest, setReedemRequest] = useState<RedeemRequestRow[]>([]);
    useEffect(() => {
        if (isApiReady) {
            api!!.query.xGatewayBitcoinBridge.issueRequests.entries().then((data) => {
                setIssueRequests(
                    data.map(([requestId, value]) => ({
                        id: requestId.args[0],
                        ...value.unwrap(),
                    }))
                );
            });
            api!!.query.xGatewayBitcoinBridge.redeemRequests
                .entries()
                .then((data) => {
                    setReedemRequest(
                        data.map(([requestId, value]) => ({
                            id: requestId.args[0],
                            ...value.unwrap(),
                        }))
                    );
                });
            api!!.rpc.chain.subscribeNewHeads(async () => {
                api!!.query.xGatewayBitcoinBridge.issueRequests
                    .entries()
                    .then((data) => {
                        setIssueRequests(
                            data.map(([requestId, value]) => ({
                                id: requestId.args[0],
                                ...value.unwrap(),
                            }))
                        );
                    });
                api!!.query.xGatewayBitcoinBridge.redeemRequests
                    .entries()
                    .then((data) => {
                        setReedemRequest(
                            data.map(([requestId, value]) => ({
                                id: requestId.args[0],
                                ...value.unwrap(),
                            }))
                        );
                    });
            });
        }
    }, [isApiReady]);
    return {issueRequests,redeemRequest}
}
export default useInitialRequests;