'use strict'

const alpha = [] // ✅ built-in exceptions of `array-bracket-spacing`
const beta = [ 'first', 'second' ] // ❌ never of `array-bracket-spacing`
const gamma = [ 'first', 'second'] // ❌ never of `array-bracket-spacing`
const delta = ['first', 'second' ] // ❌ never of `array-bracket-spacing`

// single value
const epsilon = [ 'first' ] // ❌ never of `array-bracket-spacing`
const zeta = [ 'first'] // ❌ never of `array-bracket-spacing`
const eta = ['first' ] // ❌ never of `array-bracket-spacing`

// arrays in arrays
const theta = [ ['first', 'second'], [], ['third'] ] // ❌ never of `array-bracket-spacing`
const iota = [ ['first', 'second'], [], ['third']] // ❌ never of `array-bracket-spacing`
const kappa = [['first', 'second'], [], ['third'] ] // ❌ never of `array-bracket-spacing`

// objects in arrays
const lambda = [ { first: '1st', second: '2nd' }, {}, { third: '3rd' } ] // ❌ never of `array-bracket-spacing`
const mu = [ { first: '1st', second: '2nd' }, {}, { third: '3rd' }] // ❌ never of `array-bracket-spacing`
const nu = [{ first: '1st', second: '2nd' }, {}, { third: '3rd' } ] // ❌ never of `array-bracket-spacing`

const xi = [ // ✅ never of `array-bracket-newline`
  ['1st', 1000],
]

export default {
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
  nu,
  xi,
}
