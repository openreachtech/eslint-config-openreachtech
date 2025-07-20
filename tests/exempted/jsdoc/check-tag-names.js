/* eslint-disable max-classes-per-file */

/**
 * Base class for testing JSDoc indentation.
 *
 * @template T - Type parameters for the base class. // ✅️ { excludeTags: ['template'] } of `jsdoc/check-indentation`
 */
class BaseClass {
  // noop
}

/**
 * Alpha class that extends BaseClass.
 * ✅️ exempted `jsdoc/check-tag-names`
 *
 * @extends {BaseClass<string>}
 */
class AlphaClass extends BaseClass {
  // noop
}

/**
 * Beta function.
 *
 * @note Beta function. // ✅️ exempted `jsdoc/check-tag-names`
 */
function betaFunction () {
  // noop
}

export default {
  AlphaClass,
  betaFunction,
}
