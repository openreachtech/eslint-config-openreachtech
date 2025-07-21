/* eslint-disable no-implicit-globals */

// @ts-expect-error
Object = class ExtendedObjet extends Object { // ❌ `no-global-assign`
  // noop
}

// @ts-expect-error
window = 1 // ❌ `no-global-assign`
