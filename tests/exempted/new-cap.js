'use strict'

/**
 * DATE constructor.
 *
 * @class
 */
function DATE () {
  // noop
}

const date = DATE() // ✅ `new-cap`

/**
 * STRING constructor.
 *
 * @class
 */
function STRING () {
  // noop
}

const string = STRING() // ✅ `new-cap`

/**
 * TINYINT constructor.
 *
 * @class
 */
function TINYINT () {
  // noop
}

const tinyint = TINYINT() // ✅ `new-cap`

module.exports = {
  date,
  string,
  tinyint,
}
