/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-unused-private-class-members */

function extraFunc () {
  const data = {} // ✅ ['data'] of `id-denylist`
  const list = [] // ❌ ['list'] of `id-denylist`
  const [item] = [1, 3, 5] // ❌ ['item'] of `id-denylist`

  return [
    data, // ✅ ['data'] of `id-denylist`
    list, // ❌ ['list'] of `id-denylist`
    item, // ❌ ['item'] of `id-denylist`
  ]
}

function callback () { // ✅ ['callback'] of `id-denylist`
  // noop
}

const alpha = {}

// eslint-disable-next-line func-names
alpha.data = function () { // ✅ ['data'] of `id-denylist`
  // noop
}

const beta = {
  list: [], // ❌ ['list'] of `id-denylist`
}

class Gamma {
  value = 0

  list = [] // ❌ ['list'] of `id-denylist`

  item () { // ❌ ['item'] of `id-denylist`
    return this.value
  }

  #list = [] // ❌ ['list'] of `id-denylist`

  #item () { // ❌ ['item'] of `id-denylist`
    return this.value
  }
}

const abbreviationHash = {
  acc: null, // ❌ ['acc'] of `id-denylist`
  arr: [], // ❌ ['arr'] of `id-denylist`
  attr: null, // ❌️ ['attr'] of `id-denylist`
  attrs: [], // ❌ ['attrs'] of `id-denylist`
  btn: null, // ❌ ['btn'] of `id-denylist`
  cate: null, // ❌ ['cate'] of `id-denylist`
  cfg: {}, // ❌ ['cfg'] of `id-denylist`
  cnt: 0, // ❌ ['cnt'] of `id-denylist`
  cond: false, // ❌ ['cond'] of `id-denylist`
  ctx: null, // ❌ ['ctx'] of `id-denylist`
  err: null, // ❌ ['err'] of `id-denylist`
  el: null, // ❌ ['el'] of `id-denylist`
  ev: null, // ❌ ['ev'] of `id-denylist`
  evt: null, // ❌ ['evt'] of `id-denylist`
  ex: null, // ❌ ['ex'] of `id-denylist`
  ext: null, // ❌ ['ext'] of `id-denylist`
  fmt: 'format', // ❌ ['fmt'] of `id-denylist`
  idx: 0, // ❌ ['idx'] of `id-denylist`
  img: null, // ❌ ['img'] of `id-denylist`
  info: null, // ❌ ['info'] of `id-denylist`
  len: 0, // ❌ ['len'] of `id-denylist`
  msg: '', // ❌ ['msg'] of `id-denylist`
  no: null, // ❌ ['no'] of `id-denylist`
  num: 0, // ❌ ['num'] of `id-denylist`
  obj: {}, // ❌ ['obj'] of `id-denylist`
  opt: null, // ❌ ['opt'] of `id-denylist`
  pos: null, // ❌ ['pos'] of `id-denylist`
  prod: 'product', // ❌ ['prod'] of `id-denylist`
  ret: null, // ❌ ['ret'] of `id-denylist`
  str: '', // ❌ ['str'] of `id-denylist`
  usr: null, // ❌ ['usr'] of `id-denylist`
  temp: null, // ❌ ['temp'] of `id-denylist`
  tmp: null, // ❌ ['tmp'] of `id-denylist`
  tx: null, // ❌ ['tx'] of `id-denylist`
  txt: '', // ❌ ['txt'] of `id-denylist`
  val: null, // ❌ ['val'] of `id-denylist`
}

export default {
  extraFunc,
  callback, // ✅ ['callback'] of `id-denylist`
  alpha,
  beta,
  Gamma,
  abbreviationHash,
}
