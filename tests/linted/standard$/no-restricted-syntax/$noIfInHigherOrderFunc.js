/* eslint-disable jsdoc/require-jsdoc */

function everyFunc (array) {
  return array.every(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=every] IfStatement' } of `no-restricted-syntax`
      return false
    }

    return it % 2 === 0
  })
}

function someFunc (array) {
  return array.some(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=some] IfStatement' } of `no-restricted-syntax`
      return false
    }

    return it % 2 === 0
  })
}

function filterFunc (array) {
  return array.filter(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=filter] IfStatement' } of `no-restricted-syntax`
      return true
    }

    return it % 2 === 0
  })
}

function findFunc (array) {
  return array.find(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=find] IfStatement' } of `no-restricted-syntax`
      return true
    }

    return it % 2 === 0
  })
}

function findIndexFunc (array) {
  return array.findIndex(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=findIndex] IfStatement' } of `no-restricted-syntax`
      return true
    }

    return it % 2 === 0
  })
}

function findLastFunc (array) {
  return array.findLast(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=findLast] IfStatement' } of `no-restricted-syntax`
      return true
    }

    return it % 2 === 0
  })
}

function findLastIndexFunc (array) {
  return array.findLastIndex(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=findLastIndex] IfStatement' } of `no-restricted-syntax`
      return true
    }

    return it % 2 === 0
  })
}

function flatMapFunc (array) {
  return array.flatMap(it => {
    if (Array.isArray(it)) { // ❌ { selector: 'CallExpression[callee.property.name=flatMap] IfStatement' } of `no-restricted-syntax`
      return it
    }

    return [it, it]
  })
}

function forEachFunc (array) {
  const result = []

  array.forEach(it => { // eslint-disable-line no-restricted-syntax
    if (it % 2 === 0) { // ❌ { selector: 'CallExpression[callee.property.name=forEach] IfStatement' } of `no-restricted-syntax`
      result.push(it)
    }
  })

  return result
}

function mapFunc (array) {
  return array.map(it => {
    if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=map] IfStatement' } of `no-restricted-syntax`
      return 0
    }

    return it
  })
}

function reduceFunc (array) {
  return array.reduce(
    (total, it) => {
      if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=reduce] IfStatement' } of `no-restricted-syntax`
        return total
      }

      return total + it
    },
    0
  )
}

function reduceRightFunc (array) {
  return array.reduceRight(
    (total, it) => {
      if (it < 100) { // ❌ { selector: 'CallExpression[callee.property.name=reduceRight] IfStatement' } of `no-restricted-syntax`
        return total
      }

      return total + it
    },
    0
  )
}

export default {
  everyFunc,
  someFunc,

  filterFunc,
  findFunc,
  forEachFunc,
  findIndexFunc,
  findLastFunc,
  findLastIndexFunc,
  flatMapFunc,
  mapFunc,
  reduceFunc,
  reduceRightFunc,
}
