/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getAllItems () { // ❌ { selector: 'Identifier[name=/^(?!(?:minItems|…)$).+Items$/]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffix
