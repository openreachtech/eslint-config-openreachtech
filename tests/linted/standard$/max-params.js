/* eslint-disable jsdoc/require-jsdoc */

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

function fiveParameters ( // ❌ `max-params`
  first,
  second,
  third,
  fourth,
  fifth
) {
  return first
    + second
    + third
    + fourth
    + fifth
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

export default {
  fourParameters,
  fiveParameters,
  proxy,
}
