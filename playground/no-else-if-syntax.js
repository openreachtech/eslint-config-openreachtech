// @ts-check
'use strict'

/** prohibit else if syntax
 *  no-restricted-syntax:
 *    - error
 *    - selector: 'IfStatement>.alternate[type="IfStatement"]'
 *      message: '"else-if" syntax is prohibited.'
 *  npx eslint playground\no-else-if-syntax.js --no-ignore
 *  message: '"else-if" syntax is prohibited.'
 */

// incorrect code
getGrade(90)

function getGrade (a) {
  if (a < 60) {
    return 'A'
  } else if (a > 85) {
    return 'B'
  } else {
    return 'C'
  }
}

// correct code
getGrade2(90)

function getGrade2 (a) {
  if (a < 60) {
    return 'A'
  } else {
    return 'B'
  }
}

getGrade3(90)

function getGrade3 (a) {
  if (a > 85 ) {
    return 'A'
  }
  if (a < 60 ) {
    return 'B'
  }

  return 'C'
}
