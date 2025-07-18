'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class NoSuffixManager { // ❌ { selector: 'Identifier[name="Manager"]' } of `no-restricted-syntax`
  constructor () {
    this.array = []
    this.user = {}
  }

  getFirstItem () { // ❌ { selector: 'Identifier[name="Item"]' } of `no-restricted-syntax`
    const [
      firstItem,
    ] = this.array

    return firstItem
  }

  getLastData () { // ❌ { selector: 'Identifier[name="Data"]' } of `no-restricted-syntax`
    return this.array
      .at(-1)
  }

  getUserInfo () { // ❌ { selector: 'Identifier[name="Info"]' } of `no-restricted-syntax`
    return this.user
  }

  getList () { // ❌ { selector: 'Identifier[name="List"]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffixManager // ❌ { selector: 'Identifier[name="Manager"]' } of `no-restricted-syntax`
