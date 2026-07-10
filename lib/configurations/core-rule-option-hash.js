const coreRuleOptionHash = {
  'id-denylist': {
    spreadOptions: [
      'callback',
      'data',
      'item',
      'list',

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
        selector: 'CallExpression[callee.name=describe] IfStatement',
        message: 'Do not use `if` statements in `describe()`',
      },
      {
        selector: 'CallExpression[callee.name=describe] ConditionalExpression',
        message: 'Do not use ternary operator in `describe()`',
      },
      {
        selector: 'CallExpression[callee.property.name=forEach]:has(* VariableDeclarator)',
        message: 'Do not use assignment inside Array#forEach()',
      },
      {
        selector: 'CallExpression[callee.property.name=forEach] ConditionalExpression',
        message: 'Never use ternary operator inside `Array#forEach()`',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=/^(every|filter|find|findIndex|findLast|findLastIndex|flatMap|forEach|group|groupToMap|map|reduce|reduceRight|some)$/] IfStatement',
        message: 'Never use if in higher-order function',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=/^(every|filter|find|findIndex|findLast|findLastIndex|flatMap|forEach|group|groupToMap|map|reduce|reduceRight|some)$/][arguments.0.type=Identifier]',
        message: 'Do not pass constructors (e.g., Boolean, Number, String) to higher-order functions',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name="reverse"]',
        message: 'Use Array#toReversed() instead of Array#reverse()',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name="sort"]',
        message: 'Use Array#toSorted() instead of Array#sort()',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.object.name=expect][callee.property.name="any"][arguments.0.name=Object]',
        message: 'Do not use expect.any(Object)',
      },
      {
        selector: 'ClassDeclaration[superClass=null]:not(:has(MethodDefinition[kind=constructor])), ClassDeclaration[superClass=null]:has(MethodDefinition[kind=constructor]):not(:has(MethodDefinition[kind=constructor] AssignmentExpression[left.object.type=ThisExpression]))',
        // ClassDeclaration[superClass=null]:not(:has(MethodDefinition[kind=constructor])),
        // ClassDeclaration[superClass=null]
        //   :has(MethodDefinition[kind=constructor])
        //   :not(
        //     :has(
        //       MethodDefinition[kind=constructor] AssignmentExpression[left.object.type=ThisExpression]
        //     )
        //   )
        // `,
        message: 'Do not declare static class',
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
        selector: 'Identifier[name=/cancelled/i]',
        message: 'Use "canceled" instead of "cancelled" as identifier',
      },
      {
        selector: 'Identifier[name=/.+(?<!Form|get|set|clear|inline)Data$/]',
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
        selector: 'Identifier[name=/.+(?<!FF)Utils?$/]',
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
        selector: 'IfStatement[test] AwaitExpression',
        message: 'Do not use await in if condition',
      },
      {
        selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])',
        message: 'Do not call methods or functions in constructor',
      },
      {
        selector: 'MethodDefinition[kind=constructor] BlockStatement IfStatement',
        message: 'Do not use `if` statements in constructor',
      },
      {
        selector: 'MethodDefinition[kind=constructor] BlockStatement ConditionalExpression',
        message: 'Do not use ternary operator in constructor',
      },
      {
        selector: 'LogicalExpression[operator=||] > Literal',
        message: 'Use `??` instead of short-circuit evaluation with `||` operator',
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
      'require',
      'status',
      'target',
      'Op', // Sequelize.Op
    ],
  },
}

export default coreRuleOptionHash
