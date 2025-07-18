'use strict'

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-restricted-syntax */

const primary = false
const secondary = false
const condition = 0

function doPrimary () {
  // noop
}

function doSecondary () {
  // noop
}

function doExtra () {
  // noop
}

function doSomethingRisky () {
  // noop
}

function handleError (error) {
  // noop
}

function teardown () {
  // noop
}

/* -------------------------------------------------------------------------- */
// One tab brace style
/* -------------------------------------------------------------------------- */

function oneTabBraceStyleFunc () { // ✅ `brace-style`
  // noop
}

if (primary) { // ✅ `brace-style`
  doPrimary()
} else if (secondary) { // ✅ `brace-style`
  doSecondary()
} else { // ✅ `brace-style`
  doExtra()
}

switch (condition) { // ✅ `brace-style`
  case 0:
    doPrimary()

    break
  case 1:
    doSecondary()

    break
  default:
    doExtra()
}

try { // ✅ `brace-style`
  doSomethingRisky()
} catch (error) { // ✅ `brace-style`
  handleError(error)
} finally { // ✅ `brace-style`
  teardown()
}

// class OneTabBraceStyle { // ✅ `brace-style`
//   method () { // ✅ `brace-style`
//     // noop
//   }
// }

/* -------------------------------------------------------------------------- */
// Stroustrup style
/* -------------------------------------------------------------------------- */

function stroustrupStyleFunc () { // ✅ `brace-style`
  // noop
}

if (primary) { // ✅ `brace-style`
  doPrimary()
}
else if (secondary) { // ❌ `brace-style`
  doSecondary()
}
else { // ❌ `brace-style`
  doExtra()
}

switch (condition) { // ✅ `brace-style`
  case 0:
    doPrimary()

    break
  case 1:
    doSecondary()

    break
  default:
    doExtra()
}

try { // ✅ `brace-style`
  doSomethingRisky()
}
catch (error) { // ❌ `brace-style`
  handleError(error)
}
finally { // ❌ `brace-style`
  teardown()
}

// class StroustrupStyle { // ✅ `brace-style`
//   method () { // ✅ `brace-style`
//     // noop
//   }
// }

/* -------------------------------------------------------------------------- */
// allman style
/* -------------------------------------------------------------------------- */

function allmanStyleFunc ()
{ // ❌ `brace-style`
  // noop
}

if (primary)
{ // ❌ `brace-style`
  doPrimary()
}
else if (secondary)
{ // ❌ `brace-style`
  doSecondary()
}
else { // ❌ `brace-style`
  doExtra()
}

switch (condition)
{ // ❌ `brace-style`
  case 0:
    doPrimary()

    break
  case 1:
    doSecondary()

    break
  default:
    doExtra()
}

try { // ✅ `brace-style`
  doSomethingRisky()
}
catch (error) { // ❌ `brace-style`
  handleError(error)
}
finally { // ❌ `brace-style`
  teardown()
}

class AllmanStyle
{ // ❌ `brace-style`
  static method ()
  { // ❌ `brace-style`
    // noop
  }
}

/* -------------------------------------------------------------------------- */

export default {
  oneTabBraceStyleFunc,
  stroustrupStyleFunc,
  allmanStyleFunc,

  // OneTabBraceStyle,
  // StroustrupStyle,
  AllmanStyle,
}
