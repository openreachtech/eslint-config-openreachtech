// @ts-check
/**
 * openreachtech/empty-line-after-super
 * openreachtech/indent-in-infix-expression
 * openreachtech/newline-per-parameter
 * openreachtech/no-if-in-oneline
 * openreachtech/no-unexpected-multiline
 */

const condition = true

// openreachtech/empty-line-after-super
if (condition) {
  class Base {

  }

  class Sample extends Base {
    constructor () {
      super()
      this.property = null
    }
  }

  saveUnusedValue(Sample)
}

// openreachtech/indent-in-infix-expression
if (condition) {
  const conditions = [1, 3, 5]

  const value = conditions[0]
  || conditions[1]

  saveUnusedValue(value)
}

// openreachtech/newline-per-parameter
function sample (x, y, z) {
  return x + y + z
}

saveUnusedValue(sample)

// openreachtech/no-if-in-oneline
if (condition) { sample(1, 3, 5) }

// openreachtech/no-unexpected-multiline
if (condition) {
  const value = [1, 3, 5] // no semi-colon

  // bash like condition
  -1 == resultOfOperation() || die()

  saveUnusedValue(value)
}

// tools

function saveUnusedValue (param) {

}

function resultOfOperation () {
  return 999
}

function die () {
  throw Error()
}
