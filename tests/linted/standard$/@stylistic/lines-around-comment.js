/* eslint-disable jsdoc/require-jsdoc */

const alpha = 'alpha'
/**
 * ❌ beforeBlockComment:true of `lines-around-comment`
 *
 * @type {string}
 */
const beta = 'beta'

const gammaArray = [
  /* ✅ allowArrayStart:true of `lines-around-comment` */
  'first',
  'second',
  'third',
]

function deltaFunc () {
  /* ✅ allowBlockStart:true of `lines-around-comment` */
  return 'I am gamma function'
}

class Epsilon {
  /* ✅ allowClassStart:true of `lines-around-comment` */
  constructor () {
    this.first = 'first'
  }
}

const zetaObject = {
  /* ✅ allowObjectStart:true of `lines-around-comment` */
  first: 'first',
}

export default {
  alpha,
  beta,
  gammaArray,
  deltaFunc,
  Epsilon,
  zetaObject,
}
