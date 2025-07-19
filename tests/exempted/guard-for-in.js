/* eslint-disable jsdoc/require-jsdoc */

function doSomething (key) {
  // noop
}

const array = [
  1,
  3,
  5,
]

/* eslint-disable-next-line no-restricted-syntax */
for (const key in array) {
  doSomething(key) // ✅ exempted `guard-for-in`
}
