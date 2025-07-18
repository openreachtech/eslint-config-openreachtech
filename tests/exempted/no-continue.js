'use strict'

const array = []

/* eslint-disable-next-line no-restricted-syntax */
for (let index = 0; index < 10; index += 1) {
  if (index === 5) {
    continue // ✅ exempted `no-continue`
  }

  array.push(index)
}

export default array
