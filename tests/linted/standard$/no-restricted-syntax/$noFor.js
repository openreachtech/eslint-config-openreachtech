/* eslint-disable jsdoc/require-jsdoc */

function noForFunc () {
  // eslint-disable-next-line no-restricted-syntax
  let total = 0

  for ( // ❌ { selector: 'ForStatement' } of `no-restricted-syntax`
    let index = 0; // eslint-disable-line no-restricted-syntax
    index < 10;
    index += 1
  ) {
    total += index
  }

  return total
}

export default {
  noForFunc,
}
