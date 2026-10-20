/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getAllItems () { // ❌ { selector: 'Identifier[name=/.+(?<!min)Items$/]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffix
