'use strict'

const alphaFunc = () => { // ❌ as-needed of `arrow-body-style`
  return 0
}

const betaFunc = () => { // ❌ as-needed & requireReturnForObjectLiteral:false of `arrow-body-style`
  return {
    first: '1st',
    second: '2nd',
    third: '3rd',
  }
}

module.exports = {
  alphaFunc,
  betaFunc,
}
