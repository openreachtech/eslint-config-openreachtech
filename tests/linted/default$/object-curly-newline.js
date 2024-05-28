'use strict'

/* eslint-disable object-shorthand */

////////////////////////////////////////////////////////////////////////////////
// ObjectExpression: {
//   multiline: true,
//   consistent: true,
//   minProperties: Infinity,
// }

const alpha = { first: 1,
} // ❌ `object-curly-newline`

const beta = { // ❌ `object-curly-newline`
  first: 1 }

const gamma = { first: 1, second: 2,
} // ❌ `object-curly-newline`

const delta = { // ❌ `object-curly-newline`
  first: 1, second: 2 }

const epsilon = { firstFunc: function () {
  return 1
},
} // ❌ `object-curly-newline`

const zeta = { // ❌ `object-curly-newline`
  firstFunc: function () {
    return 1
  } }

////////////////////////////////////////////////////////////////////////////////
// ObjectPattern: {
//   multiline: true,
//   consistent: true,
//   minProperties: Infinity,
// }

const extra = {}

const { eta,
} = extra // ❌ `object-curly-newline`

const { // ❌ `object-curly-newline`
  theta } = extra

const { iota, kappa,
} = extra // ❌ `object-curly-newline`

const { // ❌ `object-curly-newline`
  lambda, mu } = extra

const { nuFunc = function () {
  return 1111
},
} = extra // ❌ `object-curly-newline`

const { // ❌ `object-curly-newline`
  omicron = function () {
    return 1111
  } } = extra

////////////////////////////////////////////////////////////////////////////////
// ImportDeclaration: {
//   multiline: true,
//   consistent: true,
//   minProperties: Infinity,
// }

////////////////////////////////////////////////////////////////////////////////
// ExportDeclaration: {
//   multiline: true,
//   consistent: true,
//   minProperties: Infinity,
// }

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  eta,
  theta,
  iota,
  kappa,
  lambda,
  mu,
  nuFunc,
  omicron,
}
