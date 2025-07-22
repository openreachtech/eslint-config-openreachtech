/* eslint-disable openreachtech/indent-in-infix-expression */

/*
 * Binary expressions
 */
const alpha = 100
+ 200 // ❌ `@stylistic/indent-binary-ops`

const beta = 100
- 200 // ❌ `@stylistic/indent-binary-ops`

const gamma = 100
* 200 // ❌ `@stylistic/indent-binary-ops`

const delta = 100
/ 200 // ❌ `@stylistic/indent-binary-ops`

const epsilon = 100
% 200 // ❌ `@stylistic/indent-binary-ops`

const zeta = 100
** 2 // ❌ `@stylistic/indent-binary-ops`

const eta = 100
| 2 // ❌ `@stylistic/indent-binary-ops`

const theta = 100
& 2 // ❌ `@stylistic/indent-binary-ops`

const iota = 100
^ 2 // ❌ `@stylistic/indent-binary-ops`

const kappa = 100
<< 2 // ❌ `@stylistic/indent-binary-ops`

const lambda = 100
>> 2 // ❌ `@stylistic/indent-binary-ops`

const mu = 100
>>> 2 // ❌ `@stylistic/indent-binary-ops`

const nu = 'key'
in { key: 'value' } // ❌ `@stylistic/indent-binary-ops`

const xi = {}
instanceof Object // ❌ `@stylistic/indent-binary-ops`

/*
 * Logical expressions
 */
const omicron = alpha === 100
|| beta !== 100 // ❌ `@stylistic/indent-binary-ops`

const pi = alpha === 100
  || beta === 100 // ✅ `openreachtech/indent-in-infix-expression`
    || gamma === 100 // ❌ `@stylistic/indent-binary-ops`

const rho = alpha === 100
&& beta === 100 // ❌ `@stylistic/indent-binary-ops`

const sigma = alpha === 100
  && beta === 100 // ✅ `openreachtech/indent-in-infix-expression`
    && gamma === 100 // ❌ `@stylistic/indent-binary-ops`

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
  omicron,
  pi,
  rho,
  sigma,
}
