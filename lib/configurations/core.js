import stylistic from '@stylistic/eslint-plugin'

import configurationHash from '@openreachtech/eslint-rules-default'

import coreRuleOptionHash from './core-rule-option-hash.js'

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
      ...coreRuleOptionHash['id-denylist'].spreadOptions,
    ],
    'id-length': [
      'error',
      {
        min: 2,
        max: Infinity,
        properties: 'always',
        exceptions: coreRuleOptionHash['id-length'].exceptions, // []
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
        capIsNewExceptions: coreRuleOptionHash['new-cap'].capIsNewExceptions, // []
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
      ...coreRuleOptionHash['no-restricted-properties'].spreadOptions,
    ],
    'no-restricted-syntax': [
      'error',
      // There are 0 or more rest parameters in the array
      // string | { selector: string, message: string }
      ...coreRuleOptionHash['no-restricted-syntax'].spreadOptions,
    ],
    'no-shadow': [
      'error',
      {
        builtinGlobals: true, // false
        hoist: 'all', // 'functions'
        ignoreOnInitialization: true, // false
        allow: coreRuleOptionHash['no-shadow'].allow, // []
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
