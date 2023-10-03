'use strict'

// @ts-expect-error
Object = class ExtendedObjet extends Object { // ❌ `no-global-assign`
  // noop
}

// @ts-expect-error
// eslint-disable-next-line no-undefined
undefined = 1 // ❌ `no-global-assign`
