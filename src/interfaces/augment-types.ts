// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type {
  BitVec,
  Bool,
  Bytes,
  Compact,
  Data,
  DoNotConstruct,
  I128,
  I16,
  I256,
  I32,
  I64,
  I8,
  Json,
  Null,
  Option,
  Raw,
  StorageKey,
  Text,
  Type,
  U128,
  U16,
  U256,
  U32,
  U64,
  U8,
  USize,
  Vec,
  bool,
  i128,
  i16,
  i256,
  i32,
  i64,
  i8,
  u128,
  u16,
  u256,
  u32,
  u64,
  u8,
  usize,
} from "@polkadot/types";
import type {
  AssetApproval,
  AssetApprovalKey,
  AssetBalance,
  AssetDestroyWitness,
  AssetDetails,
  AssetMetadata,
  TAssetBalance,
  TAssetDepositBalance,
} from "@polkadot/types/interfaces/assets";
import type {
  BlockAttestations,
  IncludedBlocks,
  MoreAttestations,
} from "@polkadot/types/interfaces/attestations";
import type { RawAuraPreDigest } from "@polkadot/types/interfaces/aura";
import type {
  ExtrinsicOrHash,
  ExtrinsicStatus,
} from "@polkadot/types/interfaces/author";
import type { UncleEntryItem } from "@polkadot/types/interfaces/authorship";
import type {
  AllowedSlots,
  BabeAuthorityWeight,
  BabeBlockWeight,
  BabeEpochConfiguration,
  BabeEquivocationProof,
  BabeWeight,
  EpochAuthorship,
  MaybeRandomness,
  MaybeVrf,
  NextConfigDescriptor,
  NextConfigDescriptorV1,
  Randomness,
  RawBabePreDigest,
  RawBabePreDigestCompat,
  RawBabePreDigestPrimary,
  RawBabePreDigestPrimaryTo159,
  RawBabePreDigestSecondaryPlain,
  RawBabePreDigestSecondaryTo159,
  RawBabePreDigestSecondaryVRF,
  RawBabePreDigestTo159,
  SlotNumber,
  VrfData,
  VrfOutput,
  VrfProof,
} from "@polkadot/types/interfaces/babe";
import type {
  AccountData,
  BalanceLock,
  BalanceLockTo212,
  BalanceStatus,
  Reasons,
  VestingSchedule,
  WithdrawReasons,
} from "@polkadot/types/interfaces/balances";
import type { BlockHash } from "@polkadot/types/interfaces/chain";
import type { PrefixedStorageKey } from "@polkadot/types/interfaces/childstate";
import type {
  EthereumAddress,
  StatementKind,
} from "@polkadot/types/interfaces/claims";
import type {
  CollectiveOrigin,
  MemberCount,
  ProposalIndex,
  Votes,
  VotesTo230,
} from "@polkadot/types/interfaces/collective";
import type {
  AuthorityId,
  RawVRFOutput,
} from "@polkadot/types/interfaces/consensus";
import type {
  AliveContractInfo,
  CodeHash,
  ContractCallRequest,
  ContractExecResult,
  ContractExecResultErr,
  ContractExecResultErrModule,
  ContractExecResultOk,
  ContractExecResultResult,
  ContractExecResultSuccessTo255,
  ContractExecResultSuccessTo260,
  ContractExecResultTo255,
  ContractExecResultTo260,
  ContractInfo,
  ContractStorageKey,
  DeletedContract,
  Gas,
  HostFnWeights,
  HostFnWeightsTo264,
  InstructionWeights,
  Limits,
  LimitsTo264,
  PrefabWasmModule,
  Schedule,
  ScheduleTo212,
  ScheduleTo258,
  ScheduleTo264,
  SeedOf,
  TombstoneContractInfo,
  TrieId,
} from "@polkadot/types/interfaces/contracts";
import type {
  ContractConstructorSpec,
  ContractContractSpec,
  ContractCryptoHasher,
  ContractDiscriminant,
  ContractDisplayName,
  ContractEventParamSpec,
  ContractEventSpec,
  ContractLayoutArray,
  ContractLayoutCell,
  ContractLayoutEnum,
  ContractLayoutHash,
  ContractLayoutHashingStrategy,
  ContractLayoutKey,
  ContractLayoutStruct,
  ContractLayoutStructField,
  ContractMessageParamSpec,
  ContractMessageSpec,
  ContractProject,
  ContractProjectContract,
  ContractProjectSource,
  ContractSelector,
  ContractStorageLayout,
  ContractTypeSpec,
} from "@polkadot/types/interfaces/contractsAbi";
import type {
  FundIndex,
  FundInfo,
  LastContribution,
  TrieIndex,
} from "@polkadot/types/interfaces/crowdloan";
import type {
  AccountVote,
  AccountVoteSplit,
  AccountVoteStandard,
  Conviction,
  Delegations,
  PreimageStatus,
  PreimageStatusAvailable,
  PriorLock,
  PropIndex,
  Proposal,
  ProxyState,
  ReferendumIndex,
  ReferendumInfo,
  ReferendumInfoFinished,
  ReferendumInfoTo239,
  ReferendumStatus,
  Tally,
  Voting,
  VotingDelegating,
  VotingDirect,
  VotingDirectVote,
} from "@polkadot/types/interfaces/democracy";
import type {
  ApprovalFlag,
  DefunctVoter,
  Renouncing,
  SetIndex,
  Vote,
  VoteIndex,
  VoteThreshold,
  VoterInfo,
} from "@polkadot/types/interfaces/elections";
import type {
  CreatedBlock,
  ImportedAux,
} from "@polkadot/types/interfaces/engine";
import type {
  EthAccount,
  EthBlock,
  EthBloom,
  EthCallRequest,
  EthFilter,
  EthFilterAddress,
  EthFilterChanges,
  EthFilterTopic,
  EthFilterTopicEntry,
  EthFilterTopicInner,
  EthHeader,
  EthLog,
  EthReceipt,
  EthRichBlock,
  EthRichHeader,
  EthStorageProof,
  EthSubKind,
  EthSubParams,
  EthSubResult,
  EthSyncInfo,
  EthSyncStatus,
  EthTransaction,
  EthTransactionAction,
  EthTransactionCondition,
  EthTransactionRequest,
  EthTransactionStatus,
  EthWork,
  EthereumAccountId,
  EthereumLookupSource,
  EthereumSignature,
} from "@polkadot/types/interfaces/eth";
import type {
  EvmAccount,
  EvmLog,
  EvmVicinity,
  ExitError,
  ExitFatal,
  ExitReason,
  ExitRevert,
  ExitSucceed,
} from "@polkadot/types/interfaces/evm";
import type {
  AnySignature,
  EcdsaSignature,
  Ed25519Signature,
  Extrinsic,
  ExtrinsicEra,
  ExtrinsicPayload,
  ExtrinsicPayloadUnknown,
  ExtrinsicPayloadV4,
  ExtrinsicSignature,
  ExtrinsicSignatureV4,
  ExtrinsicUnknown,
  ExtrinsicV4,
  ImmortalEra,
  MortalEra,
  MultiSignature,
  Signature,
  SignerPayload,
  Sr25519Signature,
} from "@polkadot/types/interfaces/extrinsics";
import type {
  AssetOptions,
  Owner,
  PermissionLatest,
  PermissionVersions,
  PermissionsV1,
} from "@polkadot/types/interfaces/genericAsset";
import type {
  ActiveGilt,
  ActiveGiltsTotal,
  ActiveIndex,
  GiltBid,
} from "@polkadot/types/interfaces/gilt";
import type {
  AuthorityIndex,
  AuthorityList,
  AuthorityWeight,
  EncodedFinalityProofs,
  GrandpaEquivocation,
  GrandpaEquivocationProof,
  GrandpaEquivocationValue,
  GrandpaPrevote,
  JustificationNotification,
  KeyOwnerProof,
  NextAuthority,
  PendingPause,
  PendingResume,
  Precommits,
  Prevotes,
  ReportedRoundStates,
  RoundState,
  SetId,
  StoredPendingChange,
  StoredState,
} from "@polkadot/types/interfaces/grandpa";
import type {
  IdentityFields,
  IdentityInfo,
  IdentityInfoAdditional,
  IdentityJudgement,
  RegistrarIndex,
  RegistrarInfo,
  Registration,
  RegistrationJudgement,
} from "@polkadot/types/interfaces/identity";
import type {
  AuthIndex,
  AuthoritySignature,
  Heartbeat,
  HeartbeatTo244,
  OpaqueMultiaddr,
  OpaqueNetworkState,
  OpaquePeerId,
} from "@polkadot/types/interfaces/imOnline";
import type {
  CallIndex,
  LotteryConfig,
} from "@polkadot/types/interfaces/lottery";
import type {
  DoubleMapTypeLatest,
  DoubleMapTypeV10,
  DoubleMapTypeV11,
  DoubleMapTypeV12,
  DoubleMapTypeV9,
  ErrorMetadataLatest,
  ErrorMetadataV10,
  ErrorMetadataV11,
  ErrorMetadataV12,
  ErrorMetadataV9,
  EventMetadataLatest,
  EventMetadataV10,
  EventMetadataV11,
  EventMetadataV12,
  EventMetadataV9,
  ExtrinsicMetadataLatest,
  ExtrinsicMetadataV11,
  ExtrinsicMetadataV12,
  FunctionArgumentMetadataLatest,
  FunctionArgumentMetadataV10,
  FunctionArgumentMetadataV11,
  FunctionArgumentMetadataV12,
  FunctionArgumentMetadataV9,
  FunctionMetadataLatest,
  FunctionMetadataV10,
  FunctionMetadataV11,
  FunctionMetadataV12,
  FunctionMetadataV9,
  MapTypeLatest,
  MapTypeV10,
  MapTypeV11,
  MapTypeV12,
  MapTypeV9,
  MetadataAll,
  MetadataLatest,
  MetadataV10,
  MetadataV11,
  MetadataV12,
  MetadataV9,
  ModuleConstantMetadataLatest,
  ModuleConstantMetadataV10,
  ModuleConstantMetadataV11,
  ModuleConstantMetadataV12,
  ModuleConstantMetadataV9,
  ModuleMetadataLatest,
  ModuleMetadataV10,
  ModuleMetadataV11,
  ModuleMetadataV12,
  ModuleMetadataV9,
  StorageEntryMetadataLatest,
  StorageEntryMetadataV10,
  StorageEntryMetadataV11,
  StorageEntryMetadataV12,
  StorageEntryMetadataV9,
  StorageEntryModifierLatest,
  StorageEntryModifierV10,
  StorageEntryModifierV11,
  StorageEntryModifierV12,
  StorageEntryModifierV9,
  StorageEntryTypeLatest,
  StorageEntryTypeV10,
  StorageEntryTypeV11,
  StorageEntryTypeV12,
  StorageEntryTypeV9,
  StorageHasher,
  StorageHasherV10,
  StorageHasherV11,
  StorageHasherV12,
  StorageHasherV9,
  StorageMetadataLatest,
  StorageMetadataV10,
  StorageMetadataV11,
  StorageMetadataV12,
  StorageMetadataV9,
} from "@polkadot/types/interfaces/metadata";
import type { MmrLeafProof } from "@polkadot/types/interfaces/mmr";
import type { StorageKind } from "@polkadot/types/interfaces/offchain";
import type {
  DeferredOffenceOf,
  Kind,
  OffenceDetails,
  Offender,
  OpaqueTimeSlot,
  ReportIdOf,
  Reporter,
} from "@polkadot/types/interfaces/offences";
import type {
  AbridgedCandidateReceipt,
  AbridgedHostConfiguration,
  AbridgedHrmpChannel,
  AbstractFungible,
  AbstractNonFungible,
  AccountId32Junction,
  AccountIndex64Junction,
  AccountKey20Junction,
  AssetInstance,
  AssignmentId,
  AssignmentKind,
  AttestedCandidate,
  AuctionIndex,
  AuthorityDiscoveryId,
  AvailabilityBitfield,
  AvailabilityBitfieldRecord,
  BackedCandidate,
  Balances,
  Bidder,
  BufferedSessionChange,
  CandidateCommitments,
  CandidateDescriptor,
  CandidateHash,
  CandidatePendingAvailability,
  CandidateReceipt,
  CollatorId,
  CollatorSignature,
  CommittedCandidateReceipt,
  ConcreteFungible,
  ConcreteNonFungible,
  CoreAssignment,
  CoreIndex,
  CoreOccupied,
  DepositAsset,
  DepositReserveAsset,
  DoubleVoteReport,
  DownwardMessage,
  ExchangeAsset,
  GlobalValidationSchedule,
  GroupIndex,
  HeadData,
  HostConfiguration,
  HrmpChannel,
  HrmpChannelId,
  HrmpOpenChannelRequest,
  InboundDownwardMessage,
  InboundHrmpMessage,
  InboundHrmpMessages,
  IncomingParachain,
  IncomingParachainDeploy,
  IncomingParachainFixed,
  InitiateReserveWithdraw,
  InitiateTeleport,
  Junction,
  LeasePeriod,
  LeasePeriodOf,
  LocalValidationData,
  MessageIngestionType,
  MessageQueueChain,
  MessagingStateSnapshot,
  MessagingStateSnapshotEgressEntry,
  MultiAsset,
  MultiLocation,
  NetworkId,
  NewBidder,
  Order,
  OriginKind,
  OutboundHrmpMessage,
  ParaGenesisArgs,
  ParaId,
  ParaInfo,
  ParaLifecycle,
  ParaPastCodeMeta,
  ParaScheduling,
  ParaValidatorIndex,
  ParachainDispatchOrigin,
  ParachainInherentData,
  ParachainProposal,
  ParathreadClaim,
  ParathreadClaimQueue,
  ParathreadEntry,
  PersistedValidationData,
  QueryHolding,
  QueuedParathread,
  RegisteredParachainInfo,
  RelayChainBlockNumber,
  RelayChainHash,
  RelayTo,
  RelayedFrom,
  Remark,
  ReserveAssetDeposit,
  Retriable,
  Scheduling,
  SessionInfo,
  SessionInfoValidatorGroup,
  SignedAvailabilityBitfield,
  SignedAvailabilityBitfields,
  SigningContext,
  SlotRange,
  Statement,
  SubId,
  SystemInherentData,
  TeleportAsset,
  Transact,
  TransientValidationData,
  UpwardMessage,
  ValidationCode,
  ValidationData,
  ValidationDataType,
  ValidationFunctionParams,
  ValidatorSignature,
  ValidityAttestation,
  VecInboundHrmpMessage,
  VersionedMultiAsset,
  VersionedMultiLocation,
  VersionedXcm,
  WinnersData,
  WinnersDataTuple,
  WinningData,
  WinningDataEntry,
  WithdrawAsset,
  Xcm,
  XcmError,
  XcmResult,
} from "@polkadot/types/interfaces/parachains";
import type {
  FeeDetails,
  InclusionFee,
  RuntimeDispatchInfo,
} from "@polkadot/types/interfaces/payment";
import type { Approvals } from "@polkadot/types/interfaces/poll";
import type {
  ProxyAnnouncement,
  ProxyDefinition,
  ProxyType,
} from "@polkadot/types/interfaces/proxy";
import type {
  AccountStatus,
  AccountValidity,
} from "@polkadot/types/interfaces/purchase";
import type {
  ActiveRecovery,
  RecoveryConfig,
} from "@polkadot/types/interfaces/recovery";
import type { RpcMethods } from "@polkadot/types/interfaces/rpc";
import type {
  AccountId,
  AccountIdOf,
  AccountIndex,
  Address,
  AssetId,
  Balance,
  BalanceOf,
  Block,
  BlockNumber,
  Call,
  CallHash,
  CallHashOf,
  ChangesTrieConfiguration,
  CodecHash,
  Consensus,
  ConsensusEngineId,
  Digest,
  DigestItem,
  EncodedJustification,
  ExtrinsicsWeight,
  Fixed128,
  Fixed64,
  FixedI128,
  FixedI64,
  FixedU128,
  FixedU64,
  H1024,
  H128,
  H160,
  H2048,
  H256,
  H512,
  H64,
  Hash,
  Header,
  I32F32,
  Index,
  IndicesLookupSource,
  Justification,
  Justifications,
  KeyTypeId,
  KeyValue,
  LockIdentifier,
  LookupSource,
  LookupTarget,
  ModuleId,
  Moment,
  MultiAddress,
  MultiSigner,
  OpaqueCall,
  Origin,
  OriginCaller,
  PalletVersion,
  PalletsOrigin,
  Pays,
  PerU16,
  Perbill,
  Percent,
  Permill,
  Perquintill,
  Phantom,
  PhantomData,
  PreRuntime,
  Releases,
  RuntimeDbWeight,
  Seal,
  SealV0,
  SignedBlock,
  SignedBlockWithJustification,
  SignedBlockWithJustifications,
  Slot,
  StorageData,
  StorageProof,
  TransactionPriority,
  U32F32,
  ValidatorId,
  ValidatorIdOf,
  Weight,
  WeightMultiplier,
} from "@polkadot/types/interfaces/runtime";
import type {
  SiField,
  SiLookupTypeId,
  SiPath,
  SiType,
  SiTypeDef,
  SiTypeDefArray,
  SiTypeDefComposite,
  SiTypeDefPrimitive,
  SiTypeDefSequence,
  SiTypeDefTuple,
  SiTypeDefVariant,
  SiVariant,
} from "@polkadot/types/interfaces/scaleInfo";
import type {
  Period,
  Priority,
  SchedulePeriod,
  SchedulePriority,
  Scheduled,
  ScheduledTo254,
  TaskAddress,
} from "@polkadot/types/interfaces/scheduler";
import type {
  FullIdentification,
  IdentificationTuple,
  Keys,
  MembershipProof,
  SessionIndex,
  SessionKeys1,
  SessionKeys2,
  SessionKeys3,
  SessionKeys4,
  SessionKeys5,
  SessionKeys6,
  SessionKeys7,
  SessionKeys8,
  SessionKeys9,
  ValidatorCount,
} from "@polkadot/types/interfaces/session";
import type {
  Bid,
  BidKind,
  SocietyJudgement,
  SocietyVote,
  StrikeCount,
  VouchingStatus,
} from "@polkadot/types/interfaces/society";
import type {
  ActiveEraInfo,
  CompactAssignments,
  CompactAssignmentsTo257,
  CompactScore,
  CompactScoreCompact,
  ElectionCompute,
  ElectionPhase,
  ElectionResult,
  ElectionScore,
  ElectionSize,
  ElectionStatus,
  EraIndex,
  EraPoints,
  EraRewardPoints,
  EraRewards,
  Exposure,
  ExtendedBalance,
  Forcing,
  IndividualExposure,
  KeyType,
  MomentOf,
  Nominations,
  NominatorIndex,
  NominatorIndexCompact,
  OffchainAccuracy,
  OffchainAccuracyCompact,
  PhragmenScore,
  Points,
  RawSolution,
  ReadySolution,
  RewardDestination,
  RewardPoint,
  RoundSnapshot,
  SeatHolder,
  SlashJournalEntry,
  SlashingSpans,
  SlashingSpansTo204,
  SolutionOrSnapshotSize,
  SolutionSupport,
  SolutionSupports,
  SpanIndex,
  SpanRecord,
  StakingLedger,
  StakingLedgerTo223,
  StakingLedgerTo240,
  UnappliedSlash,
  UnappliedSlashOther,
  UnlockChunk,
  ValidatorIndex,
  ValidatorIndexCompact,
  ValidatorPrefs,
  ValidatorPrefsTo145,
  ValidatorPrefsTo196,
  ValidatorPrefsWithBlocked,
  ValidatorPrefsWithCommission,
  VoteWeight,
  Voter,
} from "@polkadot/types/interfaces/staking";
import type {
  ApiId,
  KeyValueOption,
  ReadProof,
  RuntimeVersion,
  RuntimeVersionApi,
  StorageChangeSet,
} from "@polkadot/types/interfaces/state";
import type { WeightToFeeCoefficient } from "@polkadot/types/interfaces/support";
import type {
  AccountInfo,
  AccountInfoWithDualRefCount,
  AccountInfoWithProviders,
  AccountInfoWithRefCount,
  AccountInfoWithTripleRefCount,
  ApplyExtrinsicResult,
  BlockLength,
  BlockWeights,
  ChainProperties,
  ChainType,
  ConsumedWeight,
  DigestOf,
  DispatchClass,
  DispatchError,
  DispatchErrorModule,
  DispatchErrorTo198,
  DispatchInfo,
  DispatchInfoTo190,
  DispatchInfoTo244,
  DispatchOutcome,
  DispatchResult,
  DispatchResultOf,
  DispatchResultTo198,
  Event,
  EventId,
  EventIndex,
  EventRecord,
  Health,
  InvalidTransaction,
  Key,
  LastRuntimeUpgradeInfo,
  NetworkState,
  NetworkStatePeerset,
  NetworkStatePeersetInfo,
  NodeRole,
  NotConnectedPeer,
  Peer,
  PeerEndpoint,
  PeerEndpointAddr,
  PeerInfo,
  PeerPing,
  PerDispatchClassU32,
  PerDispatchClassWeight,
  PerDispatchClassWeightsPerClass,
  Phase,
  RawOrigin,
  RefCount,
  RefCountTo259,
  SyncState,
  SystemOrigin,
  TransactionValidityError,
  UnknownTransaction,
  WeightPerClass,
} from "@polkadot/types/interfaces/system";
import type {
  Bounty,
  BountyIndex,
  BountyStatus,
  BountyStatusActive,
  BountyStatusCuratorProposed,
  BountyStatusPendingPayout,
  OpenTip,
  OpenTipFinderTo225,
  OpenTipTip,
  OpenTipTo225,
  TreasuryProposal,
} from "@polkadot/types/interfaces/treasury";
import type { Multiplier } from "@polkadot/types/interfaces/txpayment";
import type { Multisig, Timepoint } from "@polkadot/types/interfaces/utility";
import type { VestingInfo } from "@polkadot/types/interfaces/vesting";
import type {
  ChainId,
  DepositNonce,
  Erc721Token,
  ProposalStatus,
  ProposalVotes,
  ResourceId,
  TokenId,
} from "./assetsHandler";
import type {
  AddrStr,
  Amount,
  AmountOf,
  AssetInfo,
  AssetLedger,
  AssetRestriction,
  AssetRestrictions,
  AssetType,
  BondRequirement,
  BtcDepositCache,
  BtcHeader,
  BtcHeaderIndex,
  BtcHeaderInfo,
  BtcNetwork,
  BtcParams,
  BtcPartialMerkleTree,
  BtcRelayedTxInfo,
  BtcTransaction,
  BtcTrusteeAddrInfo,
  BtcTrusteeIntentionProps,
  BtcTrusteeSessionInfo,
  BtcTrusteeType,
  BtcTxResult,
  BtcTxState,
  BtcTxType,
  BtcTxVerifier,
  BtcVoteResult,
  BtcWithdrawalProposal,
  Chain,
  ChainAddress,
  ClaimRestriction,
  CurrencyId,
  CurrencyPair,
  Decimals,
  Depth,
  Desc,
  FixedAssetPower,
  FullPairInfo,
  GenericTrusteeIntentionProps,
  GenericTrusteeSessionInfo,
  GlobalDistribution,
  Handicap,
  HandicapInfo,
  LockedType,
  Memo,
  MinerLedger,
  MiningAssetInfo,
  MiningDistribution,
  MiningWeight,
  NetworkType,
  NominatorLedger,
  OrderExecutedInfo,
  OrderId,
  OrderInfo,
  OrderProperty,
  OrderStatus,
  OrderType,
  Page,
  Price,
  PriceFluctuation,
  ReferralId,
  RpcBalance,
  RpcFeeDetails,
  RpcInclusionFee,
  RpcMiningDividendInfo,
  RpcMiningWeight,
  RpcOrder,
  RpcPrice,
  RpcTotalAssetInfo,
  RpcVoteWeight,
  RpcWithdrawalRecord,
  Side,
  StakingRequirement,
  String,
  Token,
  TotalAssetInfo,
  TradingHistoryIndex,
  TradingPairId,
  TradingPairInfo,
  TradingPairProfile,
  TrusteeInfoConfig,
  Unbonded,
  UnbondedIndex,
  ValidatorInfo,
  ValidatorLedger,
  ValidatorProfile,
  WithdrawalLimit,
  WithdrawalRecord,
  WithdrawalRecordId,
  WithdrawalRecordOf,
  WithdrawalState,
} from "./chainx";
import type {
  BlockNumberFor,
  BtcAddress,
  CurrencyIdOf,
  ErrorCode,
  IssueRequest,
  PerDispatchClass,
  RedeemRequest,
  RequestId,
  RpcVaultInfo,
  Status,
  SystemVault,
  TradingPrice,
  Vault,
  VaultStatus,
} from "./xGatewayBitcoinV2";

declare module "@polkadot/types/types/registry" {
  export interface InterfaceTypes {
    "Compact<AccountIndex>": Compact<AccountIndex>;
    "Compact<ActiveIndex>": Compact<ActiveIndex>;
    "Compact<ApprovalFlag>": Compact<ApprovalFlag>;
    "Compact<AssetId>": Compact<AssetId>;
    "Compact<AuctionIndex>": Compact<AuctionIndex>;
    "Compact<AuthIndex>": Compact<AuthIndex>;
    "Compact<AuthorityIndex>": Compact<AuthorityIndex>;
    "Compact<AuthorityWeight>": Compact<AuthorityWeight>;
    "Compact<BabeAuthorityWeight>": Compact<BabeAuthorityWeight>;
    "Compact<BabeBlockWeight>": Compact<BabeBlockWeight>;
    "Compact<BabeWeight>": Compact<BabeWeight>;
    "Compact<Balance>": Compact<Balance>;
    "Compact<BalanceOf>": Compact<BalanceOf>;
    "Compact<BlockNumber>": Compact<BlockNumber>;
    "Compact<BlockNumberFor>": Compact<BlockNumberFor>;
    "Compact<BountyIndex>": Compact<BountyIndex>;
    "Compact<ChainId>": Compact<ChainId>;
    "Compact<ConsensusEngineId>": Compact<ConsensusEngineId>;
    "Compact<ContractDiscriminant>": Compact<ContractDiscriminant>;
    "Compact<CoreIndex>": Compact<CoreIndex>;
    "Compact<CurrencyId>": Compact<CurrencyId>;
    "Compact<CurrencyIdOf>": Compact<CurrencyIdOf>;
    "Compact<Decimals>": Compact<Decimals>;
    "Compact<DepositNonce>": Compact<DepositNonce>;
    "Compact<EraIndex>": Compact<EraIndex>;
    "Compact<EventIndex>": Compact<EventIndex>;
    "Compact<ExtendedBalance>": Compact<ExtendedBalance>;
    "Compact<FixedAssetPower>": Compact<FixedAssetPower>;
    "Compact<FixedU128>": Compact<FixedU128>;
    "Compact<FixedU64>": Compact<FixedU64>;
    "Compact<FundIndex>": Compact<FundIndex>;
    "Compact<Gas>": Compact<Gas>;
    "Compact<GroupIndex>": Compact<GroupIndex>;
    "Compact<Index>": Compact<Index>;
    "Compact<KeyTypeId>": Compact<KeyTypeId>;
    "Compact<LeasePeriod>": Compact<LeasePeriod>;
    "Compact<LeasePeriodOf>": Compact<LeasePeriodOf>;
    "Compact<MemberCount>": Compact<MemberCount>;
    "Compact<MiningWeight>": Compact<MiningWeight>;
    "Compact<Moment>": Compact<Moment>;
    "Compact<MomentOf>": Compact<MomentOf>;
    "Compact<NominatorIndex>": Compact<NominatorIndex>;
    "Compact<OffchainAccuracy>": Compact<OffchainAccuracy>;
    "Compact<OrderId>": Compact<OrderId>;
    "Compact<ParaId>": Compact<ParaId>;
    "Compact<ParaValidatorIndex>": Compact<ParaValidatorIndex>;
    "Compact<Perbill>": Compact<Perbill>;
    "Compact<Percent>": Compact<Percent>;
    "Compact<Permill>": Compact<Permill>;
    "Compact<Perquintill>": Compact<Perquintill>;
    "Compact<PerU16>": Compact<PerU16>;
    "Compact<Points>": Compact<Points>;
    "Compact<Price>": Compact<Price>;
    "Compact<PriceFluctuation>": Compact<PriceFluctuation>;
    "Compact<Priority>": Compact<Priority>;
    "Compact<PropIndex>": Compact<PropIndex>;
    "Compact<ProposalIndex>": Compact<ProposalIndex>;
    "Compact<RefCount>": Compact<RefCount>;
    "Compact<RefCountTo259>": Compact<RefCountTo259>;
    "Compact<ReferendumIndex>": Compact<ReferendumIndex>;
    "Compact<RegistrarIndex>": Compact<RegistrarIndex>;
    "Compact<RelayChainBlockNumber>": Compact<RelayChainBlockNumber>;
    "Compact<RequestId>": Compact<RequestId>;
    "Compact<RewardPoint>": Compact<RewardPoint>;
    "Compact<SchedulePriority>": Compact<SchedulePriority>;
    "Compact<SessionIndex>": Compact<SessionIndex>;
    "Compact<SetId>": Compact<SetId>;
    "Compact<SetIndex>": Compact<SetIndex>;
    "Compact<SiLookupTypeId>": Compact<SiLookupTypeId>;
    "Compact<Slot>": Compact<Slot>;
    "Compact<SlotNumber>": Compact<SlotNumber>;
    "Compact<SpanIndex>": Compact<SpanIndex>;
    "Compact<StakingRequirement>": Compact<StakingRequirement>;
    "Compact<StrikeCount>": Compact<StrikeCount>;
    "Compact<SubId>": Compact<SubId>;
    "Compact<TAssetBalance>": Compact<TAssetBalance>;
    "Compact<TAssetDepositBalance>": Compact<TAssetDepositBalance>;
    "Compact<TokenId>": Compact<TokenId>;
    "Compact<TradingHistoryIndex>": Compact<TradingHistoryIndex>;
    "Compact<TradingPairId>": Compact<TradingPairId>;
    "Compact<TransactionPriority>": Compact<TransactionPriority>;
    "Compact<TrieIndex>": Compact<TrieIndex>;
    "Compact<u128>": Compact<u128>;
    "Compact<U128>": Compact<U128>;
    "Compact<u16>": Compact<u16>;
    "Compact<U16>": Compact<U16>;
    "Compact<u256>": Compact<u256>;
    "Compact<U256>": Compact<U256>;
    "Compact<u32>": Compact<u32>;
    "Compact<U32>": Compact<U32>;
    "Compact<U32F32>": Compact<U32F32>;
    "Compact<u64>": Compact<u64>;
    "Compact<U64>": Compact<U64>;
    "Compact<u8>": Compact<u8>;
    "Compact<U8>": Compact<U8>;
    "Compact<UnbondedIndex>": Compact<UnbondedIndex>;
    "Compact<usize>": Compact<usize>;
    "Compact<USize>": Compact<USize>;
    "Compact<ValidatorCount>": Compact<ValidatorCount>;
    "Compact<ValidatorIndex>": Compact<ValidatorIndex>;
    "Compact<VoteIndex>": Compact<VoteIndex>;
    "Compact<VoteWeight>": Compact<VoteWeight>;
    "Compact<Weight>": Compact<Weight>;
    "Compact<WithdrawalRecordId>": Compact<WithdrawalRecordId>;
    "Option<AbridgedCandidateReceipt>": Option<AbridgedCandidateReceipt>;
    "Option<AbridgedHostConfiguration>": Option<AbridgedHostConfiguration>;
    "Option<AbridgedHrmpChannel>": Option<AbridgedHrmpChannel>;
    "Option<AbstractFungible>": Option<AbstractFungible>;
    "Option<AbstractNonFungible>": Option<AbstractNonFungible>;
    "Option<AccountData>": Option<AccountData>;
    "Option<AccountId>": Option<AccountId>;
    "Option<AccountId32Junction>": Option<AccountId32Junction>;
    "Option<AccountIdOf>": Option<AccountIdOf>;
    "Option<AccountIndex>": Option<AccountIndex>;
    "Option<AccountIndex64Junction>": Option<AccountIndex64Junction>;
    "Option<AccountInfo>": Option<AccountInfo>;
    "Option<AccountInfoWithDualRefCount>": Option<AccountInfoWithDualRefCount>;
    "Option<AccountInfoWithProviders>": Option<AccountInfoWithProviders>;
    "Option<AccountInfoWithRefCount>": Option<AccountInfoWithRefCount>;
    "Option<AccountInfoWithTripleRefCount>": Option<AccountInfoWithTripleRefCount>;
    "Option<AccountKey20Junction>": Option<AccountKey20Junction>;
    "Option<AccountStatus>": Option<AccountStatus>;
    "Option<AccountValidity>": Option<AccountValidity>;
    "Option<AccountVote>": Option<AccountVote>;
    "Option<AccountVoteSplit>": Option<AccountVoteSplit>;
    "Option<AccountVoteStandard>": Option<AccountVoteStandard>;
    "Option<ActiveEraInfo>": Option<ActiveEraInfo>;
    "Option<ActiveGilt>": Option<ActiveGilt>;
    "Option<ActiveGiltsTotal>": Option<ActiveGiltsTotal>;
    "Option<ActiveIndex>": Option<ActiveIndex>;
    "Option<ActiveRecovery>": Option<ActiveRecovery>;
    "Option<Address>": Option<Address>;
    "Option<AddrStr>": Option<AddrStr>;
    "Option<AliveContractInfo>": Option<AliveContractInfo>;
    "Option<AllowedSlots>": Option<AllowedSlots>;
    "Option<Amount>": Option<Amount>;
    "Option<AmountOf>": Option<AmountOf>;
    "Option<AnySignature>": Option<AnySignature>;
    "Option<ApiId>": Option<ApiId>;
    "Option<ApplyExtrinsicResult>": Option<ApplyExtrinsicResult>;
    "Option<ApprovalFlag>": Option<ApprovalFlag>;
    "Option<Approvals>": Option<Approvals>;
    "Option<AssetApproval>": Option<AssetApproval>;
    "Option<AssetApprovalKey>": Option<AssetApprovalKey>;
    "Option<AssetBalance>": Option<AssetBalance>;
    "Option<AssetDestroyWitness>": Option<AssetDestroyWitness>;
    "Option<AssetDetails>": Option<AssetDetails>;
    "Option<AssetId>": Option<AssetId>;
    "Option<AssetInfo>": Option<AssetInfo>;
    "Option<AssetInstance>": Option<AssetInstance>;
    "Option<AssetLedger>": Option<AssetLedger>;
    "Option<AssetMetadata>": Option<AssetMetadata>;
    "Option<AssetOptions>": Option<AssetOptions>;
    "Option<AssetRestriction>": Option<AssetRestriction>;
    "Option<AssetRestrictions>": Option<AssetRestrictions>;
    "Option<AssetType>": Option<AssetType>;
    "Option<AssignmentId>": Option<AssignmentId>;
    "Option<AssignmentKind>": Option<AssignmentKind>;
    "Option<AttestedCandidate>": Option<AttestedCandidate>;
    "Option<AuctionIndex>": Option<AuctionIndex>;
    "Option<AuthIndex>": Option<AuthIndex>;
    "Option<AuthorityDiscoveryId>": Option<AuthorityDiscoveryId>;
    "Option<AuthorityId>": Option<AuthorityId>;
    "Option<AuthorityIndex>": Option<AuthorityIndex>;
    "Option<AuthorityList>": Option<AuthorityList>;
    "Option<AuthoritySignature>": Option<AuthoritySignature>;
    "Option<AuthorityWeight>": Option<AuthorityWeight>;
    "Option<AvailabilityBitfield>": Option<AvailabilityBitfield>;
    "Option<AvailabilityBitfieldRecord>": Option<AvailabilityBitfieldRecord>;
    "Option<BabeAuthorityWeight>": Option<BabeAuthorityWeight>;
    "Option<BabeBlockWeight>": Option<BabeBlockWeight>;
    "Option<BabeEpochConfiguration>": Option<BabeEpochConfiguration>;
    "Option<BabeEquivocationProof>": Option<BabeEquivocationProof>;
    "Option<BabeWeight>": Option<BabeWeight>;
    "Option<BackedCandidate>": Option<BackedCandidate>;
    "Option<Balance>": Option<Balance>;
    "Option<BalanceLock>": Option<BalanceLock>;
    "Option<BalanceLockTo212>": Option<BalanceLockTo212>;
    "Option<BalanceOf>": Option<BalanceOf>;
    "Option<Balances>": Option<Balances>;
    "Option<BalanceStatus>": Option<BalanceStatus>;
    "Option<Bid>": Option<Bid>;
    "Option<Bidder>": Option<Bidder>;
    "Option<BidKind>": Option<BidKind>;
    "Option<BitVec>": Option<BitVec>;
    "Option<Block>": Option<Block>;
    "Option<BlockAttestations>": Option<BlockAttestations>;
    "Option<BlockHash>": Option<BlockHash>;
    "Option<BlockLength>": Option<BlockLength>;
    "Option<BlockNumber>": Option<BlockNumber>;
    "Option<BlockNumberFor>": Option<BlockNumberFor>;
    "Option<BlockWeights>": Option<BlockWeights>;
    "Option<BondRequirement>": Option<BondRequirement>;
    "Option<bool>": Option<bool>;
    "Option<Bool>": Option<Bool>;
    "Option<Bounty>": Option<Bounty>;
    "Option<BountyIndex>": Option<BountyIndex>;
    "Option<BountyStatus>": Option<BountyStatus>;
    "Option<BountyStatusActive>": Option<BountyStatusActive>;
    "Option<BountyStatusCuratorProposed>": Option<BountyStatusCuratorProposed>;
    "Option<BountyStatusPendingPayout>": Option<BountyStatusPendingPayout>;
    "Option<BtcAddress>": Option<BtcAddress>;
    "Option<BtcDepositCache>": Option<BtcDepositCache>;
    "Option<BtcHeader>": Option<BtcHeader>;
    "Option<BtcHeaderIndex>": Option<BtcHeaderIndex>;
    "Option<BtcHeaderInfo>": Option<BtcHeaderInfo>;
    "Option<BtcNetwork>": Option<BtcNetwork>;
    "Option<BtcParams>": Option<BtcParams>;
    "Option<BtcPartialMerkleTree>": Option<BtcPartialMerkleTree>;
    "Option<BtcRelayedTxInfo>": Option<BtcRelayedTxInfo>;
    "Option<BtcTransaction>": Option<BtcTransaction>;
    "Option<BtcTrusteeAddrInfo>": Option<BtcTrusteeAddrInfo>;
    "Option<BtcTrusteeIntentionProps>": Option<BtcTrusteeIntentionProps>;
    "Option<BtcTrusteeSessionInfo>": Option<BtcTrusteeSessionInfo>;
    "Option<BtcTrusteeType>": Option<BtcTrusteeType>;
    "Option<BtcTxResult>": Option<BtcTxResult>;
    "Option<BtcTxState>": Option<BtcTxState>;
    "Option<BtcTxType>": Option<BtcTxType>;
    "Option<BtcTxVerifier>": Option<BtcTxVerifier>;
    "Option<BtcVoteResult>": Option<BtcVoteResult>;
    "Option<BtcWithdrawalProposal>": Option<BtcWithdrawalProposal>;
    "Option<BufferedSessionChange>": Option<BufferedSessionChange>;
    "Option<Bytes>": Option<Bytes>;
    "Option<Call>": Option<Call>;
    "Option<CallHash>": Option<CallHash>;
    "Option<CallHashOf>": Option<CallHashOf>;
    "Option<CallIndex>": Option<CallIndex>;
    "Option<CandidateCommitments>": Option<CandidateCommitments>;
    "Option<CandidateDescriptor>": Option<CandidateDescriptor>;
    "Option<CandidateHash>": Option<CandidateHash>;
    "Option<CandidatePendingAvailability>": Option<CandidatePendingAvailability>;
    "Option<CandidateReceipt>": Option<CandidateReceipt>;
    "Option<Chain>": Option<Chain>;
    "Option<ChainAddress>": Option<ChainAddress>;
    "Option<ChainId>": Option<ChainId>;
    "Option<ChainProperties>": Option<ChainProperties>;
    "Option<ChainType>": Option<ChainType>;
    "Option<ChangesTrieConfiguration>": Option<ChangesTrieConfiguration>;
    "Option<ClaimRestriction>": Option<ClaimRestriction>;
    "Option<CodecHash>": Option<CodecHash>;
    "Option<CodeHash>": Option<CodeHash>;
    "Option<CollatorId>": Option<CollatorId>;
    "Option<CollatorSignature>": Option<CollatorSignature>;
    "Option<CollectiveOrigin>": Option<CollectiveOrigin>;
    "Option<CommittedCandidateReceipt>": Option<CommittedCandidateReceipt>;
    "Option<CompactAssignments>": Option<CompactAssignments>;
    "Option<CompactAssignmentsTo257>": Option<CompactAssignmentsTo257>;
    "Option<CompactScore>": Option<CompactScore>;
    "Option<CompactScoreCompact>": Option<CompactScoreCompact>;
    "Option<ConcreteFungible>": Option<ConcreteFungible>;
    "Option<ConcreteNonFungible>": Option<ConcreteNonFungible>;
    "Option<Consensus>": Option<Consensus>;
    "Option<ConsensusEngineId>": Option<ConsensusEngineId>;
    "Option<ConsumedWeight>": Option<ConsumedWeight>;
    "Option<ContractCallRequest>": Option<ContractCallRequest>;
    "Option<ContractConstructorSpec>": Option<ContractConstructorSpec>;
    "Option<ContractContractSpec>": Option<ContractContractSpec>;
    "Option<ContractCryptoHasher>": Option<ContractCryptoHasher>;
    "Option<ContractDiscriminant>": Option<ContractDiscriminant>;
    "Option<ContractDisplayName>": Option<ContractDisplayName>;
    "Option<ContractEventParamSpec>": Option<ContractEventParamSpec>;
    "Option<ContractEventSpec>": Option<ContractEventSpec>;
    "Option<ContractExecResult>": Option<ContractExecResult>;
    "Option<ContractExecResultErr>": Option<ContractExecResultErr>;
    "Option<ContractExecResultErrModule>": Option<ContractExecResultErrModule>;
    "Option<ContractExecResultOk>": Option<ContractExecResultOk>;
    "Option<ContractExecResultResult>": Option<ContractExecResultResult>;
    "Option<ContractExecResultSuccessTo255>": Option<ContractExecResultSuccessTo255>;
    "Option<ContractExecResultSuccessTo260>": Option<ContractExecResultSuccessTo260>;
    "Option<ContractExecResultTo255>": Option<ContractExecResultTo255>;
    "Option<ContractExecResultTo260>": Option<ContractExecResultTo260>;
    "Option<ContractInfo>": Option<ContractInfo>;
    "Option<ContractLayoutArray>": Option<ContractLayoutArray>;
    "Option<ContractLayoutCell>": Option<ContractLayoutCell>;
    "Option<ContractLayoutEnum>": Option<ContractLayoutEnum>;
    "Option<ContractLayoutHash>": Option<ContractLayoutHash>;
    "Option<ContractLayoutHashingStrategy>": Option<ContractLayoutHashingStrategy>;
    "Option<ContractLayoutKey>": Option<ContractLayoutKey>;
    "Option<ContractLayoutStruct>": Option<ContractLayoutStruct>;
    "Option<ContractLayoutStructField>": Option<ContractLayoutStructField>;
    "Option<ContractMessageParamSpec>": Option<ContractMessageParamSpec>;
    "Option<ContractMessageSpec>": Option<ContractMessageSpec>;
    "Option<ContractProject>": Option<ContractProject>;
    "Option<ContractProjectContract>": Option<ContractProjectContract>;
    "Option<ContractProjectSource>": Option<ContractProjectSource>;
    "Option<ContractSelector>": Option<ContractSelector>;
    "Option<ContractStorageKey>": Option<ContractStorageKey>;
    "Option<ContractStorageLayout>": Option<ContractStorageLayout>;
    "Option<ContractTypeSpec>": Option<ContractTypeSpec>;
    "Option<Conviction>": Option<Conviction>;
    "Option<CoreAssignment>": Option<CoreAssignment>;
    "Option<CoreIndex>": Option<CoreIndex>;
    "Option<CoreOccupied>": Option<CoreOccupied>;
    "Option<CreatedBlock>": Option<CreatedBlock>;
    "Option<CurrencyId>": Option<CurrencyId>;
    "Option<CurrencyIdOf>": Option<CurrencyIdOf>;
    "Option<CurrencyPair>": Option<CurrencyPair>;
    "Option<Data>": Option<Data>;
    "Option<Decimals>": Option<Decimals>;
    "Option<DeferredOffenceOf>": Option<DeferredOffenceOf>;
    "Option<DefunctVoter>": Option<DefunctVoter>;
    "Option<Delegations>": Option<Delegations>;
    "Option<DeletedContract>": Option<DeletedContract>;
    "Option<DepositAsset>": Option<DepositAsset>;
    "Option<DepositNonce>": Option<DepositNonce>;
    "Option<DepositReserveAsset>": Option<DepositReserveAsset>;
    "Option<Depth>": Option<Depth>;
    "Option<Desc>": Option<Desc>;
    "Option<Digest>": Option<Digest>;
    "Option<DigestItem>": Option<DigestItem>;
    "Option<DigestOf>": Option<DigestOf>;
    "Option<DispatchClass>": Option<DispatchClass>;
    "Option<DispatchError>": Option<DispatchError>;
    "Option<DispatchErrorModule>": Option<DispatchErrorModule>;
    "Option<DispatchErrorTo198>": Option<DispatchErrorTo198>;
    "Option<DispatchInfo>": Option<DispatchInfo>;
    "Option<DispatchInfoTo190>": Option<DispatchInfoTo190>;
    "Option<DispatchInfoTo244>": Option<DispatchInfoTo244>;
    "Option<DispatchOutcome>": Option<DispatchOutcome>;
    "Option<DispatchResult>": Option<DispatchResult>;
    "Option<DispatchResultOf>": Option<DispatchResultOf>;
    "Option<DispatchResultTo198>": Option<DispatchResultTo198>;
    "Option<DoNotConstruct>": Option<DoNotConstruct>;
    "Option<DoubleMapTypeLatest>": Option<DoubleMapTypeLatest>;
    "Option<DoubleMapTypeV10>": Option<DoubleMapTypeV10>;
    "Option<DoubleMapTypeV11>": Option<DoubleMapTypeV11>;
    "Option<DoubleMapTypeV12>": Option<DoubleMapTypeV12>;
    "Option<DoubleMapTypeV9>": Option<DoubleMapTypeV9>;
    "Option<DoubleVoteReport>": Option<DoubleVoteReport>;
    "Option<DownwardMessage>": Option<DownwardMessage>;
    "Option<EcdsaSignature>": Option<EcdsaSignature>;
    "Option<Ed25519Signature>": Option<Ed25519Signature>;
    "Option<ElectionCompute>": Option<ElectionCompute>;
    "Option<ElectionPhase>": Option<ElectionPhase>;
    "Option<ElectionResult>": Option<ElectionResult>;
    "Option<ElectionScore>": Option<ElectionScore>;
    "Option<ElectionSize>": Option<ElectionSize>;
    "Option<ElectionStatus>": Option<ElectionStatus>;
    "Option<EncodedFinalityProofs>": Option<EncodedFinalityProofs>;
    "Option<EncodedJustification>": Option<EncodedJustification>;
    "Option<EpochAuthorship>": Option<EpochAuthorship>;
    "Option<EraIndex>": Option<EraIndex>;
    "Option<EraPoints>": Option<EraPoints>;
    "Option<EraRewardPoints>": Option<EraRewardPoints>;
    "Option<EraRewards>": Option<EraRewards>;
    "Option<Erc721Token>": Option<Erc721Token>;
    "Option<ErrorCode>": Option<ErrorCode>;
    "Option<ErrorMetadataLatest>": Option<ErrorMetadataLatest>;
    "Option<ErrorMetadataV10>": Option<ErrorMetadataV10>;
    "Option<ErrorMetadataV11>": Option<ErrorMetadataV11>;
    "Option<ErrorMetadataV12>": Option<ErrorMetadataV12>;
    "Option<ErrorMetadataV9>": Option<ErrorMetadataV9>;
    "Option<EthAccount>": Option<EthAccount>;
    "Option<EthBlock>": Option<EthBlock>;
    "Option<EthBloom>": Option<EthBloom>;
    "Option<EthCallRequest>": Option<EthCallRequest>;
    "Option<EthereumAccountId>": Option<EthereumAccountId>;
    "Option<EthereumAddress>": Option<EthereumAddress>;
    "Option<EthereumLookupSource>": Option<EthereumLookupSource>;
    "Option<EthereumSignature>": Option<EthereumSignature>;
    "Option<EthFilter>": Option<EthFilter>;
    "Option<EthFilterAddress>": Option<EthFilterAddress>;
    "Option<EthFilterChanges>": Option<EthFilterChanges>;
    "Option<EthFilterTopic>": Option<EthFilterTopic>;
    "Option<EthFilterTopicEntry>": Option<EthFilterTopicEntry>;
    "Option<EthFilterTopicInner>": Option<EthFilterTopicInner>;
    "Option<EthHeader>": Option<EthHeader>;
    "Option<EthLog>": Option<EthLog>;
    "Option<EthReceipt>": Option<EthReceipt>;
    "Option<EthRichBlock>": Option<EthRichBlock>;
    "Option<EthRichHeader>": Option<EthRichHeader>;
    "Option<EthStorageProof>": Option<EthStorageProof>;
    "Option<EthSubKind>": Option<EthSubKind>;
    "Option<EthSubParams>": Option<EthSubParams>;
    "Option<EthSubResult>": Option<EthSubResult>;
    "Option<EthSyncInfo>": Option<EthSyncInfo>;
    "Option<EthSyncStatus>": Option<EthSyncStatus>;
    "Option<EthTransaction>": Option<EthTransaction>;
    "Option<EthTransactionAction>": Option<EthTransactionAction>;
    "Option<EthTransactionCondition>": Option<EthTransactionCondition>;
    "Option<EthTransactionRequest>": Option<EthTransactionRequest>;
    "Option<EthTransactionStatus>": Option<EthTransactionStatus>;
    "Option<EthWork>": Option<EthWork>;
    "Option<Event>": Option<Event>;
    "Option<EventId>": Option<EventId>;
    "Option<EventIndex>": Option<EventIndex>;
    "Option<EventMetadataLatest>": Option<EventMetadataLatest>;
    "Option<EventMetadataV10>": Option<EventMetadataV10>;
    "Option<EventMetadataV11>": Option<EventMetadataV11>;
    "Option<EventMetadataV12>": Option<EventMetadataV12>;
    "Option<EventMetadataV9>": Option<EventMetadataV9>;
    "Option<EventRecord>": Option<EventRecord>;
    "Option<EvmAccount>": Option<EvmAccount>;
    "Option<EvmLog>": Option<EvmLog>;
    "Option<EvmVicinity>": Option<EvmVicinity>;
    "Option<ExchangeAsset>": Option<ExchangeAsset>;
    "Option<ExitError>": Option<ExitError>;
    "Option<ExitFatal>": Option<ExitFatal>;
    "Option<ExitReason>": Option<ExitReason>;
    "Option<ExitRevert>": Option<ExitRevert>;
    "Option<ExitSucceed>": Option<ExitSucceed>;
    "Option<Exposure>": Option<Exposure>;
    "Option<ExtendedBalance>": Option<ExtendedBalance>;
    "Option<Extrinsic>": Option<Extrinsic>;
    "Option<ExtrinsicEra>": Option<ExtrinsicEra>;
    "Option<ExtrinsicMetadataLatest>": Option<ExtrinsicMetadataLatest>;
    "Option<ExtrinsicMetadataV11>": Option<ExtrinsicMetadataV11>;
    "Option<ExtrinsicMetadataV12>": Option<ExtrinsicMetadataV12>;
    "Option<ExtrinsicOrHash>": Option<ExtrinsicOrHash>;
    "Option<ExtrinsicPayload>": Option<ExtrinsicPayload>;
    "Option<ExtrinsicPayloadUnknown>": Option<ExtrinsicPayloadUnknown>;
    "Option<ExtrinsicPayloadV4>": Option<ExtrinsicPayloadV4>;
    "Option<ExtrinsicSignature>": Option<ExtrinsicSignature>;
    "Option<ExtrinsicSignatureV4>": Option<ExtrinsicSignatureV4>;
    "Option<ExtrinsicStatus>": Option<ExtrinsicStatus>;
    "Option<ExtrinsicsWeight>": Option<ExtrinsicsWeight>;
    "Option<ExtrinsicUnknown>": Option<ExtrinsicUnknown>;
    "Option<ExtrinsicV4>": Option<ExtrinsicV4>;
    "Option<FeeDetails>": Option<FeeDetails>;
    "Option<Fixed128>": Option<Fixed128>;
    "Option<Fixed64>": Option<Fixed64>;
    "Option<FixedAssetPower>": Option<FixedAssetPower>;
    "Option<FixedI128>": Option<FixedI128>;
    "Option<FixedI64>": Option<FixedI64>;
    "Option<FixedU128>": Option<FixedU128>;
    "Option<FixedU64>": Option<FixedU64>;
    "Option<Forcing>": Option<Forcing>;
    "Option<FullIdentification>": Option<FullIdentification>;
    "Option<FullPairInfo>": Option<FullPairInfo>;
    "Option<FunctionArgumentMetadataLatest>": Option<FunctionArgumentMetadataLatest>;
    "Option<FunctionArgumentMetadataV10>": Option<FunctionArgumentMetadataV10>;
    "Option<FunctionArgumentMetadataV11>": Option<FunctionArgumentMetadataV11>;
    "Option<FunctionArgumentMetadataV12>": Option<FunctionArgumentMetadataV12>;
    "Option<FunctionArgumentMetadataV9>": Option<FunctionArgumentMetadataV9>;
    "Option<FunctionMetadataLatest>": Option<FunctionMetadataLatest>;
    "Option<FunctionMetadataV10>": Option<FunctionMetadataV10>;
    "Option<FunctionMetadataV11>": Option<FunctionMetadataV11>;
    "Option<FunctionMetadataV12>": Option<FunctionMetadataV12>;
    "Option<FunctionMetadataV9>": Option<FunctionMetadataV9>;
    "Option<FundIndex>": Option<FundIndex>;
    "Option<FundInfo>": Option<FundInfo>;
    "Option<Gas>": Option<Gas>;
    "Option<GenericTrusteeIntentionProps>": Option<GenericTrusteeIntentionProps>;
    "Option<GenericTrusteeSessionInfo>": Option<GenericTrusteeSessionInfo>;
    "Option<GiltBid>": Option<GiltBid>;
    "Option<GlobalDistribution>": Option<GlobalDistribution>;
    "Option<GlobalValidationSchedule>": Option<GlobalValidationSchedule>;
    "Option<GrandpaEquivocation>": Option<GrandpaEquivocation>;
    "Option<GrandpaEquivocationProof>": Option<GrandpaEquivocationProof>;
    "Option<GrandpaEquivocationValue>": Option<GrandpaEquivocationValue>;
    "Option<GrandpaPrevote>": Option<GrandpaPrevote>;
    "Option<GroupIndex>": Option<GroupIndex>;
    "Option<H1024>": Option<H1024>;
    "Option<H128>": Option<H128>;
    "Option<H160>": Option<H160>;
    "Option<H2048>": Option<H2048>;
    "Option<H256>": Option<H256>;
    "Option<H512>": Option<H512>;
    "Option<H64>": Option<H64>;
    "Option<Handicap>": Option<Handicap>;
    "Option<HandicapInfo>": Option<HandicapInfo>;
    "Option<Hash>": Option<Hash>;
    "Option<HeadData>": Option<HeadData>;
    "Option<Header>": Option<Header>;
    "Option<Health>": Option<Health>;
    "Option<Heartbeat>": Option<Heartbeat>;
    "Option<HeartbeatTo244>": Option<HeartbeatTo244>;
    "Option<HostConfiguration>": Option<HostConfiguration>;
    "Option<HostFnWeights>": Option<HostFnWeights>;
    "Option<HostFnWeightsTo264>": Option<HostFnWeightsTo264>;
    "Option<HrmpChannel>": Option<HrmpChannel>;
    "Option<HrmpChannelId>": Option<HrmpChannelId>;
    "Option<HrmpOpenChannelRequest>": Option<HrmpOpenChannelRequest>;
    "Option<i128>": Option<i128>;
    "Option<I128>": Option<I128>;
    "Option<i16>": Option<i16>;
    "Option<I16>": Option<I16>;
    "Option<i256>": Option<i256>;
    "Option<I256>": Option<I256>;
    "Option<i32>": Option<i32>;
    "Option<I32>": Option<I32>;
    "Option<I32F32>": Option<I32F32>;
    "Option<i64>": Option<i64>;
    "Option<I64>": Option<I64>;
    "Option<i8>": Option<i8>;
    "Option<I8>": Option<I8>;
    "Option<IdentificationTuple>": Option<IdentificationTuple>;
    "Option<IdentityFields>": Option<IdentityFields>;
    "Option<IdentityInfo>": Option<IdentityInfo>;
    "Option<IdentityInfoAdditional>": Option<IdentityInfoAdditional>;
    "Option<IdentityJudgement>": Option<IdentityJudgement>;
    "Option<ImmortalEra>": Option<ImmortalEra>;
    "Option<ImportedAux>": Option<ImportedAux>;
    "Option<InboundDownwardMessage>": Option<InboundDownwardMessage>;
    "Option<InboundHrmpMessage>": Option<InboundHrmpMessage>;
    "Option<InboundHrmpMessages>": Option<InboundHrmpMessages>;
    "Option<IncludedBlocks>": Option<IncludedBlocks>;
    "Option<InclusionFee>": Option<InclusionFee>;
    "Option<IncomingParachain>": Option<IncomingParachain>;
    "Option<IncomingParachainDeploy>": Option<IncomingParachainDeploy>;
    "Option<IncomingParachainFixed>": Option<IncomingParachainFixed>;
    "Option<Index>": Option<Index>;
    "Option<IndicesLookupSource>": Option<IndicesLookupSource>;
    "Option<IndividualExposure>": Option<IndividualExposure>;
    "Option<InitiateReserveWithdraw>": Option<InitiateReserveWithdraw>;
    "Option<InitiateTeleport>": Option<InitiateTeleport>;
    "Option<InstructionWeights>": Option<InstructionWeights>;
    "Option<InvalidTransaction>": Option<InvalidTransaction>;
    "Option<IssueRequest>": Option<IssueRequest>;
    "Option<Json>": Option<Json>;
    "Option<Junction>": Option<Junction>;
    "Option<Justification>": Option<Justification>;
    "Option<JustificationNotification>": Option<JustificationNotification>;
    "Option<Justifications>": Option<Justifications>;
    "Option<Key>": Option<Key>;
    "Option<KeyOwnerProof>": Option<KeyOwnerProof>;
    "Option<Keys>": Option<Keys>;
    "Option<KeyType>": Option<KeyType>;
    "Option<KeyTypeId>": Option<KeyTypeId>;
    "Option<KeyValue>": Option<KeyValue>;
    "Option<KeyValueOption>": Option<KeyValueOption>;
    "Option<Kind>": Option<Kind>;
    "Option<LastContribution>": Option<LastContribution>;
    "Option<LastRuntimeUpgradeInfo>": Option<LastRuntimeUpgradeInfo>;
    "Option<LeasePeriod>": Option<LeasePeriod>;
    "Option<LeasePeriodOf>": Option<LeasePeriodOf>;
    "Option<Limits>": Option<Limits>;
    "Option<LimitsTo264>": Option<LimitsTo264>;
    "Option<LocalValidationData>": Option<LocalValidationData>;
    "Option<LockedType>": Option<LockedType>;
    "Option<LockIdentifier>": Option<LockIdentifier>;
    "Option<LookupSource>": Option<LookupSource>;
    "Option<LookupTarget>": Option<LookupTarget>;
    "Option<LotteryConfig>": Option<LotteryConfig>;
    "Option<MapTypeLatest>": Option<MapTypeLatest>;
    "Option<MapTypeV10>": Option<MapTypeV10>;
    "Option<MapTypeV11>": Option<MapTypeV11>;
    "Option<MapTypeV12>": Option<MapTypeV12>;
    "Option<MapTypeV9>": Option<MapTypeV9>;
    "Option<MaybeRandomness>": Option<MaybeRandomness>;
    "Option<MaybeVrf>": Option<MaybeVrf>;
    "Option<MemberCount>": Option<MemberCount>;
    "Option<MembershipProof>": Option<MembershipProof>;
    "Option<Memo>": Option<Memo>;
    "Option<MessageIngestionType>": Option<MessageIngestionType>;
    "Option<MessageQueueChain>": Option<MessageQueueChain>;
    "Option<MessagingStateSnapshot>": Option<MessagingStateSnapshot>;
    "Option<MessagingStateSnapshotEgressEntry>": Option<MessagingStateSnapshotEgressEntry>;
    "Option<MetadataAll>": Option<MetadataAll>;
    "Option<MetadataLatest>": Option<MetadataLatest>;
    "Option<MetadataV10>": Option<MetadataV10>;
    "Option<MetadataV11>": Option<MetadataV11>;
    "Option<MetadataV12>": Option<MetadataV12>;
    "Option<MetadataV9>": Option<MetadataV9>;
    "Option<MinerLedger>": Option<MinerLedger>;
    "Option<MiningAssetInfo>": Option<MiningAssetInfo>;
    "Option<MiningDistribution>": Option<MiningDistribution>;
    "Option<MiningWeight>": Option<MiningWeight>;
    "Option<MmrLeafProof>": Option<MmrLeafProof>;
    "Option<ModuleConstantMetadataLatest>": Option<ModuleConstantMetadataLatest>;
    "Option<ModuleConstantMetadataV10>": Option<ModuleConstantMetadataV10>;
    "Option<ModuleConstantMetadataV11>": Option<ModuleConstantMetadataV11>;
    "Option<ModuleConstantMetadataV12>": Option<ModuleConstantMetadataV12>;
    "Option<ModuleConstantMetadataV9>": Option<ModuleConstantMetadataV9>;
    "Option<ModuleId>": Option<ModuleId>;
    "Option<ModuleMetadataLatest>": Option<ModuleMetadataLatest>;
    "Option<ModuleMetadataV10>": Option<ModuleMetadataV10>;
    "Option<ModuleMetadataV11>": Option<ModuleMetadataV11>;
    "Option<ModuleMetadataV12>": Option<ModuleMetadataV12>;
    "Option<ModuleMetadataV9>": Option<ModuleMetadataV9>;
    "Option<Moment>": Option<Moment>;
    "Option<MomentOf>": Option<MomentOf>;
    "Option<MoreAttestations>": Option<MoreAttestations>;
    "Option<MortalEra>": Option<MortalEra>;
    "Option<MultiAddress>": Option<MultiAddress>;
    "Option<MultiAsset>": Option<MultiAsset>;
    "Option<MultiLocation>": Option<MultiLocation>;
    "Option<Multiplier>": Option<Multiplier>;
    "Option<Multisig>": Option<Multisig>;
    "Option<MultiSignature>": Option<MultiSignature>;
    "Option<MultiSigner>": Option<MultiSigner>;
    "Option<NetworkId>": Option<NetworkId>;
    "Option<NetworkState>": Option<NetworkState>;
    "Option<NetworkStatePeerset>": Option<NetworkStatePeerset>;
    "Option<NetworkStatePeersetInfo>": Option<NetworkStatePeersetInfo>;
    "Option<NetworkType>": Option<NetworkType>;
    "Option<NewBidder>": Option<NewBidder>;
    "Option<NextAuthority>": Option<NextAuthority>;
    "Option<NextConfigDescriptor>": Option<NextConfigDescriptor>;
    "Option<NextConfigDescriptorV1>": Option<NextConfigDescriptorV1>;
    "Option<NodeRole>": Option<NodeRole>;
    "Option<Nominations>": Option<Nominations>;
    "Option<NominatorIndex>": Option<NominatorIndex>;
    "Option<NominatorIndexCompact>": Option<NominatorIndexCompact>;
    "Option<NominatorLedger>": Option<NominatorLedger>;
    "Option<NotConnectedPeer>": Option<NotConnectedPeer>;
    "Option<Null>": Option<Null>;
    "Option<OffchainAccuracy>": Option<OffchainAccuracy>;
    "Option<OffchainAccuracyCompact>": Option<OffchainAccuracyCompact>;
    "Option<OffenceDetails>": Option<OffenceDetails>;
    "Option<Offender>": Option<Offender>;
    "Option<OpaqueCall>": Option<OpaqueCall>;
    "Option<OpaqueMultiaddr>": Option<OpaqueMultiaddr>;
    "Option<OpaqueNetworkState>": Option<OpaqueNetworkState>;
    "Option<OpaquePeerId>": Option<OpaquePeerId>;
    "Option<OpaqueTimeSlot>": Option<OpaqueTimeSlot>;
    "Option<OpenTip>": Option<OpenTip>;
    "Option<OpenTipFinderTo225>": Option<OpenTipFinderTo225>;
    "Option<OpenTipTip>": Option<OpenTipTip>;
    "Option<OpenTipTo225>": Option<OpenTipTo225>;
    "Option<Order>": Option<Order>;
    "Option<OrderExecutedInfo>": Option<OrderExecutedInfo>;
    "Option<OrderId>": Option<OrderId>;
    "Option<OrderInfo>": Option<OrderInfo>;
    "Option<OrderProperty>": Option<OrderProperty>;
    "Option<OrderStatus>": Option<OrderStatus>;
    "Option<OrderType>": Option<OrderType>;
    "Option<Origin>": Option<Origin>;
    "Option<OriginCaller>": Option<OriginCaller>;
    "Option<OriginKind>": Option<OriginKind>;
    "Option<OutboundHrmpMessage>": Option<OutboundHrmpMessage>;
    "Option<Owner>": Option<Owner>;
    "Option<Page>": Option<Page>;
    "Option<PalletsOrigin>": Option<PalletsOrigin>;
    "Option<PalletVersion>": Option<PalletVersion>;
    "Option<ParachainDispatchOrigin>": Option<ParachainDispatchOrigin>;
    "Option<ParachainInherentData>": Option<ParachainInherentData>;
    "Option<ParachainProposal>": Option<ParachainProposal>;
    "Option<ParaGenesisArgs>": Option<ParaGenesisArgs>;
    "Option<ParaId>": Option<ParaId>;
    "Option<ParaInfo>": Option<ParaInfo>;
    "Option<ParaLifecycle>": Option<ParaLifecycle>;
    "Option<ParaPastCodeMeta>": Option<ParaPastCodeMeta>;
    "Option<ParaScheduling>": Option<ParaScheduling>;
    "Option<ParathreadClaim>": Option<ParathreadClaim>;
    "Option<ParathreadClaimQueue>": Option<ParathreadClaimQueue>;
    "Option<ParathreadEntry>": Option<ParathreadEntry>;
    "Option<ParaValidatorIndex>": Option<ParaValidatorIndex>;
    "Option<Pays>": Option<Pays>;
    "Option<Peer>": Option<Peer>;
    "Option<PeerEndpoint>": Option<PeerEndpoint>;
    "Option<PeerEndpointAddr>": Option<PeerEndpointAddr>;
    "Option<PeerInfo>": Option<PeerInfo>;
    "Option<PeerPing>": Option<PeerPing>;
    "Option<PendingPause>": Option<PendingPause>;
    "Option<PendingResume>": Option<PendingResume>;
    "Option<Perbill>": Option<Perbill>;
    "Option<Percent>": Option<Percent>;
    "Option<PerDispatchClass>": Option<PerDispatchClass>;
    "Option<PerDispatchClassU32>": Option<PerDispatchClassU32>;
    "Option<PerDispatchClassWeight>": Option<PerDispatchClassWeight>;
    "Option<PerDispatchClassWeightsPerClass>": Option<PerDispatchClassWeightsPerClass>;
    "Option<Period>": Option<Period>;
    "Option<Permill>": Option<Permill>;
    "Option<PermissionLatest>": Option<PermissionLatest>;
    "Option<PermissionsV1>": Option<PermissionsV1>;
    "Option<PermissionVersions>": Option<PermissionVersions>;
    "Option<Perquintill>": Option<Perquintill>;
    "Option<PersistedValidationData>": Option<PersistedValidationData>;
    "Option<PerU16>": Option<PerU16>;
    "Option<Phantom>": Option<Phantom>;
    "Option<PhantomData>": Option<PhantomData>;
    "Option<Phase>": Option<Phase>;
    "Option<PhragmenScore>": Option<PhragmenScore>;
    "Option<Points>": Option<Points>;
    "Option<Precommits>": Option<Precommits>;
    "Option<PrefabWasmModule>": Option<PrefabWasmModule>;
    "Option<PrefixedStorageKey>": Option<PrefixedStorageKey>;
    "Option<PreimageStatus>": Option<PreimageStatus>;
    "Option<PreimageStatusAvailable>": Option<PreimageStatusAvailable>;
    "Option<PreRuntime>": Option<PreRuntime>;
    "Option<Prevotes>": Option<Prevotes>;
    "Option<Price>": Option<Price>;
    "Option<PriceFluctuation>": Option<PriceFluctuation>;
    "Option<Priority>": Option<Priority>;
    "Option<PriorLock>": Option<PriorLock>;
    "Option<PropIndex>": Option<PropIndex>;
    "Option<Proposal>": Option<Proposal>;
    "Option<ProposalIndex>": Option<ProposalIndex>;
    "Option<ProposalStatus>": Option<ProposalStatus>;
    "Option<ProposalVotes>": Option<ProposalVotes>;
    "Option<ProxyAnnouncement>": Option<ProxyAnnouncement>;
    "Option<ProxyDefinition>": Option<ProxyDefinition>;
    "Option<ProxyState>": Option<ProxyState>;
    "Option<ProxyType>": Option<ProxyType>;
    "Option<QueryHolding>": Option<QueryHolding>;
    "Option<QueuedParathread>": Option<QueuedParathread>;
    "Option<Randomness>": Option<Randomness>;
    "Option<Raw>": Option<Raw>;
    "Option<RawAuraPreDigest>": Option<RawAuraPreDigest>;
    "Option<RawBabePreDigest>": Option<RawBabePreDigest>;
    "Option<RawBabePreDigestCompat>": Option<RawBabePreDigestCompat>;
    "Option<RawBabePreDigestPrimary>": Option<RawBabePreDigestPrimary>;
    "Option<RawBabePreDigestPrimaryTo159>": Option<RawBabePreDigestPrimaryTo159>;
    "Option<RawBabePreDigestSecondaryPlain>": Option<RawBabePreDigestSecondaryPlain>;
    "Option<RawBabePreDigestSecondaryTo159>": Option<RawBabePreDigestSecondaryTo159>;
    "Option<RawBabePreDigestSecondaryVRF>": Option<RawBabePreDigestSecondaryVRF>;
    "Option<RawBabePreDigestTo159>": Option<RawBabePreDigestTo159>;
    "Option<RawOrigin>": Option<RawOrigin>;
    "Option<RawSolution>": Option<RawSolution>;
    "Option<RawVRFOutput>": Option<RawVRFOutput>;
    "Option<ReadProof>": Option<ReadProof>;
    "Option<ReadySolution>": Option<ReadySolution>;
    "Option<Reasons>": Option<Reasons>;
    "Option<RecoveryConfig>": Option<RecoveryConfig>;
    "Option<RedeemRequest>": Option<RedeemRequest>;
    "Option<RefCount>": Option<RefCount>;
    "Option<RefCountTo259>": Option<RefCountTo259>;
    "Option<ReferendumIndex>": Option<ReferendumIndex>;
    "Option<ReferendumInfo>": Option<ReferendumInfo>;
    "Option<ReferendumInfoFinished>": Option<ReferendumInfoFinished>;
    "Option<ReferendumInfoTo239>": Option<ReferendumInfoTo239>;
    "Option<ReferendumStatus>": Option<ReferendumStatus>;
    "Option<ReferralId>": Option<ReferralId>;
    "Option<RegisteredParachainInfo>": Option<RegisteredParachainInfo>;
    "Option<RegistrarIndex>": Option<RegistrarIndex>;
    "Option<RegistrarInfo>": Option<RegistrarInfo>;
    "Option<Registration>": Option<Registration>;
    "Option<RegistrationJudgement>": Option<RegistrationJudgement>;
    "Option<RelayChainBlockNumber>": Option<RelayChainBlockNumber>;
    "Option<RelayChainHash>": Option<RelayChainHash>;
    "Option<RelayedFrom>": Option<RelayedFrom>;
    "Option<RelayTo>": Option<RelayTo>;
    "Option<Releases>": Option<Releases>;
    "Option<Remark>": Option<Remark>;
    "Option<Renouncing>": Option<Renouncing>;
    "Option<ReportedRoundStates>": Option<ReportedRoundStates>;
    "Option<Reporter>": Option<Reporter>;
    "Option<ReportIdOf>": Option<ReportIdOf>;
    "Option<RequestId>": Option<RequestId>;
    "Option<ReserveAssetDeposit>": Option<ReserveAssetDeposit>;
    "Option<ResourceId>": Option<ResourceId>;
    "Option<Retriable>": Option<Retriable>;
    "Option<RewardDestination>": Option<RewardDestination>;
    "Option<RewardPoint>": Option<RewardPoint>;
    "Option<RoundSnapshot>": Option<RoundSnapshot>;
    "Option<RoundState>": Option<RoundState>;
    "Option<RpcBalance>": Option<RpcBalance>;
    "Option<RpcFeeDetails>": Option<RpcFeeDetails>;
    "Option<RpcInclusionFee>": Option<RpcInclusionFee>;
    "Option<RpcMethods>": Option<RpcMethods>;
    "Option<RpcMiningDividendInfo>": Option<RpcMiningDividendInfo>;
    "Option<RpcMiningWeight>": Option<RpcMiningWeight>;
    "Option<RpcOrder>": Option<RpcOrder>;
    "Option<RpcPrice>": Option<RpcPrice>;
    "Option<RpcTotalAssetInfo>": Option<RpcTotalAssetInfo>;
    "Option<RpcVaultInfo>": Option<RpcVaultInfo>;
    "Option<RpcVoteWeight>": Option<RpcVoteWeight>;
    "Option<RpcWithdrawalRecord>": Option<RpcWithdrawalRecord>;
    "Option<RuntimeDbWeight>": Option<RuntimeDbWeight>;
    "Option<RuntimeDispatchInfo>": Option<RuntimeDispatchInfo>;
    "Option<RuntimeVersion>": Option<RuntimeVersion>;
    "Option<RuntimeVersionApi>": Option<RuntimeVersionApi>;
    "Option<Schedule>": Option<Schedule>;
    "Option<Scheduled>": Option<Scheduled>;
    "Option<ScheduledTo254>": Option<ScheduledTo254>;
    "Option<SchedulePeriod>": Option<SchedulePeriod>;
    "Option<SchedulePriority>": Option<SchedulePriority>;
    "Option<ScheduleTo212>": Option<ScheduleTo212>;
    "Option<ScheduleTo258>": Option<ScheduleTo258>;
    "Option<ScheduleTo264>": Option<ScheduleTo264>;
    "Option<Scheduling>": Option<Scheduling>;
    "Option<Seal>": Option<Seal>;
    "Option<SealV0>": Option<SealV0>;
    "Option<SeatHolder>": Option<SeatHolder>;
    "Option<SeedOf>": Option<SeedOf>;
    "Option<SessionIndex>": Option<SessionIndex>;
    "Option<SessionInfo>": Option<SessionInfo>;
    "Option<SessionInfoValidatorGroup>": Option<SessionInfoValidatorGroup>;
    "Option<SessionKeys1>": Option<SessionKeys1>;
    "Option<SessionKeys2>": Option<SessionKeys2>;
    "Option<SessionKeys3>": Option<SessionKeys3>;
    "Option<SessionKeys4>": Option<SessionKeys4>;
    "Option<SessionKeys5>": Option<SessionKeys5>;
    "Option<SessionKeys6>": Option<SessionKeys6>;
    "Option<SessionKeys7>": Option<SessionKeys7>;
    "Option<SessionKeys8>": Option<SessionKeys8>;
    "Option<SessionKeys9>": Option<SessionKeys9>;
    "Option<SetId>": Option<SetId>;
    "Option<SetIndex>": Option<SetIndex>;
    "Option<Side>": Option<Side>;
    "Option<SiField>": Option<SiField>;
    "Option<Signature>": Option<Signature>;
    "Option<SignedAvailabilityBitfield>": Option<SignedAvailabilityBitfield>;
    "Option<SignedAvailabilityBitfields>": Option<SignedAvailabilityBitfields>;
    "Option<SignedBlock>": Option<SignedBlock>;
    "Option<SignedBlockWithJustification>": Option<SignedBlockWithJustification>;
    "Option<SignedBlockWithJustifications>": Option<SignedBlockWithJustifications>;
    "Option<SignerPayload>": Option<SignerPayload>;
    "Option<SigningContext>": Option<SigningContext>;
    "Option<SiLookupTypeId>": Option<SiLookupTypeId>;
    "Option<SiPath>": Option<SiPath>;
    "Option<SiType>": Option<SiType>;
    "Option<SiTypeDef>": Option<SiTypeDef>;
    "Option<SiTypeDefArray>": Option<SiTypeDefArray>;
    "Option<SiTypeDefComposite>": Option<SiTypeDefComposite>;
    "Option<SiTypeDefPrimitive>": Option<SiTypeDefPrimitive>;
    "Option<SiTypeDefSequence>": Option<SiTypeDefSequence>;
    "Option<SiTypeDefTuple>": Option<SiTypeDefTuple>;
    "Option<SiTypeDefVariant>": Option<SiTypeDefVariant>;
    "Option<SiVariant>": Option<SiVariant>;
    "Option<SlashingSpans>": Option<SlashingSpans>;
    "Option<SlashingSpansTo204>": Option<SlashingSpansTo204>;
    "Option<SlashJournalEntry>": Option<SlashJournalEntry>;
    "Option<Slot>": Option<Slot>;
    "Option<SlotNumber>": Option<SlotNumber>;
    "Option<SlotRange>": Option<SlotRange>;
    "Option<SocietyJudgement>": Option<SocietyJudgement>;
    "Option<SocietyVote>": Option<SocietyVote>;
    "Option<SolutionOrSnapshotSize>": Option<SolutionOrSnapshotSize>;
    "Option<SolutionSupport>": Option<SolutionSupport>;
    "Option<SolutionSupports>": Option<SolutionSupports>;
    "Option<SpanIndex>": Option<SpanIndex>;
    "Option<SpanRecord>": Option<SpanRecord>;
    "Option<Sr25519Signature>": Option<Sr25519Signature>;
    "Option<StakingLedger>": Option<StakingLedger>;
    "Option<StakingLedgerTo223>": Option<StakingLedgerTo223>;
    "Option<StakingLedgerTo240>": Option<StakingLedgerTo240>;
    "Option<StakingRequirement>": Option<StakingRequirement>;
    "Option<Statement>": Option<Statement>;
    "Option<StatementKind>": Option<StatementKind>;
    "Option<Status>": Option<Status>;
    "Option<StorageChangeSet>": Option<StorageChangeSet>;
    "Option<StorageData>": Option<StorageData>;
    "Option<StorageEntryMetadataLatest>": Option<StorageEntryMetadataLatest>;
    "Option<StorageEntryMetadataV10>": Option<StorageEntryMetadataV10>;
    "Option<StorageEntryMetadataV11>": Option<StorageEntryMetadataV11>;
    "Option<StorageEntryMetadataV12>": Option<StorageEntryMetadataV12>;
    "Option<StorageEntryMetadataV9>": Option<StorageEntryMetadataV9>;
    "Option<StorageEntryModifierLatest>": Option<StorageEntryModifierLatest>;
    "Option<StorageEntryModifierV10>": Option<StorageEntryModifierV10>;
    "Option<StorageEntryModifierV11>": Option<StorageEntryModifierV11>;
    "Option<StorageEntryModifierV12>": Option<StorageEntryModifierV12>;
    "Option<StorageEntryModifierV9>": Option<StorageEntryModifierV9>;
    "Option<StorageEntryTypeLatest>": Option<StorageEntryTypeLatest>;
    "Option<StorageEntryTypeV10>": Option<StorageEntryTypeV10>;
    "Option<StorageEntryTypeV11>": Option<StorageEntryTypeV11>;
    "Option<StorageEntryTypeV12>": Option<StorageEntryTypeV12>;
    "Option<StorageEntryTypeV9>": Option<StorageEntryTypeV9>;
    "Option<StorageHasher>": Option<StorageHasher>;
    "Option<StorageHasherV10>": Option<StorageHasherV10>;
    "Option<StorageHasherV11>": Option<StorageHasherV11>;
    "Option<StorageHasherV12>": Option<StorageHasherV12>;
    "Option<StorageHasherV9>": Option<StorageHasherV9>;
    "Option<StorageKey>": Option<StorageKey>;
    "Option<StorageKind>": Option<StorageKind>;
    "Option<StorageMetadataLatest>": Option<StorageMetadataLatest>;
    "Option<StorageMetadataV10>": Option<StorageMetadataV10>;
    "Option<StorageMetadataV11>": Option<StorageMetadataV11>;
    "Option<StorageMetadataV12>": Option<StorageMetadataV12>;
    "Option<StorageMetadataV9>": Option<StorageMetadataV9>;
    "Option<StorageProof>": Option<StorageProof>;
    "Option<StoredPendingChange>": Option<StoredPendingChange>;
    "Option<StoredState>": Option<StoredState>;
    "Option<StrikeCount>": Option<StrikeCount>;
    "Option<SubId>": Option<SubId>;
    "Option<SyncState>": Option<SyncState>;
    "Option<SystemInherentData>": Option<SystemInherentData>;
    "Option<SystemOrigin>": Option<SystemOrigin>;
    "Option<SystemVault>": Option<SystemVault>;
    "Option<Tally>": Option<Tally>;
    "Option<TaskAddress>": Option<TaskAddress>;
    "Option<TAssetBalance>": Option<TAssetBalance>;
    "Option<TAssetDepositBalance>": Option<TAssetDepositBalance>;
    "Option<TeleportAsset>": Option<TeleportAsset>;
    "Option<Text>": Option<Text>;
    "Option<Timepoint>": Option<Timepoint>;
    "Option<Token>": Option<Token>;
    "Option<TokenId>": Option<TokenId>;
    "Option<TombstoneContractInfo>": Option<TombstoneContractInfo>;
    "Option<TotalAssetInfo>": Option<TotalAssetInfo>;
    "Option<TradingHistoryIndex>": Option<TradingHistoryIndex>;
    "Option<TradingPairId>": Option<TradingPairId>;
    "Option<TradingPairInfo>": Option<TradingPairInfo>;
    "Option<TradingPairProfile>": Option<TradingPairProfile>;
    "Option<TradingPrice>": Option<TradingPrice>;
    "Option<Transact>": Option<Transact>;
    "Option<TransactionPriority>": Option<TransactionPriority>;
    "Option<TransactionValidityError>": Option<TransactionValidityError>;
    "Option<TransientValidationData>": Option<TransientValidationData>;
    "Option<TreasuryProposal>": Option<TreasuryProposal>;
    "Option<TrieId>": Option<TrieId>;
    "Option<TrieIndex>": Option<TrieIndex>;
    "Option<TrusteeInfoConfig>": Option<TrusteeInfoConfig>;
    "Option<Type>": Option<Type>;
    "Option<u128>": Option<u128>;
    "Option<U128>": Option<U128>;
    "Option<u16>": Option<u16>;
    "Option<U16>": Option<U16>;
    "Option<u256>": Option<u256>;
    "Option<U256>": Option<U256>;
    "Option<u32>": Option<u32>;
    "Option<U32>": Option<U32>;
    "Option<U32F32>": Option<U32F32>;
    "Option<u64>": Option<u64>;
    "Option<U64>": Option<U64>;
    "Option<u8>": Option<u8>;
    "Option<U8>": Option<U8>;
    "Option<UnappliedSlash>": Option<UnappliedSlash>;
    "Option<UnappliedSlashOther>": Option<UnappliedSlashOther>;
    "Option<Unbonded>": Option<Unbonded>;
    "Option<UnbondedIndex>": Option<UnbondedIndex>;
    "Option<UncleEntryItem>": Option<UncleEntryItem>;
    "Option<UnknownTransaction>": Option<UnknownTransaction>;
    "Option<UnlockChunk>": Option<UnlockChunk>;
    "Option<UpwardMessage>": Option<UpwardMessage>;
    "Option<usize>": Option<usize>;
    "Option<USize>": Option<USize>;
    "Option<ValidationCode>": Option<ValidationCode>;
    "Option<ValidationData>": Option<ValidationData>;
    "Option<ValidationDataType>": Option<ValidationDataType>;
    "Option<ValidationFunctionParams>": Option<ValidationFunctionParams>;
    "Option<ValidatorCount>": Option<ValidatorCount>;
    "Option<ValidatorId>": Option<ValidatorId>;
    "Option<ValidatorIdOf>": Option<ValidatorIdOf>;
    "Option<ValidatorIndex>": Option<ValidatorIndex>;
    "Option<ValidatorIndexCompact>": Option<ValidatorIndexCompact>;
    "Option<ValidatorInfo>": Option<ValidatorInfo>;
    "Option<ValidatorLedger>": Option<ValidatorLedger>;
    "Option<ValidatorPrefs>": Option<ValidatorPrefs>;
    "Option<ValidatorPrefsTo145>": Option<ValidatorPrefsTo145>;
    "Option<ValidatorPrefsTo196>": Option<ValidatorPrefsTo196>;
    "Option<ValidatorPrefsWithBlocked>": Option<ValidatorPrefsWithBlocked>;
    "Option<ValidatorPrefsWithCommission>": Option<ValidatorPrefsWithCommission>;
    "Option<ValidatorProfile>": Option<ValidatorProfile>;
    "Option<ValidatorSignature>": Option<ValidatorSignature>;
    "Option<ValidityAttestation>": Option<ValidityAttestation>;
    "Option<Vault>": Option<Vault>;
    "Option<VaultStatus>": Option<VaultStatus>;
    "Option<VecInboundHrmpMessage>": Option<VecInboundHrmpMessage>;
    "Option<VersionedMultiAsset>": Option<VersionedMultiAsset>;
    "Option<VersionedMultiLocation>": Option<VersionedMultiLocation>;
    "Option<VersionedXcm>": Option<VersionedXcm>;
    "Option<VestingInfo>": Option<VestingInfo>;
    "Option<VestingSchedule>": Option<VestingSchedule>;
    "Option<Vote>": Option<Vote>;
    "Option<VoteIndex>": Option<VoteIndex>;
    "Option<Voter>": Option<Voter>;
    "Option<VoterInfo>": Option<VoterInfo>;
    "Option<Votes>": Option<Votes>;
    "Option<VotesTo230>": Option<VotesTo230>;
    "Option<VoteThreshold>": Option<VoteThreshold>;
    "Option<VoteWeight>": Option<VoteWeight>;
    "Option<Voting>": Option<Voting>;
    "Option<VotingDelegating>": Option<VotingDelegating>;
    "Option<VotingDirect>": Option<VotingDirect>;
    "Option<VotingDirectVote>": Option<VotingDirectVote>;
    "Option<VouchingStatus>": Option<VouchingStatus>;
    "Option<VrfData>": Option<VrfData>;
    "Option<VrfOutput>": Option<VrfOutput>;
    "Option<VrfProof>": Option<VrfProof>;
    "Option<Weight>": Option<Weight>;
    "Option<WeightMultiplier>": Option<WeightMultiplier>;
    "Option<WeightPerClass>": Option<WeightPerClass>;
    "Option<WeightToFeeCoefficient>": Option<WeightToFeeCoefficient>;
    "Option<WinnersData>": Option<WinnersData>;
    "Option<WinnersDataTuple>": Option<WinnersDataTuple>;
    "Option<WinningData>": Option<WinningData>;
    "Option<WinningDataEntry>": Option<WinningDataEntry>;
    "Option<WithdrawalLimit>": Option<WithdrawalLimit>;
    "Option<WithdrawalRecord>": Option<WithdrawalRecord>;
    "Option<WithdrawalRecordId>": Option<WithdrawalRecordId>;
    "Option<WithdrawalRecordOf>": Option<WithdrawalRecordOf>;
    "Option<WithdrawalState>": Option<WithdrawalState>;
    "Option<WithdrawAsset>": Option<WithdrawAsset>;
    "Option<WithdrawReasons>": Option<WithdrawReasons>;
    "Option<Xcm>": Option<Xcm>;
    "Option<XcmError>": Option<XcmError>;
    "Option<XcmResult>": Option<XcmResult>;
    "Vec<AbridgedCandidateReceipt>": Vec<AbridgedCandidateReceipt>;
    "Vec<AbridgedHostConfiguration>": Vec<AbridgedHostConfiguration>;
    "Vec<AbridgedHrmpChannel>": Vec<AbridgedHrmpChannel>;
    "Vec<AbstractFungible>": Vec<AbstractFungible>;
    "Vec<AbstractNonFungible>": Vec<AbstractNonFungible>;
    "Vec<AccountData>": Vec<AccountData>;
    "Vec<AccountId>": Vec<AccountId>;
    "Vec<AccountId32Junction>": Vec<AccountId32Junction>;
    "Vec<AccountIdOf>": Vec<AccountIdOf>;
    "Vec<AccountIndex>": Vec<AccountIndex>;
    "Vec<AccountIndex64Junction>": Vec<AccountIndex64Junction>;
    "Vec<AccountInfo>": Vec<AccountInfo>;
    "Vec<AccountInfoWithDualRefCount>": Vec<AccountInfoWithDualRefCount>;
    "Vec<AccountInfoWithProviders>": Vec<AccountInfoWithProviders>;
    "Vec<AccountInfoWithRefCount>": Vec<AccountInfoWithRefCount>;
    "Vec<AccountInfoWithTripleRefCount>": Vec<AccountInfoWithTripleRefCount>;
    "Vec<AccountKey20Junction>": Vec<AccountKey20Junction>;
    "Vec<AccountStatus>": Vec<AccountStatus>;
    "Vec<AccountValidity>": Vec<AccountValidity>;
    "Vec<AccountVote>": Vec<AccountVote>;
    "Vec<AccountVoteSplit>": Vec<AccountVoteSplit>;
    "Vec<AccountVoteStandard>": Vec<AccountVoteStandard>;
    "Vec<ActiveEraInfo>": Vec<ActiveEraInfo>;
    "Vec<ActiveGilt>": Vec<ActiveGilt>;
    "Vec<ActiveGiltsTotal>": Vec<ActiveGiltsTotal>;
    "Vec<ActiveIndex>": Vec<ActiveIndex>;
    "Vec<ActiveRecovery>": Vec<ActiveRecovery>;
    "Vec<Address>": Vec<Address>;
    "Vec<AddrStr>": Vec<AddrStr>;
    "Vec<AliveContractInfo>": Vec<AliveContractInfo>;
    "Vec<AllowedSlots>": Vec<AllowedSlots>;
    "Vec<Amount>": Vec<Amount>;
    "Vec<AmountOf>": Vec<AmountOf>;
    "Vec<AnySignature>": Vec<AnySignature>;
    "Vec<ApiId>": Vec<ApiId>;
    "Vec<ApplyExtrinsicResult>": Vec<ApplyExtrinsicResult>;
    "Vec<ApprovalFlag>": Vec<ApprovalFlag>;
    "Vec<Approvals>": Vec<Approvals>;
    "Vec<AssetApproval>": Vec<AssetApproval>;
    "Vec<AssetApprovalKey>": Vec<AssetApprovalKey>;
    "Vec<AssetBalance>": Vec<AssetBalance>;
    "Vec<AssetDestroyWitness>": Vec<AssetDestroyWitness>;
    "Vec<AssetDetails>": Vec<AssetDetails>;
    "Vec<AssetId>": Vec<AssetId>;
    "Vec<AssetInfo>": Vec<AssetInfo>;
    "Vec<AssetInstance>": Vec<AssetInstance>;
    "Vec<AssetLedger>": Vec<AssetLedger>;
    "Vec<AssetMetadata>": Vec<AssetMetadata>;
    "Vec<AssetOptions>": Vec<AssetOptions>;
    "Vec<AssetRestriction>": Vec<AssetRestriction>;
    "Vec<AssetRestrictions>": Vec<AssetRestrictions>;
    "Vec<AssetType>": Vec<AssetType>;
    "Vec<AssignmentId>": Vec<AssignmentId>;
    "Vec<AssignmentKind>": Vec<AssignmentKind>;
    "Vec<AttestedCandidate>": Vec<AttestedCandidate>;
    "Vec<AuctionIndex>": Vec<AuctionIndex>;
    "Vec<AuthIndex>": Vec<AuthIndex>;
    "Vec<AuthorityDiscoveryId>": Vec<AuthorityDiscoveryId>;
    "Vec<AuthorityId>": Vec<AuthorityId>;
    "Vec<AuthorityIndex>": Vec<AuthorityIndex>;
    "Vec<AuthorityList>": Vec<AuthorityList>;
    "Vec<AuthoritySignature>": Vec<AuthoritySignature>;
    "Vec<AuthorityWeight>": Vec<AuthorityWeight>;
    "Vec<AvailabilityBitfield>": Vec<AvailabilityBitfield>;
    "Vec<AvailabilityBitfieldRecord>": Vec<AvailabilityBitfieldRecord>;
    "Vec<BabeAuthorityWeight>": Vec<BabeAuthorityWeight>;
    "Vec<BabeBlockWeight>": Vec<BabeBlockWeight>;
    "Vec<BabeEpochConfiguration>": Vec<BabeEpochConfiguration>;
    "Vec<BabeEquivocationProof>": Vec<BabeEquivocationProof>;
    "Vec<BabeWeight>": Vec<BabeWeight>;
    "Vec<BackedCandidate>": Vec<BackedCandidate>;
    "Vec<Balance>": Vec<Balance>;
    "Vec<BalanceLock>": Vec<BalanceLock>;
    "Vec<BalanceLockTo212>": Vec<BalanceLockTo212>;
    "Vec<BalanceOf>": Vec<BalanceOf>;
    "Vec<Balances>": Vec<Balances>;
    "Vec<BalanceStatus>": Vec<BalanceStatus>;
    "Vec<Bid>": Vec<Bid>;
    "Vec<Bidder>": Vec<Bidder>;
    "Vec<BidKind>": Vec<BidKind>;
    "Vec<BitVec>": Vec<BitVec>;
    "Vec<Block>": Vec<Block>;
    "Vec<BlockAttestations>": Vec<BlockAttestations>;
    "Vec<BlockHash>": Vec<BlockHash>;
    "Vec<BlockLength>": Vec<BlockLength>;
    "Vec<BlockNumber>": Vec<BlockNumber>;
    "Vec<BlockNumberFor>": Vec<BlockNumberFor>;
    "Vec<BlockWeights>": Vec<BlockWeights>;
    "Vec<BondRequirement>": Vec<BondRequirement>;
    "Vec<bool>": Vec<bool>;
    "Vec<Bool>": Vec<Bool>;
    "Vec<Bounty>": Vec<Bounty>;
    "Vec<BountyIndex>": Vec<BountyIndex>;
    "Vec<BountyStatus>": Vec<BountyStatus>;
    "Vec<BountyStatusActive>": Vec<BountyStatusActive>;
    "Vec<BountyStatusCuratorProposed>": Vec<BountyStatusCuratorProposed>;
    "Vec<BountyStatusPendingPayout>": Vec<BountyStatusPendingPayout>;
    "Vec<BtcAddress>": Vec<BtcAddress>;
    "Vec<BtcDepositCache>": Vec<BtcDepositCache>;
    "Vec<BtcHeader>": Vec<BtcHeader>;
    "Vec<BtcHeaderIndex>": Vec<BtcHeaderIndex>;
    "Vec<BtcHeaderInfo>": Vec<BtcHeaderInfo>;
    "Vec<BtcNetwork>": Vec<BtcNetwork>;
    "Vec<BtcParams>": Vec<BtcParams>;
    "Vec<BtcPartialMerkleTree>": Vec<BtcPartialMerkleTree>;
    "Vec<BtcRelayedTxInfo>": Vec<BtcRelayedTxInfo>;
    "Vec<BtcTransaction>": Vec<BtcTransaction>;
    "Vec<BtcTrusteeAddrInfo>": Vec<BtcTrusteeAddrInfo>;
    "Vec<BtcTrusteeIntentionProps>": Vec<BtcTrusteeIntentionProps>;
    "Vec<BtcTrusteeSessionInfo>": Vec<BtcTrusteeSessionInfo>;
    "Vec<BtcTrusteeType>": Vec<BtcTrusteeType>;
    "Vec<BtcTxResult>": Vec<BtcTxResult>;
    "Vec<BtcTxState>": Vec<BtcTxState>;
    "Vec<BtcTxType>": Vec<BtcTxType>;
    "Vec<BtcTxVerifier>": Vec<BtcTxVerifier>;
    "Vec<BtcVoteResult>": Vec<BtcVoteResult>;
    "Vec<BtcWithdrawalProposal>": Vec<BtcWithdrawalProposal>;
    "Vec<BufferedSessionChange>": Vec<BufferedSessionChange>;
    "Vec<Bytes>": Vec<Bytes>;
    "Vec<Call>": Vec<Call>;
    "Vec<CallHash>": Vec<CallHash>;
    "Vec<CallHashOf>": Vec<CallHashOf>;
    "Vec<CallIndex>": Vec<CallIndex>;
    "Vec<CandidateCommitments>": Vec<CandidateCommitments>;
    "Vec<CandidateDescriptor>": Vec<CandidateDescriptor>;
    "Vec<CandidateHash>": Vec<CandidateHash>;
    "Vec<CandidatePendingAvailability>": Vec<CandidatePendingAvailability>;
    "Vec<CandidateReceipt>": Vec<CandidateReceipt>;
    "Vec<Chain>": Vec<Chain>;
    "Vec<ChainAddress>": Vec<ChainAddress>;
    "Vec<ChainId>": Vec<ChainId>;
    "Vec<ChainProperties>": Vec<ChainProperties>;
    "Vec<ChainType>": Vec<ChainType>;
    "Vec<ChangesTrieConfiguration>": Vec<ChangesTrieConfiguration>;
    "Vec<ClaimRestriction>": Vec<ClaimRestriction>;
    "Vec<CodecHash>": Vec<CodecHash>;
    "Vec<CodeHash>": Vec<CodeHash>;
    "Vec<CollatorId>": Vec<CollatorId>;
    "Vec<CollatorSignature>": Vec<CollatorSignature>;
    "Vec<CollectiveOrigin>": Vec<CollectiveOrigin>;
    "Vec<CommittedCandidateReceipt>": Vec<CommittedCandidateReceipt>;
    "Vec<CompactAssignments>": Vec<CompactAssignments>;
    "Vec<CompactAssignmentsTo257>": Vec<CompactAssignmentsTo257>;
    "Vec<CompactScore>": Vec<CompactScore>;
    "Vec<CompactScoreCompact>": Vec<CompactScoreCompact>;
    "Vec<ConcreteFungible>": Vec<ConcreteFungible>;
    "Vec<ConcreteNonFungible>": Vec<ConcreteNonFungible>;
    "Vec<Consensus>": Vec<Consensus>;
    "Vec<ConsensusEngineId>": Vec<ConsensusEngineId>;
    "Vec<ConsumedWeight>": Vec<ConsumedWeight>;
    "Vec<ContractCallRequest>": Vec<ContractCallRequest>;
    "Vec<ContractConstructorSpec>": Vec<ContractConstructorSpec>;
    "Vec<ContractContractSpec>": Vec<ContractContractSpec>;
    "Vec<ContractCryptoHasher>": Vec<ContractCryptoHasher>;
    "Vec<ContractDiscriminant>": Vec<ContractDiscriminant>;
    "Vec<ContractDisplayName>": Vec<ContractDisplayName>;
    "Vec<ContractEventParamSpec>": Vec<ContractEventParamSpec>;
    "Vec<ContractEventSpec>": Vec<ContractEventSpec>;
    "Vec<ContractExecResult>": Vec<ContractExecResult>;
    "Vec<ContractExecResultErr>": Vec<ContractExecResultErr>;
    "Vec<ContractExecResultErrModule>": Vec<ContractExecResultErrModule>;
    "Vec<ContractExecResultOk>": Vec<ContractExecResultOk>;
    "Vec<ContractExecResultResult>": Vec<ContractExecResultResult>;
    "Vec<ContractExecResultSuccessTo255>": Vec<ContractExecResultSuccessTo255>;
    "Vec<ContractExecResultSuccessTo260>": Vec<ContractExecResultSuccessTo260>;
    "Vec<ContractExecResultTo255>": Vec<ContractExecResultTo255>;
    "Vec<ContractExecResultTo260>": Vec<ContractExecResultTo260>;
    "Vec<ContractInfo>": Vec<ContractInfo>;
    "Vec<ContractLayoutArray>": Vec<ContractLayoutArray>;
    "Vec<ContractLayoutCell>": Vec<ContractLayoutCell>;
    "Vec<ContractLayoutEnum>": Vec<ContractLayoutEnum>;
    "Vec<ContractLayoutHash>": Vec<ContractLayoutHash>;
    "Vec<ContractLayoutHashingStrategy>": Vec<ContractLayoutHashingStrategy>;
    "Vec<ContractLayoutKey>": Vec<ContractLayoutKey>;
    "Vec<ContractLayoutStruct>": Vec<ContractLayoutStruct>;
    "Vec<ContractLayoutStructField>": Vec<ContractLayoutStructField>;
    "Vec<ContractMessageParamSpec>": Vec<ContractMessageParamSpec>;
    "Vec<ContractMessageSpec>": Vec<ContractMessageSpec>;
    "Vec<ContractProject>": Vec<ContractProject>;
    "Vec<ContractProjectContract>": Vec<ContractProjectContract>;
    "Vec<ContractProjectSource>": Vec<ContractProjectSource>;
    "Vec<ContractSelector>": Vec<ContractSelector>;
    "Vec<ContractStorageKey>": Vec<ContractStorageKey>;
    "Vec<ContractStorageLayout>": Vec<ContractStorageLayout>;
    "Vec<ContractTypeSpec>": Vec<ContractTypeSpec>;
    "Vec<Conviction>": Vec<Conviction>;
    "Vec<CoreAssignment>": Vec<CoreAssignment>;
    "Vec<CoreIndex>": Vec<CoreIndex>;
    "Vec<CoreOccupied>": Vec<CoreOccupied>;
    "Vec<CreatedBlock>": Vec<CreatedBlock>;
    "Vec<CurrencyId>": Vec<CurrencyId>;
    "Vec<CurrencyIdOf>": Vec<CurrencyIdOf>;
    "Vec<CurrencyPair>": Vec<CurrencyPair>;
    "Vec<Data>": Vec<Data>;
    "Vec<Decimals>": Vec<Decimals>;
    "Vec<DeferredOffenceOf>": Vec<DeferredOffenceOf>;
    "Vec<DefunctVoter>": Vec<DefunctVoter>;
    "Vec<Delegations>": Vec<Delegations>;
    "Vec<DeletedContract>": Vec<DeletedContract>;
    "Vec<DepositAsset>": Vec<DepositAsset>;
    "Vec<DepositNonce>": Vec<DepositNonce>;
    "Vec<DepositReserveAsset>": Vec<DepositReserveAsset>;
    "Vec<Depth>": Vec<Depth>;
    "Vec<Desc>": Vec<Desc>;
    "Vec<Digest>": Vec<Digest>;
    "Vec<DigestItem>": Vec<DigestItem>;
    "Vec<DigestOf>": Vec<DigestOf>;
    "Vec<DispatchClass>": Vec<DispatchClass>;
    "Vec<DispatchError>": Vec<DispatchError>;
    "Vec<DispatchErrorModule>": Vec<DispatchErrorModule>;
    "Vec<DispatchErrorTo198>": Vec<DispatchErrorTo198>;
    "Vec<DispatchInfo>": Vec<DispatchInfo>;
    "Vec<DispatchInfoTo190>": Vec<DispatchInfoTo190>;
    "Vec<DispatchInfoTo244>": Vec<DispatchInfoTo244>;
    "Vec<DispatchOutcome>": Vec<DispatchOutcome>;
    "Vec<DispatchResult>": Vec<DispatchResult>;
    "Vec<DispatchResultOf>": Vec<DispatchResultOf>;
    "Vec<DispatchResultTo198>": Vec<DispatchResultTo198>;
    "Vec<DoNotConstruct>": Vec<DoNotConstruct>;
    "Vec<DoubleMapTypeLatest>": Vec<DoubleMapTypeLatest>;
    "Vec<DoubleMapTypeV10>": Vec<DoubleMapTypeV10>;
    "Vec<DoubleMapTypeV11>": Vec<DoubleMapTypeV11>;
    "Vec<DoubleMapTypeV12>": Vec<DoubleMapTypeV12>;
    "Vec<DoubleMapTypeV9>": Vec<DoubleMapTypeV9>;
    "Vec<DoubleVoteReport>": Vec<DoubleVoteReport>;
    "Vec<DownwardMessage>": Vec<DownwardMessage>;
    "Vec<EcdsaSignature>": Vec<EcdsaSignature>;
    "Vec<Ed25519Signature>": Vec<Ed25519Signature>;
    "Vec<ElectionCompute>": Vec<ElectionCompute>;
    "Vec<ElectionPhase>": Vec<ElectionPhase>;
    "Vec<ElectionResult>": Vec<ElectionResult>;
    "Vec<ElectionScore>": Vec<ElectionScore>;
    "Vec<ElectionSize>": Vec<ElectionSize>;
    "Vec<ElectionStatus>": Vec<ElectionStatus>;
    "Vec<EncodedFinalityProofs>": Vec<EncodedFinalityProofs>;
    "Vec<EncodedJustification>": Vec<EncodedJustification>;
    "Vec<EpochAuthorship>": Vec<EpochAuthorship>;
    "Vec<EraIndex>": Vec<EraIndex>;
    "Vec<EraPoints>": Vec<EraPoints>;
    "Vec<EraRewardPoints>": Vec<EraRewardPoints>;
    "Vec<EraRewards>": Vec<EraRewards>;
    "Vec<Erc721Token>": Vec<Erc721Token>;
    "Vec<ErrorCode>": Vec<ErrorCode>;
    "Vec<ErrorMetadataLatest>": Vec<ErrorMetadataLatest>;
    "Vec<ErrorMetadataV10>": Vec<ErrorMetadataV10>;
    "Vec<ErrorMetadataV11>": Vec<ErrorMetadataV11>;
    "Vec<ErrorMetadataV12>": Vec<ErrorMetadataV12>;
    "Vec<ErrorMetadataV9>": Vec<ErrorMetadataV9>;
    "Vec<EthAccount>": Vec<EthAccount>;
    "Vec<EthBlock>": Vec<EthBlock>;
    "Vec<EthBloom>": Vec<EthBloom>;
    "Vec<EthCallRequest>": Vec<EthCallRequest>;
    "Vec<EthereumAccountId>": Vec<EthereumAccountId>;
    "Vec<EthereumAddress>": Vec<EthereumAddress>;
    "Vec<EthereumLookupSource>": Vec<EthereumLookupSource>;
    "Vec<EthereumSignature>": Vec<EthereumSignature>;
    "Vec<EthFilter>": Vec<EthFilter>;
    "Vec<EthFilterAddress>": Vec<EthFilterAddress>;
    "Vec<EthFilterChanges>": Vec<EthFilterChanges>;
    "Vec<EthFilterTopic>": Vec<EthFilterTopic>;
    "Vec<EthFilterTopicEntry>": Vec<EthFilterTopicEntry>;
    "Vec<EthFilterTopicInner>": Vec<EthFilterTopicInner>;
    "Vec<EthHeader>": Vec<EthHeader>;
    "Vec<EthLog>": Vec<EthLog>;
    "Vec<EthReceipt>": Vec<EthReceipt>;
    "Vec<EthRichBlock>": Vec<EthRichBlock>;
    "Vec<EthRichHeader>": Vec<EthRichHeader>;
    "Vec<EthStorageProof>": Vec<EthStorageProof>;
    "Vec<EthSubKind>": Vec<EthSubKind>;
    "Vec<EthSubParams>": Vec<EthSubParams>;
    "Vec<EthSubResult>": Vec<EthSubResult>;
    "Vec<EthSyncInfo>": Vec<EthSyncInfo>;
    "Vec<EthSyncStatus>": Vec<EthSyncStatus>;
    "Vec<EthTransaction>": Vec<EthTransaction>;
    "Vec<EthTransactionAction>": Vec<EthTransactionAction>;
    "Vec<EthTransactionCondition>": Vec<EthTransactionCondition>;
    "Vec<EthTransactionRequest>": Vec<EthTransactionRequest>;
    "Vec<EthTransactionStatus>": Vec<EthTransactionStatus>;
    "Vec<EthWork>": Vec<EthWork>;
    "Vec<Event>": Vec<Event>;
    "Vec<EventId>": Vec<EventId>;
    "Vec<EventIndex>": Vec<EventIndex>;
    "Vec<EventMetadataLatest>": Vec<EventMetadataLatest>;
    "Vec<EventMetadataV10>": Vec<EventMetadataV10>;
    "Vec<EventMetadataV11>": Vec<EventMetadataV11>;
    "Vec<EventMetadataV12>": Vec<EventMetadataV12>;
    "Vec<EventMetadataV9>": Vec<EventMetadataV9>;
    "Vec<EventRecord>": Vec<EventRecord>;
    "Vec<EvmAccount>": Vec<EvmAccount>;
    "Vec<EvmLog>": Vec<EvmLog>;
    "Vec<EvmVicinity>": Vec<EvmVicinity>;
    "Vec<ExchangeAsset>": Vec<ExchangeAsset>;
    "Vec<ExitError>": Vec<ExitError>;
    "Vec<ExitFatal>": Vec<ExitFatal>;
    "Vec<ExitReason>": Vec<ExitReason>;
    "Vec<ExitRevert>": Vec<ExitRevert>;
    "Vec<ExitSucceed>": Vec<ExitSucceed>;
    "Vec<Exposure>": Vec<Exposure>;
    "Vec<ExtendedBalance>": Vec<ExtendedBalance>;
    "Vec<Extrinsic>": Vec<Extrinsic>;
    "Vec<ExtrinsicEra>": Vec<ExtrinsicEra>;
    "Vec<ExtrinsicMetadataLatest>": Vec<ExtrinsicMetadataLatest>;
    "Vec<ExtrinsicMetadataV11>": Vec<ExtrinsicMetadataV11>;
    "Vec<ExtrinsicMetadataV12>": Vec<ExtrinsicMetadataV12>;
    "Vec<ExtrinsicOrHash>": Vec<ExtrinsicOrHash>;
    "Vec<ExtrinsicPayload>": Vec<ExtrinsicPayload>;
    "Vec<ExtrinsicPayloadUnknown>": Vec<ExtrinsicPayloadUnknown>;
    "Vec<ExtrinsicPayloadV4>": Vec<ExtrinsicPayloadV4>;
    "Vec<ExtrinsicSignature>": Vec<ExtrinsicSignature>;
    "Vec<ExtrinsicSignatureV4>": Vec<ExtrinsicSignatureV4>;
    "Vec<ExtrinsicStatus>": Vec<ExtrinsicStatus>;
    "Vec<ExtrinsicsWeight>": Vec<ExtrinsicsWeight>;
    "Vec<ExtrinsicUnknown>": Vec<ExtrinsicUnknown>;
    "Vec<ExtrinsicV4>": Vec<ExtrinsicV4>;
    "Vec<FeeDetails>": Vec<FeeDetails>;
    "Vec<Fixed128>": Vec<Fixed128>;
    "Vec<Fixed64>": Vec<Fixed64>;
    "Vec<FixedAssetPower>": Vec<FixedAssetPower>;
    "Vec<FixedI128>": Vec<FixedI128>;
    "Vec<FixedI64>": Vec<FixedI64>;
    "Vec<FixedU128>": Vec<FixedU128>;
    "Vec<FixedU64>": Vec<FixedU64>;
    "Vec<Forcing>": Vec<Forcing>;
    "Vec<FullIdentification>": Vec<FullIdentification>;
    "Vec<FullPairInfo>": Vec<FullPairInfo>;
    "Vec<FunctionArgumentMetadataLatest>": Vec<FunctionArgumentMetadataLatest>;
    "Vec<FunctionArgumentMetadataV10>": Vec<FunctionArgumentMetadataV10>;
    "Vec<FunctionArgumentMetadataV11>": Vec<FunctionArgumentMetadataV11>;
    "Vec<FunctionArgumentMetadataV12>": Vec<FunctionArgumentMetadataV12>;
    "Vec<FunctionArgumentMetadataV9>": Vec<FunctionArgumentMetadataV9>;
    "Vec<FunctionMetadataLatest>": Vec<FunctionMetadataLatest>;
    "Vec<FunctionMetadataV10>": Vec<FunctionMetadataV10>;
    "Vec<FunctionMetadataV11>": Vec<FunctionMetadataV11>;
    "Vec<FunctionMetadataV12>": Vec<FunctionMetadataV12>;
    "Vec<FunctionMetadataV9>": Vec<FunctionMetadataV9>;
    "Vec<FundIndex>": Vec<FundIndex>;
    "Vec<FundInfo>": Vec<FundInfo>;
    "Vec<Gas>": Vec<Gas>;
    "Vec<GenericTrusteeIntentionProps>": Vec<GenericTrusteeIntentionProps>;
    "Vec<GenericTrusteeSessionInfo>": Vec<GenericTrusteeSessionInfo>;
    "Vec<GiltBid>": Vec<GiltBid>;
    "Vec<GlobalDistribution>": Vec<GlobalDistribution>;
    "Vec<GlobalValidationSchedule>": Vec<GlobalValidationSchedule>;
    "Vec<GrandpaEquivocation>": Vec<GrandpaEquivocation>;
    "Vec<GrandpaEquivocationProof>": Vec<GrandpaEquivocationProof>;
    "Vec<GrandpaEquivocationValue>": Vec<GrandpaEquivocationValue>;
    "Vec<GrandpaPrevote>": Vec<GrandpaPrevote>;
    "Vec<GroupIndex>": Vec<GroupIndex>;
    "Vec<H1024>": Vec<H1024>;
    "Vec<H128>": Vec<H128>;
    "Vec<H160>": Vec<H160>;
    "Vec<H2048>": Vec<H2048>;
    "Vec<H256>": Vec<H256>;
    "Vec<H512>": Vec<H512>;
    "Vec<H64>": Vec<H64>;
    "Vec<Handicap>": Vec<Handicap>;
    "Vec<HandicapInfo>": Vec<HandicapInfo>;
    "Vec<Hash>": Vec<Hash>;
    "Vec<HeadData>": Vec<HeadData>;
    "Vec<Header>": Vec<Header>;
    "Vec<Health>": Vec<Health>;
    "Vec<Heartbeat>": Vec<Heartbeat>;
    "Vec<HeartbeatTo244>": Vec<HeartbeatTo244>;
    "Vec<HostConfiguration>": Vec<HostConfiguration>;
    "Vec<HostFnWeights>": Vec<HostFnWeights>;
    "Vec<HostFnWeightsTo264>": Vec<HostFnWeightsTo264>;
    "Vec<HrmpChannel>": Vec<HrmpChannel>;
    "Vec<HrmpChannelId>": Vec<HrmpChannelId>;
    "Vec<HrmpOpenChannelRequest>": Vec<HrmpOpenChannelRequest>;
    "Vec<i128>": Vec<i128>;
    "Vec<I128>": Vec<I128>;
    "Vec<i16>": Vec<i16>;
    "Vec<I16>": Vec<I16>;
    "Vec<i256>": Vec<i256>;
    "Vec<I256>": Vec<I256>;
    "Vec<i32>": Vec<i32>;
    "Vec<I32>": Vec<I32>;
    "Vec<I32F32>": Vec<I32F32>;
    "Vec<i64>": Vec<i64>;
    "Vec<I64>": Vec<I64>;
    "Vec<i8>": Vec<i8>;
    "Vec<I8>": Vec<I8>;
    "Vec<IdentificationTuple>": Vec<IdentificationTuple>;
    "Vec<IdentityFields>": Vec<IdentityFields>;
    "Vec<IdentityInfo>": Vec<IdentityInfo>;
    "Vec<IdentityInfoAdditional>": Vec<IdentityInfoAdditional>;
    "Vec<IdentityJudgement>": Vec<IdentityJudgement>;
    "Vec<ImmortalEra>": Vec<ImmortalEra>;
    "Vec<ImportedAux>": Vec<ImportedAux>;
    "Vec<InboundDownwardMessage>": Vec<InboundDownwardMessage>;
    "Vec<InboundHrmpMessage>": Vec<InboundHrmpMessage>;
    "Vec<InboundHrmpMessages>": Vec<InboundHrmpMessages>;
    "Vec<IncludedBlocks>": Vec<IncludedBlocks>;
    "Vec<InclusionFee>": Vec<InclusionFee>;
    "Vec<IncomingParachain>": Vec<IncomingParachain>;
    "Vec<IncomingParachainDeploy>": Vec<IncomingParachainDeploy>;
    "Vec<IncomingParachainFixed>": Vec<IncomingParachainFixed>;
    "Vec<Index>": Vec<Index>;
    "Vec<IndicesLookupSource>": Vec<IndicesLookupSource>;
    "Vec<IndividualExposure>": Vec<IndividualExposure>;
    "Vec<InitiateReserveWithdraw>": Vec<InitiateReserveWithdraw>;
    "Vec<InitiateTeleport>": Vec<InitiateTeleport>;
    "Vec<InstructionWeights>": Vec<InstructionWeights>;
    "Vec<InvalidTransaction>": Vec<InvalidTransaction>;
    "Vec<IssueRequest>": Vec<IssueRequest>;
    "Vec<Json>": Vec<Json>;
    "Vec<Junction>": Vec<Junction>;
    "Vec<Justification>": Vec<Justification>;
    "Vec<JustificationNotification>": Vec<JustificationNotification>;
    "Vec<Justifications>": Vec<Justifications>;
    "Vec<Key>": Vec<Key>;
    "Vec<KeyOwnerProof>": Vec<KeyOwnerProof>;
    "Vec<Keys>": Vec<Keys>;
    "Vec<KeyType>": Vec<KeyType>;
    "Vec<KeyTypeId>": Vec<KeyTypeId>;
    "Vec<KeyValue>": Vec<KeyValue>;
    "Vec<KeyValueOption>": Vec<KeyValueOption>;
    "Vec<Kind>": Vec<Kind>;
    "Vec<LastContribution>": Vec<LastContribution>;
    "Vec<LastRuntimeUpgradeInfo>": Vec<LastRuntimeUpgradeInfo>;
    "Vec<LeasePeriod>": Vec<LeasePeriod>;
    "Vec<LeasePeriodOf>": Vec<LeasePeriodOf>;
    "Vec<Limits>": Vec<Limits>;
    "Vec<LimitsTo264>": Vec<LimitsTo264>;
    "Vec<LocalValidationData>": Vec<LocalValidationData>;
    "Vec<LockedType>": Vec<LockedType>;
    "Vec<LockIdentifier>": Vec<LockIdentifier>;
    "Vec<LookupSource>": Vec<LookupSource>;
    "Vec<LookupTarget>": Vec<LookupTarget>;
    "Vec<LotteryConfig>": Vec<LotteryConfig>;
    "Vec<MapTypeLatest>": Vec<MapTypeLatest>;
    "Vec<MapTypeV10>": Vec<MapTypeV10>;
    "Vec<MapTypeV11>": Vec<MapTypeV11>;
    "Vec<MapTypeV12>": Vec<MapTypeV12>;
    "Vec<MapTypeV9>": Vec<MapTypeV9>;
    "Vec<MaybeRandomness>": Vec<MaybeRandomness>;
    "Vec<MaybeVrf>": Vec<MaybeVrf>;
    "Vec<MemberCount>": Vec<MemberCount>;
    "Vec<MembershipProof>": Vec<MembershipProof>;
    "Vec<Memo>": Vec<Memo>;
    "Vec<MessageIngestionType>": Vec<MessageIngestionType>;
    "Vec<MessageQueueChain>": Vec<MessageQueueChain>;
    "Vec<MessagingStateSnapshot>": Vec<MessagingStateSnapshot>;
    "Vec<MessagingStateSnapshotEgressEntry>": Vec<MessagingStateSnapshotEgressEntry>;
    "Vec<MetadataAll>": Vec<MetadataAll>;
    "Vec<MetadataLatest>": Vec<MetadataLatest>;
    "Vec<MetadataV10>": Vec<MetadataV10>;
    "Vec<MetadataV11>": Vec<MetadataV11>;
    "Vec<MetadataV12>": Vec<MetadataV12>;
    "Vec<MetadataV9>": Vec<MetadataV9>;
    "Vec<MinerLedger>": Vec<MinerLedger>;
    "Vec<MiningAssetInfo>": Vec<MiningAssetInfo>;
    "Vec<MiningDistribution>": Vec<MiningDistribution>;
    "Vec<MiningWeight>": Vec<MiningWeight>;
    "Vec<MmrLeafProof>": Vec<MmrLeafProof>;
    "Vec<ModuleConstantMetadataLatest>": Vec<ModuleConstantMetadataLatest>;
    "Vec<ModuleConstantMetadataV10>": Vec<ModuleConstantMetadataV10>;
    "Vec<ModuleConstantMetadataV11>": Vec<ModuleConstantMetadataV11>;
    "Vec<ModuleConstantMetadataV12>": Vec<ModuleConstantMetadataV12>;
    "Vec<ModuleConstantMetadataV9>": Vec<ModuleConstantMetadataV9>;
    "Vec<ModuleId>": Vec<ModuleId>;
    "Vec<ModuleMetadataLatest>": Vec<ModuleMetadataLatest>;
    "Vec<ModuleMetadataV10>": Vec<ModuleMetadataV10>;
    "Vec<ModuleMetadataV11>": Vec<ModuleMetadataV11>;
    "Vec<ModuleMetadataV12>": Vec<ModuleMetadataV12>;
    "Vec<ModuleMetadataV9>": Vec<ModuleMetadataV9>;
    "Vec<Moment>": Vec<Moment>;
    "Vec<MomentOf>": Vec<MomentOf>;
    "Vec<MoreAttestations>": Vec<MoreAttestations>;
    "Vec<MortalEra>": Vec<MortalEra>;
    "Vec<MultiAddress>": Vec<MultiAddress>;
    "Vec<MultiAsset>": Vec<MultiAsset>;
    "Vec<MultiLocation>": Vec<MultiLocation>;
    "Vec<Multiplier>": Vec<Multiplier>;
    "Vec<Multisig>": Vec<Multisig>;
    "Vec<MultiSignature>": Vec<MultiSignature>;
    "Vec<MultiSigner>": Vec<MultiSigner>;
    "Vec<NetworkId>": Vec<NetworkId>;
    "Vec<NetworkState>": Vec<NetworkState>;
    "Vec<NetworkStatePeerset>": Vec<NetworkStatePeerset>;
    "Vec<NetworkStatePeersetInfo>": Vec<NetworkStatePeersetInfo>;
    "Vec<NetworkType>": Vec<NetworkType>;
    "Vec<NewBidder>": Vec<NewBidder>;
    "Vec<NextAuthority>": Vec<NextAuthority>;
    "Vec<NextConfigDescriptor>": Vec<NextConfigDescriptor>;
    "Vec<NextConfigDescriptorV1>": Vec<NextConfigDescriptorV1>;
    "Vec<NodeRole>": Vec<NodeRole>;
    "Vec<Nominations>": Vec<Nominations>;
    "Vec<NominatorIndex>": Vec<NominatorIndex>;
    "Vec<NominatorIndexCompact>": Vec<NominatorIndexCompact>;
    "Vec<NominatorLedger>": Vec<NominatorLedger>;
    "Vec<NotConnectedPeer>": Vec<NotConnectedPeer>;
    "Vec<Null>": Vec<Null>;
    "Vec<OffchainAccuracy>": Vec<OffchainAccuracy>;
    "Vec<OffchainAccuracyCompact>": Vec<OffchainAccuracyCompact>;
    "Vec<OffenceDetails>": Vec<OffenceDetails>;
    "Vec<Offender>": Vec<Offender>;
    "Vec<OpaqueCall>": Vec<OpaqueCall>;
    "Vec<OpaqueMultiaddr>": Vec<OpaqueMultiaddr>;
    "Vec<OpaqueNetworkState>": Vec<OpaqueNetworkState>;
    "Vec<OpaquePeerId>": Vec<OpaquePeerId>;
    "Vec<OpaqueTimeSlot>": Vec<OpaqueTimeSlot>;
    "Vec<OpenTip>": Vec<OpenTip>;
    "Vec<OpenTipFinderTo225>": Vec<OpenTipFinderTo225>;
    "Vec<OpenTipTip>": Vec<OpenTipTip>;
    "Vec<OpenTipTo225>": Vec<OpenTipTo225>;
    "Vec<Order>": Vec<Order>;
    "Vec<OrderExecutedInfo>": Vec<OrderExecutedInfo>;
    "Vec<OrderId>": Vec<OrderId>;
    "Vec<OrderInfo>": Vec<OrderInfo>;
    "Vec<OrderProperty>": Vec<OrderProperty>;
    "Vec<OrderStatus>": Vec<OrderStatus>;
    "Vec<OrderType>": Vec<OrderType>;
    "Vec<Origin>": Vec<Origin>;
    "Vec<OriginCaller>": Vec<OriginCaller>;
    "Vec<OriginKind>": Vec<OriginKind>;
    "Vec<OutboundHrmpMessage>": Vec<OutboundHrmpMessage>;
    "Vec<Owner>": Vec<Owner>;
    "Vec<Page>": Vec<Page>;
    "Vec<PalletsOrigin>": Vec<PalletsOrigin>;
    "Vec<PalletVersion>": Vec<PalletVersion>;
    "Vec<ParachainDispatchOrigin>": Vec<ParachainDispatchOrigin>;
    "Vec<ParachainInherentData>": Vec<ParachainInherentData>;
    "Vec<ParachainProposal>": Vec<ParachainProposal>;
    "Vec<ParaGenesisArgs>": Vec<ParaGenesisArgs>;
    "Vec<ParaId>": Vec<ParaId>;
    "Vec<ParaInfo>": Vec<ParaInfo>;
    "Vec<ParaLifecycle>": Vec<ParaLifecycle>;
    "Vec<ParaPastCodeMeta>": Vec<ParaPastCodeMeta>;
    "Vec<ParaScheduling>": Vec<ParaScheduling>;
    "Vec<ParathreadClaim>": Vec<ParathreadClaim>;
    "Vec<ParathreadClaimQueue>": Vec<ParathreadClaimQueue>;
    "Vec<ParathreadEntry>": Vec<ParathreadEntry>;
    "Vec<ParaValidatorIndex>": Vec<ParaValidatorIndex>;
    "Vec<Pays>": Vec<Pays>;
    "Vec<Peer>": Vec<Peer>;
    "Vec<PeerEndpoint>": Vec<PeerEndpoint>;
    "Vec<PeerEndpointAddr>": Vec<PeerEndpointAddr>;
    "Vec<PeerInfo>": Vec<PeerInfo>;
    "Vec<PeerPing>": Vec<PeerPing>;
    "Vec<PendingPause>": Vec<PendingPause>;
    "Vec<PendingResume>": Vec<PendingResume>;
    "Vec<Perbill>": Vec<Perbill>;
    "Vec<Percent>": Vec<Percent>;
    "Vec<PerDispatchClass>": Vec<PerDispatchClass>;
    "Vec<PerDispatchClassU32>": Vec<PerDispatchClassU32>;
    "Vec<PerDispatchClassWeight>": Vec<PerDispatchClassWeight>;
    "Vec<PerDispatchClassWeightsPerClass>": Vec<PerDispatchClassWeightsPerClass>;
    "Vec<Period>": Vec<Period>;
    "Vec<Permill>": Vec<Permill>;
    "Vec<PermissionLatest>": Vec<PermissionLatest>;
    "Vec<PermissionsV1>": Vec<PermissionsV1>;
    "Vec<PermissionVersions>": Vec<PermissionVersions>;
    "Vec<Perquintill>": Vec<Perquintill>;
    "Vec<PersistedValidationData>": Vec<PersistedValidationData>;
    "Vec<PerU16>": Vec<PerU16>;
    "Vec<Phantom>": Vec<Phantom>;
    "Vec<PhantomData>": Vec<PhantomData>;
    "Vec<Phase>": Vec<Phase>;
    "Vec<PhragmenScore>": Vec<PhragmenScore>;
    "Vec<Points>": Vec<Points>;
    "Vec<Precommits>": Vec<Precommits>;
    "Vec<PrefabWasmModule>": Vec<PrefabWasmModule>;
    "Vec<PrefixedStorageKey>": Vec<PrefixedStorageKey>;
    "Vec<PreimageStatus>": Vec<PreimageStatus>;
    "Vec<PreimageStatusAvailable>": Vec<PreimageStatusAvailable>;
    "Vec<PreRuntime>": Vec<PreRuntime>;
    "Vec<Prevotes>": Vec<Prevotes>;
    "Vec<Price>": Vec<Price>;
    "Vec<PriceFluctuation>": Vec<PriceFluctuation>;
    "Vec<Priority>": Vec<Priority>;
    "Vec<PriorLock>": Vec<PriorLock>;
    "Vec<PropIndex>": Vec<PropIndex>;
    "Vec<Proposal>": Vec<Proposal>;
    "Vec<ProposalIndex>": Vec<ProposalIndex>;
    "Vec<ProposalStatus>": Vec<ProposalStatus>;
    "Vec<ProposalVotes>": Vec<ProposalVotes>;
    "Vec<ProxyAnnouncement>": Vec<ProxyAnnouncement>;
    "Vec<ProxyDefinition>": Vec<ProxyDefinition>;
    "Vec<ProxyState>": Vec<ProxyState>;
    "Vec<ProxyType>": Vec<ProxyType>;
    "Vec<QueryHolding>": Vec<QueryHolding>;
    "Vec<QueuedParathread>": Vec<QueuedParathread>;
    "Vec<Randomness>": Vec<Randomness>;
    "Vec<Raw>": Vec<Raw>;
    "Vec<RawAuraPreDigest>": Vec<RawAuraPreDigest>;
    "Vec<RawBabePreDigest>": Vec<RawBabePreDigest>;
    "Vec<RawBabePreDigestCompat>": Vec<RawBabePreDigestCompat>;
    "Vec<RawBabePreDigestPrimary>": Vec<RawBabePreDigestPrimary>;
    "Vec<RawBabePreDigestPrimaryTo159>": Vec<RawBabePreDigestPrimaryTo159>;
    "Vec<RawBabePreDigestSecondaryPlain>": Vec<RawBabePreDigestSecondaryPlain>;
    "Vec<RawBabePreDigestSecondaryTo159>": Vec<RawBabePreDigestSecondaryTo159>;
    "Vec<RawBabePreDigestSecondaryVRF>": Vec<RawBabePreDigestSecondaryVRF>;
    "Vec<RawBabePreDigestTo159>": Vec<RawBabePreDigestTo159>;
    "Vec<RawOrigin>": Vec<RawOrigin>;
    "Vec<RawSolution>": Vec<RawSolution>;
    "Vec<RawVRFOutput>": Vec<RawVRFOutput>;
    "Vec<ReadProof>": Vec<ReadProof>;
    "Vec<ReadySolution>": Vec<ReadySolution>;
    "Vec<Reasons>": Vec<Reasons>;
    "Vec<RecoveryConfig>": Vec<RecoveryConfig>;
    "Vec<RedeemRequest>": Vec<RedeemRequest>;
    "Vec<RefCount>": Vec<RefCount>;
    "Vec<RefCountTo259>": Vec<RefCountTo259>;
    "Vec<ReferendumIndex>": Vec<ReferendumIndex>;
    "Vec<ReferendumInfo>": Vec<ReferendumInfo>;
    "Vec<ReferendumInfoFinished>": Vec<ReferendumInfoFinished>;
    "Vec<ReferendumInfoTo239>": Vec<ReferendumInfoTo239>;
    "Vec<ReferendumStatus>": Vec<ReferendumStatus>;
    "Vec<ReferralId>": Vec<ReferralId>;
    "Vec<RegisteredParachainInfo>": Vec<RegisteredParachainInfo>;
    "Vec<RegistrarIndex>": Vec<RegistrarIndex>;
    "Vec<RegistrarInfo>": Vec<RegistrarInfo>;
    "Vec<Registration>": Vec<Registration>;
    "Vec<RegistrationJudgement>": Vec<RegistrationJudgement>;
    "Vec<RelayChainBlockNumber>": Vec<RelayChainBlockNumber>;
    "Vec<RelayChainHash>": Vec<RelayChainHash>;
    "Vec<RelayedFrom>": Vec<RelayedFrom>;
    "Vec<RelayTo>": Vec<RelayTo>;
    "Vec<Releases>": Vec<Releases>;
    "Vec<Remark>": Vec<Remark>;
    "Vec<Renouncing>": Vec<Renouncing>;
    "Vec<ReportedRoundStates>": Vec<ReportedRoundStates>;
    "Vec<Reporter>": Vec<Reporter>;
    "Vec<ReportIdOf>": Vec<ReportIdOf>;
    "Vec<RequestId>": Vec<RequestId>;
    "Vec<ReserveAssetDeposit>": Vec<ReserveAssetDeposit>;
    "Vec<ResourceId>": Vec<ResourceId>;
    "Vec<Retriable>": Vec<Retriable>;
    "Vec<RewardDestination>": Vec<RewardDestination>;
    "Vec<RewardPoint>": Vec<RewardPoint>;
    "Vec<RoundSnapshot>": Vec<RoundSnapshot>;
    "Vec<RoundState>": Vec<RoundState>;
    "Vec<RpcBalance>": Vec<RpcBalance>;
    "Vec<RpcFeeDetails>": Vec<RpcFeeDetails>;
    "Vec<RpcInclusionFee>": Vec<RpcInclusionFee>;
    "Vec<RpcMethods>": Vec<RpcMethods>;
    "Vec<RpcMiningDividendInfo>": Vec<RpcMiningDividendInfo>;
    "Vec<RpcMiningWeight>": Vec<RpcMiningWeight>;
    "Vec<RpcOrder>": Vec<RpcOrder>;
    "Vec<RpcPrice>": Vec<RpcPrice>;
    "Vec<RpcTotalAssetInfo>": Vec<RpcTotalAssetInfo>;
    "Vec<RpcVaultInfo>": Vec<RpcVaultInfo>;
    "Vec<RpcVoteWeight>": Vec<RpcVoteWeight>;
    "Vec<RpcWithdrawalRecord>": Vec<RpcWithdrawalRecord>;
    "Vec<RuntimeDbWeight>": Vec<RuntimeDbWeight>;
    "Vec<RuntimeDispatchInfo>": Vec<RuntimeDispatchInfo>;
    "Vec<RuntimeVersion>": Vec<RuntimeVersion>;
    "Vec<RuntimeVersionApi>": Vec<RuntimeVersionApi>;
    "Vec<Schedule>": Vec<Schedule>;
    "Vec<Scheduled>": Vec<Scheduled>;
    "Vec<ScheduledTo254>": Vec<ScheduledTo254>;
    "Vec<SchedulePeriod>": Vec<SchedulePeriod>;
    "Vec<SchedulePriority>": Vec<SchedulePriority>;
    "Vec<ScheduleTo212>": Vec<ScheduleTo212>;
    "Vec<ScheduleTo258>": Vec<ScheduleTo258>;
    "Vec<ScheduleTo264>": Vec<ScheduleTo264>;
    "Vec<Scheduling>": Vec<Scheduling>;
    "Vec<Seal>": Vec<Seal>;
    "Vec<SealV0>": Vec<SealV0>;
    "Vec<SeatHolder>": Vec<SeatHolder>;
    "Vec<SeedOf>": Vec<SeedOf>;
    "Vec<SessionIndex>": Vec<SessionIndex>;
    "Vec<SessionInfo>": Vec<SessionInfo>;
    "Vec<SessionInfoValidatorGroup>": Vec<SessionInfoValidatorGroup>;
    "Vec<SessionKeys1>": Vec<SessionKeys1>;
    "Vec<SessionKeys2>": Vec<SessionKeys2>;
    "Vec<SessionKeys3>": Vec<SessionKeys3>;
    "Vec<SessionKeys4>": Vec<SessionKeys4>;
    "Vec<SessionKeys5>": Vec<SessionKeys5>;
    "Vec<SessionKeys6>": Vec<SessionKeys6>;
    "Vec<SessionKeys7>": Vec<SessionKeys7>;
    "Vec<SessionKeys8>": Vec<SessionKeys8>;
    "Vec<SessionKeys9>": Vec<SessionKeys9>;
    "Vec<SetId>": Vec<SetId>;
    "Vec<SetIndex>": Vec<SetIndex>;
    "Vec<Side>": Vec<Side>;
    "Vec<SiField>": Vec<SiField>;
    "Vec<Signature>": Vec<Signature>;
    "Vec<SignedAvailabilityBitfield>": Vec<SignedAvailabilityBitfield>;
    "Vec<SignedAvailabilityBitfields>": Vec<SignedAvailabilityBitfields>;
    "Vec<SignedBlock>": Vec<SignedBlock>;
    "Vec<SignedBlockWithJustification>": Vec<SignedBlockWithJustification>;
    "Vec<SignedBlockWithJustifications>": Vec<SignedBlockWithJustifications>;
    "Vec<SignerPayload>": Vec<SignerPayload>;
    "Vec<SigningContext>": Vec<SigningContext>;
    "Vec<SiLookupTypeId>": Vec<SiLookupTypeId>;
    "Vec<SiPath>": Vec<SiPath>;
    "Vec<SiType>": Vec<SiType>;
    "Vec<SiTypeDef>": Vec<SiTypeDef>;
    "Vec<SiTypeDefArray>": Vec<SiTypeDefArray>;
    "Vec<SiTypeDefComposite>": Vec<SiTypeDefComposite>;
    "Vec<SiTypeDefPrimitive>": Vec<SiTypeDefPrimitive>;
    "Vec<SiTypeDefSequence>": Vec<SiTypeDefSequence>;
    "Vec<SiTypeDefTuple>": Vec<SiTypeDefTuple>;
    "Vec<SiTypeDefVariant>": Vec<SiTypeDefVariant>;
    "Vec<SiVariant>": Vec<SiVariant>;
    "Vec<SlashingSpans>": Vec<SlashingSpans>;
    "Vec<SlashingSpansTo204>": Vec<SlashingSpansTo204>;
    "Vec<SlashJournalEntry>": Vec<SlashJournalEntry>;
    "Vec<Slot>": Vec<Slot>;
    "Vec<SlotNumber>": Vec<SlotNumber>;
    "Vec<SlotRange>": Vec<SlotRange>;
    "Vec<SocietyJudgement>": Vec<SocietyJudgement>;
    "Vec<SocietyVote>": Vec<SocietyVote>;
    "Vec<SolutionOrSnapshotSize>": Vec<SolutionOrSnapshotSize>;
    "Vec<SolutionSupport>": Vec<SolutionSupport>;
    "Vec<SolutionSupports>": Vec<SolutionSupports>;
    "Vec<SpanIndex>": Vec<SpanIndex>;
    "Vec<SpanRecord>": Vec<SpanRecord>;
    "Vec<Sr25519Signature>": Vec<Sr25519Signature>;
    "Vec<StakingLedger>": Vec<StakingLedger>;
    "Vec<StakingLedgerTo223>": Vec<StakingLedgerTo223>;
    "Vec<StakingLedgerTo240>": Vec<StakingLedgerTo240>;
    "Vec<StakingRequirement>": Vec<StakingRequirement>;
    "Vec<Statement>": Vec<Statement>;
    "Vec<StatementKind>": Vec<StatementKind>;
    "Vec<Status>": Vec<Status>;
    "Vec<StorageChangeSet>": Vec<StorageChangeSet>;
    "Vec<StorageData>": Vec<StorageData>;
    "Vec<StorageEntryMetadataLatest>": Vec<StorageEntryMetadataLatest>;
    "Vec<StorageEntryMetadataV10>": Vec<StorageEntryMetadataV10>;
    "Vec<StorageEntryMetadataV11>": Vec<StorageEntryMetadataV11>;
    "Vec<StorageEntryMetadataV12>": Vec<StorageEntryMetadataV12>;
    "Vec<StorageEntryMetadataV9>": Vec<StorageEntryMetadataV9>;
    "Vec<StorageEntryModifierLatest>": Vec<StorageEntryModifierLatest>;
    "Vec<StorageEntryModifierV10>": Vec<StorageEntryModifierV10>;
    "Vec<StorageEntryModifierV11>": Vec<StorageEntryModifierV11>;
    "Vec<StorageEntryModifierV12>": Vec<StorageEntryModifierV12>;
    "Vec<StorageEntryModifierV9>": Vec<StorageEntryModifierV9>;
    "Vec<StorageEntryTypeLatest>": Vec<StorageEntryTypeLatest>;
    "Vec<StorageEntryTypeV10>": Vec<StorageEntryTypeV10>;
    "Vec<StorageEntryTypeV11>": Vec<StorageEntryTypeV11>;
    "Vec<StorageEntryTypeV12>": Vec<StorageEntryTypeV12>;
    "Vec<StorageEntryTypeV9>": Vec<StorageEntryTypeV9>;
    "Vec<StorageHasher>": Vec<StorageHasher>;
    "Vec<StorageHasherV10>": Vec<StorageHasherV10>;
    "Vec<StorageHasherV11>": Vec<StorageHasherV11>;
    "Vec<StorageHasherV12>": Vec<StorageHasherV12>;
    "Vec<StorageHasherV9>": Vec<StorageHasherV9>;
    "Vec<StorageKey>": Vec<StorageKey>;
    "Vec<StorageKind>": Vec<StorageKind>;
    "Vec<StorageMetadataLatest>": Vec<StorageMetadataLatest>;
    "Vec<StorageMetadataV10>": Vec<StorageMetadataV10>;
    "Vec<StorageMetadataV11>": Vec<StorageMetadataV11>;
    "Vec<StorageMetadataV12>": Vec<StorageMetadataV12>;
    "Vec<StorageMetadataV9>": Vec<StorageMetadataV9>;
    "Vec<StorageProof>": Vec<StorageProof>;
    "Vec<StoredPendingChange>": Vec<StoredPendingChange>;
    "Vec<StoredState>": Vec<StoredState>;
    "Vec<StrikeCount>": Vec<StrikeCount>;
    "Vec<SubId>": Vec<SubId>;
    "Vec<SyncState>": Vec<SyncState>;
    "Vec<SystemInherentData>": Vec<SystemInherentData>;
    "Vec<SystemOrigin>": Vec<SystemOrigin>;
    "Vec<SystemVault>": Vec<SystemVault>;
    "Vec<Tally>": Vec<Tally>;
    "Vec<TaskAddress>": Vec<TaskAddress>;
    "Vec<TAssetBalance>": Vec<TAssetBalance>;
    "Vec<TAssetDepositBalance>": Vec<TAssetDepositBalance>;
    "Vec<TeleportAsset>": Vec<TeleportAsset>;
    "Vec<Text>": Vec<Text>;
    "Vec<Timepoint>": Vec<Timepoint>;
    "Vec<Token>": Vec<Token>;
    "Vec<TokenId>": Vec<TokenId>;
    "Vec<TombstoneContractInfo>": Vec<TombstoneContractInfo>;
    "Vec<TotalAssetInfo>": Vec<TotalAssetInfo>;
    "Vec<TradingHistoryIndex>": Vec<TradingHistoryIndex>;
    "Vec<TradingPairId>": Vec<TradingPairId>;
    "Vec<TradingPairInfo>": Vec<TradingPairInfo>;
    "Vec<TradingPairProfile>": Vec<TradingPairProfile>;
    "Vec<TradingPrice>": Vec<TradingPrice>;
    "Vec<Transact>": Vec<Transact>;
    "Vec<TransactionPriority>": Vec<TransactionPriority>;
    "Vec<TransactionValidityError>": Vec<TransactionValidityError>;
    "Vec<TransientValidationData>": Vec<TransientValidationData>;
    "Vec<TreasuryProposal>": Vec<TreasuryProposal>;
    "Vec<TrieId>": Vec<TrieId>;
    "Vec<TrieIndex>": Vec<TrieIndex>;
    "Vec<TrusteeInfoConfig>": Vec<TrusteeInfoConfig>;
    "Vec<Type>": Vec<Type>;
    "Vec<u128>": Vec<u128>;
    "Vec<U128>": Vec<U128>;
    "Vec<u16>": Vec<u16>;
    "Vec<U16>": Vec<U16>;
    "Vec<u256>": Vec<u256>;
    "Vec<U256>": Vec<U256>;
    "Vec<u32>": Vec<u32>;
    "Vec<U32>": Vec<U32>;
    "Vec<U32F32>": Vec<U32F32>;
    "Vec<u64>": Vec<u64>;
    "Vec<U64>": Vec<U64>;
    "Vec<u8>": Vec<u8>;
    "Vec<U8>": Vec<U8>;
    "Vec<UnappliedSlash>": Vec<UnappliedSlash>;
    "Vec<UnappliedSlashOther>": Vec<UnappliedSlashOther>;
    "Vec<Unbonded>": Vec<Unbonded>;
    "Vec<UnbondedIndex>": Vec<UnbondedIndex>;
    "Vec<UncleEntryItem>": Vec<UncleEntryItem>;
    "Vec<UnknownTransaction>": Vec<UnknownTransaction>;
    "Vec<UnlockChunk>": Vec<UnlockChunk>;
    "Vec<UpwardMessage>": Vec<UpwardMessage>;
    "Vec<usize>": Vec<usize>;
    "Vec<USize>": Vec<USize>;
    "Vec<ValidationCode>": Vec<ValidationCode>;
    "Vec<ValidationData>": Vec<ValidationData>;
    "Vec<ValidationDataType>": Vec<ValidationDataType>;
    "Vec<ValidationFunctionParams>": Vec<ValidationFunctionParams>;
    "Vec<ValidatorCount>": Vec<ValidatorCount>;
    "Vec<ValidatorId>": Vec<ValidatorId>;
    "Vec<ValidatorIdOf>": Vec<ValidatorIdOf>;
    "Vec<ValidatorIndex>": Vec<ValidatorIndex>;
    "Vec<ValidatorIndexCompact>": Vec<ValidatorIndexCompact>;
    "Vec<ValidatorInfo>": Vec<ValidatorInfo>;
    "Vec<ValidatorLedger>": Vec<ValidatorLedger>;
    "Vec<ValidatorPrefs>": Vec<ValidatorPrefs>;
    "Vec<ValidatorPrefsTo145>": Vec<ValidatorPrefsTo145>;
    "Vec<ValidatorPrefsTo196>": Vec<ValidatorPrefsTo196>;
    "Vec<ValidatorPrefsWithBlocked>": Vec<ValidatorPrefsWithBlocked>;
    "Vec<ValidatorPrefsWithCommission>": Vec<ValidatorPrefsWithCommission>;
    "Vec<ValidatorProfile>": Vec<ValidatorProfile>;
    "Vec<ValidatorSignature>": Vec<ValidatorSignature>;
    "Vec<ValidityAttestation>": Vec<ValidityAttestation>;
    "Vec<Vault>": Vec<Vault>;
    "Vec<VaultStatus>": Vec<VaultStatus>;
    "Vec<VecInboundHrmpMessage>": Vec<VecInboundHrmpMessage>;
    "Vec<VersionedMultiAsset>": Vec<VersionedMultiAsset>;
    "Vec<VersionedMultiLocation>": Vec<VersionedMultiLocation>;
    "Vec<VersionedXcm>": Vec<VersionedXcm>;
    "Vec<VestingInfo>": Vec<VestingInfo>;
    "Vec<VestingSchedule>": Vec<VestingSchedule>;
    "Vec<Vote>": Vec<Vote>;
    "Vec<VoteIndex>": Vec<VoteIndex>;
    "Vec<Voter>": Vec<Voter>;
    "Vec<VoterInfo>": Vec<VoterInfo>;
    "Vec<Votes>": Vec<Votes>;
    "Vec<VotesTo230>": Vec<VotesTo230>;
    "Vec<VoteThreshold>": Vec<VoteThreshold>;
    "Vec<VoteWeight>": Vec<VoteWeight>;
    "Vec<Voting>": Vec<Voting>;
    "Vec<VotingDelegating>": Vec<VotingDelegating>;
    "Vec<VotingDirect>": Vec<VotingDirect>;
    "Vec<VotingDirectVote>": Vec<VotingDirectVote>;
    "Vec<VouchingStatus>": Vec<VouchingStatus>;
    "Vec<VrfData>": Vec<VrfData>;
    "Vec<VrfOutput>": Vec<VrfOutput>;
    "Vec<VrfProof>": Vec<VrfProof>;
    "Vec<Weight>": Vec<Weight>;
    "Vec<WeightMultiplier>": Vec<WeightMultiplier>;
    "Vec<WeightPerClass>": Vec<WeightPerClass>;
    "Vec<WeightToFeeCoefficient>": Vec<WeightToFeeCoefficient>;
    "Vec<WinnersData>": Vec<WinnersData>;
    "Vec<WinnersDataTuple>": Vec<WinnersDataTuple>;
    "Vec<WinningData>": Vec<WinningData>;
    "Vec<WinningDataEntry>": Vec<WinningDataEntry>;
    "Vec<WithdrawalLimit>": Vec<WithdrawalLimit>;
    "Vec<WithdrawalRecord>": Vec<WithdrawalRecord>;
    "Vec<WithdrawalRecordId>": Vec<WithdrawalRecordId>;
    "Vec<WithdrawalRecordOf>": Vec<WithdrawalRecordOf>;
    "Vec<WithdrawalState>": Vec<WithdrawalState>;
    "Vec<WithdrawAsset>": Vec<WithdrawAsset>;
    "Vec<WithdrawReasons>": Vec<WithdrawReasons>;
    "Vec<Xcm>": Vec<Xcm>;
    "Vec<XcmError>": Vec<XcmError>;
    "Vec<XcmResult>": Vec<XcmResult>;
    AbridgedCandidateReceipt: AbridgedCandidateReceipt;
    AbridgedHostConfiguration: AbridgedHostConfiguration;
    AbridgedHrmpChannel: AbridgedHrmpChannel;
    AbstractFungible: AbstractFungible;
    AbstractNonFungible: AbstractNonFungible;
    AccountData: AccountData;
    AccountId: AccountId;
    AccountId32Junction: AccountId32Junction;
    AccountIdOf: AccountIdOf;
    AccountIndex: AccountIndex;
    AccountIndex64Junction: AccountIndex64Junction;
    AccountInfo: AccountInfo;
    AccountInfoWithDualRefCount: AccountInfoWithDualRefCount;
    AccountInfoWithProviders: AccountInfoWithProviders;
    AccountInfoWithRefCount: AccountInfoWithRefCount;
    AccountInfoWithTripleRefCount: AccountInfoWithTripleRefCount;
    AccountKey20Junction: AccountKey20Junction;
    AccountStatus: AccountStatus;
    AccountValidity: AccountValidity;
    AccountVote: AccountVote;
    AccountVoteSplit: AccountVoteSplit;
    AccountVoteStandard: AccountVoteStandard;
    ActiveEraInfo: ActiveEraInfo;
    ActiveGilt: ActiveGilt;
    ActiveGiltsTotal: ActiveGiltsTotal;
    ActiveIndex: ActiveIndex;
    ActiveRecovery: ActiveRecovery;
    Address: Address;
    AddrStr: AddrStr;
    AliveContractInfo: AliveContractInfo;
    AllowedSlots: AllowedSlots;
    Amount: Amount;
    AmountOf: AmountOf;
    AnySignature: AnySignature;
    ApiId: ApiId;
    ApplyExtrinsicResult: ApplyExtrinsicResult;
    ApprovalFlag: ApprovalFlag;
    Approvals: Approvals;
    AssetApproval: AssetApproval;
    AssetApprovalKey: AssetApprovalKey;
    AssetBalance: AssetBalance;
    AssetDestroyWitness: AssetDestroyWitness;
    AssetDetails: AssetDetails;
    AssetId: AssetId;
    AssetInfo: AssetInfo;
    AssetInstance: AssetInstance;
    AssetLedger: AssetLedger;
    AssetMetadata: AssetMetadata;
    AssetOptions: AssetOptions;
    AssetRestriction: AssetRestriction;
    AssetRestrictions: AssetRestrictions;
    AssetType: AssetType;
    AssignmentId: AssignmentId;
    AssignmentKind: AssignmentKind;
    AttestedCandidate: AttestedCandidate;
    AuctionIndex: AuctionIndex;
    AuthIndex: AuthIndex;
    AuthorityDiscoveryId: AuthorityDiscoveryId;
    AuthorityId: AuthorityId;
    AuthorityIndex: AuthorityIndex;
    AuthorityList: AuthorityList;
    AuthoritySignature: AuthoritySignature;
    AuthorityWeight: AuthorityWeight;
    AvailabilityBitfield: AvailabilityBitfield;
    AvailabilityBitfieldRecord: AvailabilityBitfieldRecord;
    BabeAuthorityWeight: BabeAuthorityWeight;
    BabeBlockWeight: BabeBlockWeight;
    BabeEpochConfiguration: BabeEpochConfiguration;
    BabeEquivocationProof: BabeEquivocationProof;
    BabeWeight: BabeWeight;
    BackedCandidate: BackedCandidate;
    Balance: Balance;
    BalanceLock: BalanceLock;
    BalanceLockTo212: BalanceLockTo212;
    BalanceOf: BalanceOf;
    Balances: Balances;
    BalanceStatus: BalanceStatus;
    Bid: Bid;
    Bidder: Bidder;
    BidKind: BidKind;
    BitVec: BitVec;
    Block: Block;
    BlockAttestations: BlockAttestations;
    BlockHash: BlockHash;
    BlockLength: BlockLength;
    BlockNumber: BlockNumber;
    BlockNumberFor: BlockNumberFor;
    BlockWeights: BlockWeights;
    BondRequirement: BondRequirement;
    bool: bool;
    Bool: Bool;
    Bounty: Bounty;
    BountyIndex: BountyIndex;
    BountyStatus: BountyStatus;
    BountyStatusActive: BountyStatusActive;
    BountyStatusCuratorProposed: BountyStatusCuratorProposed;
    BountyStatusPendingPayout: BountyStatusPendingPayout;
    BtcAddress: BtcAddress;
    BtcDepositCache: BtcDepositCache;
    BtcHeader: BtcHeader;
    BtcHeaderIndex: BtcHeaderIndex;
    BtcHeaderInfo: BtcHeaderInfo;
    BtcNetwork: BtcNetwork;
    BtcParams: BtcParams;
    BtcPartialMerkleTree: BtcPartialMerkleTree;
    BtcRelayedTxInfo: BtcRelayedTxInfo;
    BtcTransaction: BtcTransaction;
    BtcTrusteeAddrInfo: BtcTrusteeAddrInfo;
    BtcTrusteeIntentionProps: BtcTrusteeIntentionProps;
    BtcTrusteeSessionInfo: BtcTrusteeSessionInfo;
    BtcTrusteeType: BtcTrusteeType;
    BtcTxResult: BtcTxResult;
    BtcTxState: BtcTxState;
    BtcTxType: BtcTxType;
    BtcTxVerifier: BtcTxVerifier;
    BtcVoteResult: BtcVoteResult;
    BtcWithdrawalProposal: BtcWithdrawalProposal;
    BufferedSessionChange: BufferedSessionChange;
    Bytes: Bytes;
    Call: Call;
    CallHash: CallHash;
    CallHashOf: CallHashOf;
    CallIndex: CallIndex;
    CandidateCommitments: CandidateCommitments;
    CandidateDescriptor: CandidateDescriptor;
    CandidateHash: CandidateHash;
    CandidatePendingAvailability: CandidatePendingAvailability;
    CandidateReceipt: CandidateReceipt;
    Chain: Chain;
    ChainAddress: ChainAddress;
    ChainId: ChainId;
    ChainProperties: ChainProperties;
    ChainType: ChainType;
    ChangesTrieConfiguration: ChangesTrieConfiguration;
    ClaimRestriction: ClaimRestriction;
    CodecHash: CodecHash;
    CodeHash: CodeHash;
    CollatorId: CollatorId;
    CollatorSignature: CollatorSignature;
    CollectiveOrigin: CollectiveOrigin;
    CommittedCandidateReceipt: CommittedCandidateReceipt;
    CompactAssignments: CompactAssignments;
    CompactAssignmentsTo257: CompactAssignmentsTo257;
    CompactScore: CompactScore;
    CompactScoreCompact: CompactScoreCompact;
    ConcreteFungible: ConcreteFungible;
    ConcreteNonFungible: ConcreteNonFungible;
    Consensus: Consensus;
    ConsensusEngineId: ConsensusEngineId;
    ConsumedWeight: ConsumedWeight;
    ContractCallRequest: ContractCallRequest;
    ContractConstructorSpec: ContractConstructorSpec;
    ContractContractSpec: ContractContractSpec;
    ContractCryptoHasher: ContractCryptoHasher;
    ContractDiscriminant: ContractDiscriminant;
    ContractDisplayName: ContractDisplayName;
    ContractEventParamSpec: ContractEventParamSpec;
    ContractEventSpec: ContractEventSpec;
    ContractExecResult: ContractExecResult;
    ContractExecResultErr: ContractExecResultErr;
    ContractExecResultErrModule: ContractExecResultErrModule;
    ContractExecResultOk: ContractExecResultOk;
    ContractExecResultResult: ContractExecResultResult;
    ContractExecResultSuccessTo255: ContractExecResultSuccessTo255;
    ContractExecResultSuccessTo260: ContractExecResultSuccessTo260;
    ContractExecResultTo255: ContractExecResultTo255;
    ContractExecResultTo260: ContractExecResultTo260;
    ContractInfo: ContractInfo;
    ContractLayoutArray: ContractLayoutArray;
    ContractLayoutCell: ContractLayoutCell;
    ContractLayoutEnum: ContractLayoutEnum;
    ContractLayoutHash: ContractLayoutHash;
    ContractLayoutHashingStrategy: ContractLayoutHashingStrategy;
    ContractLayoutKey: ContractLayoutKey;
    ContractLayoutStruct: ContractLayoutStruct;
    ContractLayoutStructField: ContractLayoutStructField;
    ContractMessageParamSpec: ContractMessageParamSpec;
    ContractMessageSpec: ContractMessageSpec;
    ContractProject: ContractProject;
    ContractProjectContract: ContractProjectContract;
    ContractProjectSource: ContractProjectSource;
    ContractSelector: ContractSelector;
    ContractStorageKey: ContractStorageKey;
    ContractStorageLayout: ContractStorageLayout;
    ContractTypeSpec: ContractTypeSpec;
    Conviction: Conviction;
    CoreAssignment: CoreAssignment;
    CoreIndex: CoreIndex;
    CoreOccupied: CoreOccupied;
    CreatedBlock: CreatedBlock;
    CurrencyId: CurrencyId;
    CurrencyIdOf: CurrencyIdOf;
    CurrencyPair: CurrencyPair;
    Data: Data;
    Decimals: Decimals;
    DeferredOffenceOf: DeferredOffenceOf;
    DefunctVoter: DefunctVoter;
    Delegations: Delegations;
    DeletedContract: DeletedContract;
    DepositAsset: DepositAsset;
    DepositNonce: DepositNonce;
    DepositReserveAsset: DepositReserveAsset;
    Depth: Depth;
    Desc: Desc;
    Digest: Digest;
    DigestItem: DigestItem;
    DigestOf: DigestOf;
    DispatchClass: DispatchClass;
    DispatchError: DispatchError;
    DispatchErrorModule: DispatchErrorModule;
    DispatchErrorTo198: DispatchErrorTo198;
    DispatchInfo: DispatchInfo;
    DispatchInfoTo190: DispatchInfoTo190;
    DispatchInfoTo244: DispatchInfoTo244;
    DispatchOutcome: DispatchOutcome;
    DispatchResult: DispatchResult;
    DispatchResultOf: DispatchResultOf;
    DispatchResultTo198: DispatchResultTo198;
    DoNotConstruct: DoNotConstruct;
    DoubleMapTypeLatest: DoubleMapTypeLatest;
    DoubleMapTypeV10: DoubleMapTypeV10;
    DoubleMapTypeV11: DoubleMapTypeV11;
    DoubleMapTypeV12: DoubleMapTypeV12;
    DoubleMapTypeV9: DoubleMapTypeV9;
    DoubleVoteReport: DoubleVoteReport;
    DownwardMessage: DownwardMessage;
    EcdsaSignature: EcdsaSignature;
    Ed25519Signature: Ed25519Signature;
    ElectionCompute: ElectionCompute;
    ElectionPhase: ElectionPhase;
    ElectionResult: ElectionResult;
    ElectionScore: ElectionScore;
    ElectionSize: ElectionSize;
    ElectionStatus: ElectionStatus;
    EncodedFinalityProofs: EncodedFinalityProofs;
    EncodedJustification: EncodedJustification;
    EpochAuthorship: EpochAuthorship;
    EraIndex: EraIndex;
    EraPoints: EraPoints;
    EraRewardPoints: EraRewardPoints;
    EraRewards: EraRewards;
    Erc721Token: Erc721Token;
    ErrorCode: ErrorCode;
    ErrorMetadataLatest: ErrorMetadataLatest;
    ErrorMetadataV10: ErrorMetadataV10;
    ErrorMetadataV11: ErrorMetadataV11;
    ErrorMetadataV12: ErrorMetadataV12;
    ErrorMetadataV9: ErrorMetadataV9;
    EthAccount: EthAccount;
    EthBlock: EthBlock;
    EthBloom: EthBloom;
    EthCallRequest: EthCallRequest;
    EthereumAccountId: EthereumAccountId;
    EthereumAddress: EthereumAddress;
    EthereumLookupSource: EthereumLookupSource;
    EthereumSignature: EthereumSignature;
    EthFilter: EthFilter;
    EthFilterAddress: EthFilterAddress;
    EthFilterChanges: EthFilterChanges;
    EthFilterTopic: EthFilterTopic;
    EthFilterTopicEntry: EthFilterTopicEntry;
    EthFilterTopicInner: EthFilterTopicInner;
    EthHeader: EthHeader;
    EthLog: EthLog;
    EthReceipt: EthReceipt;
    EthRichBlock: EthRichBlock;
    EthRichHeader: EthRichHeader;
    EthStorageProof: EthStorageProof;
    EthSubKind: EthSubKind;
    EthSubParams: EthSubParams;
    EthSubResult: EthSubResult;
    EthSyncInfo: EthSyncInfo;
    EthSyncStatus: EthSyncStatus;
    EthTransaction: EthTransaction;
    EthTransactionAction: EthTransactionAction;
    EthTransactionCondition: EthTransactionCondition;
    EthTransactionRequest: EthTransactionRequest;
    EthTransactionStatus: EthTransactionStatus;
    EthWork: EthWork;
    Event: Event;
    EventId: EventId;
    EventIndex: EventIndex;
    EventMetadataLatest: EventMetadataLatest;
    EventMetadataV10: EventMetadataV10;
    EventMetadataV11: EventMetadataV11;
    EventMetadataV12: EventMetadataV12;
    EventMetadataV9: EventMetadataV9;
    EventRecord: EventRecord;
    EvmAccount: EvmAccount;
    EvmLog: EvmLog;
    EvmVicinity: EvmVicinity;
    ExchangeAsset: ExchangeAsset;
    ExitError: ExitError;
    ExitFatal: ExitFatal;
    ExitReason: ExitReason;
    ExitRevert: ExitRevert;
    ExitSucceed: ExitSucceed;
    Exposure: Exposure;
    ExtendedBalance: ExtendedBalance;
    Extrinsic: Extrinsic;
    ExtrinsicEra: ExtrinsicEra;
    ExtrinsicMetadataLatest: ExtrinsicMetadataLatest;
    ExtrinsicMetadataV11: ExtrinsicMetadataV11;
    ExtrinsicMetadataV12: ExtrinsicMetadataV12;
    ExtrinsicOrHash: ExtrinsicOrHash;
    ExtrinsicPayload: ExtrinsicPayload;
    ExtrinsicPayloadUnknown: ExtrinsicPayloadUnknown;
    ExtrinsicPayloadV4: ExtrinsicPayloadV4;
    ExtrinsicSignature: ExtrinsicSignature;
    ExtrinsicSignatureV4: ExtrinsicSignatureV4;
    ExtrinsicStatus: ExtrinsicStatus;
    ExtrinsicsWeight: ExtrinsicsWeight;
    ExtrinsicUnknown: ExtrinsicUnknown;
    ExtrinsicV4: ExtrinsicV4;
    FeeDetails: FeeDetails;
    Fixed128: Fixed128;
    Fixed64: Fixed64;
    FixedAssetPower: FixedAssetPower;
    FixedI128: FixedI128;
    FixedI64: FixedI64;
    FixedU128: FixedU128;
    FixedU64: FixedU64;
    Forcing: Forcing;
    FullIdentification: FullIdentification;
    FullPairInfo: FullPairInfo;
    FunctionArgumentMetadataLatest: FunctionArgumentMetadataLatest;
    FunctionArgumentMetadataV10: FunctionArgumentMetadataV10;
    FunctionArgumentMetadataV11: FunctionArgumentMetadataV11;
    FunctionArgumentMetadataV12: FunctionArgumentMetadataV12;
    FunctionArgumentMetadataV9: FunctionArgumentMetadataV9;
    FunctionMetadataLatest: FunctionMetadataLatest;
    FunctionMetadataV10: FunctionMetadataV10;
    FunctionMetadataV11: FunctionMetadataV11;
    FunctionMetadataV12: FunctionMetadataV12;
    FunctionMetadataV9: FunctionMetadataV9;
    FundIndex: FundIndex;
    FundInfo: FundInfo;
    Gas: Gas;
    GenericTrusteeIntentionProps: GenericTrusteeIntentionProps;
    GenericTrusteeSessionInfo: GenericTrusteeSessionInfo;
    GiltBid: GiltBid;
    GlobalDistribution: GlobalDistribution;
    GlobalValidationSchedule: GlobalValidationSchedule;
    GrandpaEquivocation: GrandpaEquivocation;
    GrandpaEquivocationProof: GrandpaEquivocationProof;
    GrandpaEquivocationValue: GrandpaEquivocationValue;
    GrandpaPrevote: GrandpaPrevote;
    GroupIndex: GroupIndex;
    H1024: H1024;
    H128: H128;
    H160: H160;
    H2048: H2048;
    H256: H256;
    H512: H512;
    H64: H64;
    Handicap: Handicap;
    HandicapInfo: HandicapInfo;
    Hash: Hash;
    HeadData: HeadData;
    Header: Header;
    Health: Health;
    Heartbeat: Heartbeat;
    HeartbeatTo244: HeartbeatTo244;
    HostConfiguration: HostConfiguration;
    HostFnWeights: HostFnWeights;
    HostFnWeightsTo264: HostFnWeightsTo264;
    HrmpChannel: HrmpChannel;
    HrmpChannelId: HrmpChannelId;
    HrmpOpenChannelRequest: HrmpOpenChannelRequest;
    i128: i128;
    I128: I128;
    i16: i16;
    I16: I16;
    i256: i256;
    I256: I256;
    i32: i32;
    I32: I32;
    I32F32: I32F32;
    i64: i64;
    I64: I64;
    i8: i8;
    I8: I8;
    IdentificationTuple: IdentificationTuple;
    IdentityFields: IdentityFields;
    IdentityInfo: IdentityInfo;
    IdentityInfoAdditional: IdentityInfoAdditional;
    IdentityJudgement: IdentityJudgement;
    ImmortalEra: ImmortalEra;
    ImportedAux: ImportedAux;
    InboundDownwardMessage: InboundDownwardMessage;
    InboundHrmpMessage: InboundHrmpMessage;
    InboundHrmpMessages: InboundHrmpMessages;
    IncludedBlocks: IncludedBlocks;
    InclusionFee: InclusionFee;
    IncomingParachain: IncomingParachain;
    IncomingParachainDeploy: IncomingParachainDeploy;
    IncomingParachainFixed: IncomingParachainFixed;
    Index: Index;
    IndicesLookupSource: IndicesLookupSource;
    IndividualExposure: IndividualExposure;
    InitiateReserveWithdraw: InitiateReserveWithdraw;
    InitiateTeleport: InitiateTeleport;
    InstructionWeights: InstructionWeights;
    InvalidTransaction: InvalidTransaction;
    IssueRequest: IssueRequest;
    Json: Json;
    Junction: Junction;
    Justification: Justification;
    JustificationNotification: JustificationNotification;
    Justifications: Justifications;
    Key: Key;
    KeyOwnerProof: KeyOwnerProof;
    Keys: Keys;
    KeyType: KeyType;
    KeyTypeId: KeyTypeId;
    KeyValue: KeyValue;
    KeyValueOption: KeyValueOption;
    Kind: Kind;
    LastContribution: LastContribution;
    LastRuntimeUpgradeInfo: LastRuntimeUpgradeInfo;
    LeasePeriod: LeasePeriod;
    LeasePeriodOf: LeasePeriodOf;
    Limits: Limits;
    LimitsTo264: LimitsTo264;
    LocalValidationData: LocalValidationData;
    LockedType: LockedType;
    LockIdentifier: LockIdentifier;
    LookupSource: LookupSource;
    LookupTarget: LookupTarget;
    LotteryConfig: LotteryConfig;
    MapTypeLatest: MapTypeLatest;
    MapTypeV10: MapTypeV10;
    MapTypeV11: MapTypeV11;
    MapTypeV12: MapTypeV12;
    MapTypeV9: MapTypeV9;
    MaybeRandomness: MaybeRandomness;
    MaybeVrf: MaybeVrf;
    MemberCount: MemberCount;
    MembershipProof: MembershipProof;
    Memo: Memo;
    MessageIngestionType: MessageIngestionType;
    MessageQueueChain: MessageQueueChain;
    MessagingStateSnapshot: MessagingStateSnapshot;
    MessagingStateSnapshotEgressEntry: MessagingStateSnapshotEgressEntry;
    MetadataAll: MetadataAll;
    MetadataLatest: MetadataLatest;
    MetadataV10: MetadataV10;
    MetadataV11: MetadataV11;
    MetadataV12: MetadataV12;
    MetadataV9: MetadataV9;
    MinerLedger: MinerLedger;
    MiningAssetInfo: MiningAssetInfo;
    MiningDistribution: MiningDistribution;
    MiningWeight: MiningWeight;
    MmrLeafProof: MmrLeafProof;
    ModuleConstantMetadataLatest: ModuleConstantMetadataLatest;
    ModuleConstantMetadataV10: ModuleConstantMetadataV10;
    ModuleConstantMetadataV11: ModuleConstantMetadataV11;
    ModuleConstantMetadataV12: ModuleConstantMetadataV12;
    ModuleConstantMetadataV9: ModuleConstantMetadataV9;
    ModuleId: ModuleId;
    ModuleMetadataLatest: ModuleMetadataLatest;
    ModuleMetadataV10: ModuleMetadataV10;
    ModuleMetadataV11: ModuleMetadataV11;
    ModuleMetadataV12: ModuleMetadataV12;
    ModuleMetadataV9: ModuleMetadataV9;
    Moment: Moment;
    MomentOf: MomentOf;
    MoreAttestations: MoreAttestations;
    MortalEra: MortalEra;
    MultiAddress: MultiAddress;
    MultiAsset: MultiAsset;
    MultiLocation: MultiLocation;
    Multiplier: Multiplier;
    Multisig: Multisig;
    MultiSignature: MultiSignature;
    MultiSigner: MultiSigner;
    NetworkId: NetworkId;
    NetworkState: NetworkState;
    NetworkStatePeerset: NetworkStatePeerset;
    NetworkStatePeersetInfo: NetworkStatePeersetInfo;
    NetworkType: NetworkType;
    NewBidder: NewBidder;
    NextAuthority: NextAuthority;
    NextConfigDescriptor: NextConfigDescriptor;
    NextConfigDescriptorV1: NextConfigDescriptorV1;
    NodeRole: NodeRole;
    Nominations: Nominations;
    NominatorIndex: NominatorIndex;
    NominatorIndexCompact: NominatorIndexCompact;
    NominatorLedger: NominatorLedger;
    NotConnectedPeer: NotConnectedPeer;
    Null: Null;
    OffchainAccuracy: OffchainAccuracy;
    OffchainAccuracyCompact: OffchainAccuracyCompact;
    OffenceDetails: OffenceDetails;
    Offender: Offender;
    OpaqueCall: OpaqueCall;
    OpaqueMultiaddr: OpaqueMultiaddr;
    OpaqueNetworkState: OpaqueNetworkState;
    OpaquePeerId: OpaquePeerId;
    OpaqueTimeSlot: OpaqueTimeSlot;
    OpenTip: OpenTip;
    OpenTipFinderTo225: OpenTipFinderTo225;
    OpenTipTip: OpenTipTip;
    OpenTipTo225: OpenTipTo225;
    Order: Order;
    OrderExecutedInfo: OrderExecutedInfo;
    OrderId: OrderId;
    OrderInfo: OrderInfo;
    OrderProperty: OrderProperty;
    OrderStatus: OrderStatus;
    OrderType: OrderType;
    Origin: Origin;
    OriginCaller: OriginCaller;
    OriginKind: OriginKind;
    OutboundHrmpMessage: OutboundHrmpMessage;
    Owner: Owner;
    Page: Page;
    PalletsOrigin: PalletsOrigin;
    PalletVersion: PalletVersion;
    ParachainDispatchOrigin: ParachainDispatchOrigin;
    ParachainInherentData: ParachainInherentData;
    ParachainProposal: ParachainProposal;
    ParaGenesisArgs: ParaGenesisArgs;
    ParaId: ParaId;
    ParaInfo: ParaInfo;
    ParaLifecycle: ParaLifecycle;
    ParaPastCodeMeta: ParaPastCodeMeta;
    ParaScheduling: ParaScheduling;
    ParathreadClaim: ParathreadClaim;
    ParathreadClaimQueue: ParathreadClaimQueue;
    ParathreadEntry: ParathreadEntry;
    ParaValidatorIndex: ParaValidatorIndex;
    Pays: Pays;
    Peer: Peer;
    PeerEndpoint: PeerEndpoint;
    PeerEndpointAddr: PeerEndpointAddr;
    PeerInfo: PeerInfo;
    PeerPing: PeerPing;
    PendingPause: PendingPause;
    PendingResume: PendingResume;
    Perbill: Perbill;
    Percent: Percent;
    PerDispatchClass: PerDispatchClass;
    PerDispatchClassU32: PerDispatchClassU32;
    PerDispatchClassWeight: PerDispatchClassWeight;
    PerDispatchClassWeightsPerClass: PerDispatchClassWeightsPerClass;
    Period: Period;
    Permill: Permill;
    PermissionLatest: PermissionLatest;
    PermissionsV1: PermissionsV1;
    PermissionVersions: PermissionVersions;
    Perquintill: Perquintill;
    PersistedValidationData: PersistedValidationData;
    PerU16: PerU16;
    Phantom: Phantom;
    PhantomData: PhantomData;
    Phase: Phase;
    PhragmenScore: PhragmenScore;
    Points: Points;
    Precommits: Precommits;
    PrefabWasmModule: PrefabWasmModule;
    PrefixedStorageKey: PrefixedStorageKey;
    PreimageStatus: PreimageStatus;
    PreimageStatusAvailable: PreimageStatusAvailable;
    PreRuntime: PreRuntime;
    Prevotes: Prevotes;
    Price: Price;
    PriceFluctuation: PriceFluctuation;
    Priority: Priority;
    PriorLock: PriorLock;
    PropIndex: PropIndex;
    Proposal: Proposal;
    ProposalIndex: ProposalIndex;
    ProposalStatus: ProposalStatus;
    ProposalVotes: ProposalVotes;
    ProxyAnnouncement: ProxyAnnouncement;
    ProxyDefinition: ProxyDefinition;
    ProxyState: ProxyState;
    ProxyType: ProxyType;
    QueryHolding: QueryHolding;
    QueuedParathread: QueuedParathread;
    Randomness: Randomness;
    Raw: Raw;
    RawAuraPreDigest: RawAuraPreDigest;
    RawBabePreDigest: RawBabePreDigest;
    RawBabePreDigestCompat: RawBabePreDigestCompat;
    RawBabePreDigestPrimary: RawBabePreDigestPrimary;
    RawBabePreDigestPrimaryTo159: RawBabePreDigestPrimaryTo159;
    RawBabePreDigestSecondaryPlain: RawBabePreDigestSecondaryPlain;
    RawBabePreDigestSecondaryTo159: RawBabePreDigestSecondaryTo159;
    RawBabePreDigestSecondaryVRF: RawBabePreDigestSecondaryVRF;
    RawBabePreDigestTo159: RawBabePreDigestTo159;
    RawOrigin: RawOrigin;
    RawSolution: RawSolution;
    RawVRFOutput: RawVRFOutput;
    ReadProof: ReadProof;
    ReadySolution: ReadySolution;
    Reasons: Reasons;
    RecoveryConfig: RecoveryConfig;
    RedeemRequest: RedeemRequest;
    RefCount: RefCount;
    RefCountTo259: RefCountTo259;
    ReferendumIndex: ReferendumIndex;
    ReferendumInfo: ReferendumInfo;
    ReferendumInfoFinished: ReferendumInfoFinished;
    ReferendumInfoTo239: ReferendumInfoTo239;
    ReferendumStatus: ReferendumStatus;
    ReferralId: ReferralId;
    RegisteredParachainInfo: RegisteredParachainInfo;
    RegistrarIndex: RegistrarIndex;
    RegistrarInfo: RegistrarInfo;
    Registration: Registration;
    RegistrationJudgement: RegistrationJudgement;
    RelayChainBlockNumber: RelayChainBlockNumber;
    RelayChainHash: RelayChainHash;
    RelayedFrom: RelayedFrom;
    RelayTo: RelayTo;
    Releases: Releases;
    Remark: Remark;
    Renouncing: Renouncing;
    ReportedRoundStates: ReportedRoundStates;
    Reporter: Reporter;
    ReportIdOf: ReportIdOf;
    RequestId: RequestId;
    ReserveAssetDeposit: ReserveAssetDeposit;
    ResourceId: ResourceId;
    Retriable: Retriable;
    RewardDestination: RewardDestination;
    RewardPoint: RewardPoint;
    RoundSnapshot: RoundSnapshot;
    RoundState: RoundState;
    RpcBalance: RpcBalance;
    RpcFeeDetails: RpcFeeDetails;
    RpcInclusionFee: RpcInclusionFee;
    RpcMethods: RpcMethods;
    RpcMiningDividendInfo: RpcMiningDividendInfo;
    RpcMiningWeight: RpcMiningWeight;
    RpcOrder: RpcOrder;
    RpcPrice: RpcPrice;
    RpcTotalAssetInfo: RpcTotalAssetInfo;
    RpcVaultInfo: RpcVaultInfo;
    RpcVoteWeight: RpcVoteWeight;
    RpcWithdrawalRecord: RpcWithdrawalRecord;
    RuntimeDbWeight: RuntimeDbWeight;
    RuntimeDispatchInfo: RuntimeDispatchInfo;
    RuntimeVersion: RuntimeVersion;
    RuntimeVersionApi: RuntimeVersionApi;
    Schedule: Schedule;
    Scheduled: Scheduled;
    ScheduledTo254: ScheduledTo254;
    SchedulePeriod: SchedulePeriod;
    SchedulePriority: SchedulePriority;
    ScheduleTo212: ScheduleTo212;
    ScheduleTo258: ScheduleTo258;
    ScheduleTo264: ScheduleTo264;
    Scheduling: Scheduling;
    Seal: Seal;
    SealV0: SealV0;
    SeatHolder: SeatHolder;
    SeedOf: SeedOf;
    SessionIndex: SessionIndex;
    SessionInfo: SessionInfo;
    SessionInfoValidatorGroup: SessionInfoValidatorGroup;
    SessionKeys1: SessionKeys1;
    SessionKeys2: SessionKeys2;
    SessionKeys3: SessionKeys3;
    SessionKeys4: SessionKeys4;
    SessionKeys5: SessionKeys5;
    SessionKeys6: SessionKeys6;
    SessionKeys7: SessionKeys7;
    SessionKeys8: SessionKeys8;
    SessionKeys9: SessionKeys9;
    SetId: SetId;
    SetIndex: SetIndex;
    Side: Side;
    SiField: SiField;
    Signature: Signature;
    SignedAvailabilityBitfield: SignedAvailabilityBitfield;
    SignedAvailabilityBitfields: SignedAvailabilityBitfields;
    SignedBlock: SignedBlock;
    SignedBlockWithJustification: SignedBlockWithJustification;
    SignedBlockWithJustifications: SignedBlockWithJustifications;
    SignerPayload: SignerPayload;
    SigningContext: SigningContext;
    SiLookupTypeId: SiLookupTypeId;
    SiPath: SiPath;
    SiType: SiType;
    SiTypeDef: SiTypeDef;
    SiTypeDefArray: SiTypeDefArray;
    SiTypeDefComposite: SiTypeDefComposite;
    SiTypeDefPrimitive: SiTypeDefPrimitive;
    SiTypeDefSequence: SiTypeDefSequence;
    SiTypeDefTuple: SiTypeDefTuple;
    SiTypeDefVariant: SiTypeDefVariant;
    SiVariant: SiVariant;
    SlashingSpans: SlashingSpans;
    SlashingSpansTo204: SlashingSpansTo204;
    SlashJournalEntry: SlashJournalEntry;
    Slot: Slot;
    SlotNumber: SlotNumber;
    SlotRange: SlotRange;
    SocietyJudgement: SocietyJudgement;
    SocietyVote: SocietyVote;
    SolutionOrSnapshotSize: SolutionOrSnapshotSize;
    SolutionSupport: SolutionSupport;
    SolutionSupports: SolutionSupports;
    SpanIndex: SpanIndex;
    SpanRecord: SpanRecord;
    Sr25519Signature: Sr25519Signature;
    StakingLedger: StakingLedger;
    StakingLedgerTo223: StakingLedgerTo223;
    StakingLedgerTo240: StakingLedgerTo240;
    StakingRequirement: StakingRequirement;
    Statement: Statement;
    StatementKind: StatementKind;
    Status: Status;
    StorageChangeSet: StorageChangeSet;
    StorageData: StorageData;
    StorageEntryMetadataLatest: StorageEntryMetadataLatest;
    StorageEntryMetadataV10: StorageEntryMetadataV10;
    StorageEntryMetadataV11: StorageEntryMetadataV11;
    StorageEntryMetadataV12: StorageEntryMetadataV12;
    StorageEntryMetadataV9: StorageEntryMetadataV9;
    StorageEntryModifierLatest: StorageEntryModifierLatest;
    StorageEntryModifierV10: StorageEntryModifierV10;
    StorageEntryModifierV11: StorageEntryModifierV11;
    StorageEntryModifierV12: StorageEntryModifierV12;
    StorageEntryModifierV9: StorageEntryModifierV9;
    StorageEntryTypeLatest: StorageEntryTypeLatest;
    StorageEntryTypeV10: StorageEntryTypeV10;
    StorageEntryTypeV11: StorageEntryTypeV11;
    StorageEntryTypeV12: StorageEntryTypeV12;
    StorageEntryTypeV9: StorageEntryTypeV9;
    StorageHasher: StorageHasher;
    StorageHasherV10: StorageHasherV10;
    StorageHasherV11: StorageHasherV11;
    StorageHasherV12: StorageHasherV12;
    StorageHasherV9: StorageHasherV9;
    StorageKey: StorageKey;
    StorageKind: StorageKind;
    StorageMetadataLatest: StorageMetadataLatest;
    StorageMetadataV10: StorageMetadataV10;
    StorageMetadataV11: StorageMetadataV11;
    StorageMetadataV12: StorageMetadataV12;
    StorageMetadataV9: StorageMetadataV9;
    StorageProof: StorageProof;
    StoredPendingChange: StoredPendingChange;
    StoredState: StoredState;
    StrikeCount: StrikeCount;
    String: String;
    SubId: SubId;
    SyncState: SyncState;
    SystemInherentData: SystemInherentData;
    SystemOrigin: SystemOrigin;
    SystemVault: SystemVault;
    Tally: Tally;
    TaskAddress: TaskAddress;
    TAssetBalance: TAssetBalance;
    TAssetDepositBalance: TAssetDepositBalance;
    TeleportAsset: TeleportAsset;
    Text: Text;
    Timepoint: Timepoint;
    Token: Token;
    TokenId: TokenId;
    TombstoneContractInfo: TombstoneContractInfo;
    TotalAssetInfo: TotalAssetInfo;
    TradingHistoryIndex: TradingHistoryIndex;
    TradingPairId: TradingPairId;
    TradingPairInfo: TradingPairInfo;
    TradingPairProfile: TradingPairProfile;
    TradingPrice: TradingPrice;
    Transact: Transact;
    TransactionPriority: TransactionPriority;
    TransactionValidityError: TransactionValidityError;
    TransientValidationData: TransientValidationData;
    TreasuryProposal: TreasuryProposal;
    TrieId: TrieId;
    TrieIndex: TrieIndex;
    TrusteeInfoConfig: TrusteeInfoConfig;
    Type: Type;
    u128: u128;
    U128: U128;
    u16: u16;
    U16: U16;
    u256: u256;
    U256: U256;
    u32: u32;
    U32: U32;
    U32F32: U32F32;
    u64: u64;
    U64: U64;
    u8: u8;
    U8: U8;
    UnappliedSlash: UnappliedSlash;
    UnappliedSlashOther: UnappliedSlashOther;
    Unbonded: Unbonded;
    UnbondedIndex: UnbondedIndex;
    UncleEntryItem: UncleEntryItem;
    UnknownTransaction: UnknownTransaction;
    UnlockChunk: UnlockChunk;
    UpwardMessage: UpwardMessage;
    usize: usize;
    USize: USize;
    ValidationCode: ValidationCode;
    ValidationData: ValidationData;
    ValidationDataType: ValidationDataType;
    ValidationFunctionParams: ValidationFunctionParams;
    ValidatorCount: ValidatorCount;
    ValidatorId: ValidatorId;
    ValidatorIdOf: ValidatorIdOf;
    ValidatorIndex: ValidatorIndex;
    ValidatorIndexCompact: ValidatorIndexCompact;
    ValidatorInfo: ValidatorInfo;
    ValidatorLedger: ValidatorLedger;
    ValidatorPrefs: ValidatorPrefs;
    ValidatorPrefsTo145: ValidatorPrefsTo145;
    ValidatorPrefsTo196: ValidatorPrefsTo196;
    ValidatorPrefsWithBlocked: ValidatorPrefsWithBlocked;
    ValidatorPrefsWithCommission: ValidatorPrefsWithCommission;
    ValidatorProfile: ValidatorProfile;
    ValidatorSignature: ValidatorSignature;
    ValidityAttestation: ValidityAttestation;
    Vault: Vault;
    VaultStatus: VaultStatus;
    VecInboundHrmpMessage: VecInboundHrmpMessage;
    VersionedMultiAsset: VersionedMultiAsset;
    VersionedMultiLocation: VersionedMultiLocation;
    VersionedXcm: VersionedXcm;
    VestingInfo: VestingInfo;
    VestingSchedule: VestingSchedule;
    Vote: Vote;
    VoteIndex: VoteIndex;
    Voter: Voter;
    VoterInfo: VoterInfo;
    Votes: Votes;
    VotesTo230: VotesTo230;
    VoteThreshold: VoteThreshold;
    VoteWeight: VoteWeight;
    Voting: Voting;
    VotingDelegating: VotingDelegating;
    VotingDirect: VotingDirect;
    VotingDirectVote: VotingDirectVote;
    VouchingStatus: VouchingStatus;
    VrfData: VrfData;
    VrfOutput: VrfOutput;
    VrfProof: VrfProof;
    Weight: Weight;
    WeightMultiplier: WeightMultiplier;
    WeightPerClass: WeightPerClass;
    WeightToFeeCoefficient: WeightToFeeCoefficient;
    WinnersData: WinnersData;
    WinnersDataTuple: WinnersDataTuple;
    WinningData: WinningData;
    WinningDataEntry: WinningDataEntry;
    WithdrawalLimit: WithdrawalLimit;
    WithdrawalRecord: WithdrawalRecord;
    WithdrawalRecordId: WithdrawalRecordId;
    WithdrawalRecordOf: WithdrawalRecordOf;
    WithdrawalState: WithdrawalState;
    WithdrawAsset: WithdrawAsset;
    WithdrawReasons: WithdrawReasons;
    Xcm: Xcm;
    XcmError: XcmError;
    XcmResult: XcmResult;
  }
}
