const object = {}

describe('sample test', () => {
  test('to be {}', () => {
    const actual = object.alphaFunc().betaFunc() // ❌ ignoreChainWithDepth:1 of `newline-per-chained-call`

    expect(actual).toStrictEqual({}) // ❌ ❌ ignoreChainWithDepth:1 of `newline-per-chained-call`
  })
})
