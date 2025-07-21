import stylistic from '@stylistic/eslint-plugin'

import configurationHash from '@openreachtech/eslint-rules-default'

export default {
  rules: {
    ...configurationHash.core.rules,
    ...stylistic.configs['disable-legacy'].rules, // not required to add after v10

    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: true, // false
      },
    ],
    camelcase: [
      'off', // 'error'
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: [],
      },
    ],
    'capitalized-comments': [
      'off', // 'error'
      'always',
      {
        ignoreInlineComments: false,
        ignoreConsecutiveComments: false,
        ignorePattern: '',
      },
    ],
    'class-methods-use-this': [
      'off', // 'error'
      {
        enforceForClassFields: true,
        exceptMethods: [],
      },
    ],
    complexity: [
      'error',
      {
        max: 12, // 20
      },
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true, // false
      },
    ],
    'dot-notation': [
      'off', // 'error'
      {
        allowKeywords: true,
        allowPattern: '',
      },
    ],
    'for-direction': [
      'off', // 'error'
    ],
    'func-names': [
      'error',
      'as-needed', // 'always'
    ],
    'func-style': [
      'off', // 'error'
      'expression',
      {
        allowArrowFunctions: false,
      },
    ],
    'grouped-accessor-pairs': [
      'error',
      'getBeforeSet', // 'anyOrder'
    ],
    'guard-for-in': [
      'off', // 'error'
    ],
    'id-denylist': [
      'error',
      // There are 0 or more rest parameters in the array
      // string
      'item',
      'list',
      // want to add 'callback' and 'data'

      'acc',
      'arr',
      'attr',
      'attrs',
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
    'id-length': [
      'error',
      {
        min: 2,
        max: Infinity,
        properties: 'always',
        exceptions: [
          '_',
          '$',
        ], // []
        exceptionPatterns: [],
      },
    ],
    'id-match': [
      'error',
      '^[\\$\\w]+$', // '^.+$'
      {
        properties: true, // false
        classFields: true, // false
        onlyDeclarations: false,
        ignoreDestructuring: false,
      },
    ],
    'max-classes-per-file': [
      'error',
      {
        max: 1,
        ignoreExpressions: true, // false
      },
    ],
    'max-lines': [
      'off', // 'error'
      {
        max: 300,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    'max-lines-per-function': [
      'off', // 'error'
      {
        max: 50,
        skipBlankLines: false,
        skipComments: false,
        IIFEs: false,
      },
    ],
    'max-params': [
      'error',
      // for new Proxy({}, { set (target, property, value, receiver) {} })
      4, // 3
    ],
    'max-statements': [
      'off', // 'error'
      10,
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        capIsNewExceptions: [ // []
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
        properties: true,
      },
    ],
    'no-bitwise': [
      'off', // 'error'
      {
        allow: [],
        int32Hint: false,
      },
    ],
    'no-continue': [
      'off', // 'error'
    ],
    'no-empty-function': [
      'error',
      {
        allow: [ // []
          'arrowFunctions',
        ],
      },
    ],
    'no-extra-boolean-cast': [
      'error',
      {
        enforceForLogicalOperands: true, // false
      },
    ],
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: true, // false
        allow: [],
      },
    ],
    'no-inline-comments': [
      'off', // 'error'
      {
        ignorePattern: '',
      },
    ],
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: false,
        skipJSXText: false,
        skipRegExps: false,
        // FIXME: multibyte spaces should be allowed
        skipStrings: false, // true
        skipTemplates: false,
      },
    ],
    'no-lone-blocks': [
      'off', // 'error'
    ],
    'no-magic-numbers': [
      'off', // 'error'
      {
        detectObjects: false,
        enforceConst: false,
        ignore: [],
        ignoreArrayIndexes: false,
        ignoreDefaultValues: false,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true, // false
        ignorePropertyModificationsFor: [],
        ignorePropertyModificationsForRegex: [],
      },
    ],
    'no-restricted-properties': [
      'error',
      // There are 0 or more rest parameters in the array
      // { object?: string, property: string, message?: string }
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
    'no-restricted-syntax': [
      'error',
      // There are 0 or more rest parameters in the array
      // string | { selector: string, message: string }
      {
        selector: 'CallExpression[callee.property.name=forEach]',
        message: 'Never use forEach method',
      },
      {
        selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=/^(every|filter|find|findIndex|findLast|findLastIndex|flatMap|forEach|group|groupToMap|map|reduce|reduceRight|some)$/] IfStatement',
        message: 'Never use if in higher-order function',
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
        selector: 'Identifier[name=/.+(?<!Form)Data$/]',
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
    'no-shadow': [
      'error',
      {
        builtinGlobals: true, // false
        hoist: 'all', // 'functions'
        ignoreOnInitialization: true, // false
        allow: [ // []
          'it',
          'length',
          'name',
          'status',
          'target',
        ],
      },
    ],
    'no-ternary': [
      'off', // 'error'
    ],
    'no-underscore-dangle': [
      'off', // 'error'
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: false,
        enforceInClassFields: false,
        allowFunctionParams: true,
        allowInArrayDestructuring: true,
        allowInObjectDestructuring: true,
      },
    ],
    'no-useless-assignment': [
      'off', // 'error'
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false, // true
      },
    ],
    'no-unsafe-optional-chaining': [
      'error',
      {
        disallowArithmeticOperators: true, // false
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '',
        args: 'none', // 'after-used'
        argsIgnorePattern: '',
        caughtErrors: 'none',
        caughtErrorsIgnorePattern: '',
        ignoreRestSiblings: true, // false
        destructuredArrayIgnorePattern: '',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false, // true
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'one-var': [
      'error',
      'never', // 'always'
    ],
    'no-warning-comments': [
      'off', // 'error'
      {
        terms: [
          'todo',
          'fixme',
          'xxx',
        ],
        location: 'start',
        decoration: [],
      },
    ],
    'prefer-named-capture-group': [
      'off', // 'error'
    ],
    radix: [
      'error',
      'as-needed', // 'always'
    ],
    'require-await': [
      'off', // 'error'
    ],
    'sort-imports': [
      'off', // 'error'
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
        allowSeparatedGroups: false,
      },
    ],
    'sort-keys': [
      'off', // 'error'
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
        allowLineSeparatedGroups: false,
      },
    ],
    'sort-vars': [
      'off', // 'error'
      {
        ignoreCase: false,
      },
    ],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true, // false
      },
    ],
  },
}
