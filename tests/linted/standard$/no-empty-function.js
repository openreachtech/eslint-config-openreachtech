'use strict'

/* eslint-disable getter-return */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable object-shorthand */

function alphaFunc () {} // ❌ `no-empty-function`

const betaFunc = function () {} // ❌ `no-empty-function`
const gammaFunc = () => {} // ✅ `no-empty-function`

function * deltaFunc () {} // ❌ `no-empty-function`

const epsilonFunc = function * () {} // ❌ `no-empty-function`

const zeta = {
  firstFunc: function () {}, // ❌ `no-empty-function`
  secondFunc: function * () {}, // ❌ `no-empty-function`
  thirdFunc: () => {}, // ✅ `no-empty-function`
  fourthFunc () {}, // ❌ `no-empty-function`
  * fifthFunc () {}, // ❌ `no-empty-function`

  // @ts-expect-error
  get value () {}, // ❌ `no-empty-function`
  set value (value) {}, // ❌ `no-empty-function`
}

class Eta {
  // eslint-disable-next-line no-useless-constructor
  constructor () {} // ❌ `no-empty-function`

  firstFunc () {} // ❌ `no-empty-function`

  * secondFunc () {} // ❌ `no-empty-function`

  // @ts-expect-error
  get value () {} // ❌ `no-empty-function`

  set value (value) {} // ❌ `no-empty-function`

  static fourthFunc () {} // ❌ `no-empty-function`

  static * fifthFunc () {} // ❌ `no-empty-function`

  // @ts-expect-error
  static get value () {} // ❌ `no-empty-function`

  static set value (value) {} // ❌ `no-empty-function`
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zeta,
  Eta,
}
