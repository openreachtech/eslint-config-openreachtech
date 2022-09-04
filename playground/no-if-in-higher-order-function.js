// @ts-check
'use strict'

const anArray = [1, 2, 3]
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
]

anArray.every(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.filter(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.find(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.findIndex(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.findLast((element) => {
  if (element > 2) {
    return 3
  } else {
    return 1
  }
})

anArray.findLastIndex((element) => {
  if (element > 2) {
    return 3
  } else {
    return 1
  }
})

anArray.flatMap(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.forEach(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

Array.from([1, 2, 3], element => {
  if (element > 2) {
    return 3
  } else {
    return 1
  }
})

inventory.group(({ type }) => {
  if (type == 'asparagus') {
    return true
  } else {
    return false
  }
})

const restock = { restock: true }
const sufficient = { restock: false }

inventory.groupToMap(({ quantity }) => {
  if (quantity < 6) {
    return restock
  } else {
    return sufficient
  }
})

anArray.map(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.reduce(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.reduceRight(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

anArray.some(it => {
  if (foo()) {
    return it + 1
  } else {
    return it + 2
  }
})

function foo () {
  return true
}
