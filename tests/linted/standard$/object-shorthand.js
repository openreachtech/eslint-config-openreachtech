'use strict'

/* eslint-disable arrow-body-style */

const extraMethodName = 'extraMethodName'
const extra = 1

const alpha = {
  first: function () { // ❌ `object-shorthand`
    return 1
  },
  second: function * () { // ❌ `object-shorthand`
    yield 2
  },
  [extraMethodName]: function () { // ❌ `object-shorthand`
    return 3
  },
  extra: extra, // ❌ `object-shorthand`
}

////////////////////////////////////////////////////////////////////////////////
// avoidQuotes: false

const beta = {
  'quoted-func' () { // ✅ avoidQuotes:false of `object-shorthand`
    return 3
  },
}

////////////////////////////////////////////////////////////////////////////////
// ignoreConstructors: false

const gamma = {
  ConstructorFunc: function () { // ❌ ignoreConstructors:false of `object-shorthand`
    // noop
  },
}

////////////////////////////////////////////////////////////////////////////////
// avoidExplicitReturnArrows: false

const delta = {
  firstFunc: (first, second) => { // ✅ avoidExplicitReturnArrows:true of `object-shorthand`
    return first + second
  },

  secondFunc: first => { // ✅ avoidExplicitReturnArrows:true of `object-shorthand`
    return first * 2
  },
}

export default {
  alpha,
  beta,
  gamma,
  delta,
}
