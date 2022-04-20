/**  foo */
function quux () {

}
// Message: There must be no indentation.

/**
* foo
*
* @param bar
*  baz
*/
function quux () {

}
// Message: There must be no indentation.

/**
* Foo
*   bar
*/
class Moo {}
// Message: There must be no indentation.

/**
* foo
*
* @example
* anArray.filter((a) => {
*   return a.b;
* });
*/
function quux () {

}
// Options: [{"excludeTags":[]}]
// Message: There must be no indentation.

/**
* foo
*
* @example
*   aaaa
* @returns
*   eeee
*/
function quux () {

}
// Message: There must be no indentation.

/**
* foo
* ```html
* <section>
*   <title>test</title>
* </section>
* ```
* @returns
*   eeee
*/
function quux () {

}
// Message: There must be no indentation.

/**
* foo
* ```   aaaa```
* @returns
*   eeee
*/
function quux () {

}
// Message: There must be no indentation.

/**
* @example <caption>
* Here is a long
*   indented summary of this
* example
* </caption>
* ```js
* function hi () {
*   alert('Hello');
* }
* ```
*/
// Options: [{"excludeTags":[]}]
// Message: There must be no indentation.

/**
* @example <caption>
* Here is a long
* summary of this
* example
* </caption>
* // Code is not wrapped into fenced code block
* function hi () {
*   alert('Hello');
* }
*/
// Options: [{"excludeTags":[]}]
// Message: There must be no indentation.