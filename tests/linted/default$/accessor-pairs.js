'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const alpha = {
  sum: 0,

  set sumValue (value) { // ❌ setWithoutGet:true of `accessor-pairs`
    this.sum += value
  },
}

class AccessorPairs {
  constructor (value) {
    this.savedValue = value
  }

  set value (value) { // ❌ setWithoutGet:true & enforceForClassMembers:true of `accessor-pairs`
    this.savedValue = value
  }
}

export default {
  alpha,
  AccessorPairs,
}
