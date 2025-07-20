/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

function alphaFunc (arg) { // ❌ max:12 of `complexity`
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
  } else if (arg === 8) {
    return 'eight' // ninth path
  } else if (arg === 9) {
    return 'nine' // tenth path
  } else if (arg === 10) {
    return 'ten' // eleventh path
  } else if (arg === 11) {
    return 'eleven' // twelfth path
  } else { // eslint-disable-line no-else-return
    return 'unknown' // thirteenth path
  }
}

function betaFunc ({ // ❌ max:12 of `complexity`
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
}) {
  first ||= 1
  second &&= 1
  third ??= 1
  fourth ??= 1
  fifth ??= 1
  sixth ??= 1
  seventh ??= 1
  eighth ??= 1
  ninth ??= 1
  tenth ??= 1
  eleventh ??= 1
  twelfth ??= 1
}

export default {
  alphaFunc,
  betaFunc,
}
