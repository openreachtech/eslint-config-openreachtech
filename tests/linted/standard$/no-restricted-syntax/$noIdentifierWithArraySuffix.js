/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getUserArray () { // ❌ { selector: 'Identifier[name=/^(?!(?:isArray|…)$).+Array$/]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffix
