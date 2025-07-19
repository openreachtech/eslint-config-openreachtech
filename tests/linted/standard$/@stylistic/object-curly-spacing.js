const objectNoSpaceAfterOpened = {alpha: 1 } // ❌ object-curly-spacing
const objectNoSpaceBeforeClosed = { beta: 1} // ❌ object-curly-spacing
const objectNoSpaceBoth = {gamma: 1} // ❌ object-curly-spacing

const objectNoSpaceAfterOpenedInArray = [{alpha: 1 }] // ❌ object-curly-spacing
const objectNoSpaceBeforeClosedInArray = [{ beta: 1}] // ❌ object-curly-spacing
const objectNoSpaceBothInArray = [{gamma: 1}] // ❌ object-curly-spacing

const objectNoSpaceAfterOpenedInObject = { root: {alpha: 1 } } // ❌ object-curly-spacing
const objectNoSpaceBeforeClosedInObject = { root: { beta: 1} } // ❌ object-curly-spacing
const objectNoSpaceBothInObject = { root: {gamma: 1} } // ❌ object-curly-spacing

const objectNoSpace = { alpha: 1 } // ✅ object-curly-spacing
const objectNoSpaceInArray = [{ beta: 2 }] // ✅ object-curly-spacing
const objectNoSpaceInObject = { root: { gamma: 3 } } // ✅ object-curly-spacing

export default {
  objectNoSpaceAfterOpened,
  objectNoSpaceBeforeClosed,
  objectNoSpaceBoth,
  objectNoSpaceAfterOpenedInArray,
  objectNoSpaceBeforeClosedInArray,
  objectNoSpaceBothInArray,
  objectNoSpaceAfterOpenedInObject,
  objectNoSpaceBeforeClosedInObject,
  objectNoSpaceBothInObject,

  objectNoSpace,
  objectNoSpaceInArray,
  objectNoSpaceInObject,
}
