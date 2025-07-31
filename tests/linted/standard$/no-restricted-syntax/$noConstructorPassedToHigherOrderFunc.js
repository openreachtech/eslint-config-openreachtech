/* eslint-disable jsdoc/require-jsdoc */

const callback = () => {}

function everyFunc (array) {
  return array.every(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=every][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function someFunc (array) {
  return array.some(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=some][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function filterFunc (array) {
  return array.filter(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=filter][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function findFunc (array) {
  return array.find(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=find][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function findIndexFunc (array) {
  return array.findIndex(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=findIndex][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function findLastFunc (array) {
  return array.findLast(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=findLast][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function findLastIndexFunc (array) {
  return array.findLastIndex(Boolean) // ❌ { selector: 'CallExpression[callee.property.name=findLastIndex][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function flatMapFunc (array) {
  return array.flatMap(Array) // ❌ { selector: 'CallExpression[callee.property.name=flatMap][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function forEachFunc (array) {
  array.forEach(callback) // ❌ { selector: 'CallExpression[callee.property.name=forEach][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function mapFunc (array) {
  return array.map(Number) // ❌ { selector: 'CallExpression[callee.property.name=map][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function reduceFunc (array) {
  return array.reduce(callback) // ❌ { selector: 'CallExpression[callee.property.name=reduce][arguments.0.type=Identifier]' } of `no-restricted-syntax`
}

function reduceRightFunc (array) {
  return array.reduceRight(callback) // ❌ { selector: 'CallExpression[callee.property.name=reduceRight][arguments.0.type=Identifier]' } of `no-restricted-syntax`  )
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
