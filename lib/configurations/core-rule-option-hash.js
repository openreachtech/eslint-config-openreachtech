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
  'new-cap': {
    capIsNewExceptions: [
      'ABSTRACT',
      'ARRAY',
      'BIGINT',
      'BLOB',
      'BOOLEAN',
      'CHAR',
      'CIDR',
      'CITEXT',
      'DATE',
      'DATEONLY',
      'DECIMAL',
      'DOUBLE',
      'ENUM',
      'FLOAT',
      'GEOGRAPHY',
      'GEOMETRY',
      'HSTORE',
      'INET',
      'INTEGER',
      'JSON',
      'JSONB',
      'MACADDR',
      'MEDIUMINT',
      'NOW',
      'NUMBER',
      'NUMERIC',
      'RANGE',
      'REAL',
      'SMALLINT',
      'STRING',
      'TEXT',
      'TIME',
      'TINYINT',
      'TSVECTOR',
      'UUID',
      'VIRTUAL',
    ],
  },
  'no-restricted-properties': {
    /**
     * @type {Array<{
     *   object?: string
     *   property?: string
     *   message: string
     * }>}
     */
    spreadOptions: [
      {
        object: 'expect',
        property: 'anything',
        message: 'Never use `expect.anything()`',
      },
      {
        object: 'Object',
        property: 'assign',
        message: 'Never use `Object.assign()`',
      },
      {
        // object: 'Array',
        property: 'reverse',
        message: 'Use `Array#toReversed()` instead of `Array#reverse()`',
      },
      {
        // object: 'Array',
        property: 'sort',
        message: 'Use `Array#toSorted()` instead of `Array#sort()`',
      },
    ],
  },
}

export default coreRuleOptionHash
