/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getList () { // ❌ { selector: 'Identifier[name=/.+(?<!class|RadioNode)List$/]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffix
