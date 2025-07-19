/* eslint-disable max-classes-per-file */
/* eslint-disable jsdoc/require-jsdoc */

class BaseClass {

}

class AlphaClass extends BaseClass {
  constructor () {
    super() // ❌ `empty-line-after-super`
    this.array = []
  }
}

class BetaClass extends BaseClass {
  constructor () {
    super() // ❌ `empty-line-after-super`
    // A comment between super and other code.
    this.array = []
  }
}

class GammaClass extends BaseClass {
  constructor () {
    super() // ✅ `empty-line-after-super`

    this.array = []
  }
}

export default {
  AlphaClass,
  BetaClass,
  GammaClass,
}
