import {useState,useEffect} from "react";
import useApiStatus from "./useApiStatus";
import {Percent} from "@polkadot/types/interfaces/runtime";
import {TradingPrice} from "../interfaces";


function useInitialFee(){
    const {isApiReady,api} = useApiStatus()
    const [dogePcxPrice,setDogePcxPrice] = useState(0)
    const [percent,setPercent] = useState<Percent | null>(null);
    const [exchangeRate, setExchangeRate] = useState<TradingPrice | null>(null);
    const [pcxPrice, setPcxPrice] = useState<number | null>(null);
    useEffect(() => {
        if (isApiReady) {
            (async () => {
                const tradingPrice = await api!!.query.xGatewayBitcoinBridge.exchangeRate();
                const percent = await api!!.query.xGatewayBitcoinBridge.issueGriefingFee();
                const dogetardingPrice = await api!!.query.xGatewayDogecoinBridge.exchangeRate();
                const dogePercent = await api!!.query.xGatewayDogecoinBridge.issueGriefingFee();
                const dogePrice = +JSON.stringify(dogetardingPrice.price)
                const dogeDecimal = +JSON.stringify(dogetardingPrice.decimal)
                const dogemult = Math.pow(10,dogeDecimal);
                setDogePcxPrice(dogePrice/dogemult)
                const price = +JSON.stringify(tradingPrice.price);
                const decimal = +JSON.stringify(tradingPrice.decimal);
                const mult = Math.pow(10, decimal);
                setPercent(percent);
                setExchangeRate(tradingPrice);
                setPcxPrice(price / mult);
                await api!!.rpc.chain.subscribeNewHeads(async () => {
                    const tradingPrice = await api!!.query.xGatewayBitcoinBridge.exchangeRate();
                    const percent = await api!!.query.xGatewayBitcoinBridge.issueGriefingFee();
                    const price = +JSON.stringify(tradingPrice.price);
                    const decimal = +JSON.stringify(tradingPrice.decimal);
                    const mult = Math.pow(10, decimal);
                    if (
                        tradingPrice.price !== exchangeRate?.price ||
                        tradingPrice.decimal !== exchangeRate?.decimal ||
                        percent !== percent
                    ) {
                        setExchangeRate(tradingPrice);
                        setPercent(percent);
                        setPcxPrice(price / mult);
                    }
                });
            })();
        }
    }, [isApiReady]);
    return {exchangeRate,percent,pcxPrice,dogePcxPrice}
}
export default useInitialFee;