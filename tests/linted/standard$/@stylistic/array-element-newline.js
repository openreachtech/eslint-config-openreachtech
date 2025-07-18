'use strict'

const alpha = []

const beta = [
  'first',
  {
    second: 2,
    third: 3,
  }, { // ❌ consistent, multiline:true of `array-element-newline`
    fourth: 4,
    fifth: 5,
  },
]

const gamma = [
  'first', // ❌ consistent, multiline:true of `array-element-newline`
  'second', 'third',
]

export default {
  alpha,
  beta,
  gamma,
}
