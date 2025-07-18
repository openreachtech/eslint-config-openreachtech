/* eslint-disable prefer-regex-literals */

const alphaRegExp = /(ba[rz])/u // ✅ `prefer-named-capture-group`

const betaRegExp = new RegExp('(ba[rz])', 'u') // ✅ `prefer-named-capture-group`
const gammaRegExp = RegExp('(ba[rz])', 'u') // ✅ `prefer-named-capture-group`

export default {
  alphaRegExp,
  betaRegExp,
  gammaRegExp,
}
