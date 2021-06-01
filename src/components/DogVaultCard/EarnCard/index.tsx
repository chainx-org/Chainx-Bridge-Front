import React, { useContext, useEffect, useState } from "react";
import { EarnCardStyle, EarnCardTopStyle } from "./style";
import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import useAccountModel from "../../../hooks/useAccountModel";
import { Balance, BlockNumber } from "@polkadot/types/interfaces";
import { BtcAddress } from "../../../interfaces";
import { useApi } from "../../../hooks/useApi";
import { BalanceSpan } from "../../BalanceSpan";
import { useFeeContext, FeeContext } from "../../../hooks/useFeeContext";
import { useAccountInfo } from "../../../hooks/useAccountInfo";
// import FormatBalance from "../../../hooks/useFormatBalance";
// import { web3FromAddress } from "@polkadot/extension-dapp";
import EarnModal from "../EarnModal";
import { AddCollateralModalStyle } from "../EarnModal/style";

interface VaultModel {
  address: string;
  issuedToken: number;
  collateral: Balance;
  toBeIssuedTokens: Balance,
  toBeRedeemedTokens: Balance,
  wallet: BtcAddress,
  bannedUntil: BlockNumber,
}

function EarnCard(): React.ReactElement {
  const value = useContext(FeeContext);
  const dogePCXprice = value.dogePCXprice;
  const { t } = useTranslation();
  const [AddCollateralModal, SetAddCollateralModal] = useState(false);
  const [isShowEmail, setIsShowEmail] = useState(false);
  const [editEmail, setEditEmail] = useState("");
  const [vault, setVault] = useState<VaultModel | null>(null);
  const [upperBound, setUpperBound] = useState("-");
  const [secureThreshold, SetsecureThreshold] = useState(0);
  const { exchangeRate } = useFeeContext();
  const [addPCX, setaddPCX] = useState(0);
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();

  const accountInfo = useAccountInfo(currentAccount?.address!!);

  const EditEmailAddress = () => {
    setIsShowEmail(false);
  };

  useEffect(() => {
    if (isApiReady && currentAccount) {
      (async () => {
        const vault = await api.query.xGatewayDogecoinBridge.vaults(
          currentAccount.address
        );
        if (vault.isSome) {
          let vaultInfo = vault.unwrap();
          let collateral = await api.query.system.account(
            currentAccount.address
          );
          const assetId = api.consts.xGatewayDogecoinBridge.tokenAssetId;
          const balance = await api.query.xAssets.assetBalance(currentAccount.address, assetId);
          setVault({
            address: currentAccount.address,
            issuedToken: ((balance.toJSON()["Usable"] as number) || 0),
            collateral: collateral.data.reserved,
            toBeIssuedTokens: vaultInfo.toBeIssuedTokens,
            toBeRedeemedTokens: vaultInfo.toBeRedeemedTokens,
            wallet: vaultInfo.wallet,
            bannedUntil: vaultInfo.bannedUntil,
          });
        }
      })();
    }
  }, [currentAccount, isApiReady]);

  // useEffect(() => {
  //   if (vault) {
  //     const pcxInBtc = exchangeRate.price
  //       .mul(vault.collateral)
  //       .divn(Math.pow(10, exchangeRate.decimal.toNumber()));
  //     setUpperBound(pcxInBtc.toNumber().toFixed(2));
  //   } else {
  //     setUpperBound("-");
  //   }
  // }, [vault, exchangeRate]);

  useEffect(() => {
    if (isApiReady) {
      const secureThreshold = api.consts.xGatewayDogecoinBridge.secureThreshold;
      SetsecureThreshold(secureThreshold.toNumber() / 100);
    }
  }, [isApiReady]);

  return (
    <EarnCardStyle>
      <EarnCardTopStyle>
        <div className="earnItem">
          <div className={"earn-card-title"}>累计收益</div>
          <div className={"earn-pcx-num"}>- PCX</div>
        </div>
        <div className="earnItem">
          <div className={"earn-card-title"}>可发行量</div>
          <div className={"issuable-num"}>
            {(
              ((+vault?.collateral!! / 100000000) * dogePCXprice) / secureThreshold
            ).toFixed(5)}{" "}
            DOG
          </div>
        </div>
        <div className="earnItem">
          <div className={"earn-card-title"}>累计发行 / 赎回</div>
          <div className={"issue-redeem-num"}>
            <BalanceSpan balance={vault?.issuedToken} /> XDOG /{" "}
            <BalanceSpan balance={vault?.toBeRedeemedTokens} /> 缺值 DOG
          </div>
        </div>
        <div className="earnItem">
          <div className={"earn-card-title"}>抵押品 / 抵押率</div>
          <div className={"collateral-rate"}>
            <div>
              <BalanceSpan balance={vault?.collateral} /> PCX /
            </div>
            <div className={"collateral-rate-num"}>
              {isFinite(
                +vault?.collateral!! /
                100000000 /
                +(vault?.issuedToken!! / 1000000000 / dogePCXprice)
              )
                ? (
                  +vault?.collateral!! /
                  100000000 /
                  +(vault?.issuedToken!! / 1000000000 / dogePCXprice)
                ).toFixed(2)
                : "-"}{" "}
              %
            </div>
          </div>
        </div>
        <div className="earnItem">
          <div className={"earn-card-title"}>Chainx 地址</div>
          <div className={"chainx-address"}>{currentAccount?.address}</div>
        </div>
        <div className="earnItem">
          <div className={"earn-card-title"}>邮箱</div>
          <div
            className={"email-edit"}
            onClick={() => setIsShowEmail(!isShowEmail)}
          >
            {editEmail} 编辑
          </div>
        </div>
      </EarnCardTopStyle>
      <div className="line" />
      <div className="action">
        <Button onClick={() => SetAddCollateralModal(true)}>
          {t("adding collateral")}
        </Button>
      </div>
      <EarnModal
        SetAddCollateralModal={SetAddCollateralModal}
        AddCollateralModal={AddCollateralModal}
      />
      <AddCollateralModalStyle
        title={"编辑提醒邮箱"}
        visible={isShowEmail}
        onCancel={() => setIsShowEmail(false)}
        footer={[
          <Button onClick={() => setIsShowEmail(false)}>取消</Button>,
          <Button onClick={EditEmailAddress}>确认</Button>,
        ]}
      >
        <div className="email">
          <Input
            value={editEmail}
            placeholder="输入邮箱地址"
            onChange={(e) => {
              setEditEmail(e.target.value);
            }}
          />
        </div>
      </AddCollateralModalStyle>
    </EarnCardStyle>
  );
}

export default EarnCard;