import React, {useState, useEffect, useContext} from "react";
import {Option} from "@polkadot/types";
import {Vault} from "../../../interfaces"
import useAccountModel from "../../../hooks/useAccountModel"
import {useApi} from "../../../hooks/useApi"
import {BtcInfoCardStyle, TradeInfoStyle} from "./style";
import axios from 'axios';

// import useVaults from "../../../hooks/useVaults"
function BtcInfoCard() {
    const {currentAccount} = useAccountModel();
    const {api, isApiReady} = useApi();
    const [btcAddress, SetBtcAddress] = useState("")
    const [btcBalance, setBtcBalance] = useState(0)
    const [total_received,setTotal_received] = useState(0)
    const [finalTx,setfinalTx] = useState(0)

    async function getVaults() {
        const valuts = await api.query.xGatewayBitcoinV2.vaults(currentAccount?.address!!)
        SetBtcAddress(valuts.unwrap().wallet.toString())
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
            {/* <TradeInfoStyle>
                <div className={"trade-info-header"}>
                    <div className={"header-title"}>最新交易哈希</div>
                    <div className={"trade-hash"}>-</div>
                </div>
                <ul>
                    <li>
                        <div className={"trade-title"}>确认数</div>
                        <div className={"trade-data"}>-</div>
                    </li>
                    <li>
                        <div className={"trade-title"}>出块时间</div>
                        <div className={"trade-data"}>-</div>
                    </li>
                    <li>
                        <div className={"trade-title"}>金额</div>
                        <div className={"trade-data"}>-</div>
                    </li>
                </ul>
            </TradeInfoStyle> */}
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
