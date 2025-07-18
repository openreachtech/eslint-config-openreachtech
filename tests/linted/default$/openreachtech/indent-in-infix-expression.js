'use strict'

/* eslint-disable @stylistic/indent-binary-ops */
/* eslint-disable openreachtech/no-unexpected-multiline */

/*
 * Binary expressions
 */
const alpha = 100
+ 200 // ❌ `openreachtech/indent-in-infix-expression`

const beta = 100
- 200 // ❌ `openreachtech/indent-in-infix-expression`

const gamma = 100
* 200 // ❌ `openreachtech/indent-in-infix-expression`

const delta = 100
/ 200 // ❌ `openreachtech/indent-in-infix-expression`

const epsilon = 100
% 200 // ❌ `openreachtech/indent-in-infix-expression`

const zeta = 100
** 2 // ❌ `openreachtech/indent-in-infix-expression`

const eta = 100
| 2 // ❌ `openreachtech/indent-in-infix-expression`

const theta = 100
& 2 // ❌ `openreachtech/indent-in-infix-expression`

const iota = 100
^ 2 // ❌ `openreachtech/indent-in-infix-expression`

const kappa = 100
<< 2 // ❌ `openreachtech/indent-in-infix-expression`

const lambda = 100
>> 2 // ❌ `openreachtech/indent-in-infix-expression`

const mu = 100
>>> 2 // ❌ `openreachtech/indent-in-infix-expression`

const nu = 'key'
in { key: 'value' } // ❌ `openreachtech/indent-in-infix-expression`

const xi = {}
instanceof Object // ❌ `openreachtech/indent-in-infix-expression`

/*
 * Logical expressions
 */
const omicron = alpha === 100
|| beta !== 100 // ❌ `openreachtech/indent-in-infix-expression`

const pi = alpha === 100
  || beta === 100 // ✅ `openreachtech/indent-in-infix-expression`
    || gamma === 100 // ❌ `openreachtech/indent-in-infix-expression`

const rho = alpha === 100
&& beta === 100 // ❌ `openreachtech/indent-in-infix-expression`

const sigma = alpha === 100
  && beta === 100 // ✅ `openreachtech/indent-in-infix-expression`
    && gamma === 100 // ❌ `openreachtech/indent-in-infix-expression`

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
