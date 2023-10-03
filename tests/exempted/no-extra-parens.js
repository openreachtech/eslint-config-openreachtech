'use strict'

/** @type {string} */
const ALPHA = /** @type {*} */ (Symbol('alpha')) // ✅ exempted no-extra-parens to `(Symbol('alpha'))`

module.exports = ALPHA
