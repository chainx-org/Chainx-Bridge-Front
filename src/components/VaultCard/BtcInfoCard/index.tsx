import React, { useState, useEffect } from "react";
import useAccountModel from "../../../hooks/useAccountModel";
import { useApi } from "../../../hooks/useApi";
import { BtcInfoCardStyle } from "./style";

function BtcInfoCard(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const { api } = useApi();
  const [btcAddress, setBtcAddress] = useState("");
  const [btcBalance, setBtcBalance] = useState(0);
  const [total_received, setTotal_received] = useState(0);
  const [finalTx, setfinalTx] = useState(0);

  async function getVaults() {
    const valut = await api.query.xGatewayBitcoinBridge.vaults(currentAccount?.address!! || '');
    setBtcAddress(valut.unwrap().wallet.toString());
  }

  useEffect(() => {
    getVaults();
  }, [getVaults,currentAccount]);
  useEffect(() => {
    (async () => {
      fetch(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`
      )
        .then((res) => res.json())
        .then((res: any) => {
          // console.log(res)
          setBtcBalance(res.balance);
          setTotal_received(res.total_received);
          setfinalTx(res.final_n_tx);
        });
    })();
  }, [btcAddress]);
  const path = window.location.origin
  return (
    <BtcInfoCardStyle>
      <div className="addressBalance">
        <div className={"card-item"}>
          <div className={"card-title"}>BTC 地址</div>
          <div className={"card-address"}>{ path === 'https://chainxbridge.chainx.cc' ? 
            <a target='_blank' href={`https://blockexplorer.one/btc/mainnet/address/${btcAddress}`}>{btcAddress}</a> : 
            <a target='_blank' href={`https://blockexplorer.one/btc/testnet/address/${btcAddress}`}>{btcAddress}</a>}
          </div>
        </div>
        <div className={"card-item"}>
          <div className={"card-title"}>BTC 余额</div>
          <div className={"card-balance"}>{btcBalance / 100000000} BTC</div>
        </div>
      </div>
      <div className="line" />
      <div className="allAmount">
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
  );
}

export default BtcInfoCard;