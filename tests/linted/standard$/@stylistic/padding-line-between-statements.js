'use strict'
const alpha = 1 // ❌ directive/* of `padding-line-between-statements`

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

const beta = 2
{ // ❌ */block of `padding-line-between-statements`
  console.log(beta)
}

const array = [1, 3, 5, 7, 9]

function breakFunc () {
  let total = 0

  for (const value of array) {
    if (value > 5) {
      total += value

      break // ❌ */break of `padding-line-between-statements`
    }

    total *= value
  }

  return total
}

const delta = 4
class Delta { // ❌ class/* of `padding-line-between-statements`

}

function continueFunc () {
  let total = 0

  for (const value of array) {
    if (value > 5) {
      total += value

      continue // ❌ */continue of `padding-line-between-statements`
    }

    total *= value
  }

  return total
}

const epsilon = 5
function epsilonFunc () { // ❌ function/* of `padding-line-between-statements`
  return epsilon
}

function zetaFunc (arg) {
  const times = arg * 2
  return times // ❌ return/* of `padding-line-between-statements`
}

function etaFunc (arg) {
  if (arg > 5) {
    return arg
  }
  try { // ❌ try/* of `padding-line-between-statements`
    const times = arg * 2

    return times
  } catch (error) {
    console.error(error)
  }

  return 0
}

export default {
  alpha,
  beta,
  breakFunc,
  continueFunc,
  delta,
  Delta,
  epsilonFunc,
  zetaFunc,
  etaFunc,
}
