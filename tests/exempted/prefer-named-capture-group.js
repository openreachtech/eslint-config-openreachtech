'use strict'

/* eslint-disable prefer-regex-literals */

const alphaRegExp = /(ba[rz])/u // ✅ `prefer-named-capture-group`

const betaRegExp = new RegExp('(ba[rz])', 'u') // ✅ `prefer-named-capture-group`
const gammaRegExp = RegExp('(ba[rz])', 'u') // ✅ `prefer-named-capture-group`

module.exports = {
  alphaRegExp,
  betaRegExp,
  gammaRegExp,
}
