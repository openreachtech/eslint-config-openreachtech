const alpha = new FormData() // ✅️ ignore Identifier[name=/.+(?<!Form)Data$/] of `no-restricted-syntax` against FormData

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

transfer.getData() // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear)Data$/]' } of `no-restricted-syntax`
transfer.setData('text/plain', 'value') // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear)Data$/]' } of `no-restricted-syntax`
transfer.clearData() // ✅️ { selector: 'Identifier[name=/.+(?<!Form|get|set|clear)Data$/]' } of `no-restricted-syntax`

export default {
  alpha,
  RequestInfo,
  isRadioNodeList,
}
