/* eslint-disable max-classes-per-file */

/**
 * Base class for testing JSDoc indentation.
 *
 * @template {{
 *   first: number
 *   second: string
 * }} T - Type parameters for the base class. // ✅️ { excludeTags: ['template'] } of `jsdoc/check-indentation`
 */
class BaseClass {
  // noop
}

/**
 * Alpha class that extends BaseClass.
 * ✅️ { excludeTags: ['extends'] } of `jsdoc/check-indentation`
 *
 * @extends {BaseClass<{
 *   first: number
 *   second: string
 * }>}
 */
class AlphaClass extends BaseClass {
  // noop
}

/**
 * Beta function.
 *
 * @description first line of description,
 *   second line of description. // ✅️ { excludeTags: ['description'] } of `jsdoc/check-indentation`
 * @param {{
 *   first: number
 *   second: string
 * }} params - Parameters for the function. // ✅️ { excludeTags: ['param'] } of `jsdoc/check-indentation`
 * @returns {{
 *   first: number
 *   second: string
 * }} // ✅️ { excludeTags: ['returns'] } of `jsdoc/check-indentation`
 * @example How to use betaFunction(): // ✅️ { excludeTags: ['example'] } of `jsdoc/check-indentation`
 * ```javascript
 * betaFunction({
 *   first: 1,
 *   second: 'string',
 * })
 * ```
 */
function betaFunction ({
  first,
  second,
}) {
  return {
    first,
    second,
  }
}

/**
 * Gamma function.
 *
 * @yields {{
 *   first: number
 *   second: string
 * }} // ✅️ { excludeTags: ['yields'] } of `jsdoc/check-indentation`
 */
function * gammaFunction () {
  yield {
    first: 1,
    second: 'string',
  }
}

/**
 * @type {{
 *   first: number
 *   second: string
 * }} // ✅️ { excludeTags: ['type'] } of `jsdoc/check-indentation`
 * @note First line of note,
 *   second line of note. // ✅️ { excludeTags: ['note'] } of `jsdoc/check-indentation`
 */
const deltaObject = {
  first: 1,
  second: 'string',
}

export default {
  AlphaClass,
  betaFunction,
  gammaFunction,
  deltaObject,
}

/**
 * @typedef {{
 *   first: number
 *   second: string
 * }} OmegaType // ✅️ { excludeTags: ['typedef'] } of `jsdoc/check-indentation`
 */
