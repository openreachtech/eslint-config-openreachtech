'use strict'

class RequireJsdoc { // ✅ require.ClassDeclaration:true of `jsdoc/require-jsdoc`
  constructor () { // ❌ checkConstructors:true, require.exemptEmptyConstructors:false of `jsdoc/require-jsdoc`
    this.alpha = 1
    this.beta = null

    this.gamma = null
  }

  firstMethod () { // ❌ require.MethodDefinition:true of `jsdoc/require-jsdoc`
    return this.alpha
  }

  get accessorBeta () { // ❌ require.checkGetters:true of `jsdoc/require-jsdoc`
    return this.beta
  }

  set accessorBeta (value) { // ❌ require.checkSetters:true of `jsdoc/require-jsdoc`
    this.beta = value
  }
}

function alphaFunc () { // ❌ require.FunctionDeclaration:true of `jsdoc/require-jsdoc`
  return 999
}

export default {
  RequireJsdoc,
  alphaFunc,
}
