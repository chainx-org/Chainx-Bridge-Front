// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, U256, U8aFixed, Vec, u64, u8 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name ChainId */
export interface ChainId extends u8 {}

/** @name DepositNonce */
export interface DepositNonce extends u64 {}

/** @name Erc721Token */
export interface Erc721Token extends Struct {
  readonly id: TokenId;
  readonly metadata: Bytes;
}

/** @name ProposalStatus */
export interface ProposalStatus extends Enum {
  readonly isInitiated: boolean;
  readonly isApproved: boolean;
  readonly isRejected: boolean;
}

/** @name ProposalVotes */
export interface ProposalVotes extends Struct {
  readonly votes_for: Vec<AccountId>;
  readonly votes_against: Vec<AccountId>;
  readonly status: ProposalStatus;
}

/** @name ResourceId */
export interface ResourceId extends U8aFixed {}

/** @name TokenId */
export interface TokenId extends U256 {}

export type PHANTOM_ASSETSHANDLER = 'assetsHandler';
