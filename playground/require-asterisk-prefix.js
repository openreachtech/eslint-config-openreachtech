/**
 @param {Number} foo
 */
 function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc line to have the prefix.


/**
 @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "any",{"tags":{"always":["param"]}}]
// Message: Expected JSDoc line to have the prefix.


/**
 * Desc

 */
function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc line to have the prefix.


/**
 *
 Desc
 */
function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc line to have the prefix.


/**
 * Desc
 *
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "never"]
// Message: Expected JSDoc line to have no prefix.


/**
 @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "always",{"tags":{"any":["someOtherTag"]}}]
// Message: Expected JSDoc line to have the prefix.


/**
 * @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "never",{"tags":{"always":["someOtherTag"]}}]
// Message: Expected JSDoc line to have no prefix.


/**
 * @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "always",{"tags":{"never":["param"]}}]
// Message: Expected JSDoc line to have no prefix.


/**
 @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "never",{"tags":{"always":["param"]}}]
// Message: Expected JSDoc line to have the prefix.

/**
  @param {Number} foo
 */function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc line to have the prefix.


/**
 * @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "never"]
// Message: Expected JSDoc line to have no prefix.

/**
  *@param {Number} foo
 */function quux (foo) {
  // with spaces
}
// "jsdoc/require-asterisk-prefix": ["error"|"warn", "never"]
// Message: Expected JSDoc line to have no prefix.