'use strict'

/** @type {string} */
const ALPHA = /** @type {*} */ (Symbol('alpha')) // ✅ exempted @stylistic/no-extra-parens to `(Symbol('alpha'))`

module.exports = ALPHA
