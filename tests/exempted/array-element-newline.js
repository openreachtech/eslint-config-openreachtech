'use strict'

const alpha = []

const beta = [
  'first',
  {
    second: 2,
    third: 3,
  },
  { // ✅ consistent, multiline:true of `array-element-newline`
    fourth: 4,
    fifth: 5,
  },
]

const gamma = [
  'first', 'second', 'third', // ✅ consistent, multiline:true of `array-element-newline`
]

const delta = [ // ✅ consistent, multiline:true of `array-element-newline`
  'first',
  'second',
  'third',
]

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
}
