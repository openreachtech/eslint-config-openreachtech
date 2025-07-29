/* eslint-disable jsdoc/require-jsdoc */

function noForEachContainsAssignmentFunc (array) {
  const result = []

  array.forEach(it => { // ✅️ { selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=forEach]:has(BlockStatement AssignmentExpression)' } of `no-restricted-syntax`
    result.push(it)
  })

  array.forEach(it => { // ❌️ { selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=forEach]:has(BlockStatement AssignmentExpression)' } of `no-restricted-syntax`
    const keys = Object.keys(it)

    result.push(...keys)
  })

  return result
}

export default {
  noForEachContainsAssignmentFunc,
}
