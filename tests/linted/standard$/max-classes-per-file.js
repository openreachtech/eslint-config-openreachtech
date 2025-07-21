// ❌ max:1 of `max-classes-per-file`

/* eslint-disable jsdoc/require-jsdoc */

class AlphaClass {

}

class BetaClass {
  static declareClass () {
    return class { // ✅ ignoreExpressions:true of `max-classes-per-file`

    }
  }
}

export default {
  AlphaClass,
  BetaClass,
}
