'use strict'

/**
 * New cap.
 *
 * @class
 */
function NewCap () {
  this.alpha = 1
  this.beta = 2
}

const newCap = NewCap() // ❌ `new-cap`

module.exports = {
  newCap,
}
