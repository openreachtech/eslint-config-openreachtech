/* eslint-disable max-classes-per-file */
/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (first) {
  return first
}

{
  // @ts-expect-error
  alphaFunc(alpha) // ❌ { variables: true } of `no-use-before-define`
  var alpha = 10 // eslint-disable-line no-var, vars-on-top
}

{
  betaFunc() // ✅ { functions: false } of `no-use-before-define`
}

function betaFunc () {
  // noop
}

function gammaFunc () {
  return gamma // ❌ { variables: true } of `no-use-before-define`
}

const gamma = 3

{
  // @ts-expect-error
  alphaFunc(delta) // ❌ { variables: true } of `no-use-before-define`

  let delta = 1 // eslint-disable-line no-restricted-syntax, prefer-const
}

// @ts-expect-error
class Epsilon extends Epsilon { // ❌ { classes: true } of `no-use-before-define`
  // noop
}

class Zeta {
  // @ts-expect-error
  [Zeta.methodName] () { // ❌ { classes: true } of `no-use-before-define`
    return this
  }

  static methodName = 'methodName'
}

class Eta {
  static Ctor = Eta // ✅ { classes: true } of `no-use-before-define`
}

const Theta = class {
  // @ts-expect-error
  static Ctor = Theta // ❌ { classes: true } of `no-use-before-define`
}

const Iota = class {
  static {
    // @ts-expect-error
    Iota.first = 1 // ❌ { classes: true } of `no-use-before-define`
  }
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,

  // @ts-expect-error
  extra, // ❌ { variables: true } of `no-use-before-define`
}

const extra = 1
