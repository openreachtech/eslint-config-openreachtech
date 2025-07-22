const coreRuleOptionHash = {
  'id-denylist': {
    spreadOptions: [
      'item',
      'list',
      // want to add 'callback' and 'data'

      'acc',
      'arr',
      'attr',
      'btn',
      'cate',
      'cfg',
      'cnt',
      'col',
      'cond',
      'ctx',
      'err',
      'el',
      'ev',
      'evt',
      'ex',
      'ext',
      'fmt',
      'idx',
      'img',
      'info',
      'len',
      'msg',
      'no',
      'num',
      'obj',
      'opt',
      'pos',
      'prod',
      'ret',
      'str',
      'usr',
      'temp',
      'tmp',
      'tx',
      'txt',
      'val',
    ],
  },
  'id-length': {
    exceptions: [
      '_',
      '$',
    ],
  },
}

export default coreRuleOptionHash
