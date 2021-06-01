import { useState, useEffect } from "react";
import {useApi} from "./useApi";

function useExpireTime(){
    const { api,isApiReady } = useApi();
    const [lastBlockNumber,setlastBlockNumber] = useState(0)
    const [IssueExpireTime,setIssueExpireTime] = useState(0)
    const [RedeemExpireTime,setRedeemExpireTime] = useState(0)
    const [refresh,setRefresh] = useState(0)
    useEffect(()=> {
        async function getLastBlock(){
            const lastBlock = await api.query.system.number()
            setlastBlockNumber(lastBlock.toNumber())
            await  api!!.rpc.chain.subscribeNewHeads(async ()=> {
                setlastBlockNumber(lastBlock.toNumber())
            })
        }
        async function getIssueExpireTime(){
            const issueTime = await api.consts.xGatewayBitcoinBridge.issueRequestExpiredPeriod
            setIssueExpireTime(issueTime.toNumber())
        }
        async function getRedeemExpireTime(){
            const RedeemTime = await  api.consts.xGatewayBitcoinBridge.redeemRequestExpiredPeriod
            setRedeemExpireTime(RedeemTime.toNumber())
        }
        getLastBlock();
        getIssueExpireTime();
        getRedeemExpireTime();
    },[isApiReady,api.query.system,lastBlockNumber])
    console.log(lastBlockNumber,"zzz")
    return {lastBlockNumber,IssueExpireTime,RedeemExpireTime,refresh};
}

export default useExpireTime;