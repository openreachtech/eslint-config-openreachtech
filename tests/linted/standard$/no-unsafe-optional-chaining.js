/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-implicit-coercion */
/* eslint-disable no-restricted-syntax */

/** @type {object} */
const target = {}
const extraFunc = (...args) => {}

const alpha = (target?.alphaFunc)() // ❌ `no-unsafe-optional-chaining`
const beta = (target?.beta).first // ❌ `no-unsafe-optional-chaining`

const gamma = target.second
const gammaArray = [
  (gamma?.()).second, // ❌ `no-unsafe-optional-chaining`
  (gamma?.()) // ❌ `no-unsafe-optional-chaining`
    .third(),
]

{
  const delta = target?.fourth
  ;(
    delta?.first
    ?? delta?.second // ❌ `no-unsafe-optional-chaining`
  )()
}

{
  const epsilon = target?.fifth
  ;(epsilon || target?.first)() // ❌ `no-unsafe-optional-chaining`
}

const zeta = (target?.first && extraFunc)() // ❌ `no-unsafe-optional-chaining`

const eta = (
  target
    ? target?.first // ❌ `no-unsafe-optional-chaining`
    : extraFunc
)()

const iota = (extraFunc(), target?.first).second // ❌ `no-unsafe-optional-chaining`

const kappa = (target?.tagFunc) `template` // ❌ `no-unsafe-optional-chaining`

const lambda = new (target?.Iota)() // ❌ `no-unsafe-optional-chaining`
const mu = [...target?.object] // ❌ `no-unsafe-optional-chaining`
const nu = extraFunc(...target?.array) // ❌ `no-unsafe-optional-chaining`

const xi = 1 in target?.first // ❌ `no-unsafe-optional-chaining`

const piInstance = {}
const pi = piInstance instanceof target?.first // ❌ `no-unsafe-optional-chaining`

for (const it of target?.first) { // ❌ `no-unsafe-optional-chaining`
  if (it) {
    throw new Error('(>_<)')
  }
}

const {
  omicron,
} = target?.first // ❌ `no-unsafe-optional-chaining`

const [
  { rho } = target?.first, // ❌ `no-unsafe-optional-chaining`
] = []

// with (target?.first) {
//   // noop
// }

class Sigma extends target?.fifth { // ❌ `no-unsafe-optional-chaining`
  // noop
}

const Tau = class Tau extends target?.first { // ❌ `no-unsafe-optional-chaining`
  // noop
}

async function upsilonFunc () {
  const { it } = await target?.first // ❌ `no-unsafe-optional-chaining`

  if (it) {
    throw new Error('(>_<)')
  }

  (await target?.second)() // ❌ `no-unsafe-optional-chaining`

  if ((await target?.third).fourth) { // ❌ `no-unsafe-optional-chaining`
    throw new Error('(>_<)')
  }
}

// -------------------------------------------- with disallowArithmeticOperators: true

const operand = 1

const phiValues = [
  +target?.first, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  -target?.first, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`

  target?.first + operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  target?.first - operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  target?.first / operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  target?.first * operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  target?.first % operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  target?.first ** operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
]

function chiFunc () {
  let chi = 0

  chi += target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  chi -= target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  chi /= target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  chi *= target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  chi %= target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  chi **= target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`

  return chi
}

async function psiFunc () {
  let base = 0

  base += await target?.first // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`

  return [
    base,

    +await target?.first, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
    -await target?.first + operand, // ❌ disallowArithmeticOperators:true of `no-unsafe-optional-chaining`
  ]
}

export default {
  alpha,
  beta,
  gamma,
  gammaArray,
  // delta,
  // epsilon,
  zeta,
  eta,
  iota,
  kappa,
  lambda,
  mu,
  nu,
  xi,
  omicron,
  pi,
  rho,
  Sigma,
  Tau,
  upsilonFunc,
  phiValues,
  chiFunc,
  psiFunc,
}
