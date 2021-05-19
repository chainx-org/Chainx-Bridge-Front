export default {
  types: {
    CurrencyIdOf: "u32",
    BtcAddress: "Text",

    PerDispatchClass: {
      normal: "WeightPerClass",
      operational: "WeightPerClass",
      mandatory: "WeightPerClass",
    },
    RequestId: "u128",
    BlockNumberFor: "BlockNumber",
    Vault: {
      toBeIssuedTokens: "Balance",
      toBeRedeemedTokens: "Balance",
      wallet: "BtcAddress",
      bannedUntil: "BlockNumber",
    },
    SystemVault: {
      id: "AccountId",
      toBeIssuedTokens: "Balance",
      issuedTokens: "Balance",
      toBeRedeemedTokens: "Balance",
    },
    TradingPrice: {
      price: "u128",
      decimal: "u8",
    },
    RpcVaultInfo: {
      account: "AccountId",
      btcAddr: "BtcAddress",
    },
    RedeemRequest: {
      vault: "AccountId",
      openTime: "BlockNumber",
      requester: "AccountId",
      btcAddress: "BtcAddress",
      amount: "Balance",
      redeemFee: "Balance",
      reimburse: "bool",
    },
    Status: {
      _enum: {
        Running: null,
        Error: "ErrorCode",
        Shutdown: null,
      },
    },
    ErrorCode: {
      _enum: [
        "Liquidating",
        "Liquidating_ExchangeRateExpired",
        "ExchangeRateExpired",
      ],
    },
    BlockLength: "u32",
    BlockWeights: {
      baseBlock: "Weight",
      maxBlock: "Weight",
      perClass: "PerDispatchClass"
    },
    WeightPerClass: {
      baseExtrinsic: "Weight",
      maxExtrinsic: "Weight",
      maxTotal: "Option<Weight>",
      reserved: "Option<Weight>"
    },
    Address: "MultiAddress",
    LookupSource: "MultiAddress",
    AddrStr: "Text",
    Network: {
      "_enum": [
        "Mainnet",
        "Testnet"
      ]
    },
    AddressHash: "H160",
    IssueRequest: {
      vault: "AccountId",
      openTime: "BlockNumber",
      requester: "AccountId",
      btcAddress: "BtcAddress",
      btcAmount: "Balance",
      griefingCollateral: "Balance"
    },
    ChainId: "u8",
    ResourceId: "[u8; 32]",
    DepositNonce: "u64",
    ProposalVotes: {
      "votes_for": "Vec<AccountId>",
      "votes_against": "Vec<AccountId>",
      "status": "enum"
    },
    Erc721Token: {
      "id": "TokenId",
      "metadata": "Vec<u8>"
    },
    TokenId: "U256"
  },
};
