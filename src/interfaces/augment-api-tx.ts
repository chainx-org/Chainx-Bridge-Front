// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type {
  BTreeMap,
  Bytes,
  Compact,
  Option,
  U8aFixed,
  Vec,
  bool,
  u16,
  u32,
  u64,
} from "@polkadot/types";
import type { AnyNumber, ITuple } from "@polkadot/types/types";
import type { ChainId, DepositNonce, ResourceId } from "./assetsHandler";
import type {
  AddrStr,
  AssetInfo,
  AssetRestrictions,
  AssetType,
  BtcHeaderIndex,
  BtcRelayedTxInfo,
  Desc,
  Memo,
  Token,
  WithdrawalRecordId,
  WithdrawalState,
} from "./chainx";
import type { BtcAddress, RequestId, TradingPrice } from "./xGatewayBitcoinV2";
import type { Proposal } from "@polkadot/types/interfaces/democracy";
import type { Extrinsic } from "@polkadot/types/interfaces/extrinsics";
import type {
  ParachainInherentData,
  RelayChainBlockNumber,
  UpwardMessage,
} from "@polkadot/types/interfaces/parachains";
import type {
  AccountId,
  AssetId,
  Balance,
  BalanceOf,
  BlockNumber,
  Call,
  ChangesTrieConfiguration,
  Hash,
  KeyValue,
  LookupSource,
  Moment,
  OpaqueCall,
  Perbill,
  Percent,
  Weight,
} from "@polkadot/types/interfaces/runtime";
import type { Key } from "@polkadot/types/interfaces/system";
import type { Timepoint } from "@polkadot/types/interfaces/utility";
import type { ApiTypes, SubmittableExtrinsic } from "@polkadot/api/types";

declare module "@polkadot/api/types/submittable" {
  export interface AugmentedSubmittables<ApiType> {
    assetsHandler: {
      deposit: AugmentedSubmittable<
        (
          to:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: Compact<BalanceOf> | AnyNumber | Uint8Array,
          resourceId: ResourceId | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<BalanceOf>, ResourceId]
      >;
      redeem: AugmentedSubmittable<
        (
          currencyId: Compact<AssetId> | AnyNumber | Uint8Array,
          destChainId: ChainId | AnyNumber | Uint8Array,
          recipient: Bytes | string | Uint8Array,
          amount: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, ChainId, Bytes, Compact<BalanceOf>]
      >;
      registerResourceId: AugmentedSubmittable<
        (
          resourceId: ResourceId | string | Uint8Array,
          currencyId: Compact<AssetId> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [ResourceId, Compact<AssetId>]
      >;
      removeResourceId: AugmentedSubmittable<
        (
          resourceId: ResourceId | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [ResourceId]
      >;
    };
    chainBridge: {
      /**
       * Commits a vote in favour of the provided proposal.
       *
       * If a proposal with the given nonce and source chain ID does not already exist, it will
       * be created with an initial vote in favour from the caller.
       *
       * # <weight>
       * - weight of proposed call, regardless of whether execution is performed
       * # </weight>
       **/
      acknowledgeProposal: AugmentedSubmittable<
        (
          nonce: DepositNonce | AnyNumber | Uint8Array,
          srcId: ChainId | AnyNumber | Uint8Array,
          rId: ResourceId | string | Uint8Array,
          call: Proposal | { callIndex?: any; args?: any } | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [DepositNonce, ChainId, ResourceId, Proposal]
      >;
      /**
       * Adds a new relayer to the relayer set.
       *
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      addRelayer: AugmentedSubmittable<
        (v: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [AccountId]
      >;
      /**
       * Evaluate the state of a proposal given the current vote threshold.
       *
       * A proposal with enough votes will be either executed or cancelled, and the status
       * will be updated accordingly.
       *
       * # <weight>
       * - weight of proposed call, regardless of whether execution is performed
       * # </weight>
       **/
      evalVoteState: AugmentedSubmittable<
        (
          nonce: DepositNonce | AnyNumber | Uint8Array,
          srcId: ChainId | AnyNumber | Uint8Array,
          prop: Proposal | { callIndex?: any; args?: any } | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [DepositNonce, ChainId, Proposal]
      >;
      /**
       * Commits a vote against a provided proposal.
       *
       * # <weight>
       * - Fixed, since execution of proposal should not be included
       * # </weight>
       **/
      rejectProposal: AugmentedSubmittable<
        (
          nonce: DepositNonce | AnyNumber | Uint8Array,
          srcId: ChainId | AnyNumber | Uint8Array,
          rId: ResourceId | string | Uint8Array,
          call: Proposal | { callIndex?: any; args?: any } | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [DepositNonce, ChainId, ResourceId, Proposal]
      >;
      /**
       * Removes an existing relayer from the set.
       *
       * # <weight>
       * - O(1) lookup and removal
       * # </weight>
       **/
      removeRelayer: AugmentedSubmittable<
        (v: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [AccountId]
      >;
      /**
       * Removes a resource ID from the resource mapping.
       *
       * After this call, bridge transfers with the associated resource ID will
       * be rejected.
       *
       * # <weight>
       * - O(1) removal
       * # </weight>
       **/
      removeResource: AugmentedSubmittable<
        (id: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [ResourceId]
      >;
      /**
       * Stores a method name on chain under an associated resource ID.
       *
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      setResource: AugmentedSubmittable<
        (
          id: ResourceId | string | Uint8Array,
          method: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [ResourceId, Bytes]
      >;
      /**
       * Sets the vote threshold for proposals.
       *
       * This threshold is used to determine how many votes are required
       * before a proposal is executed.
       *
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      setThreshold: AugmentedSubmittable<
        (
          threshold: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32]
      >;
      /**
       * Enables a chain ID as a source or destination for a bridge transfer.
       *
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      whitelistChain: AugmentedSubmittable<
        (id: ChainId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [ChainId]
      >;
    };
    parachainSystem: {
      authorizeUpgrade: AugmentedSubmittable<
        (codeHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Hash]
      >;
      enactAuthorizedUpgrade: AugmentedSubmittable<
        (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * Force an already scheduled validation function upgrade to happen on a particular block.
       *
       * Note that coordinating this block for the upgrade has to happen independently on the relay
       * chain and this parachain. Synchronizing the block for the upgrade is sensitive, and this
       * bypasses all checks and and normal protocols. Very easy to brick your chain if done wrong.
       **/
      setUpgradeBlock: AugmentedSubmittable<
        (
          relayChainBlock: RelayChainBlockNumber | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RelayChainBlockNumber]
      >;
      /**
       * Set the current validation data.
       *
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       *
       * The dispatch origin for this call must be `Inherent`
       *
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<
        (
          data:
            | ParachainInherentData
            | {
                validationData?: any;
                relayChainState?: any;
                downwardMessages?: any;
                horizontalMessages?: any;
              }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [ParachainInherentData]
      >;
      sudoSendUpwardMessage: AugmentedSubmittable<
        (
          message: UpwardMessage | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [UpwardMessage]
      >;
    };
    swap: {
      /**
       * Provide liquidity to a pair.
       *
       * The order of asset dot effect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up pair
       * - `asset_1`: Asset which make up pair
       * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
       * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
       * - `amount_0_min`: Minimum amount of asset_0 added to the pair
       * - `amount_1_min`: Minimum amount of asset_1 added to the pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      addLiquidity: AugmentedSubmittable<
        (
          asset0: AssetId | AnyNumber | Uint8Array,
          asset1: AssetId | AnyNumber | Uint8Array,
          amount0Desired: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amount1Desired: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amount0Min: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amount1Min: Compact<BalanceOf> | AnyNumber | Uint8Array,
          deadline: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [
          AssetId,
          AssetId,
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          Compact<BlockNumber>
        ]
      >;
      /**
       * Create pair by two assets.
       *
       * The order of asset dot effect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up Pair
       * - `asset_1`: Asset which make up Pair
       **/
      createPair: AugmentedSubmittable<
        (
          asset0: AssetId | AnyNumber | Uint8Array,
          asset1: AssetId | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AssetId, AssetId]
      >;
      /**
       * Extract liquidity.
       *
       * The order of asset dot effect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up pair
       * - `asset_1`: Asset which make up pair
       * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
       * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
       * - `recipient`: Account that accepts withdrawal of assets
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidity: AugmentedSubmittable<
        (
          asset0: AssetId | AnyNumber | Uint8Array,
          asset1: AssetId | AnyNumber | Uint8Array,
          liquidity: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amountAsset0Min: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amountAsset1Min: Compact<BalanceOf> | AnyNumber | Uint8Array,
          recipient:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          deadline: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [
          AssetId,
          AssetId,
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          LookupSource,
          Compact<BlockNumber>
        ]
      >;
      /**
       * Sell amount of asset by path.
       *
       * # Arguments
       *
       * - `amount_in`: Amount of the asset will be sold
       * - `amount_out_min`: Minimum amount of target asset
       * - `path`: path can convert to pairs.
       * - `recipient`: Account that receive the target asset
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swapExactTokensForTokens: AugmentedSubmittable<
        (
          amountIn: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amountOutMin: Compact<BalanceOf> | AnyNumber | Uint8Array,
          path: Vec<AssetId> | (AssetId | AnyNumber | Uint8Array)[],
          recipient:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          deadline: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          Vec<AssetId>,
          LookupSource,
          Compact<BlockNumber>
        ]
      >;
      /**
       * Buy amount of asset by path.
       *
       * # Arguments
       *
       * - `amount_out`: Amount of the asset will be bought
       * - `amount_in_max`: Maximum amount of sold asset
       * - `path`: path can convert to pairs.
       * - `recipient`: Account that receive the target asset
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swapTokensForExactTokens: AugmentedSubmittable<
        (
          amountOut: Compact<BalanceOf> | AnyNumber | Uint8Array,
          amountInMax: Compact<BalanceOf> | AnyNumber | Uint8Array,
          path: Vec<AssetId> | (AssetId | AnyNumber | Uint8Array)[],
          recipient:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          deadline: Compact<BlockNumber> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [
          Compact<BalanceOf>,
          Compact<BalanceOf>,
          Vec<AssetId>,
          LookupSource,
          Compact<BlockNumber>
        ]
      >;
    };
    xAssets: {
      /**
       * for transfer by root
       **/
      forceTransfer: AugmentedSubmittable<
        (
          transactor:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          dest:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, LookupSource, Compact<AssetId>, Compact<BalanceOf>]
      >;
      setAssetLimit: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          restrictions: AssetRestrictions | { bits?: any } | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, AssetRestrictions]
      >;
      /**
       * set free token for an account
       **/
      setBalance: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          balances: BTreeMap<AssetType, BalanceOf>
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, BTreeMap<AssetType, BalanceOf>]
      >;
      /**
       * transfer between account
       **/
      transfer: AugmentedSubmittable<
        (
          dest:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          value: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, Compact<BalanceOf>]
      >;
    };
    xAssetsRegistrar: {
      /**
       * Deregister an asset with given `id`.
       *
       * This asset will be marked as invalid.
       *
       * This is a root-only operation.
       **/
      deregister: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>]
      >;
      /**
       * Recover a deregister asset to the valid state.
       *
       * `RegistrarHandler::on_register()` will be triggered again during the recover process.
       *
       * This is a root-only operation.
       **/
      recover: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          hasMiningRights: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, bool]
      >;
      /**
       * Register a new foreign asset.
       *
       * This is a root-only operation.
       **/
      register: AugmentedSubmittable<
        (
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          asset:
            | AssetInfo
            | {
                token?: any;
                tokenName?: any;
                chain?: any;
                decimals?: any;
                desc?: any;
              }
            | string
            | Uint8Array,
          isOnline: bool | boolean | Uint8Array,
          hasMiningRights: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, AssetInfo, bool, bool]
      >;
      /**
       * Update the asset info, all the new fields are optional.
       *
       * This is a root-only operation.
       **/
      updateAssetInfo: AugmentedSubmittable<
        (
          id: Compact<AssetId> | AnyNumber | Uint8Array,
          token: Option<Token> | null | object | string | Uint8Array,
          tokenName: Option<Token> | null | object | string | Uint8Array,
          desc: Option<Desc> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<AssetId>, Option<Token>, Option<Token>, Option<Desc>]
      >;
    };
    xGatewayBitcoin: {
      /**
       * Trustee create a proposal for a withdrawal list. `tx` is the proposal withdrawal transaction.
       * The `tx` would have a sign for current creator or do not have sign. if creator do not sign
       * for this transaction, he could do `sign_withdraw_tx` later.
       **/
      createWithdrawTx: AugmentedSubmittable<
        (
          withdrawalIdList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
          tx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<u32>, Bytes]
      >;
      /**
       * Dangerous! force replace current withdrawal proposal transaction. Please check business
       * logic before do this operation. Must make sure current proposal transaction is invalid
       * (e.g. when created a proposal, the inputs are not in double spend state, but after other
       * trustees finish signing, the inputs are in double spend due other case. Thus could create
       * a new valid transaction which outputs same to current proposal to replace current proposal
       * transaction.)
       **/
      forceReplaceProposalTx: AugmentedSubmittable<
        (tx: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * if use `BtcHeader` struct would export in metadata, cause complex in front-end
       **/
      pushHeader: AugmentedSubmittable<
        (header: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * if use `RelayTx` struct would export in metadata, cause complex in front-end
       **/
      pushTransaction: AugmentedSubmittable<
        (
          rawTx: Bytes | string | Uint8Array,
          relayedInfo:
            | BtcRelayedTxInfo
            | { blockHash?: any; merkleProof?: any }
            | string
            | Uint8Array,
          prevTx: Option<Bytes> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Bytes, BtcRelayedTxInfo, Option<Bytes>]
      >;
      /**
       * Allow root or trustees could remove pending deposits for an address and decide whether
       * deposit to an account id. if pass `None` to `who`, would just remove pendings, if pass
       * Some, would deposit to this account id.
       **/
      removePending: AugmentedSubmittable<
        (
          addr: BtcAddress | string,
          who: Option<AccountId> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcAddress, Option<AccountId>]
      >;
      /**
       * Dangerous! remove current withdrawal proposal directly. Please check business logic before
       * do this operation.
       **/
      removeProposal: AugmentedSubmittable<
        () => SubmittableExtrinsic<ApiType>,
        []
      >;
      /**
       * Dangerous! Be careful to set BestIndex
       **/
      setBestIndex: AugmentedSubmittable<
        (
          index:
            | BtcHeaderIndex
            | { hash?: any; height?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcHeaderIndex]
      >;
      /**
       * Set bitcoin deposit limit
       **/
      setBtcDepositLimit: AugmentedSubmittable<
        (
          value: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Set bitcoin withdrawal fee
       **/
      setBtcWithdrawalFee: AugmentedSubmittable<
        (
          fee: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Dangerous! Be careful to set ConfirmedIndex
       **/
      setConfirmedIndex: AugmentedSubmittable<
        (
          index:
            | BtcHeaderIndex
            | { hash?: any; height?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcHeaderIndex]
      >;
      /**
       * Trustees sign a withdrawal proposal. If `tx` is None, means this trustee vote to reject
       * this proposal. If `tx` is Some(), the inner part must be a valid transaction with this
       * trustee signature.
       **/
      signWithdrawTx: AugmentedSubmittable<
        (
          tx: Option<Bytes> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Option<Bytes>]
      >;
    };
    xGatewayBitcoinBridge: {
      /**
       * Add extra collateral for registered vault.
       **/
      addExtraCollateral: AugmentedSubmittable<
        (
          collateral: BalanceOf | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BalanceOf]
      >;
      cancelIssue: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId]
      >;
      /**
       * Cancel a `RedeemRequest` when it has been expired.
       *
       * Call the extrinsic while request ain't expired will cause `RedeemRequestNotExpired`
       * error.
       **/
      cancelRedeem: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          reimburse: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, bool]
      >;
      /**
       * Execute issue request in `IssueRequests`. It verifies `tx` provided and marks
       * `IssueRequest` as completed.
       *
       * The execute_issue can only called by signed origin.
       **/
      executeIssue: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          blockHash: Bytes | string | Uint8Array,
          merkleProof: Bytes | string | Uint8Array,
          rawTx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, Bytes, Bytes, Bytes]
      >;
      executeRedeem: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          blockHash: Bytes | string | Uint8Array,
          merkleProof: Bytes | string | Uint8Array,
          rawTx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, Bytes, Bytes, Bytes]
      >;
      /**
       * Similar to [`update_exchange_rate`](crate::pallet::Pallet::update_exchange_rate),
       * except it only allows root.
       **/
      forceUpdateExchangeRate: AugmentedSubmittable<
        (
          exchangeRate:
            | TradingPrice
            | { price?: any; decimal?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [TradingPrice]
      >;
      /**
       * Force update oracles.
       *
       * DANGEROUS! The extrinsic will cover old oracles.
       **/
      forceUpdateOracles: AugmentedSubmittable<
        (
          oracles: Vec<AccountId> | (AccountId | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId>]
      >;
      /**
       * Register a vault with collateral and unique `btc_address`.
       *
       * The extrinsic's origin must be signed.
       * *Relative Functions*:
       * [`add_extra_collateral`](crate::Pallet::add_extra_collateral)
       **/
      registerVault: AugmentedSubmittable<
        (
          collateral: BalanceOf | AnyNumber | Uint8Array,
          addrStr: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BalanceOf, Bytes]
      >;
      /**
       * User request issue cross-chain asset.
       *
       * `IssueRequest` couldn't be submitted while bridge during liquidating.
       **/
      requestIssue: AugmentedSubmittable<
        (
          vaultId: AccountId | string | Uint8Array,
          amount: BalanceOf | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId, BalanceOf]
      >;
      /**
       * User request redeem
       **/
      requestRedeem: AugmentedSubmittable<
        (
          vaultId: AccountId | string | Uint8Array,
          amount: BalanceOf | AnyNumber | Uint8Array,
          outerAddress: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId, BalanceOf, Bytes]
      >;
      /**
       * Update exchange rate by oracle.
       *
       * The extrinsic only allows oracle accounts.
       *
       * *Relative Functions*:
       * [`force_update_exchange_rate`](crate::Pallet::force_update_exchange_rate)
       **/
      updateExchangeRate: AugmentedSubmittable<
        (
          exchangeRate:
            | TradingPrice
            | { price?: any; decimal?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [TradingPrice]
      >;
      /**
       * Update griefing fee for requesting issue
       **/
      updateIssueGriefingFee: AugmentedSubmittable<
        (
          griefingFee: Percent | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Percent]
      >;
    };
    xGatewayDogecoin: {
      /**
       * Trustee create a proposal for a withdrawal list. `tx` is the proposal withdrawal transaction.
       * The `tx` would have a sign for current creator or do not have sign. if creator do not sign
       * for this transaction, he could do `sign_withdraw_tx` later.
       **/
      createWithdrawTx: AugmentedSubmittable<
        (
          withdrawalIdList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
          tx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<u32>, Bytes]
      >;
      /**
       * Dangerous! force replace current withdrawal proposal transaction. Please check business
       * logic before do this operation. Must make sure current proposal transaction is invalid
       * (e.g. when created a proposal, the inputs are not in double spend state, but after other
       * trustees finish signing, the inputs are in double spend due other case. Thus could create
       * a new valid transaction which outputs same to current proposal to replace current proposal
       * transaction.)
       **/
      forceReplaceProposalTx: AugmentedSubmittable<
        (tx: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * if use `BtcHeader` struct would export in metadata, cause complex in front-end
       **/
      pushHeader: AugmentedSubmittable<
        (header: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >;
      /**
       * if use `RelayTx` struct would export in metadata, cause complex in front-end
       **/
      pushTransaction: AugmentedSubmittable<
        (
          rawTx: Bytes | string | Uint8Array,
          relayedInfo:
            | BtcRelayedTxInfo
            | { blockHash?: any; merkleProof?: any }
            | string
            | Uint8Array,
          prevTx: Option<Bytes> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Bytes, BtcRelayedTxInfo, Option<Bytes>]
      >;
      /**
       * Allow root or trustees could remove pending deposits for an address and decide whether
       * deposit to an account id. if pass `None` to `who`, would just remove pendings, if pass
       * Some, would deposit to this account id.
       **/
      removePending: AugmentedSubmittable<
        (
          addr: BtcAddress | string,
          who: Option<AccountId> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcAddress, Option<AccountId>]
      >;
      /**
       * Dangerous! remove current withdrawal proposal directly. Please check business logic before
       * do this operation.
       **/
      removeProposal: AugmentedSubmittable<
        () => SubmittableExtrinsic<ApiType>,
        []
      >;
      /**
       * Dangerous! Be careful to set BestIndex
       **/
      setBestIndex: AugmentedSubmittable<
        (
          index:
            | BtcHeaderIndex
            | { hash?: any; height?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcHeaderIndex]
      >;
      /**
       * Set bitcoin deposit limit
       **/
      setBtcDepositLimit: AugmentedSubmittable<
        (
          value: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Set bitcoin withdrawal fee
       **/
      setBtcWithdrawalFee: AugmentedSubmittable<
        (
          fee: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >;
      /**
       * Dangerous! Be careful to set ConfirmedIndex
       **/
      setConfirmedIndex: AugmentedSubmittable<
        (
          index:
            | BtcHeaderIndex
            | { hash?: any; height?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BtcHeaderIndex]
      >;
      /**
       * Trustees sign a withdrawal proposal. If `tx` is None, means this trustee vote to reject
       * this proposal. If `tx` is Some(), the inner part must be a valid transaction with this
       * trustee signature.
       **/
      signWithdrawTx: AugmentedSubmittable<
        (
          tx: Option<Bytes> | null | object | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Option<Bytes>]
      >;
    };
    xGatewayDogecoinBridge: {
      /**
       * Add extra collateral for registered vault.
       **/
      addExtraCollateral: AugmentedSubmittable<
        (
          collateral: BalanceOf | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BalanceOf]
      >;
      cancelIssue: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId]
      >;
      /**
       * Cancel a `RedeemRequest` when it has been expired.
       *
       * Call the extrinsic while request ain't expired will cause `RedeemRequestNotExpired`
       * error.
       **/
      cancelRedeem: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          reimburse: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, bool]
      >;
      /**
       * Execute issue request in `IssueRequests`. It verifies `tx` provided and marks
       * `IssueRequest` as completed.
       *
       * The execute_issue can only called by signed origin.
       **/
      executeIssue: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          blockHash: Bytes | string | Uint8Array,
          merkleProof: Bytes | string | Uint8Array,
          rawTx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, Bytes, Bytes, Bytes]
      >;
      executeRedeem: AugmentedSubmittable<
        (
          requestId: RequestId | AnyNumber | Uint8Array,
          blockHash: Bytes | string | Uint8Array,
          merkleProof: Bytes | string | Uint8Array,
          rawTx: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [RequestId, Bytes, Bytes, Bytes]
      >;
      /**
       * Similar to [`update_exchange_rate`](crate::pallet::Pallet::update_exchange_rate),
       * except it only allows root.
       **/
      forceUpdateExchangeRate: AugmentedSubmittable<
        (
          exchangeRate:
            | TradingPrice
            | { price?: any; decimal?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [TradingPrice]
      >;
      /**
       * Force update oracles.
       *
       * DANGEROUS! The extrinsic will cover old oracles.
       **/
      forceUpdateOracles: AugmentedSubmittable<
        (
          oracles: Vec<AccountId> | (AccountId | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId>]
      >;
      /**
       * Register a vault with collateral and unique `btc_address`.
       *
       * The extrinsic's origin must be signed.
       * *Relative Functions*:
       * [`add_extra_collateral`](crate::Pallet::add_extra_collateral)
       **/
      registerVault: AugmentedSubmittable<
        (
          collateral: BalanceOf | AnyNumber | Uint8Array,
          addrStr: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [BalanceOf, Bytes]
      >;
      /**
       * User request issue cross-chain asset.
       *
       * `IssueRequest` couldn't be submitted while bridge during liquidating.
       **/
      requestIssue: AugmentedSubmittable<
        (
          vaultId: AccountId | string | Uint8Array,
          amount: BalanceOf | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId, BalanceOf]
      >;
      /**
       * User request redeem
       **/
      requestRedeem: AugmentedSubmittable<
        (
          vaultId: AccountId | string | Uint8Array,
          amount: BalanceOf | AnyNumber | Uint8Array,
          outerAddress: Bytes | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId, BalanceOf, Bytes]
      >;
      /**
       * Update exchange rate by oracle.
       *
       * The extrinsic only allows oracle accounts.
       *
       * *Relative Functions*:
       * [`force_update_exchange_rate`](crate::Pallet::force_update_exchange_rate)
       **/
      updateExchangeRate: AugmentedSubmittable<
        (
          exchangeRate:
            | TradingPrice
            | { price?: any; decimal?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [TradingPrice]
      >;
      /**
       * Update griefing fee for requesting issue
       **/
      updateIssueGriefingFee: AugmentedSubmittable<
        (
          griefingFee: Percent | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Percent]
      >;
    };
    xGatewayRecord: {
      /**
       * Deposit asset token.
       *
       * This is a root-only operation.
       **/
      rootDeposit: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          balance: Compact<BalanceOf> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, Compact<BalanceOf>]
      >;
      /**
       * Withdraw asset token (only lock token)
       *
       * This is a root-only operation.
       **/
      rootWithdraw: AugmentedSubmittable<
        (
          who:
            | LookupSource
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          assetId: Compact<AssetId> | AnyNumber | Uint8Array,
          balance: Compact<BalanceOf> | AnyNumber | Uint8Array,
          addr: AddrStr | string,
          memo: Memo | string
        ) => SubmittableExtrinsic<ApiType>,
        [LookupSource, Compact<AssetId>, Compact<BalanceOf>, AddrStr, Memo]
      >;
      /**
       * Set the state of withdrawal record with given id and state.
       *
       * This is a root-only operation.
       **/
      setWithdrawalState: AugmentedSubmittable<
        (
          withdrawalId: Compact<WithdrawalRecordId> | AnyNumber | Uint8Array,
          state:
            | WithdrawalState
            | "Applying"
            | "Processing"
            | "NormalFinish"
            | "RootFinish"
            | "NormalCancel"
            | "RootCancel"
            | number
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<WithdrawalRecordId>, WithdrawalState]
      >;
      /**
       * Set the state of withdrawal records in batches.
       *
       * This is a root-only operation.
       **/
      setWithdrawalStateList: AugmentedSubmittable<
        (
          item:
            | Vec<ITuple<[WithdrawalRecordId, WithdrawalState]>>
            | [
                WithdrawalRecordId | AnyNumber | Uint8Array,
                (
                  | WithdrawalState
                  | "Applying"
                  | "Processing"
                  | "NormalFinish"
                  | "RootFinish"
                  | "NormalCancel"
                  | "RootCancel"
                  | number
                  | Uint8Array
                )
              ][]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<ITuple<[WithdrawalRecordId, WithdrawalState]>>]
      >;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes>
    extends AugmentedSubmittables<ApiType> {
    (
      extrinsic: Call | Extrinsic | Uint8Array | string
    ): SubmittableExtrinsic<ApiType>;
  }
}
