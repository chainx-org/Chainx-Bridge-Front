import React, { useState, useEffect } from "react";
import useAccountModel from "../../../hooks/useAccountModel";
import { useApi } from "../../../hooks/useApi";
import { DogInfoCardStyle } from "./style";
import axios from 'axios'

function DogInfoCard(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const { api } = useApi();
  const [dogAddress, setDogAddress] = useState("");
  const [dogBalance, setDogBalance] = useState(0);
  const [total_received, setTotal_received] = useState(0);
  const [finalTx, setfinalTx] = useState(0);

  useEffect(() => {
  async function getVaults() {
    const valut = await api.query.xGatewayDogecoinBridge.vaults(currentAccount?.address!! || "");
    setDogAddress(valut?.unwrap().wallet.toString());
  }
    getVaults();
  }, [currentAccount]);
  useEffect(() => {
    (async () => {
      axios.get(
        `https://rest.cryptoapis.io/v2/blockchain-data/dogecoin/testnet/addresses/${dogAddress}`,
        {headers:{'X-Api-Key':'d105ddc5c0584a53fb532db0b76c7a46a005c086','Content-Type': 'application/json'}}
      )
        .then((res) => console.log(res) )
        // .then((res: any) => {
        //   console.log(res)
        //   // setDogBalance(res.balance);
        //   // setTotal_received(res.total_received);
        //   // setfinalTx(res.final_n_tx);
        // });
    })();
  }, [dogAddress]);
  const path = window.location.origin
  return (
    <DogInfoCardStyle>
      <div className="addressBalance">
        <div className={"card-item"}>
          <div className={"card-title"}>DOG 地址</div>
          <div className={"card-address"}>{ path === 'https://chainxbridge.chainx.cc' ? 
            <a target='_blank' href={`https://blockexplorer.one/doge/mainnet/address/${dogAddress}`}>{dogAddress}</a> : 
            <a target='_blank' href={`https://blockexplorer.one/doge/testnet/address/${dogAddress}`}>{dogAddress}</a>}
          </div>
        </div>
        <div className={"card-item"}>
          <div className={"card-title"}>DOG 余额</div>
          <div className={"card-balance"}>{dogBalance / 100000000} BTC</div>
        </div>
      </div>
      <div className="line" />
      <div className="allAmount">
        <div className={"card-item"}>
          <div className={"card-title"}>总接收</div>
          <div className={"card-balance"}>{total_received / 100000000} DOG</div>
        </div>
        <div className={"card-item tradeAmount"}>
          <div className={"card-title"}>交易数量</div>
          <div className={"card-balance"}>{finalTx}</div>
        </div>
      </div>
    </DogInfoCardStyle>
  );
}

export default DogInfoCard;