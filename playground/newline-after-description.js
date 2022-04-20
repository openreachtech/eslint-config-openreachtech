/**
* Foo.
*
* Foo.
* @foo
*/
function quux () {

}
// Options: ["always"]
// Message: There must be a newline after the description of the JSDoc block.

/**
* Foo.
* @foo
*
* Foo.
*/
function quux () {

}
// Options: ["always"]
// Message: There must be a newline after the description of the JSDoc block.

/**
* Foo.
*
* Foo.
* @foo
*/
function quux () {

}
// Message: There must be a newline after the description of the JSDoc block.

/**
* Bar.
*
* Bar.
*
* @bar
*/
function quux () {

}
// Options: ["never"]
// Message: There must be no newline after the description of the JSDoc block.

/**
* Bar.
*
* @bar
*
* Bar.
*/
function quux () {

}
// Options: ["never"]
// Message: There must be no newline after the description of the JSDoc block.


         /**
* Bar.
*
* Bar.
*
* @bar
*/
         function quux () {

         }
// Options: ["never"]
// Message: There must be no newline after the description of the JSDoc block.

/**
* A.
*
* @typedef {object} A
* @prop {boolean} a A.
*/
// Options: ["never"]
// Message: There must be no newline after the description of the JSDoc block.

/**
* A.
* @typedef {object} A
* @prop {boolean} a A.
*/
// Options: ["always"]
// Message: There must be a newline after the description of the JSDoc block.


     /**
* Service for fetching symbols.
* @param {object} $http - Injected http helper.
* @param {object} $q - Injected Promise api helper.
* @param {object} $location - Injected window location object.
* @param {object} REPORT_DIALOG_CONSTANTS - Injected handle.
*/
// Message: There must be a newline after the description of the JSDoc block.