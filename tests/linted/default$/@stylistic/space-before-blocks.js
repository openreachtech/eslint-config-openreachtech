/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable @stylistic/keyword-spacing */
/* eslint-disable no-restricted-syntax */

////////////////////////////////////////////////////////////////////////////////
// functions: always

function alphaFunc (){ // ❌ functions:always of `space-before-blocks`
  // noop
}

////////////////////////////////////////////////////////////////////////////////
// keywords: always

const extra = true

function betaFunc () {
  // noop
}

if (extra){ // ❌ keywords:always of `space-before-blocks`
  betaFunc()
}

for (let step = 0; step < 10; step += 1){ // ❌ keywords:always of `space-before-blocks`
  betaFunc()
}

{
  let index = 0
  while (index < 10){ // ❌ keywords:always of `space-before-blocks`
    betaFunc()

    index += 1
  }

  do{ // ✅ keywords:always of `space-before-blocks`
    betaFunc()

    index += 1
  } while (index < 10)
}

try{ // ✅ keywords:always of `space-before-blocks`
  betaFunc()
} catch (error){ // ❌ keywords:always of `space-before-blocks`
  // noop
}

////////////////////////////////////////////////////////////////////////////////
// classes: always

class Gamma{ // ❌ classes:always of `space-before-blocks`
  // noop
}

export default {
  alphaFunc,
  betaFunc,
  Gamma,
}
