// @ts-expect-error
Object = class ExtendedObjet extends Object { // ❌ `no-global-assign`
  // noop
}

// @ts-expect-error
undefined = 1 // ❌ `no-global-assign`
