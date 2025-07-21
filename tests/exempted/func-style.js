/* eslint-disable jsdoc/require-jsdoc */

const expressionFunc = function () { // ✅ exempted `func-style`
  return 'I am expression function'
}

const arrowFunc = () => 'I am arrow function' // ✅ exempted `func-style`

function declarationFunc () { // ✅ exempted `func-style`
  return 'I am declaration function'
}

export default {
  expressionFunc,
  arrowFunc,
  declarationFunc,
}
