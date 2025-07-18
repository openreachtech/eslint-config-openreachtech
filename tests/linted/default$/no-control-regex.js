'use strict'

const alphaRegExp = /\x00/u // ❌ `no-control-regex`
const betaRegExp = /\x1F/u // ❌ `no-control-regex`
const gammaRegExp = /\u000C/u // ❌ `no-control-regex`
const deltaRegExp = /\u{C}/u // ❌ `no-control-regex`

const unicodeFlag = 'u'
// raw U+000C character in the pattern
const epsilonRegExp = new RegExp('\x0C', unicodeFlag)// ❌ `no-control-regex`
// \x0C pattern
const zetaRegExp = new RegExp('\\x0C', unicodeFlag) // ❌ `no-control-regex`

export default {
  alphaRegExp,
  betaRegExp,
  gammaRegExp,
  deltaRegExp,
  epsilonRegExp,
  zetaRegExp,
}
