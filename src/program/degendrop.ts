export type Degendrop = {
    "version": "0.1.0",
    "name": "degendrop",
    "instructions": [
      {
        "name": "initDegendrop",
        "accounts": [
          {
            "name": "globalAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "treasuryAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "collectionsAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "feeAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "admin",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "key",
            "type": "string"
          }
        ]
      },
      {
        "name": "openBoxInit",
        "accounts": [
          {
            "name": "globalAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "collectionsAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "feeAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splMint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splCollectionsAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerMintAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "boxIdentifier",
            "type": "string"
          }
        ]
      },
      {
        "name": "openBox",
        "accounts": [
          {
            "name": "globalAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "collectionsAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "feeAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splMint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splCollectionsAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerMintAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "boxIdentifier",
            "type": "string"
          }
        ]
      },
      {
        "name": "adminCallback",
        "accounts": [
          {
            "name": "admin",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "treasuryAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "playerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "player",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splTreasuryAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "splMint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerMintAta",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "secretRandomNumber",
            "type": "u64"
          },
          {
            "name": "winType",
            "type": "u8"
          },
          {
            "name": "winAmount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "getPlayer",
        "accounts": [
          {
            "name": "globalAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "player",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "signer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "walletAddress",
            "type": "publicKey"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "BoxPlay",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "walletAddress",
              "type": "publicKey"
            },
            {
              "name": "boxId",
              "type": "string"
            },
            {
              "name": "betType",
              "type": "u8"
            },
            {
              "name": "isPlaying",
              "type": "bool"
            },
            {
              "name": "betAmount",
              "type": "u64"
            },
            {
              "name": "tokenAddress",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "GlobalState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "authority",
              "type": "publicKey"
            },
            {
              "name": "treasuryAccount",
              "type": "publicKey"
            },
            {
              "name": "feeAccount",
              "type": "publicKey"
            },
            {
              "name": "collectionsAccount",
              "type": "publicKey"
            }
          ]
        }
      }
    ],
    "events": [
      {
        "name": "LogEvent",
        "fields": [
          {
            "name": "walletAddress",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "boxId",
            "type": "string",
            "index": false
          },
          {
            "name": "betType",
            "type": "u8",
            "index": false
          },
          {
            "name": "isPlaying",
            "type": "bool",
            "index": false
          },
          {
            "name": "betAmount",
            "type": "u64",
            "index": false
          },
          {
            "name": "tokenAddress",
            "type": "publicKey",
            "index": false
          }
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "InvalidBetType",
        "msg": "Invalid Bet Type Entered"
      },
      {
        "code": 6001,
        "name": "InvalidFeePool",
        "msg": "Invalid Fee Pool"
      },
      {
        "code": 6002,
        "name": "InvalidAdmin",
        "msg": "Invalid Admin"
      },
      {
        "code": 6003,
        "name": "AccessDenied",
        "msg": "You do not have access to this function"
      },
      {
        "code": 6004,
        "name": "NotEnoughSOL",
        "msg": "You do not have enough SOL"
      },
      {
        "code": 6005,
        "name": "NotEnoughSOLForReward",
        "msg": "Treasury does not have enough SOL for reward"
      },
      {
        "code": 6006,
        "name": "NotEnoughTOKENSForReward",
        "msg": "Treasury does not have enough TOKENS for reward"
      },
      {
        "code": 6007,
        "name": "NotEnoughTOKENS",
        "msg": "You do not have enough TOKENS"
      },
      {
        "code": 6008,
        "name": "GameIsntOver",
        "msg": "Player already has an active game going"
      },
      {
        "code": 6009,
        "name": "NoGamePresentForPlayer",
        "msg": "Player does not have a game going on"
      },
      {
        "code": 6010,
        "name": "InvalidWinType",
        "msg": "Win type can be one of [1,2,3,4]. 1-SOL, 2-TOKEN, 3-NFT, 4-REWARD POINTS"
      }
    ],
    "metadata": {
      "address": "f37PsdsiyhLuDLUc2HpSEFJCdav1n5ibzKe92HDFmiP"
    }
  }