/* eslint-disable jsdoc/require-jsdoc */

function wrapRegexFunc (it) {
  return /alpha/u.test(it) // ✅ exempted `wrap-regex`
}

export default {
  wrapRegexFunc,
}
