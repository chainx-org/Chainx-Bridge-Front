import React, { useState, useEffect } from "react";
import RegisterVaultCard from "../../../components/RegisterVaultCard";
import { Option } from "@polkadot/types";
import { Vault } from "../../../interfaces";
import useAccountModel from "../../../hooks/useAccountModel";
import { useApi } from "../../../hooks/useApi";
import { createModel } from "hox";
import DogVaultCard from "../../../components/DogVaultCard";

const useVaultModel = createModel(() => useState<Vault | null>(null));
function VaultDoge(): React.ReactElement {
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();
  const [vault, setVault] = useVaultModel();
  // 查询 vault 状态
  useEffect(() => {
    async function GetStatus() {
      const status = await api.query.xGatewayDogecoinBridge.vaults<
        Option<Vault>
      >(currentAccount?.address || "");
      setVault(status.isNone ? null : (status.value as Vault));
    }
    if (isApiReady) {
      GetStatus();
    }
  }, [currentAccount, isApiReady]);
  return <>{vault ? <DogVaultCard /> : <RegisterVaultCard />}</>;
}
export default VaultDoge;

