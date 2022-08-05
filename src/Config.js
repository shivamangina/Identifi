const config = {
  DEPLOYED_CONTRACT: {
    ROPSTEN: {
      CONTRACT_ADDRESS: "0xA731D8D40965090aD96179b21136A1BC9ED77E5F",
      ABI: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnerSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "userPublicKey",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "issuerPublicKey",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "id",
              type: "string",
            },
          ],
          name: "certificateIssued",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "certificateId",
              type: "string",
            },
          ],
          name: "certificateRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "issuerPublicKey",
              type: "address",
            },
          ],
          name: "issuerCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "issuerId",
              type: "address",
            },
          ],
          name: "issuerDisabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "issuerId",
              type: "address",
            },
          ],
          name: "issuerEnabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "userPublicKey",
              type: "address",
            },
          ],
          name: "userCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "userPublicKey",
              type: "address",
            },
          ],
          name: "userDisabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "userPublicKey",
              type: "address",
            },
          ],
          name: "userEnabled",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "accessList",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "certificates",
          outputs: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "typeOfCertificate",
              type: "string",
            },
            {
              internalType: "string",
              name: "version",
              type: "string",
            },
            {
              internalType: "string",
              name: "issuedDate",
              type: "string",
            },
            {
              internalType: "string",
              name: "expiresAt",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isPermanent",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isPublic",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "address",
              name: "issuerPublicKey",
              type: "address",
            },
            {
              internalType: "address",
              name: "userPublicKey",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "changeOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_publicKey",
              type: "address",
            },
            {
              internalType: "string",
              name: "_typeOfIssuer",
              type: "string",
            },
            {
              internalType: "string",
              name: "_org",
              type: "string",
            },
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
          ],
          name: "createIssuer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_firstName",
              type: "string",
            },
            {
              internalType: "string",
              name: "_lastName",
              type: "string",
            },
            {
              internalType: "string",
              name: "_gender",
              type: "string",
            },
            {
              internalType: "string",
              name: "_typeOfUser",
              type: "string",
            },
            {
              internalType: "string",
              name: "_location",
              type: "string",
            },
          ],
          name: "createUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_issuerId",
              type: "address",
            },
          ],
          name: "disableIssuer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_userPublicKey",
              type: "address",
            },
          ],
          name: "disableUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_issuerId",
              type: "address",
            },
          ],
          name: "enableIssuer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_userPublicKey",
              type: "address",
            },
          ],
          name: "enableUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getCertificatesByIssuer",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "typeOfCertificate",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "issuedDate",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "expiresAt",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isPermanent",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isPublic",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "issuerPublicKey",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "userPublicKey",
                  type: "address",
                },
              ],
              internalType: "struct Certifi.Certificate[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCertificatesByUser",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "typeOfCertificate",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "issuedDate",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "expiresAt",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isPermanent",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isPublic",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "issuerPublicKey",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "userPublicKey",
                  type: "address",
                },
              ],
              internalType: "struct Certifi.Certificate[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address",
            },
          ],
          name: "getIssuerData",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address",
            },
          ],
          name: "getUserData",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_id",
              type: "string",
            },
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_typeOfCertificate",
              type: "string",
            },
            {
              internalType: "string",
              name: "_version",
              type: "string",
            },
            {
              internalType: "string",
              name: "_issuedDate",
              type: "string",
            },
            {
              internalType: "string",
              name: "_expiresAt",
              type: "string",
            },
            {
              internalType: "bool",
              name: "_isPermanent",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "_isPublic",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "_isActive",
              type: "bool",
            },
            {
              internalType: "address",
              name: "_userPublicKey",
              type: "address",
            },
          ],
          name: "issueCertificate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "issuers",
          outputs: [
            {
              internalType: "address",
              name: "publicKey",
              type: "address",
            },
            {
              internalType: "string",
              name: "typeOfIssuer",
              type: "string",
            },
            {
              internalType: "string",
              name: "org",
              type: "string",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isApproved",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "issuerCreated",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_certificateId",
              type: "string",
            },
          ],
          name: "revokeCertificate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_certificateId",
              type: "string",
            },
            {
              internalType: "address",
              name: "_userId",
              type: "address",
            },
          ],
          name: "revokeSharedCertificate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_certificateId",
              type: "string",
            },
            {
              internalType: "address",
              name: "_userId",
              type: "address",
            },
          ],
          name: "shareCertificate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "users",
          outputs: [
            {
              internalType: "string",
              name: "firstName",
              type: "string",
            },
            {
              internalType: "string",
              name: "lastName",
              type: "string",
            },
            {
              internalType: "string",
              name: "gender",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "address",
              name: "publicKey",
              type: "address",
            },
            {
              internalType: "string",
              name: "typeOfUser",
              type: "string",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "bool",
              name: "userCreated",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_certificateId",
              type: "string",
            },
          ],
          name: "verifyCertificate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    network: "ropsten",
  },
};

export default config;
