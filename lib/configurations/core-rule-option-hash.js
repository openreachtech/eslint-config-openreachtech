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
  'no-restricted-syntax': {
    /**
     * @type {Array<{
     *   selector: string
     *   message: string
     * }>}
     */
    spreadOptions: [
      {
        selector: 'CallExpression[callee.property.name=forEach]',
        message: 'Never use forEach method',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=/^(every|filter|find|findIndex|findLast|findLastIndex|flatMap|forEach|group|groupToMap|map|reduce|reduceRight|some)$/] IfStatement',
        message: 'Never use if in higher-order function',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name="reverse"]',
        message: 'Never use Array#reverse()',
      },
      {
        selector: 'DoWhileStatement',
        message: 'Never use do-while',
      },
      {
        selector: 'ForInStatement',
        message: 'Never use for-in',
      },
      {
        selector: 'ForOfStatement',
        message: 'Never use for-of',
      },
      {
        selector: 'ForStatement',
        message: 'Never use for',
      },
      {
        selector: 'Identifier[name=/.+(?<!Form|get|set|clear)Data$/]',
        message: 'Not allowed to use "Data" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+(?<!Request)Info$/]',
        message: 'Not allowed to use "Info" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+Helper$/]',
        message: 'Not allowed to use "Helper" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+(?<!get|set|remove|named)Item$/]',
        message: 'Not allowed to use "Item" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+(?<!class|RadioNode)List$/]',
        message: 'Not allowed to use "List" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+Manager$/]',
        message: 'Not allowed to use "Manager" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+Utils?$/]',
        message: 'Not allowed to use "Utils" as suffix of identifier',
      },
      {
        selector: 'Identifier[name=/.+Wrapper$/]',
        message: 'Not allowed to use "Wrapper" as suffix of identifier',
      },
      {
        selector: 'IfStatement IfStatement',
        message: 'Never use nested-if including else-if',
      },
      {
        selector: 'SwitchStatement',
        message: 'Never use switch',
      },
      // FIXME: below is not required by other rules
      {
        selector: 'VariableDeclaration[kind=let]',
        message: 'Never use let',
      },
      {
        selector: 'WhileStatement',
        message: 'Never use while',
      },
    ],
  },
  'no-shadow': {
    allow: [
      'it',
      'length',
      'name',
      'parent',
      'status',
      'target',
    ],
  },
}

export default coreRuleOptionHash
