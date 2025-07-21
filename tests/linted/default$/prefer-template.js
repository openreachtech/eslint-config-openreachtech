/* eslint-disable jsdoc/require-jsdoc */

const timeLog = 'Time: ' + (12 * 60 * 60 * 1000) // ❌ prefer-template

function helloLog (name) {
  return 'Hello, ' + name + '!' // ❌ prefer-template
}

export default {
  helloLog,
  timeLog,
}
