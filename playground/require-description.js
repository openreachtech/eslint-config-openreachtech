/**
*
*/
function quux () {

}
// Options: [{"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
*
*/
function quux () {

}
// Options: [{"descriptionStyle":"any"}]
// Message: Missing JSDoc block description or @description declaration.

/**
*
*/
function quux () {

}
// Options: [{"descriptionStyle":"body"}]
// Message: Missing JSDoc block description.

/**
* @desc Not a blank description
*/
function quux () {

}
// Options: [{"descriptionStyle":"body"}]
// Message: Remove the @desc tag to leave a plain block description or add additional description text above the @desc line.

/**
* @description Not a blank description
*/
function quux () {

}
// Options: [{"descriptionStyle":"body"}]
// Message: Remove the @description tag to leave a plain block description or add additional description text above the @description line.

/**
*
*/
class quux2 {

}
// Options: [{"contexts":["ClassDeclaration"],"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
*
*/
// Options: [{"contexts":["any"],"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
*
*/
class quux3 {

}
// Options: [{"contexts":["ClassDeclaration"],"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
*
*/
class quux4 {

}
// Options: [{"contexts":["ClassDeclaration"],"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
* @description
*/
function quux () {

}
// Options: [{"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description description.


/**
*
*/
var quux = class {

};
// Options: [{"contexts":["ClassExpression"],"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
*
*/
var quux = {

};
// Options: [{"contexts":["ObjectExpression"],"descriptionStyle":"tag"}]
// Message: Missing JSDoc @description declaration.

/**
* @someDesc
*/
function quux () {

}
// Settings: {"jsdoc":{"tagNamePreference":{"description":{"message":"Please avoid `{{tagName}}`; use `{{replacement}}` instead","replacement":"someDesc"}}}}
// Options: [{"descriptionStyle":"tag"}]
// Message: Missing JSDoc @someDesc description.

/**
* @description
*/
function quux () {

}
// Settings: {"jsdoc":{"tagNamePreference":{"description":false}}}
// Options: [{"descriptionStyle":"tag"}]
// Message: Unexpected tag `@description`

/**
* @description
*/
function quux () {

}
// Settings: {"jsdoc":{"tagNamePreference":{"description":false}}}
// Options: [{"descriptionStyle":"any"}]
// Message: Missing JSDoc block description or @description declaration.

/**
*
*/
function quux () {
}
// Options: [{"exemptedBy":["notPresent"]}]
// Message: Missing JSDoc block description.

class TestClass {
  /**
*
*/
  constructor() { }
}
// Message: Missing JSDoc block description.

class TestClass2 {
  /**
*
*/
  constructor() { }
}
// Options: [{"checkConstructors":true}]
// Message: Missing JSDoc block description.

class TestClass3 {
  /**
*
*/
  get Test() { }
}
// Message: Missing JSDoc block description.

class TestClass4 {
  /**
*
*/
  get Test() { }
}
// Options: [{"checkGetters":true}]
// Message: Missing JSDoc block description.

class TestClass5 {
  /**
*
*/
  set Test(value) { }
}
// Message: Missing JSDoc block description.

class TestClass6 {
  /**
*
*/
  set Test(value) { }
}
// Options: [{"checkSetters":true}]
// Message: Missing JSDoc block description.

/**
*
*/
class Foo {
    /**
*
*/
    constructor() {}

    /**
*
*/
    bar() {}
}
// Options: [{"checkConstructors":false,"contexts":["MethodDefinition"]}]
// Message: Missing JSDoc block description.