/* eslint-disable @stylistic/arrow-parens */
/* eslint-disable no-constant-condition */

const alphaFunc = first => 1 // ❌ `no-confusing-arrow`
  ? first * 2
  : first - 3

const betaFunc = (first) => 1 // ❌ `no-confusing-arrow`
  ? first * 2
  : first - 3

const gammaFunc = first => (1 // ✅ allowParens:true of `no-confusing-arrow`
  ? 2
  : 3
)

const deltaFunc = (first) => (1 // ✅ allowParens:true of `no-confusing-arrow`
  ? 2
  : 3
)

const epsilonFunc = () => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

const zeroFunc = (first, second) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

const defaultValue = 3
const etaFunc = (first = defaultValue) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

const thetaFunc = ({ first }) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

const iotaFunc = ([first]) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

const kappaFunc = (...first) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zeroFunc,
  etaFunc,
  thetaFunc,
  iotaFunc,
  kappaFunc,
}
