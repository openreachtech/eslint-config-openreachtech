/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getLastData () { // ❌ { selector: 'Identifier[name=/.+(?<!Form)Data$/]' } of `no-restricted-syntax`
    return this.array
      .at(-1)
  }
}

export default NoSuffix
