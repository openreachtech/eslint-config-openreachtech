/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

function alphaFunc (arg) { // ❌ max:8 of `complexity`
  if (arg === 0) {
    return 'zero' // first path
  } else if (arg === 1) {
    return 'one' // second path
  } else if (arg === 2) {
    return 'two' // third path
  } else if (arg === 3) {
    return 'three' // fourth path
  } else if (arg === 4) {
    return 'four' // fifth path
  } else if (arg === 5) {
    return 'five' // sixth path
  } else if (arg === 6) {
    return 'six' // seventh path
  } else if (arg === 7) {
    return 'seven' // eighth path
  } else { // eslint-disable-line no-else-return
    return 'unknown' // ninth path
  }
}

function betaFunc ({ // ❌ max:8 of `complexity`
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
}) {
  first ||= 1
  second &&= 1
  third ??= 1
  fourth ??= 1
  fifth ??= 1
  sixth ??= 1
  seventh ??= 1
  eighth ??= 1
}

export default {
  alphaFunc,
  betaFunc,
}
