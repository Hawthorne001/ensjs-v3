/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Interface } from '@ethersproject/abi/lib/interface'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract } from '@ethersproject/contracts'
import type { Provider } from '@ethersproject/providers'
import type { DNSSECImpl, DNSSECImplInterface } from '../DNSSECImpl'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_anchors',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'id',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'AlgorithmUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'id',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'DigestUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Marker',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'id',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'NSEC3DigestUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes',
        name: 'name',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'rrset',
        type: 'bytes',
      },
    ],
    name: 'RRSetUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 't',
        type: 'uint256',
      },
    ],
    name: 'Test',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'algorithms',
    outputs: [
      {
        internalType: 'contract Algorithm',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'anchors',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'deleteType',
        type: 'uint16',
      },
      {
        internalType: 'bytes',
        name: 'deleteName',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'rrset',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes',
          },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature',
        name: 'nsec',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'deleteRRSet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'deleteType',
        type: 'uint16',
      },
      {
        internalType: 'bytes',
        name: 'deleteName',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'rrset',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes',
          },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature',
        name: 'closestEncloser',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'rrset',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes',
          },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature',
        name: 'nextClosest',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'dnskey',
        type: 'bytes',
      },
    ],
    name: 'deleteRRSetNSEC3',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'digests',
    outputs: [
      {
        internalType: 'contract Digest',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'nsec3Digests',
    outputs: [
      {
        internalType: 'contract NSEC3Digest',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'dnstype',
        type: 'uint16',
      },
      {
        internalType: 'bytes',
        name: 'name',
        type: 'bytes',
      },
    ],
    name: 'rrdata',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
      {
        internalType: 'bytes20',
        name: '',
        type: 'bytes20',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'id',
        type: 'uint8',
      },
      {
        internalType: 'contract Algorithm',
        name: 'algo',
        type: 'address',
      },
    ],
    name: 'setAlgorithm',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'id',
        type: 'uint8',
      },
      {
        internalType: 'contract Digest',
        name: 'digest',
        type: 'address',
      },
    ],
    name: 'setDigest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'id',
        type: 'uint8',
      },
      {
        internalType: 'contract NSEC3Digest',
        name: 'digest',
        type: 'address',
      },
    ],
    name: 'setNSEC3Digest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'rrset',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes',
          },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature',
        name: 'input',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'submitRRSet',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'rrset',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes',
          },
        ],
        internalType: 'struct DNSSEC.RRSetWithSignature[]',
        name: 'input',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_proof',
        type: 'bytes',
      },
    ],
    name: 'submitRRSets',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class DNSSECImpl__factory {
  static readonly abi = _abi
  static createInterface(): DNSSECImplInterface {
    return new Interface(_abi) as DNSSECImplInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): DNSSECImpl {
    return new Contract(address, _abi, signerOrProvider) as DNSSECImpl
  }
}
