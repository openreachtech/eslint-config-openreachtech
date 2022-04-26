// @ts-check
'use strict'

/** indent
 *  indent: ["error", 2, { "CallExpression": {"arguments": 1}, MemberExpression: 1, ObjectExpression: 1}]
 *  npx eslint playground\indent.js --no-ignore
 *  message: 'Expected indentation of 4 spaces but found 2'
 */

const bar = null
const baz = null
const qux = null

test()
test2()
test3()
test4()
test5()
test6()
foo()
foo2()

// error code "error", "2"
function foo () {
  const a = 2

  return a * 10
}

// correct code "error", "2"
function foo2 () {
    const a = 2

    return a * 10
}

// error code "CallExpression": {"arguments": 1}
function test () {
  foo(bar,
      baz,
        qux
  )
}

// correct code "CallExpression": {"arguments": 1}
function test2 () {
  foo(bar,
    baz,
    qux
  )
}

// error code "MemberExpression": 1
function test3 () {
  foo
  .bar
  .baz()
}

// correct code "MemberExpression": 1
function test4 () {
  foo
    .bar
    .baz()
  const aardvark = null
  const bip = aardvark.badger
    .coyote

  return bip
}

// error code "ObjectExpression": 1
function test5 () {
  const foo = {
    bar: 1,
  baz: 2,
        qux: 3
  }

  return foo
}

// correct code "ObjectExpression": 1
function test6 () {
  const foo = {
    bar: 1,
    baz: 2,
    qux: 3
  }

  return foo
}
