'use strict'

// ❌ preventAtMiddleLines: true of jsdoc/no-multi-asterisks
/**
 * Create alpha object.
 ** There is multi asterisks.
 *
 * @param {number} first - Number value.
 * @param {string} second - String value.
 * @returns {{
 * first: number,
 * second: string,
 * }} - Alpha object.
 */
function alphaFunc (
  first,
  second
) {
  return {
    first,
    second,
  }
}

// ✅ exempted allowWhitespace: true of jsdoc/no-multi-asterisks
/**
 * Create beta object.
 * *OK* There is multi asterisks with white space.
 *
 * @param {number} third - Number value.
 * @returns {{
 * third: number,
 * }} - Beta object.
 */
function betaFunc (third) {
  return {
    third,
  }
}

/**
 * Create gamma object.
 *
 * @param {symbol} fourth - Symbol value.
 * @returns {{
 * fourth: symbol,
 * }} - Gamma object.
 **/ // ❌ preventAtEnd: true of jsdoc/no-multi-asterisks
function gammaFunc (fourth) {
  return {
    fourth,
  }
}

module.exports = {
  alphaFunc,
  betaFunc,
  gammaFunc,
}
