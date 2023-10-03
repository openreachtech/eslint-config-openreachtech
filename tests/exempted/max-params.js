'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function oneParameter (first) { // ✅ `max-params`
  return first
}

function twoParameters ( // ✅ `max-params`
  first,
  second
) {
  return first + second
}

function threeParameters ( // ✅ `max-params`
  first,
  second,
  third
) {
  return first
    + second
    + third
}

function fourParameters ( // ✅ `max-params`
  first,
  second,
  third,
  fourth
) {
  return first
    + second
    + third
    + fourth
}

const proxy = new Proxy({}, {
  get ( // ✅ `max-params`
    target,
    key,
    receiver
  ) {
    return Reflect.get(target, key, receiver)
  },
  set ( // ✅ `max-params`
    target,
    key,
    value,
    receiver
  ) {
    return Reflect.set(target, key, value, receiver)
  },
})

module.exports = {
  oneParameter,
  twoParameters,
  threeParameters,
  fourParameters,
  proxy,
}
