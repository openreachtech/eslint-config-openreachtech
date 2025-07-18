'use strict'

const first = 1
const second = 2
const third = 3
const fourth = 4

const alpha = first
  && second < 0 // ❌ `no-mixed-operators`
  || third > 0
  || fourth + 1 === 0

const beta = first
  + second // ❌ `no-mixed-operators`
  * third

export default {
  alpha,
  beta,
}
