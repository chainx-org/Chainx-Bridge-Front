// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, u16, u8 } from "@polkadot/types";
import type { ChainId } from "./assetsHandler";
import type { BlockNumberFor } from "./xGatewayBitcoinV2";
import type {
  AccountId,
  AssetId,
  Balance,
  BalanceOf,
  BlockNumber,
  Moment,
  RuntimeDbWeight,
} from "@polkadot/types/interfaces/runtime";
import type { RuntimeVersion } from "@polkadot/types/interfaces/state";
import type { WeightToFeeCoefficient } from "@polkadot/types/interfaces/support";
import type {
  BlockLength,
  BlockWeights,
} from "@polkadot/types/interfaces/system";
import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/consts" {
  export interface AugmentedConsts<ApiType> {
    chainBridge: {
      bridgeAccountId: AccountId & AugmentedConst<ApiType>;
      chainIdentity: ChainId & AugmentedConst<ApiType>;
      proposalLifetime: BlockNumber & AugmentedConst<ApiType>;
    };
    xGatewayBitcoinBridge: {
      /**
       * Lower bound of vault's collateral.
       **/
      dustCollateral: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Duration from `ExchangeRate` last updated to expired.
       **/
      exchangeRateExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Duration from `IssueRequest` opened to expired.
       **/
      issueRequestExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Vault will be liquidated if his collateral ratio lower than this.
       *
       * See also [liquidating](#Liquidating)
       **/
      liquidationThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of btc that is accepted for redeem requests; any lower values would
       * risk the bitcoin client to reject the payment
       **/
      minimumRedeemValue: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Vault needs to pay additional fee to redeemer when his collateral ratio is below than
       * this.
       **/
      premiumThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * Duration from `RedeemRequest` opened to expired.
       **/
      redeemRequestExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Vault considered as secure when his collateral ratio is upper than this.
       **/
      secureThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * Target asset id in this chainx bridge instance.
       *
       * Each outer bitcoin-like chain has a corresponding instance. The field records the
       * `AssdtId` of that chain.
       **/
      targetAssetId: AssetId & AugmentedConst<ApiType>;
      /**
       * Shadow asset for target asset.
       *
       * Shadow asset is a read-only asset. It only indicates how many issuance was approved by owner.
       **/
      tokenAssetId: AssetId & AugmentedConst<ApiType>;
    };
    xGatewayDogecoinBridge: {
      /**
       * Lower bound of vault's collateral.
       **/
      dustCollateral: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Duration from `ExchangeRate` last updated to expired.
       **/
      exchangeRateExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Duration from `IssueRequest` opened to expired.
       **/
      issueRequestExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Vault will be liquidated if his collateral ratio lower than this.
       *
       * See also [liquidating](#Liquidating)
       **/
      liquidationThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of btc that is accepted for redeem requests; any lower values would
       * risk the bitcoin client to reject the payment
       **/
      minimumRedeemValue: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Vault needs to pay additional fee to redeemer when his collateral ratio is below than
       * this.
       **/
      premiumThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * Duration from `RedeemRequest` opened to expired.
       **/
      redeemRequestExpiredPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Vault considered as secure when his collateral ratio is upper than this.
       **/
      secureThreshold: u16 & AugmentedConst<ApiType>;
      /**
       * Target asset id in this chainx bridge instance.
       *
       * Each outer bitcoin-like chain has a corresponding instance. The field records the
       * `AssdtId` of that chain.
       **/
      targetAssetId: AssetId & AugmentedConst<ApiType>;
      /**
       * Shadow asset for target asset.
       *
       * Shadow asset is a read-only asset. It only indicates how many issuance was approved by owner.
       **/
      tokenAssetId: AssetId & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes>
    extends AugmentedConsts<ApiType> {}
}
