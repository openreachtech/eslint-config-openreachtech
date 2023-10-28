'use strict'

describe('Sample', () => { // ✅ { ignoreTopLevelDescribe: true } of `jest/prefer-lowercase-title`
  describe('#method()', () => {
    const cases = [
      {
        params: {
          UserId: 10001,
        },
        expected: {
          username: 'user10001',
        },
      },
      {
        params: {
          UserId: 10002,
        },
        expected: {
          username: 'user10002',
        },
      },
    ]

    test.each(cases)('UserId: $params.UserId', ({ params, expected }) => { // ✅ `jest/prefer-lowercase-title`
      const actual = {
        username: `user${params.UserId}`,
      }

      expect(actual)
        .toEqual(actual)
    })
  })
})
