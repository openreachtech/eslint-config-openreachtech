// eslint-disable-next-line prefer-object-spread
Object.assign( // ❌ `no-restricted-properties`
  {},
  {
    alpha: 1,
    beta: 2,
  },
  {
    gamma: 3,
  }
)

export default Object.assign
