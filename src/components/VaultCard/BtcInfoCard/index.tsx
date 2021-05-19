import React, {useState, useEffect} from "react";
// import {Option} from "@polkadot/types";
// import {Vault} from "../../../interfaces"
import useAccountModel from "../../../hooks/useAccountModel"
import {useApi} from "../../../hooks/useApi"
import {BtcInfoCardStyle, TradeInfoStyle} from "./style";
import axios from 'axios';
// import useVaults from "../../../hooks/useVaults"

function BtcInfoCard():React.ReactElement {
    const {currentAccount} = useAccountModel();
    const {api, isApiReady} = useApi();
    const [btcAddress, SetBtcAddress] = useState("")
    const [btcBalance, setBtcBalance] = useState(0)
    const [total_received,setTotal_received] = useState(0)
    const [finalTx,setfinalTx] = useState(0)

    async function getVaults() {
        const valuts = await api.query.xGatewayBitcoinV2.vaults(currentAccount?.address!!)
        SetBtcAddress(JSON.parse(JSON.stringify(valuts))?.wallet)
    }

    useEffect(() => {
        getVaults()
    }, [getVaults])
    useEffect(() => {
        axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`).then((res) => {
            setBtcBalance(res.data.balance)
            setTotal_received(res.data.total_received)
            setfinalTx(res.data.final_n_tx)
        })
    }, [btcAddress])
    return (
        <BtcInfoCardStyle>
            <div className='addressBalance'>
                <div className={"card-item"}>
                    <div className={"card-title"}>BTC 地址</div>
                    <div className={"card-address"}>{btcAddress}</div>
                </div>
                <div className={"card-item"}>
                    <div className={"card-title"}>BTC 余额</div>
                    <div className={"card-balance"}>{btcBalance / 100000000} BTC</div>
                </div>
            </div>
            <div className='line'/>
            <div className='allAmount'>
                <div className={"card-item"}>
                    <div className={"card-title"}>总接收</div>
                    <div className={"card-balance"}>{total_received / 100000000} BTC</div>
                </div>
                <div className={"card-item tradeAmount"}>
                    <div className={"card-title"}>交易数量</div>
                    <div className={"card-balance"}>{finalTx}</div>
                </div>
            </div>
        </BtcInfoCardStyle>
    )
}

export default BtcInfoCard