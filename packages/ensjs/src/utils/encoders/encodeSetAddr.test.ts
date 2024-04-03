import { describe, expect, it } from 'vitest'
import { encodeSetAddr, type EncodeSetAddrParameters } from './encodeSetAddr.js'

const namehash =
  '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

describe('encodeSetAddr', () => {
  const testCases: Array<[string, EncodeSetAddrParameters, string]> = [
    [
      'should encode setAddr with ETH address',
      {
        namehash,
        coin: 'ETH',
        value: '0x1234567890123456789012345678901234567890',
      },
      '0x8b95dd711234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000141234567890123456789012345678901234567890000000000000000000000000',
    ],
    [
      'should encode setAddr with BTC address',
      {
        namehash,
        coin: 'BTC',
        value: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
      },
      '0x8b95dd711234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000160014e8df018c7e326cc253faac7e46cdc51e68542c4200000000000000000000',
    ],
    [
      'should encode setAddr with coin type as number',
      {
        namehash,
        coin: 60,
        value: '0x1234567890123456789012345678901234567890',
      },
      '0x8b95dd711234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000141234567890123456789012345678901234567890000000000000000000000000',
    ],
    [
      'should encode setAddr with coin type as string',
      {
        namehash,
        coin: '60',
        value: '0x1234567890123456789012345678901234567890',
      },
      '0x8b95dd711234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000141234567890123456789012345678901234567890000000000000000000000000',
    ],
    [
      'should encode setAddr with null value',
      {
        namehash,
        coin: 'ETH',
        value: null,
      },
      '0x8b95dd711234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000',
    ],
  ]

  testCases.forEach(([description, parameters, expectedOutput]) => {
    it(description, () => {
      expect(encodeSetAddr(parameters)).toEqual(expectedOutput)
    })
  })
})
