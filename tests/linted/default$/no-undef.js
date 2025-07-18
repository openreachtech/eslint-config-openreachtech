// @ts-expect-error
const alpha = unknownFunc() // ❌ `no-undef`

// @ts-expect-error
const beta = unknown + 1 // ❌ `no-undef`

// @ts-expect-error
if (typeof UndefinedIdentifier === 'undefined') { // ✅ typeof:false of `no-undef`
  // noop
}

export default {
  alpha,
  beta,
}
