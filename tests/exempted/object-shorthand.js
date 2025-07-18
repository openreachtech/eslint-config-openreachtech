////////////////////////////////////////////////////////////////////////////////
// avoidExplicitReturnArrows: false

const object = {
  firstFunc: (first, second) => first + second, // ✅ avoidExplicitReturnArrows:false of `object-shorthand`
  secondFunc: first => first * 2, // ✅ avoidExplicitReturnArrows:false of `object-shorthand`
}

export default {
  object,
}
