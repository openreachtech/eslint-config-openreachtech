'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (condition) {
  const response = {}

  if (condition === 1) {
    response.one = true
  } else if (condition === 2) { // ❌ { selector: 'IfStatement IfStatement' } of `no-restricted-syntax`
    response.two = true
  } else {
    response.unknown = true
  }

  return response
}

function betaFunc (condition) {
  const response = {}

  if (condition === 1) {
    response.one = true
  } else {
    const extraCondition = condition + 1

    if (extraCondition === 2) { // ❌ { selector: 'IfStatement IfStatement' } of `no-restricted-syntax`
      response.two = true
    } else {
      const extendedCondition = extraCondition + 1

      if (extendedCondition === 3) { // ❌ { selector: 'IfStatement IfStatement' } of `no-restricted-syntax`
        response.three = true
      } else {
        response.unknown = true
      }
    }
  }

  return response
}

export default {
  alphaFunc,
  betaFunc,
}
