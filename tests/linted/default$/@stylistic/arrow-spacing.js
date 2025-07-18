'use strict'

const alphaFunc = ()=> {} // ❌ before:true of `arrow-spacing`
const betaFunc = () =>{} // ❌ after:true of `arrow-spacing`

const gammaFunc = (first, second)=> { // ❌ before:true of `arrow-spacing`
  const third = first + second

  return third
}
const deltaFunc = (first, second) =>{ // ❌ after:true of `arrow-spacing`
  const third = first + second

  return third
}

const epsilonFunc = first=> first // ❌ before:true of `arrow-spacing`
const zetaFunc = first =>first // ❌ after:true of `arrow-spacing`

const etaFunc = ()=> { // ❌ before:true of `arrow-spacing`
  '\n'
}
const thetaFunc = () =>{ // ❌ after:true of `arrow-spacing`
  '\n'
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zetaFunc,
  etaFunc,
  thetaFunc,
}
