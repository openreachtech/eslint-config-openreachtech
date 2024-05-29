'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class PaddedBlock { // ❌ never `padded-blocks`

  constructor () {
    this.property = 100
  }

  sample (arg) { // ❌ never `padded-blocks`

    if (!arg) { // ❌ never `padded-blocks`

      return this.property
    }

    if (arg) {
      return this.property // ❌ never `padded-blocks`

    }

    if (arg === null) { // ❌ never `padded-blocks`

      return this.property // ❌ never `padded-blocks`

    }

    // eslint-disable-next-line no-restricted-syntax
    switch (arg) { // ❌ never `padded-blocks`

      case 'foo':
        return 'foo'
      case 'bar':
        return 'bar'
      default: // ❌ never `padded-blocks`

    }

    return null
  }

  oneLine (arg) {
    return { foo: arg + this.property }
  } // ❌ never `padded-blocks`

}

module.exports = PaddedBlock
