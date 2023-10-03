'use strict' // eslint-disable-line max-classes-per-file

/* eslint-disable jsdoc/require-jsdoc */

const alpha_ = 1 // ✅ exempted `no-underscore-dangle`
const _bate = 2 // ✅ exempted `no-underscore-dangle`

const __spy__ = () => {} // ✅ exempted `no-underscore-dangle`

class NoUnderscoreDangle {
  constructor () {
    this.alpha_ = 11 // ✅ exempted `no-underscore-dangle`
    this._bate = 22 // ✅ exempted `no-underscore-dangle`
  }

  _sum () {
    return this.alpha_ // ✅ exempted `no-underscore-dangle`
      + this._bate // ✅ exempted `no-underscore-dangle`
  }
}

class DerivedNoUnderscoreDangle extends NoUnderscoreDangle {
  constructor () {
    super()

    this.gamma_ = 3 // ✅ exempted `no-underscore-dangle`
  }

  _sum () {
    return super._sum() // ✅ exempted `no-underscore-dangle`
      + this.gamma_ // ✅ exempted `no-underscore-dangle`
  }

  static _delta () {
    return 4
  }

  _epsilon () {
    return /** @type {*} */ (this.constructor)._delta() // ✅ exempted `no-underscore-dangle`
  }
}

module.exports = {
  alpha_,
  _bate,
  __spy__,
  NoUnderscoreDangle,
  DerivedNoUnderscoreDangle,
}
