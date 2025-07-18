/* eslint-disable no-restricted-syntax */

const alpha = 0

// @ts-expect-error
if (alpha === NaN) { // ❌ `use-isnan`
  // ...
}

// @ts-expect-error
if (alpha !== NaN) { // ❌ `use-isnan`
  // ...
}

if (alpha === Number.NaN) { // ❌ `use-isnan`
  // ...
}

if (alpha !== Number.NaN) { // ❌ `use-isnan`
  // ...
}

switch (alpha) {
  case NaN: // ❌ use-enforceForSwitchCase:true of `use-isnan`
    break
  // @ts-expect-error
  case 1:
    break
  default:
    break
}

switch (NaN) { // ❌ use-enforceForSwitchCase:true of `use-isnan`
  case 1:
    break
  case 2:
    break
  default:
    break
}

switch (alpha) {
  case Number.NaN: // ❌ use-enforceForSwitchCase:true of `use-isnan`
    break
  // @ts-expect-error
  case 1:
    break
  default:
    break
}

switch (Number.NaN) { // ❌ use-enforceForSwitchCase:true of `use-isnan`
  case 1:
    break
  case 2:
    break
  default:
    break
}

const array = [1, 3, 5]

const beta = array.indexOf(NaN) // ❌ enforceForIndexOf:true of `use-isnan`
const gamma = array.lastIndexOf(NaN) // ❌ enforceForIndexOf:true of `use-isnan`

export default {
  alpha,
  beta,
  gamma,
}
