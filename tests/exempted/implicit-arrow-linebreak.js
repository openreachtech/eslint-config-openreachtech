'use strict'

const alphaArrow = () => 'I am alpha arrow function' // ✅ below of `implicit-arrow-linebreak`

const betaArrow = () =>
  'I am beta arrow function' // ✅ beside of `implicit-arrow-linebreak`

module.exports = {
  alphaArrow,
  betaArrow,
}
