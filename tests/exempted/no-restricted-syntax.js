/* eslint-disable max-classes-per-file */

const alpha = new FormData() // ✅️ ignore Identifier[name=/.+(?<!Form)Data$/] of `no-restricted-syntax` against FormData

// -----------------------------------------------------------------------------

// For no short-circuit evaluation with || operator
/** @type {number} */
const shortCircuitBaseValue = 999

const betaValue = shortCircuitBaseValue === 0 || alpha.values // ✅️ { selector: 'LogicalExpression[operator=||] > Literal' } of `no-restricted-syntax`

// -----------------------------------------------------------------------------

const RequestInfo = class {} // ✅️ ignore Identifier[name=/.+(?<!Request)Info$/] of `no-restricted-syntax` against RequestInfo

localStorage.getItem('key') // ✅️ ignore Identifier[name=/.+(?<!get|set|remove|named)Item$/] of `no-restricted-syntax` against getItem
localStorage.setItem('key', 'value') // ✅️ ignore Identifier[name=/.+(?<!get|set|remove|named)Item$/] of `no-restricted-syntax` against setItem
localStorage.removeItem('key') // ✅️ ignore Identifier[name=/.+(?<!get|set|remove|named)Item$/] of `no-restricted-syntax` against removeItem
document.createElement('form')
  .elements
  .namedItem('name') // ✅️ ignore Identifier[name=/.+(?<!get|set|remove|named)Item$/] of `no-restricted-syntax` against namedItem

document.createElement('div')
  .classList // ✅️ ignore Identifier[name=/.+(?<!class|RadioNode)List$/] of `no-restricted-syntax` against classList
  .add('unit-layout')
const isRadioNodeList = value => value instanceof RadioNodeList // ✅️ ignore Identifier[name=/.+(?<!class|RadioNode)List$/] of `no-restricted-syntax` against RadioNodeList

/*
 * For members of DataTransfer
 */
const transfer = new DataTransfer()

transfer.getData() // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear|inline)Data$/]' } of `no-restricted-syntax`
transfer.setData('text/plain', 'value') // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear|inline)Data$/]' } of `no-restricted-syntax`
transfer.clearData() // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear|inline)Data$/]' } of `no-restricted-syntax`

const gammaPayload = {
  inlineData: { // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear|inline)Data$/]' } of `no-restricted-syntax`
    mimeType: 'text/plain',
    data: 'Hello World',
  },
}

/*
 * For FFUtils
 */
const FFUtils = null // ✅️ ignore Identifier[name=/.+(?<!FF)Utils?$/] of `no-restricted-syntax` against FFUtils

// -----------------------------------------------------------------------------

// For no constructor with calling function
class DeltaClass {
  /**
   * Constructor of this class.
   */
  constructor () {
    this.first = new Map() // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`
    this.second = new Set() // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`
    this.third = new WeakMap() // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`
    this.fourth = new WeakSet() // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`

    this.fifth = new Date() // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`
    this.sixth = new Error('message') // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`
  }
}

class EpsilonClass extends DeltaClass {
  /**
   * Constructor of this class.
   */
  constructor () {
    super() // ✅️ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`

    this.last = []
  }
}

// -----------------------------------------------------------------------------

/**
 * Zeta class. (not static class)
 */
class ZetaClass { // ✅️ { selector: 'xxx' } of `no-restricted-syntax`
  /**
   * Constructor of this class.
   *
   * @param {{
   *   value: number
   * }} params - Parameters for the constructor.
   */
  constructor ({
    value,
  }) {
    this.value = value
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof ZetaClass ? X : never} T, X
   * @param {{
   *   value: number
   * }} params - Parameters for the factory method.
   * @returns {InstanceType<T>} Instance of the class.
   * @this {T}
   */
  static create ({
    value,
  }) {
    return /** @type {InstanceType<T>} */ (
      new this({
        value,
      })
    )
  }
}

/**
 * Ita class.
 */
class ItaClass extends ZetaClass { // ✅️ { selector: 'xxx' } of `no-restricted-syntax`
  /**
   * Do first.
   */
  static doFirst () {
    // Do something
  }

  /**
   * Do second.
   */
  static doSecond () {
    // Do something else
  }
}

export default {
  alpha,
  betaValue,
  RequestInfo,
  isRadioNodeList,
  gammaPayload,
  FFUtils,
  DeltaClass,
  EpsilonClass,

  ZetaClass,
  ItaClass,
}
