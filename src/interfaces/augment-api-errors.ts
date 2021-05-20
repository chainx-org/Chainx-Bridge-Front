// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from "@polkadot/api/types";

declare module "@polkadot/api/types/errors" {
  export interface AugmentedErrors<ApiType> {
    assetsHandler: {
      InvalidDestChainId: AugmentedError<ApiType>;
      ResourceIdAlreadyRegistered: AugmentedError<ApiType>;
      ResourceIdCurrencyIdNotMatch: AugmentedError<ApiType>;
      ResourceIdNotRegistered: AugmentedError<ApiType>;
    };
    chainBridge: {
      /**
       * Chain has already been enabled
       **/
      ChainAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * Interactions with this chain is not permitted
       **/
      ChainNotWhitelisted: AugmentedError<ApiType>;
      /**
       * Provided chain Id is not valid
       **/
      InvalidChainId: AugmentedError<ApiType>;
      /**
       * Relayer threshold cannot be 0
       **/
      InvalidThreshold: AugmentedError<ApiType>;
      /**
       * Protected operation, must be performed by relayer
       **/
      MustBeRelayer: AugmentedError<ApiType>;
      /**
       * Proposal has either failed or succeeded
       **/
      ProposalAlreadyComplete: AugmentedError<ApiType>;
      /**
       * A proposal with these parameters has already been submitted
       **/
      ProposalAlreadyExists: AugmentedError<ApiType>;
      /**
       * No proposal with the ID was found
       **/
      ProposalDoesNotExist: AugmentedError<ApiType>;
      /**
       * Lifetime of proposal has been exceeded
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Cannot complete proposal, needs more votes
       **/
      ProposalNotComplete: AugmentedError<ApiType>;
      /**
       * Relayer already in set
       **/
      RelayerAlreadyExists: AugmentedError<ApiType>;
      /**
       * Relayer has already submitted some vote for this proposal
       **/
      RelayerAlreadyVoted: AugmentedError<ApiType>;
      /**
       * Provided accountId is not a relayer
       **/
      RelayerInvalid: AugmentedError<ApiType>;
      /**
       * Resource ID provided isn't mapped to anything
       **/
      ResourceDoesNotExist: AugmentedError<ApiType>;
      /**
       * Relayer threshold not set
       **/
      ThresholdNotSet: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The messages submitted by the collator in the system inherent when hashed sequentially
       * do not produce the hash that is produced by the relay-chain.
       *
       * This means that at least some of the submitted messages were altered, omitted or added
       * illegaly.
       **/
      DmpMqcMismatch: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the host configuration did not run this block
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * After processing all messages submitted by the collator and extending hash chains we
       * haven't arrived to the MQCs that were produced by the relay-chain.
       *
       * That means that one or more channels had at least some of the submitted messages altered,
       * omitted or added illegaly.
       **/
      HrmpMqcMismatch: AugmentedError<ApiType>;
      /**
       * The collator submitted a message that is received from a sender that doesn't have a
       * channel opened to this parachain, according to the relay-parent state.
       **/
      HrmpNoMqc: AugmentedError<ApiType>;
      /**
       * Invalid relay-chain storage merkle proof
       **/
      InvalidRelayChainMerkleProof: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is willing to run
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
    };
    swap: {
      /**
       * Transaction block number is larger than the end block number.
       **/
      Deadline: AugmentedError<ApiType>;
      /**
       * Trading pair can't be created.
       **/
      DeniedCreatePair: AugmentedError<ApiType>;
      /**
       * Sold amount is more than exception.
       **/
      ExcessiveSoldAmount: AugmentedError<ApiType>;
      /**
       * Incorrect asset amount range.
       **/
      IncorrectAssetAmountRange: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      InsufficientAssetBalance: AugmentedError<ApiType>;
      /**
       * Liquidity is not enough.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Trading pair does have enough asset.
       **/
      InsufficientPairReserve: AugmentedError<ApiType>;
      /**
       * Get target amount is less than exception.
       **/
      InsufficientTargetAmount: AugmentedError<ApiType>;
      /**
       * Can't find pair though trading path.
       **/
      InvalidPath: AugmentedError<ApiType>;
      /**
       * Overflow.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Trading pair already exists.
       **/
      PairAlreadyExists: AugmentedError<ApiType>;
      /**
       * Trading pair does not exist.
       **/
      PairNotExists: AugmentedError<ApiType>;
    };
    xAssets: {
      /**
       * Action is not allowed.
       **/
      ActionNotAllowed: AugmentedError<ApiType>;
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Not Allow native asset,
       **/
      DenyNativeAsset: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       *
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Account still has active reserved
       **/
      StillHasActiveReserved: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      TotalAssetInsufficientBalance: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      TotalAssetOverflow: AugmentedError<ApiType>;
    };
    xAssetsRegistrar: {
      /**
       * The asset already exists.
       **/
      AssetAlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is already valid (online), no need to recover.
       **/
      AssetAlreadyValid: AugmentedError<ApiType>;
      /**
       * The asset does not exist.
       **/
      AssetDoesNotExist: AugmentedError<ApiType>;
      /**
       * The asset is invalid (not online).
       **/
      AssetIsInvalid: AugmentedError<ApiType>;
      /**
       * Text is invalid ASCII, only allow ASCII visible character [0x20, 0x7E]
       **/
      InvalidAscii: AugmentedError<ApiType>;
      /**
       * Desc length is zero or too long
       **/
      InvalidAssetDescLength: AugmentedError<ApiType>;
      /**
       * Token name length is zero or too long
       **/
      InvalidAssetTokenNameLength: AugmentedError<ApiType>;
      /**
       * Token symbol char is invalid, only allow ASCII alphanumeric character or '-', '.', '|', '~'
       **/
      InvalidAssetTokenSymbolChar: AugmentedError<ApiType>;
      /**
       * Token symbol length is zero or too long
       **/
      InvalidAssetTokenSymbolLength: AugmentedError<ApiType>;
    };
    xGatewayBitcoin: {
      /**
       * Fork is too long to proceed
       **/
      AncientFork: AugmentedError<ApiType>;
      /**
       *
       **/
      BadMerkleProof: AugmentedError<ApiType>;
      /**
       * Parse redeem script failed
       **/
      BadRedeemScript: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      BadSignature: AugmentedError<ApiType>;
      /**
       * construct bad signature
       **/
      ConstructBadSign: AugmentedError<ApiType>;
      /**
       * Cannot deserialize the header or tx vec
       **/
      DeserializeErr: AugmentedError<ApiType>;
      /**
       * duplicated pubkey for trustees
       **/
      DuplicatedKeys: AugmentedError<ApiType>;
      /**
       * already vote for this withdrawal proposal
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Header already exists
       **/
      ExistingHeader: AugmentedError<ApiType>;
      /**
       * can't generate multisig address
       **/
      GenerateMultisigFailed: AugmentedError<ApiType>;
      /**
       * Ancient fork
       **/
      HeaderAncientFork: AugmentedError<ApiType>;
      /**
       * Futuristic timestamp
       **/
      HeaderFuturisticTimestamp: AugmentedError<ApiType>;
      /**
       * nBits do not match difficulty rules
       **/
      HeaderNBitsNotMatch: AugmentedError<ApiType>;
      /**
       * Not Found
       **/
      HeaderNotFound: AugmentedError<ApiType>;
      /**
       * Unknown parent
       **/
      HeaderUnknownParent: AugmentedError<ApiType>;
      /**
       * load addr from bytes error
       **/
      InvalidAddr: AugmentedError<ApiType>;
      /**
       * invalid bitcoin address
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * parse base58 addr error
       **/
      InvalidBase58: AugmentedError<ApiType>;
      /**
       * can't find the best header in chain or it's invalid
       **/
      InvalidBestIndex: AugmentedError<ApiType>;
      /**
       * Invalid proof-of-work (Block hash does not satisfy nBits)
       **/
      InvalidPoW: AugmentedError<ApiType>;
      /**
       * Previous tx id not equal input point hash
       **/
      InvalidPrevTx: AugmentedError<ApiType>;
      /**
       * invalid proposal
       **/
      InvalidProposal: AugmentedError<ApiType>;
      /**
       * invalid bitcoin public key
       **/
      InvalidPublicKey: AugmentedError<ApiType>;
      /**
       * invalid sign count in trustee withdrawal tx proposal
       **/
      InvalidSignCount: AugmentedError<ApiType>;
      /**
       * invalid trustee count
       **/
      InvalidTrusteeCount: AugmentedError<ApiType>;
      /**
       * withdraw tx not match expected tx
       **/
      MismatchedTx: AugmentedError<ApiType>;
      /**
       * no proposal for current withdrawal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * last proposal not finished yet
       **/
      NotFinishProposal: AugmentedError<ApiType>;
      /**
       * not set trustee yet
       **/
      NotTrustee: AugmentedError<ApiType>;
      /**
       * no withdrawal record for this id
       **/
      NoWithdrawalRecord: AugmentedError<ApiType>;
      /**
       * Can't find previous header
       **/
      PrevHeaderNotExisted: AugmentedError<ApiType>;
      /**
       * process tx failed
       **/
      ProcessTxFailed: AugmentedError<ApiType>;
      /**
       * reject sig for current proposal
       **/
      RejectSig: AugmentedError<ApiType>;
      /**
       * reject replay proccessed tx
       **/
      ReplayedTx: AugmentedError<ApiType>;
      /**
       * The tx is not yet confirmed, i.e, the block of which is not confirmed.
       **/
      UnconfirmedTx: AugmentedError<ApiType>;
      /**
       * verify tx signature failed
       **/
      VerifySignFailed: AugmentedError<ApiType>;
      /**
       * unexpected withdraw records count
       **/
      WroungWithdrawalCount: AugmentedError<ApiType>;
    };
    xGatewayBitcoinBridge: {
      /**
       * Redeem amount is to low
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Arithmetic underflow/overflow.
       **/
      ArithmeticError: AugmentedError<ApiType>;
      /**
       * Error propagated from xpallet_assets.
       **/
      AssetError: AugmentedError<ApiType>;
      /**
       * Bridge was shutdown or in error.
       **/
      BridgeNotRunning: AugmentedError<ApiType>;
      /**
       * Bridge status is not correct
       **/
      BridgeStatusError: AugmentedError<ApiType>;
      /**
       * Btc address in request was occupied by another vault.
       **/
      BtcAddressOccupied: AugmentedError<ApiType>;
      /**
       * The amount in request is less than lower bound.
       **/
      CollateralAmountTooSmall: AugmentedError<ApiType>;
      /**
       * Vault colateral ratio was below than `SecureThreshold`
       **/
      InsecureVault: AugmentedError<ApiType>;
      /**
       * Redeem amount is not correct
       **/
      InsufficiantAssetsFunds: AugmentedError<ApiType>;
      /**
       * Account doesn't have enough collateral to be slashed.
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * Collateral in request is less than griefing collateral
       **/
      InsufficientGriefingCollateral: AugmentedError<ApiType>;
      /**
       * Collateral is less than lower bound after extrinsic.
       **/
      InsufficientVaultCollateral: AugmentedError<ApiType>;
      /**
       * BtcAddress invalid
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * Invalid btc address
       **/
      InvalidBtcAddress: AugmentedError<ApiType>;
      /**
       * Value to be set is invalid
       **/
      InvalidConfigValue: AugmentedError<ApiType>;
      /**
       * Actioner is not the request's owner
       **/
      InvalidRequester: AugmentedError<ApiType>;
      /**
       * Tried to execute `IssueRequest` while  it's expired
       **/
      IssueRequestExpired: AugmentedError<ApiType>;
      /**
       * `IssueRequest` cancelled when it's not expired
       **/
      IssueRequestNotExpired: AugmentedError<ApiType>;
      /**
       * No such `IssueRequest`
       **/
      IssueRequestNotFound: AugmentedError<ApiType>;
      /**
       * Try to calculate collateral ratio while has no issued_tokens
       **/
      NoIssuedTokens: AugmentedError<ApiType>;
      /**
       * Permission denied.
       **/
      NotOracle: AugmentedError<ApiType>;
      /**
       * Vault issue token insufficient
       **/
      RedeemAmountTooLarge: AugmentedError<ApiType>;
      /**
       * Redeem is cancelled
       **/
      RedeemRequestAlreadyCancelled: AugmentedError<ApiType>;
      /**
       * Redeem is completed
       **/
      RedeemRequestAlreadyCompleted: AugmentedError<ApiType>;
      /**
       * Redeem request is expierd
       **/
      RedeemRequestExpired: AugmentedError<ApiType>;
      /**
       * Redeem request cancelled for forced redeem when it's not expired.
       **/
      RedeemRequestNotExpired: AugmentedError<ApiType>;
      /**
       * Redeem request id is not exsit
       **/
      RedeemRequestNotFound: AugmentedError<ApiType>;
      /**
       * Redeem in Processing
       **/
      RedeemRequestProcessing: AugmentedError<ApiType>;
      /**
       * `IssueRequest` or `RedeemRequest` has been executed or cancelled
       **/
      RequestDealt: AugmentedError<ApiType>;
      /**
       * Requester has been vault.
       **/
      VaultAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Vault was inactive
       **/
      VaultInactive: AugmentedError<ApiType>;
      /**
       * Vault is under Liquidation
       **/
      VaultLiquidated: AugmentedError<ApiType>;
      /**
       * Vault does not exist.
       **/
      VaultNotFound: AugmentedError<ApiType>;
    };
    xGatewayDogecoin: {
      /**
       * Fork is too long to proceed
       **/
      AncientFork: AugmentedError<ApiType>;
      /**
       *
       **/
      BadMerkleProof: AugmentedError<ApiType>;
      /**
       * Parse redeem script failed
       **/
      BadRedeemScript: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      BadSignature: AugmentedError<ApiType>;
      /**
       * construct bad signature
       **/
      ConstructBadSign: AugmentedError<ApiType>;
      /**
       * Cannot deserialize the header or tx vec
       **/
      DeserializeErr: AugmentedError<ApiType>;
      /**
       * duplicated pubkey for trustees
       **/
      DuplicatedKeys: AugmentedError<ApiType>;
      /**
       * already vote for this withdrawal proposal
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Header already exists
       **/
      ExistingHeader: AugmentedError<ApiType>;
      /**
       * can't generate multisig address
       **/
      GenerateMultisigFailed: AugmentedError<ApiType>;
      /**
       * Ancient fork
       **/
      HeaderAncientFork: AugmentedError<ApiType>;
      /**
       * Futuristic timestamp
       **/
      HeaderFuturisticTimestamp: AugmentedError<ApiType>;
      /**
       * nBits do not match difficulty rules
       **/
      HeaderNBitsNotMatch: AugmentedError<ApiType>;
      /**
       * Not Found
       **/
      HeaderNotFound: AugmentedError<ApiType>;
      /**
       * Unknown parent
       **/
      HeaderUnknownParent: AugmentedError<ApiType>;
      /**
       * load addr from bytes error
       **/
      InvalidAddr: AugmentedError<ApiType>;
      /**
       * invalid bitcoin address
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * parse base58 addr error
       **/
      InvalidBase58: AugmentedError<ApiType>;
      /**
       * can't find the best header in chain or it's invalid
       **/
      InvalidBestIndex: AugmentedError<ApiType>;
      /**
       * Invalid proof-of-work (Block hash does not satisfy nBits)
       **/
      InvalidPoW: AugmentedError<ApiType>;
      /**
       * Previous tx id not equal input point hash
       **/
      InvalidPrevTx: AugmentedError<ApiType>;
      /**
       * invalid proposal
       **/
      InvalidProposal: AugmentedError<ApiType>;
      /**
       * invalid bitcoin public key
       **/
      InvalidPublicKey: AugmentedError<ApiType>;
      /**
       * invalid sign count in trustee withdrawal tx proposal
       **/
      InvalidSignCount: AugmentedError<ApiType>;
      /**
       * invalid trustee count
       **/
      InvalidTrusteeCount: AugmentedError<ApiType>;
      /**
       * withdraw tx not match expected tx
       **/
      MismatchedTx: AugmentedError<ApiType>;
      /**
       * no proposal for current withdrawal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * last proposal not finished yet
       **/
      NotFinishProposal: AugmentedError<ApiType>;
      /**
       * not set trustee yet
       **/
      NotTrustee: AugmentedError<ApiType>;
      /**
       * no withdrawal record for this id
       **/
      NoWithdrawalRecord: AugmentedError<ApiType>;
      /**
       * Can't find previous header
       **/
      PrevHeaderNotExisted: AugmentedError<ApiType>;
      /**
       * process tx failed
       **/
      ProcessTxFailed: AugmentedError<ApiType>;
      /**
       * reject sig for current proposal
       **/
      RejectSig: AugmentedError<ApiType>;
      /**
       * reject replay proccessed tx
       **/
      ReplayedTx: AugmentedError<ApiType>;
      /**
       * The tx is not yet confirmed, i.e, the block of which is not confirmed.
       **/
      UnconfirmedTx: AugmentedError<ApiType>;
      /**
       * verify tx signature failed
       **/
      VerifySignFailed: AugmentedError<ApiType>;
      /**
       * unexpected withdraw records count
       **/
      WroungWithdrawalCount: AugmentedError<ApiType>;
    };
    xGatewayDogecoinBridge: {
      /**
       * Redeem amount is to low
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Arithmetic underflow/overflow.
       **/
      ArithmeticError: AugmentedError<ApiType>;
      /**
       * Error propagated from xpallet_assets.
       **/
      AssetError: AugmentedError<ApiType>;
      /**
       * Bridge was shutdown or in error.
       **/
      BridgeNotRunning: AugmentedError<ApiType>;
      /**
       * Bridge status is not correct
       **/
      BridgeStatusError: AugmentedError<ApiType>;
      /**
       * Btc address in request was occupied by another vault.
       **/
      BtcAddressOccupied: AugmentedError<ApiType>;
      /**
       * The amount in request is less than lower bound.
       **/
      CollateralAmountTooSmall: AugmentedError<ApiType>;
      /**
       * Vault colateral ratio was below than `SecureThreshold`
       **/
      InsecureVault: AugmentedError<ApiType>;
      /**
       * Redeem amount is not correct
       **/
      InsufficiantAssetsFunds: AugmentedError<ApiType>;
      /**
       * Account doesn't have enough collateral to be slashed.
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * Collateral in request is less than griefing collateral
       **/
      InsufficientGriefingCollateral: AugmentedError<ApiType>;
      /**
       * Collateral is less than lower bound after extrinsic.
       **/
      InsufficientVaultCollateral: AugmentedError<ApiType>;
      /**
       * BtcAddress invalid
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * Invalid btc address
       **/
      InvalidBtcAddress: AugmentedError<ApiType>;
      /**
       * Value to be set is invalid
       **/
      InvalidConfigValue: AugmentedError<ApiType>;
      /**
       * Actioner is not the request's owner
       **/
      InvalidRequester: AugmentedError<ApiType>;
      /**
       * Tried to execute `IssueRequest` while  it's expired
       **/
      IssueRequestExpired: AugmentedError<ApiType>;
      /**
       * `IssueRequest` cancelled when it's not expired
       **/
      IssueRequestNotExpired: AugmentedError<ApiType>;
      /**
       * No such `IssueRequest`
       **/
      IssueRequestNotFound: AugmentedError<ApiType>;
      /**
       * Try to calculate collateral ratio while has no issued_tokens
       **/
      NoIssuedTokens: AugmentedError<ApiType>;
      /**
       * Permission denied.
       **/
      NotOracle: AugmentedError<ApiType>;
      /**
       * Vault issue token insufficient
       **/
      RedeemAmountTooLarge: AugmentedError<ApiType>;
      /**
       * Redeem is cancelled
       **/
      RedeemRequestAlreadyCancelled: AugmentedError<ApiType>;
      /**
       * Redeem is completed
       **/
      RedeemRequestAlreadyCompleted: AugmentedError<ApiType>;
      /**
       * Redeem request is expierd
       **/
      RedeemRequestExpired: AugmentedError<ApiType>;
      /**
       * Redeem request cancelled for forced redeem when it's not expired.
       **/
      RedeemRequestNotExpired: AugmentedError<ApiType>;
      /**
       * Redeem request id is not exsit
       **/
      RedeemRequestNotFound: AugmentedError<ApiType>;
      /**
       * Redeem in Processing
       **/
      RedeemRequestProcessing: AugmentedError<ApiType>;
      /**
       * `IssueRequest` or `RedeemRequest` has been executed or cancelled
       **/
      RequestDealt: AugmentedError<ApiType>;
      /**
       * Requester has been vault.
       **/
      VaultAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Vault was inactive
       **/
      VaultInactive: AugmentedError<ApiType>;
      /**
       * Vault is under Liquidation
       **/
      VaultLiquidated: AugmentedError<ApiType>;
      /**
       * Vault does not exist.
       **/
      VaultNotFound: AugmentedError<ApiType>;
    };
    xGatewayRecord: {
      /**
       * The applicant is not this account
       **/
      InvalidAccount: AugmentedError<ApiType>;
      /**
       * State only allow `RootFinish` and `RootCancel`
       **/
      InvalidState: AugmentedError<ApiType>;
      /**
       * WithdrawalRecord state not `Applying`
       **/
      NotApplyingState: AugmentedError<ApiType>;
      /**
       * Id not in withdrawal records
       **/
      NotExisted: AugmentedError<ApiType>;
      /**
       * WithdrawalRecord state not `Processing`
       **/
      NotProcessingState: AugmentedError<ApiType>;
      /**
       * Meet unexpected chain
       **/
      UnexpectedChain: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes>
    extends AugmentedErrors<ApiType> {}
}
