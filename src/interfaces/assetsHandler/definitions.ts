export default {
  // BlockLength: "u32",
  // BlockWeights: {
  //   baseBlock: "Weight",
  //   maxBlock: "Weight",
  //   perClass: "PerDispatchClass",
  // },
  // PerDispatchClass: {
  //   normal: "WeightPerClass",
  //   operational: "WeightPerClass",
  //   mandatory: "WeightPerClass",
  // },
  // WeightPerClass: {
  //   baseExtrinsic: "Weight",
  //   maxExtrinsic: "Weight",
  //   maxTotal: "Option<Weight>",
  //   reserved: "Option<Weight>",
  // },
  // "chainbridge::ChainId": "u8",
  types: {
    ChainId: "u8",
    ResourceId: "[u8; 32]",
    DepositNonce: "u64",
    ProposalVotes: {
      votes_for: "Vec<AccountId>",
      votes_against: "Vec<AccountId>",
      status: "ProposalStatus",
    },
    ProposalStatus: {
      _enum: ["Initiated", "Approved", "Rejected"],
    },
    Erc721Token: {
      id: "TokenId",
      metadata: "Vec<u8>",
    },
    TokenId: "U256",
  },
};
