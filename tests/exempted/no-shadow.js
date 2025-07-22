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
  return array.map(it => // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
    it.table.map(it => // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
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
  length, // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
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
  name, // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
}) {
  return `name: ${name}`
}

/**
 * Parent function.
 *
 * @param {{
 *   parent: object
 * }} params - Name hash.
 * @returns {string} - Full value.
 */
const parentFunc = function ({
  parent, // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
}) {
  return `parent: ${parent}`
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
  status, // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
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
  target, // ✅ allow: [it, length, name, parent, status, target] of `no-shadow`
}) {
  return `target: ${target}`
}

export default {
  itFunc,
  lengthFunc,
  nameFunc,
  parentFunc,
  statusFunc,
  targetFunc,
}
