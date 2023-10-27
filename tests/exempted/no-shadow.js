'use strict'

/* eslint-disable function-paren-newline */

/**
 * It function.
 *
 * @param {Array<{
 *   table: Array<{
 *     column: string
 *   }>
 * }>} array - Nested array.
 * @returns {Array<*>} - Flat items.
 */
function itFunc (array) {
  return array.map(it => // ✅ allow: [it, length, name, status, target] of `no-shadow`
    it.table.map(it => // ✅ allow: [it, length, name, status, target] of `no-shadow`
      it.column
    )
  )
}

/**
 * Length function.
 *
 * @param {{
 *   first: string
 *   last: string
 * }} params - Name hash.
 * @returns {string} - Full value.
 */
const lengthFunc = function ({
  length, // ✅ allow: [it, length, name, status, target] of `no-shadow`
}) {
  return `length: ${length}`
}

/**
 * Name function.
 *
 * @param {{
 *   name: string
 * }} params - Name hash.
 * @returns {string} - Full value.
 */
const nameFunc = function ({
  name, // ✅ allow: [it, length, name, status, target] of `no-shadow`
}) {
  return `name: ${name}`
}

/**
 * Status function.
 *
 * @param {{
 *   status: number
 * }} params - Name hash.
 * @returns {string} - Full value.
 */
const statusFunc = function ({
  status, // ✅ allow: [it, length, name, status, target] of `no-shadow`
}) {
  return `status: ${status}`
}

/**
 * Target function.
 *
 * @param {{
 *   target: object
 * }} params - Name hash.
 * @returns {string} - Full value.
 */
const targetFunc = function ({
  target, // ✅ allow: [it, length, name, status, target] of `no-shadow`
}) {
  return `target: ${target}`
}

module.exports = {
  itFunc,
  lengthFunc,
  nameFunc,
  statusFunc,
  targetFunc,
}
