/* eslint-disable jsdoc/require-jsdoc */

function extraFunc () {
  const data = {} // ✅ ['data'] of `id-denylist`

  return [
    data, // ✅ ['data'] of `id-denylist`
  ]
}

function callback () { // ✅ ['callback'] of `id-denylist`
  // noop
}

const alpha = {}

// eslint-disable-next-line func-names
alpha.data = function () { // ✅ ['data'] of `id-denylist`
  // noop
}

alpha.attrs = {} // ✅️ ['attrs'] of `id-denylist`

export default {
  extraFunc,
  callback, // ✅ ['callback'] of `id-denylist`
  alpha,
}
