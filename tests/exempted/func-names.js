const alphaFunc = function () { // ✅ as-needed of `func-names`
  return 'I am alpha function'
}

const beta = {}

beta.prototype.betaFunc = function betaFunc () { // ✅ as-needed of `func-names`
  return 'I am beta function'
}

const gammaFunc = function gammaFunc () { // ✅ as-needed of `func-names`
  return 'I am named gamma function'
}

export default {
  alphaFunc,
  beta,
  gammaFunc,
}
