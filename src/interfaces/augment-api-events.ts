// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, U256, Vec, bool, u32 } from "@polkadot/types";
import type { ChainId, DepositNonce, ResourceId } from "./assetsHandler";
import type {
  AssetType,
  BtcTxState,
  WithdrawalRecord,
  WithdrawalRecordId,
  WithdrawalState,
} from "./chainx";
import type { BtcAddress, RequestId, TradingPrice } from "./xGatewayBitcoinV2";
import type { BalanceStatus } from "@polkadot/types/interfaces/balances";
import type { RelayChainBlockNumber } from "@polkadot/types/interfaces/parachains";
import type {
  AccountId,
  AssetId,
  Balance,
  BalanceOf,
  BlockNumber,
  CallHash,
  H256,
  Hash,
  Percent,
} from "@polkadot/types/interfaces/runtime";
import type {
  DispatchError,
  DispatchInfo,
  DispatchResult,
} from "@polkadot/types/interfaces/system";
import type { Timepoint } from "@polkadot/types/interfaces/utility";
import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/events" {
  export interface AugmentedEvents<ApiType> {
    assetsHandler: {
      RegisterResourceId: AugmentedEvent<ApiType, [ResourceId, AssetId]>;
      UnregisterResourceId: AugmentedEvent<ApiType, [ResourceId, AssetId]>;
    };
    chainBridge: {
      /**
       * Chain now available for transfers (chain_id)
       **/
      ChainWhitelisted: AugmentedEvent<ApiType, [ChainId]>;
      /**
       * FunglibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient, metadata)
       **/
      FungibleTransfer: AugmentedEvent<
        ApiType,
        [ChainId, DepositNonce, ResourceId, U256, Bytes]
      >;
      /**
       * GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
       **/
      GenericTransfer: AugmentedEvent<
        ApiType,
        [ChainId, DepositNonce, ResourceId, Bytes]
      >;
      /**
       * NonFungibleTransfer is for relaying NFTS (dest_id, nonce, resource_id, token_id, recipient, metadata)
       **/
      NonFungibleTransfer: AugmentedEvent<
        ApiType,
        [ChainId, DepositNonce, ResourceId, Bytes, Bytes, Bytes]
      >;
      /**
       * Voting successful for a proposal
       **/
      ProposalApproved: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Execution of call failed
       **/
      ProposalFailed: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Voting rejected a proposal
       **/
      ProposalRejected: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Execution of call succeeded
       **/
      ProposalSucceeded: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Relayer added to set
       **/
      RelayerAdded: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Relayer removed from set
       **/
      RelayerRemoved: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Vote threshold has changed (new_threshold)
       **/
      RelayerThresholdChanged: AugmentedEvent<ApiType, [u32]>;
      /**
       * Vot submitted against proposal
       **/
      VoteAgainst: AugmentedEvent<ApiType, [ChainId, DepositNonce, AccountId]>;
      /**
       * Vote submitted in favour of proposal
       **/
      VoteFor: AugmentedEvent<ApiType, [ChainId, DepositNonce, AccountId]>;
    };
    parachainSystem: {
      UpgradeAuthorized: AugmentedEvent<ApiType, [Hash]>;
      ValidationFunctionApplied: AugmentedEvent<
        ApiType,
        [RelayChainBlockNumber]
      >;
      ValidationFunctionStored: AugmentedEvent<
        ApiType,
        [RelayChainBlockNumber]
      >;
    };
    swap: {
      /**
       * Add liquidity. \[owner, asset_id, asset_id\]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId, AssetId, AssetId]>;
      /**
       * Remove liquidity. \[owner, recipient, asset_id, asset_id, amount\]
       **/
      LiquidityRemoved: AugmentedEvent<
        ApiType,
        [AccountId, AccountId, AssetId, AssetId, BalanceOf]
      >;
      /**
       * Create a trading pair. \[creator, asset_id, asset_id\]
       **/
      PairCreated: AugmentedEvent<ApiType, [AccountId, AssetId, AssetId]>;
      /**
       * Transact in trading \[owner, recipient, swap_path\]
       **/
      TokenSwap: AugmentedEvent<ApiType, [AccountId, AccountId, Vec<AssetId>]>;
    };
    xAssets: {
      /**
       * Set asset balance of an account by root. [asset_id, who, asset_type, amount]
       **/
      BalanceSet: AugmentedEvent<
        ApiType,
        [AssetId, AccountId, AssetType, Balance]
      >;
      /**
       * Some balances of an asset were destoryed. [asset_id, who, amount]
       **/
      Destroyed: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * New balances of an asset were issued. [asset_id, receiver, amount]
       **/
      Issued: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * Some balances of an asset was moved from one to another. [asset_id, from, from_type, to, to_type, amount]
       **/
      Moved: AugmentedEvent<
        ApiType,
        [AssetId, AccountId, AssetType, AccountId, AssetType, Balance]
      >;
    };
    xAssetsRegistrar: {
      /**
       * An asset was deregistered. [asset_id]
       **/
      Deregistered: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * A deregistered asset was recovered. [asset_id, has_mining_rights]
       **/
      Recovered: AugmentedEvent<ApiType, [AssetId, bool]>;
      /**
       * A new asset was registered. [asset_id, has_mining_rights]
       **/
      Registered: AugmentedEvent<ApiType, [AssetId, bool]>;
    };
    xGatewayBitcoin: {
      /**
       * An account deposited some token. [tx_hash, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [H256, AccountId, Balance]>;
      /**
       * A Bitcoin header was validated and inserted. [btc_header_hash]
       **/
      HeaderInserted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A unclaimed deposit record was removed. [depositor, deposit_amount, tx_hash, btc_address]
       **/
      PendingDepositRemoved: AugmentedEvent<
        ApiType,
        [AccountId, Balance, H256, BtcAddress]
      >;
      /**
       * A Bitcoin transaction was processed. [tx_hash, block_hash, tx_state]
       **/
      TxProcessed: AugmentedEvent<ApiType, [H256, H256, BtcTxState]>;
      /**
       * A new record of unclaimed deposit. [tx_hash, btc_address]
       **/
      UnclaimedDeposit: AugmentedEvent<ApiType, [H256, BtcAddress]>;
      /**
       * A fatal error happened during the withdrwal process. [tx_hash, proposal_hash]
       **/
      WithdrawalFatalErr: AugmentedEvent<ApiType, [H256, H256]>;
      /**
       * The proposal has been processed successfully and is waiting for broadcasting. [tx_hash]
       **/
      WithdrawalProposalCompleted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A new withdrawal proposal was created. [proposer, withdrawal_ids]
       **/
      WithdrawalProposalCreated: AugmentedEvent<ApiType, [AccountId, Vec<u32>]>;
      /**
       * A withdrawal proposal was dropped. [reject_count, total_count, withdrawal_ids]
       **/
      WithdrawalProposalDropped: AugmentedEvent<ApiType, [u32, u32, Vec<u32>]>;
      /**
       * A trustee voted/vetoed a withdrawal proposal. [trustee, vote_status]
       **/
      WithdrawalProposalVoted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * A list of withdrawal applications were processed successfully. [tx_hash, withdrawal_ids, total_withdrawn]
       **/
      Withdrawn: AugmentedEvent<ApiType, [H256, Vec<u32>, Balance]>;
    };
    xGatewayBitcoinBridge: {
      /**
       * The collateral was released to the user successfully. [who, amount]
       **/
      BridgeCollateralReleased: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Vault released collateral.
       **/
      CollateralReleased: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Collateral was slashed. [from, to, amount]
       **/
      CollateralSlashed: AugmentedEvent<
        ApiType,
        [AccountId, AccountId, Balance]
      >;
      /**
       * Update `ExchangeRateExpiredPeriod`
       **/
      ExchangeRateExpiredPeriodForceUpdated: AugmentedEvent<
        ApiType,
        [BlockNumber]
      >;
      /**
       * Update exchange rate by root
       **/
      ExchangeRateForceUpdated: AugmentedEvent<ApiType, [TradingPrice]>;
      /**
       * Update exchange rate by oracle
       **/
      ExchangeRateUpdated: AugmentedEvent<ApiType, [AccountId, TradingPrice]>;
      /**
       * Extra collateral was added to a vault.
       **/
      ExtraCollateralAdded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Root updated `IssueGriefingFee`.
       **/
      GriefingFeeUpdated: AugmentedEvent<ApiType, [Percent]>;
      /**
       * `IssueRequest` cancelled.`
       **/
      IssueRequestCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * `IssueRequest` excuted.
       **/
      IssueRequestExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * An issue request was submitted and waiting user to excute.
       **/
      NewIssueRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Redeem request is accepted
       **/
      NewRedeemRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Update oracles by root
       **/
      OracleForceUpdated: AugmentedEvent<ApiType, [Vec<AccountId>]>;
      /**
       * Cancel redeem is accepted
       **/
      RedeemCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Execute redeem is accepted
       **/
      RedeemExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * New vault has been registered.
       **/
      VaultRegistered: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xGatewayDogecoin: {
      /**
       * An account deposited some token. [tx_hash, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [H256, AccountId, Balance]>;
      /**
       * A Bitcoin header was validated and inserted. [btc_header_hash]
       **/
      HeaderInserted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A unclaimed deposit record was removed. [depositor, deposit_amount, tx_hash, btc_address]
       **/
      PendingDepositRemoved: AugmentedEvent<
        ApiType,
        [AccountId, Balance, H256, BtcAddress]
      >;
      /**
       * A Bitcoin transaction was processed. [tx_hash, block_hash, tx_state]
       **/
      TxProcessed: AugmentedEvent<ApiType, [H256, H256, BtcTxState]>;
      /**
       * A new record of unclaimed deposit. [tx_hash, btc_address]
       **/
      UnclaimedDeposit: AugmentedEvent<ApiType, [H256, BtcAddress]>;
      /**
       * A fatal error happened during the withdrwal process. [tx_hash, proposal_hash]
       **/
      WithdrawalFatalErr: AugmentedEvent<ApiType, [H256, H256]>;
      /**
       * The proposal has been processed successfully and is waiting for broadcasting. [tx_hash]
       **/
      WithdrawalProposalCompleted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A new withdrawal proposal was created. [proposer, withdrawal_ids]
       **/
      WithdrawalProposalCreated: AugmentedEvent<ApiType, [AccountId, Vec<u32>]>;
      /**
       * A withdrawal proposal was dropped. [reject_count, total_count, withdrawal_ids]
       **/
      WithdrawalProposalDropped: AugmentedEvent<ApiType, [u32, u32, Vec<u32>]>;
      /**
       * A trustee voted/vetoed a withdrawal proposal. [trustee, vote_status]
       **/
      WithdrawalProposalVoted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * A list of withdrawal applications were processed successfully. [tx_hash, withdrawal_ids, total_withdrawn]
       **/
      Withdrawn: AugmentedEvent<ApiType, [H256, Vec<u32>, Balance]>;
    };
    xGatewayDogecoinBridge: {
      /**
       * The collateral was released to the user successfully. [who, amount]
       **/
      BridgeCollateralReleased: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Vault released collateral.
       **/
      CollateralReleased: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Collateral was slashed. [from, to, amount]
       **/
      CollateralSlashed: AugmentedEvent<
        ApiType,
        [AccountId, AccountId, Balance]
      >;
      /**
       * Update `ExchangeRateExpiredPeriod`
       **/
      ExchangeRateExpiredPeriodForceUpdated: AugmentedEvent<
        ApiType,
        [BlockNumber]
      >;
      /**
       * Update exchange rate by root
       **/
      ExchangeRateForceUpdated: AugmentedEvent<ApiType, [TradingPrice]>;
      /**
       * Update exchange rate by oracle
       **/
      ExchangeRateUpdated: AugmentedEvent<ApiType, [AccountId, TradingPrice]>;
      /**
       * Extra collateral was added to a vault.
       **/
      ExtraCollateralAdded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Root updated `IssueGriefingFee`.
       **/
      GriefingFeeUpdated: AugmentedEvent<ApiType, [Percent]>;
      /**
       * `IssueRequest` cancelled.`
       **/
      IssueRequestCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * `IssueRequest` excuted.
       **/
      IssueRequestExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * An issue request was submitted and waiting user to excute.
       **/
      NewIssueRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Redeem request is accepted
       **/
      NewRedeemRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Update oracles by root
       **/
      OracleForceUpdated: AugmentedEvent<ApiType, [Vec<AccountId>]>;
      /**
       * Cancel redeem is accepted
       **/
      RedeemCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Execute redeem is accepted
       **/
      RedeemExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * New vault has been registered.
       **/
      VaultRegistered: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xGatewayRecord: {
      /**
       * An account deposited some asset. [who, asset_id, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [AccountId, AssetId, Balance]>;
      /**
       * A withdrawal proposal was canceled. [withdrawal_id, withdrawal_state]
       **/
      WithdrawalCanceled: AugmentedEvent<
        ApiType,
        [WithdrawalRecordId, WithdrawalState]
      >;
      /**
       * A withdrawal application was created. [withdrawal_id, record_info]
       **/
      WithdrawalCreated: AugmentedEvent<
        ApiType,
        [WithdrawalRecordId, WithdrawalRecord]
      >;
      /**
       * A withdrawal proposal was finished successfully. [withdrawal_id, withdrawal_state]
       **/
      WithdrawalFinished: AugmentedEvent<
        ApiType,
        [WithdrawalRecordId, WithdrawalState]
      >;
      /**
       * A withdrawal proposal was processed. [withdrawal_id]
       **/
      WithdrawalProcessed: AugmentedEvent<ApiType, [WithdrawalRecordId]>;
      /**
       * A withdrawal proposal was recovered. [withdrawal_id]
       **/
      WithdrawalRecovered: AugmentedEvent<ApiType, [WithdrawalRecordId]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes>
    extends AugmentedEvents<ApiType> {}
}
