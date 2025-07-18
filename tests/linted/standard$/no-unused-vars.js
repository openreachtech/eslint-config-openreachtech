/* eslint-disable jsdoc/require-jsdoc */

const alpha = 1 // ❌ vars:all of `no-unused-vars`

function betaFunc (
  first, // ✅ args:none of `no-unused-vars`
  second,
  third // ✅ args:none of `no-unused-vars`
) {
  return second
}

try {
  // noop
} catch (error) { // ✅ caughtErrors:none of `no-unused-vars`
  // noop
}

const [
  gamma,
  _epsilon, // ✅ destructuredArrayIgnorePattern:^_ of `no-unused-vars`
  zeta,
] = [1, 3, 5]

export default {
  betaFunc,
  gamma,
  zeta,
}
