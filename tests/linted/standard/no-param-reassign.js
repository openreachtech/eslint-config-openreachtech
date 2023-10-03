'use strict'

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-restricted-syntax */

function alphaFunc (it) {
  it = 'alpha' // ❌ `no-param-reassign`
}

function betaFunc (it) {
  it += 1 // ❌ `no-param-reassign`
}

function gammaFunc (it) {
  const array = [1, 3, 5]

  for (it in array) { // ❌ `no-param-reassign`
    // noop
  }
}

function deltaFunc (it) {
  const array = [1, 3, 5]

  for (it of array) { // ❌ `no-param-reassign`
    // noop
  }
}

function epsilonFunc (it) {
  it.first = '1st' // ❌ `no-param-reassign`
}

function zetaFunc (it) {
  delete it.first // ❌ `no-param-reassign`
}

function etaFunc (it) {
  it.first += 1 // ❌ `no-param-reassign`
}

function thetaFunc (it) {
  const array = [1, 3, 5]

  for (it.first in array) { // ❌ `no-param-reassign`
    // noop
  }
}

function iotaFunc (it) {
  const array = [1, 3, 5]

  for (it.first of array) { // ❌ `no-param-reassign`
    // noop
  }
}

module.exports = {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zetaFunc,
  etaFunc,
  thetaFunc,
  iotaFunc,
}
