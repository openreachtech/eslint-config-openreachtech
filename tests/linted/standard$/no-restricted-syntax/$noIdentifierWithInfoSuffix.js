/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.user = {}
  }

  getUserInfo () { // ❌ { selector: 'Identifier[name=/.+(?<!Request)Info$/]' } of `no-restricted-syntax`
    return this.user
  }
}

export default NoSuffix
