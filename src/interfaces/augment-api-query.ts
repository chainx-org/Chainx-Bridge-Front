// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type {
  BTreeMap,
  Bytes,
  Option,
  U8aFixed,
  Vec,
  bool,
  u32,
  u64,
} from "@polkadot/types";
import type { AnyNumber, ITuple, Observable } from "@polkadot/types/types";
import type {
  ChainId,
  DepositNonce,
  ProposalVotes,
  ResourceId,
} from "./assetsHandler";
import type {
  AddrStr,
  AssetInfo,
  AssetRestrictions,
  AssetType,
  BtcDepositCache,
  BtcHeader,
  BtcHeaderIndex,
  BtcHeaderInfo,
  BtcNetwork,
  BtcParams,
  BtcTxState,
  BtcTxVerifier,
  BtcWithdrawalProposal,
  Chain,
  WithdrawalRecordId,
  WithdrawalRecordOf,
  WithdrawalState,
} from "./chainx";
import type {
  BlockNumberFor,
  BtcAddress,
  IssueRequest,
  RedeemRequest,
  RequestId,
  Status,
  TradingPrice,
  Vault,
} from "./xGatewayBitcoinV2";
import type {
  AccountData,
  BalanceLock,
} from "@polkadot/types/interfaces/balances";
import type { Proposal } from "@polkadot/types/interfaces/democracy";
import type {
  AbridgedHostConfiguration,
  MessageQueueChain,
  MessagingStateSnapshot,
  ParaId,
  PersistedValidationData,
  RelayChainBlockNumber,
  UpwardMessage,
} from "@polkadot/types/interfaces/parachains";
import type {
  AccountId,
  AssetId,
  Balance,
  BalanceOf,
  BlockNumber,
  H256,
  Hash,
  Moment,
  OpaqueCall,
  Percent,
  Releases,
  Weight,
} from "@polkadot/types/interfaces/runtime";
import type {
  AccountInfo,
  ConsumedWeight,
  DigestOf,
  EventIndex,
  EventRecord,
  LastRuntimeUpgradeInfo,
  Phase,
} from "@polkadot/types/interfaces/system";
import type { Multiplier } from "@polkadot/types/interfaces/txpayment";
import type { Multisig } from "@polkadot/types/interfaces/utility";
import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/storage" {
  export interface AugmentedQueries<ApiType> {
    assetsHandler: {
      currencyIds: AugmentedQuery<
        ApiType,
        (arg: ResourceId | string | Uint8Array) => Observable<Option<AssetId>>,
        [ResourceId]
      >;
      resourceIds: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<Option<ResourceId>>,
        [AssetId]
      >;
    };
    chainBridge: {
      /**
       * All whitelisted chains and their respective transaction counts
       **/
      chainNonces: AugmentedQuery<
        ApiType,
        (
          arg: ChainId | AnyNumber | Uint8Array
        ) => Observable<Option<DepositNonce>>,
        [ChainId]
      >;
      /**
       * Number of relayers in set
       **/
      relayerCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Tracks current relayer set
       **/
      relayers: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<bool>,
        [AccountId]
      >;
      /**
       * Number of votes required for a proposal to execute
       **/
      relayerThreshold: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Utilized by the bridge software to map resource IDs to actual methods
       **/
      resources: AugmentedQuery<
        ApiType,
        (arg: ResourceId | string | Uint8Array) => Observable<Option<Bytes>>,
        [ResourceId]
      >;
      /**
       * All known proposals.
       * The key is the hash of the call and the deposit ID, to ensure it's unique.
       **/
      votes: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: ChainId | AnyNumber | Uint8Array,
          key2:
            | ITuple<[DepositNonce, Proposal]>
            | [
                DepositNonce | AnyNumber | Uint8Array,
                Proposal | { callIndex?: any; args?: any } | string | Uint8Array
              ]
        ) => Observable<Option<ProposalVotes>>,
        [ChainId, ITuple<[DepositNonce, Proposal]>]
      >;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<ParaId>, []>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<
        ApiType,
        () => Observable<u32>,
        []
      >;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<
        ApiType,
        () => Observable<Option<Hash>>,
        []
      >;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       *
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       *
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<
        ApiType,
        () => Observable<Option<AbridgedHostConfiguration>>,
        []
      >;
      /**
       * The last downward message queue chain head we have observed.
       *
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<
        ApiType,
        () => Observable<MessageQueueChain>,
        []
      >;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       *
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<
        ApiType,
        () => Observable<BTreeMap<ParaId, MessageQueueChain>>,
        []
      >;
      /**
       * The last relay parent block number at which we signalled the code upgrade.
       **/
      lastUpgrade: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * We need to store the new validation function for the span between
       * setting it and applying it. If it has a
       * value, then [`PendingValidationFunction`] must have a real value, and
       * together will coordinate the block number where the upgrade will happen.
       **/
      pendingRelayChainBlockNumber: AugmentedQuery<
        ApiType,
        () => Observable<Option<RelayChainBlockNumber>>,
        []
      >;
      pendingUpwardMessages: AugmentedQuery<
        ApiType,
        () => Observable<Vec<UpwardMessage>>,
        []
      >;
      /**
       * The new validation function we will upgrade to when the relay chain
       * reaches [`PendingRelayChainBlockNumber`]. A real validation function must
       * exist here as long as [`PendingRelayChainBlockNumber`] is set.
       **/
      pendingValidationFunction: AugmentedQuery<
        ApiType,
        () => Observable<Bytes>,
        []
      >;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       *
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       *
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<
        ApiType,
        () => Observable<Option<MessagingStateSnapshot>>,
        []
      >;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<
        ApiType,
        () => Observable<Option<Weight>>,
        []
      >;
      /**
       * The [`PersistedValidationData`] set for this block.
       **/
      validationData: AugmentedQuery<
        ApiType,
        () => Observable<Option<PersistedValidationData>>,
        []
      >;
    };
    swap: {
      /**
       * ((AssetId, AssetId), AccountId) -> BalanceOf<T>
       **/
      swapLedger: AugmentedQuery<
        ApiType,
        (
          arg:
            | ITuple<[ITuple<[AssetId, AssetId]>, AccountId]>
            | [
                (
                  | ITuple<[AssetId, AssetId]>
                  | [
                      AssetId | AnyNumber | Uint8Array,
                      AssetId | AnyNumber | Uint8Array
                    ]
                ),
                AccountId | string | Uint8Array
              ]
        ) => Observable<BalanceOf>,
        [ITuple<[ITuple<[AssetId, AssetId]>, AccountId]>]
      >;
      /**
       * TWOX-NOTE: `AssetId` is trusted, so this is safe.
       * (AssetId, AssetId) -> (PairAccountId, TotalSupply)
       **/
      swapMetadata: AugmentedQuery<
        ApiType,
        (
          arg:
            | ITuple<[AssetId, AssetId]>
            | [
                AssetId | AnyNumber | Uint8Array,
                AssetId | AnyNumber | Uint8Array
              ]
        ) => Observable<Option<ITuple<[AccountId, BalanceOf]>>>,
        [ITuple<[AssetId, AssetId]>]
      >;
    };
    xAssets: {
      /**
       * asset balance for user&asset_id, use btree_map to accept different asset type
       **/
      assetBalance: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: AssetId | AnyNumber | Uint8Array
        ) => Observable<BTreeMap<AssetType, BalanceOf>>,
        [AccountId, AssetId]
      >;
      /**
       * asset extend limit properties, set asset "can do", example, `CanTransfer`, `CanDestroyWithdrawal`
       * notice if not set AssetRestriction, default is true for this limit
       * if want let limit make sense, must set false for the limit
       **/
      assetRestrictionsOf: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<AssetRestrictions>,
        [AssetId]
      >;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQueryDoubleMap<
        ApiType,
        (
          key1: AccountId | string | Uint8Array,
          key2: AssetId | AnyNumber | Uint8Array
        ) => Observable<Vec<BalanceLock>>,
        [AccountId, AssetId]
      >;
      /**
       * asset balance for an asset_id, use btree_map to accept different asset type
       **/
      totalAssetBalance: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<BTreeMap<AssetType, BalanceOf>>,
        [AssetId]
      >;
    };
    xAssetsRegistrar: {
      /**
       * Asset id list for each Chain.
       **/
      assetIdsOf: AugmentedQuery<
        ApiType,
        (
          arg:
            | Chain
            | "ChainX"
            | "Bitcoin"
            | "Ethereum"
            | "Polkadot"
            | number
            | Uint8Array
        ) => Observable<Vec<AssetId>>,
        [Chain]
      >;
      /**
       * Asset info of each asset.
       **/
      assetInfoOf: AugmentedQuery<
        ApiType,
        (
          arg: AssetId | AnyNumber | Uint8Array
        ) => Observable<Option<AssetInfo>>,
        [AssetId]
      >;
      /**
       * The map of asset to the online state.
       **/
      assetOnline: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<bool>,
        [AssetId]
      >;
      /**
       * The map of asset to the block number at which the asset was registered.
       **/
      registeredAt: AugmentedQuery<
        ApiType,
        (arg: AssetId | AnyNumber | Uint8Array) => Observable<BlockNumber>,
        [AssetId]
      >;
    };
    xGatewayBitcoin: {
      /**
       * best header info
       **/
      bestIndex: AugmentedQuery<ApiType, () => Observable<BtcHeaderIndex>, []>;
      /**
       * block hash list for a height, include forked header hash
       **/
      blockHashFor: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<H256>>,
        [u32]
      >;
      /**
       * min deposit value limit, default is 10w sotashi(0.001 BTC)
       **/
      btcMinDeposit: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * get BtcWithdrawalFee from genesis_config
       **/
      btcWithdrawalFee: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * get ConfirmationNumber from genesis_config
       **/
      confirmationNumber: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * confirmed header info
       **/
      confirmedIndex: AugmentedQuery<
        ApiType,
        () => Observable<Option<BtcHeaderIndex>>,
        []
      >;
      /**
       * get GenesisInfo (header, height)
       **/
      genesisInfo: AugmentedQuery<
        ApiType,
        () => Observable<ITuple<[BtcHeader, u32]>>,
        []
      >;
      /**
       * all valid blockheader (include forked blockheader)
       **/
      headers: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<BtcHeaderInfo>>,
        [H256]
      >;
      /**
       * mark this blockhash is in mainchain
       **/
      mainChain: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<bool>,
        [H256]
      >;
      /**
       * max withdraw account count in bitcoin withdrawal transaction
       **/
      maxWithdrawalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * NetworkId for testnet or mainnet
       **/
      networkId: AugmentedQuery<ApiType, () => Observable<BtcNetwork>, []>;
      /**
       * get ParamsInfo from genesis_config
       **/
      paramsInfo: AugmentedQuery<ApiType, () => Observable<BtcParams>, []>;
      /**
       * unclaimed deposit info, addr => tx_hash, btc value,
       **/
      pendingDeposits: AugmentedQuery<
        ApiType,
        (arg: BtcAddress | string) => Observable<Vec<BtcDepositCache>>,
        [BtcAddress]
      >;
      /**
       * mark tx has been handled, in case re-handle this tx, and log handle result
       **/
      txState: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<BtcTxState>>,
        [H256]
      >;
      verifier: AugmentedQuery<ApiType, () => Observable<BtcTxVerifier>, []>;
      /**
       * withdrawal tx outs for account, tx_hash => outs ( out index => withdrawal account )
       **/
      withdrawalProposal: AugmentedQuery<
        ApiType,
        () => Observable<Option<BtcWithdrawalProposal>>,
        []
      >;
    };
    xGatewayBitcoinBridge: {
      bridgeStatus: AugmentedQuery<ApiType, () => Observable<Status>, []>;
      /**
       * Collateral for each vault.
       **/
      collaterals: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>,
        [AccountId]
      >;
      /**
       * Exchange rate from pcx to btc.
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<TradingPrice>, []>;
      exchangeRateUpdateTime: AugmentedQuery<
        ApiType,
        () => Observable<BlockNumberFor>,
        []
      >;
      /**
       * Percentage to lock, when user requests issue
       **/
      issueGriefingFee: AugmentedQuery<ApiType, () => Observable<Percent>, []>;
      /**
       * Auto-increament id to identify each issue request.
       * Also presents total amount of created requests.
       **/
      issueRequestCount: AugmentedQuery<
        ApiType,
        () => Observable<RequestId>,
        []
      >;
      /**
       * Mapping from issue id to `IssueRequest`
       **/
      issueRequests: AugmentedQuery<
        ApiType,
        (
          arg: RequestId | AnyNumber | Uint8Array
        ) => Observable<Option<IssueRequest>>,
        [RequestId]
      >;
      oracleAccounts: AugmentedQuery<
        ApiType,
        () => Observable<Vec<AccountId>>,
        []
      >;
      /**
       * Mapping out chain address to vault id.
       **/
      outerAddresses: AugmentedQuery<
        ApiType,
        (arg: AddrStr | string) => Observable<Option<AccountId>>,
        [AddrStr]
      >;
      /**
       * Slashed when excuting redeem if vault's collateral is below than `PremiumThreshold`
       **/
      premiumFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Redeem fee when use request redeem
       **/
      redeemFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Auto-increament id to identify each redeem request.
       * Also presents total amount of created requests.
       **/
      redeemRequestCount: AugmentedQuery<
        ApiType,
        () => Observable<RequestId>,
        []
      >;
      /**
       * Mapping from redeem id to `RedeemRequest`
       **/
      redeemRequests: AugmentedQuery<
        ApiType,
        (
          arg: RequestId | AnyNumber | Uint8Array
        ) => Observable<Option<RedeemRequest>>,
        [RequestId]
      >;
      /**
       * Mapping account to vault struct.
       **/
      vaults: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<Option<Vault>>,
        [AccountId]
      >;
    };
    xGatewayDogecoin: {
      /**
       * best header info
       **/
      bestIndex: AugmentedQuery<ApiType, () => Observable<BtcHeaderIndex>, []>;
      /**
       * block hash list for a height, include forked header hash
       **/
      blockHashFor: AugmentedQuery<
        ApiType,
        (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<H256>>,
        [u32]
      >;
      /**
       * min deposit value limit, default is 10w sotashi(0.001 BTC)
       **/
      btcMinDeposit: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * get BtcWithdrawalFee from genesis_config
       **/
      btcWithdrawalFee: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * get ConfirmationNumber from genesis_config
       **/
      confirmationNumber: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * confirmed header info
       **/
      confirmedIndex: AugmentedQuery<
        ApiType,
        () => Observable<Option<BtcHeaderIndex>>,
        []
      >;
      /**
       * get GenesisInfo (header, height)
       **/
      genesisInfo: AugmentedQuery<
        ApiType,
        () => Observable<ITuple<[BtcHeader, u32]>>,
        []
      >;
      /**
       * all valid blockheader (include forked blockheader)
       **/
      headers: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<BtcHeaderInfo>>,
        [H256]
      >;
      /**
       * mark this blockhash is in mainchain
       **/
      mainChain: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<bool>,
        [H256]
      >;
      /**
       * max withdraw account count in bitcoin withdrawal transaction
       **/
      maxWithdrawalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * NetworkId for testnet or mainnet
       **/
      networkId: AugmentedQuery<ApiType, () => Observable<BtcNetwork>, []>;
      /**
       * get ParamsInfo from genesis_config
       **/
      paramsInfo: AugmentedQuery<ApiType, () => Observable<BtcParams>, []>;
      /**
       * unclaimed deposit info, addr => tx_hash, btc value,
       **/
      pendingDeposits: AugmentedQuery<
        ApiType,
        (arg: BtcAddress | string) => Observable<Vec<BtcDepositCache>>,
        [BtcAddress]
      >;
      /**
       * mark tx has been handled, in case re-handle this tx, and log handle result
       **/
      txState: AugmentedQuery<
        ApiType,
        (arg: H256 | string | Uint8Array) => Observable<Option<BtcTxState>>,
        [H256]
      >;
      verifier: AugmentedQuery<ApiType, () => Observable<BtcTxVerifier>, []>;
      /**
       * withdrawal tx outs for account, tx_hash => outs ( out index => withdrawal account )
       **/
      withdrawalProposal: AugmentedQuery<
        ApiType,
        () => Observable<Option<BtcWithdrawalProposal>>,
        []
      >;
    };
    xGatewayDogecoinBridge: {
      bridgeStatus: AugmentedQuery<ApiType, () => Observable<Status>, []>;
      /**
       * Collateral for each vault.
       **/
      collaterals: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>,
        [AccountId]
      >;
      /**
       * Exchange rate from pcx to btc.
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<TradingPrice>, []>;
      exchangeRateUpdateTime: AugmentedQuery<
        ApiType,
        () => Observable<BlockNumberFor>,
        []
      >;
      /**
       * Percentage to lock, when user requests issue
       **/
      issueGriefingFee: AugmentedQuery<ApiType, () => Observable<Percent>, []>;
      /**
       * Auto-increament id to identify each issue request.
       * Also presents total amount of created requests.
       **/
      issueRequestCount: AugmentedQuery<
        ApiType,
        () => Observable<RequestId>,
        []
      >;
      /**
       * Mapping from issue id to `IssueRequest`
       **/
      issueRequests: AugmentedQuery<
        ApiType,
        (
          arg: RequestId | AnyNumber | Uint8Array
        ) => Observable<Option<IssueRequest>>,
        [RequestId]
      >;
      oracleAccounts: AugmentedQuery<
        ApiType,
        () => Observable<Vec<AccountId>>,
        []
      >;
      /**
       * Mapping out chain address to vault id.
       **/
      outerAddresses: AugmentedQuery<
        ApiType,
        (arg: AddrStr | string) => Observable<Option<AccountId>>,
        [AddrStr]
      >;
      /**
       * Slashed when excuting redeem if vault's collateral is below than `PremiumThreshold`
       **/
      premiumFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Redeem fee when use request redeem
       **/
      redeemFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Auto-increament id to identify each redeem request.
       * Also presents total amount of created requests.
       **/
      redeemRequestCount: AugmentedQuery<
        ApiType,
        () => Observable<RequestId>,
        []
      >;
      /**
       * Mapping from redeem id to `RedeemRequest`
       **/
      redeemRequests: AugmentedQuery<
        ApiType,
        (
          arg: RequestId | AnyNumber | Uint8Array
        ) => Observable<Option<RedeemRequest>>,
        [RequestId]
      >;
      /**
       * Mapping account to vault struct.
       **/
      vaults: AugmentedQuery<
        ApiType,
        (arg: AccountId | string | Uint8Array) => Observable<Option<Vault>>,
        [AccountId]
      >;
    };
    xGatewayRecord: {
      /**
       * The id of next withdrawal record.
       **/
      nextWithdrawalRecordId: AugmentedQuery<
        ApiType,
        () => Observable<WithdrawalRecordId>,
        []
      >;
      /**
       * Withdraw applications collection, use serial numbers to mark them.
       **/
      pendingWithdrawals: AugmentedQuery<
        ApiType,
        (
          arg: WithdrawalRecordId | AnyNumber | Uint8Array
        ) => Observable<Option<WithdrawalRecordOf>>,
        [WithdrawalRecordId]
      >;
      /**
       * The state of withdraw record corresponding to an id.
       **/
      withdrawalStateOf: AugmentedQuery<
        ApiType,
        (
          arg: WithdrawalRecordId | AnyNumber | Uint8Array
        ) => Observable<Option<WithdrawalState>>,
        [WithdrawalRecordId]
      >;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes>
    extends AugmentedQueries<ApiType> {}
}
