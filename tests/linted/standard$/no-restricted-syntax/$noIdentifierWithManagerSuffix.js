/* eslint-disable jsdoc/require-jsdoc */

class NoSuffixManager { // ❌ { selector: 'Identifier[name=/.+Manager$/]' } of `no-restricted-syntax`
  constructor () {
    this.array = []
    this.user = {}
  }
}

export default NoSuffixManager // ❌ { selector: 'Identifier[name=/.+Manager$/]' } of `no-restricted-syntax`
