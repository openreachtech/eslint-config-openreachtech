/* eslint-disable openreachtech/indent-in-infix-expression */
/* eslint-disable @stylistic/indent-binary-ops */
/* eslint-disable @stylistic/space-infix-ops */

/*
 * Second line is written in "bash-like conditional statements"
 */
const alphaNumber = 3600000 // No semi-colon here. // ✅️ exempted `openreachtech/no-unexpected-multiline`

-1 === resultOfOperation() || die()

export default {
  alphaNumber,
}

/**
 * Result of an operation.
 *
 * @returns {number} The result of the operation.
 */
function resultOfOperation () {
  return 0
}

/**
 * Function to die.
 */
function die () {
  // noop
}
