/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getBetaUtils () { // ❌ { selector: 'Identifier[name=/.+(?<!FF)Utils$/]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffix
