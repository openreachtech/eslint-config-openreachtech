const objectNoSpaceAfterOpened = {alpha: 1 } // ❌ object-curly-spacing
const objectNoSpaceBeforeClosed = { beta: 1} // ❌ object-curly-spacing
const objectNoSpaceBoth = {gamma: 1} // ❌ object-curly-spacing

const objectsNoSpaceAfterOpened = [{alpha: 1 }] // ❌ object-curly-spacing
const objectsNoSpaceBeforeClosed = [{ beta: 1}] // ❌ object-curly-spacing
const objectsNoSpaceBoth = [{gamma: 1}] // ❌ object-curly-spacing

const objectNoSpaceAfterOpenedInObject = { root: {alpha: 1 } } // ❌ object-curly-spacing
const objectNoSpaceBeforeClosedInObject = { root: { beta: 1} } // ❌ object-curly-spacing
const objectNoSpaceBothInObject = { root: {gamma: 1} } // ❌ object-curly-spacing

const objectNoSpace = { alpha: 1 } // ✅ object-curly-spacing
const objectsNoSpace = [{ beta: 2 }] // ✅ object-curly-spacing
const objectNoSpaceInObject = { root: { gamma: 3 } } // ✅ object-curly-spacing

export default {
  objectNoSpaceAfterOpened,
  objectNoSpaceBeforeClosed,
  objectNoSpaceBoth,
  objectsNoSpaceAfterOpened,
  objectsNoSpaceBeforeClosed,
  objectsNoSpaceBoth,
  objectNoSpaceAfterOpenedInObject,
  objectNoSpaceBeforeClosedInObject,
  objectNoSpaceBothInObject,

  objectNoSpace,
  objectsNoSpace,
  objectNoSpaceInObject,
}
