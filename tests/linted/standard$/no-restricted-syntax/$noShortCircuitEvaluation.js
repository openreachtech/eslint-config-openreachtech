const base = {}

const alpha = base.value || null // ❌️ { selector: 'LogicalExpression[operator=||] > Literal' } of `no-restricted-syntax`

const beta = base.status || true // ❌️ { selector: 'LogicalExpression[operator=||] > Literal' } of `no-restricted-syntax`

const gamma = base.key || 'fallback' // ❌️ { selector: 'LogicalExpression[operator=||] > Literal' } of `no-restricted-syntax`

export default {
  alpha,
  beta,
  gamma,
}
