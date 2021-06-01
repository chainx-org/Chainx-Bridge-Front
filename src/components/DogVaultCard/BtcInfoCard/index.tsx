import React, { useState, useEffect } from "react";
import useAccountModel from "../../../hooks/useAccountModel";
import { useApi } from "../../../hooks/useApi";
import { DogInfoCardStyle } from "./style";

function DogInfoCard(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const { api } = useApi();
  const [dogAddress, setDogAddress] = useState("");
  const [dogBalance, setDogBalance] = useState(0);
  const [total_received, setTotal_received] = useState(0);
  const [finalTx, setfinalTx] = useState(0);

  async function getVaults() {
    const valut = await api.query.xGatewayDogecoinBridge.vaults(currentAccount?.address!! || "");
    setDogAddress(valut?.unwrap().wallet.toString());
  }

  useEffect(() => {
    getVaults();
  }, [getVaults]);
  useEffect(() => {
    (async () => {
      fetch(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${dogAddress}/balance`
      )
        .then((res) => res.json())
        .then((res: any) => {
          // console.log(res)
          setDogBalance(res.balance);
          setTotal_received(res.total_received);
          setfinalTx(res.final_n_tx);
        });
    })();
  }, [dogAddress]);
  return (
    <DogInfoCardStyle>
      <div className="addressBalance">
        <div className={"card-item"}>
          <div className={"card-title"}>DOG 地址</div>
          <div className={"card-address"}>{dogAddress}</div>
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