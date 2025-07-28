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

export default {
  alpha,
  betaValue,
  RequestInfo,
  isRadioNodeList,
  gammaPayload,
}
