/* eslint-disable no-restricted-properties */

const array = [1, 2, 3]

const arrayFrom = Array.from(array, it => {}) // ❌ `array-callback-return`
const arrayEvery = array.every(it => {}) // ❌ `array-callback-return`
const arrayFilter = array.filter(it => {}) // ❌ `array-callback-return`
const arrayFind = array.find(it => {}) // ❌ `array-callback-return`
const arrayFindIndex = array.findIndex(it => {}) // ❌ `array-callback-return`
const arrayFindLast = array.findLast(it => {}) // ❌ `array-callback-return`
const arrayFindLastIndex = array.findLastIndex(it => {}) // ❌ `array-callback-return`
const arrayFlatMap = array.flatMap(it => {}) // ❌ `array-callback-return`

// eslint-disable-next-line no-restricted-syntax
const arrayForEach = array.forEach(it => {
  const over = it > 2

  return over // ❌ checkForEach:true of `array-callback-return`
})
const arrayMap = array.map(it => {}) // ❌ `array-callback-return`
const arrayReduce = array.reduce(/** @type {() => number} */ (
  (last, it) => {}// ❌ `array-callback-return`
))
const arrayReduceRight = array.reduceRight(/** @type {() => number} */ (
  (last, it) => {} // ❌ `array-callback-return`
))
const arraySome = array.some(it => {}) // ❌ `array-callback-return`
const arraySort = array.sort(/** @type {() => number} */ ((alpha, beta) => {})) // ❌ `array-callback-return`
const arrayToSort = array.toSorted(/** @type {() => number} */ ((alpha, beta) => {})) // ❌ `array-callback-return`

export default {
  arrayFrom,
  arrayEvery,
  arrayFilter,
  arrayFind,
  arrayFindIndex,
  arrayFindLast,
  arrayFindLastIndex,
  arrayFlatMap,
  arrayForEach,
  arrayMap,
  arrayReduce,
  arrayReduceRight,
  arraySome,
  arraySort,
  arrayToSort,
}
