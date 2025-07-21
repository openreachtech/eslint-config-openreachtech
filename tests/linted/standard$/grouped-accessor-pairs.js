/* eslint-disable jsdoc/require-jsdoc */

const alpha = {
  get value () {
    return this._value
  },
  extra: 1,
  set value (value) { // ❌ `grouped-accessor-pairs`
    this._value = value
  },
}

const beta = {
  set value (value) {
    this._value = value
  },
  get value () { // ❌ getBeforeSet of `grouped-accessor-pairs`
    return this._value
  },
}

class Gamma {
  set value (value) {
    this._value = value
  }

  get value () { // ❌ getBeforeSet of `grouped-accessor-pairs`
    return this._value
  }
}

const Delta = class {
  static get value () {
    return this._value
  }

  static extra () {
    // noop
  }

  static set value (value) { // ❌ `grouped-accessor-pairs`
    this._value = value
  }
}

export default {
  alpha,
  beta,
  Gamma,
  Delta,
}
