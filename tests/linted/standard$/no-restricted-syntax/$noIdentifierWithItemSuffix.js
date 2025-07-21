/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getFirstItem () { // ❌ { selector: 'Identifier[name=/.+(?<!get|set|remove|named)Item$/]' } of `no-restricted-syntax`
    const [
      firstItem,
    ] = this.array

    return firstItem
  }
}

export default NoSuffix
