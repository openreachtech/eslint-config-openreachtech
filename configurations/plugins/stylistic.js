import configurationHash from '@openreachtech/eslint-rules-default'

export default {
  ...configurationHash.stylistic,

  rules: {
    ...configurationHash.stylistic.rules,

    '@stylistic/array-bracket-newline': [
      'error',
      'consistent', // { multiline: true, minItems: null }
    ],
    '@stylistic/array-element-newline': [
      'error',
      'consistent', // 'always'
      {
        multiline: true, // false
        minItems: null,
      },
    ],
    '@stylistic/arrow-parens': [
      'error',
      'as-needed', // 'always'
      {
        requireForBlockBody: false,
      },
    ],
    '@stylistic/brace-style': [
      'error',
      '1tbs', // = One True Brace Style
      {
        allowSingleLine: false,
      },
    ],
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline', // 'never'
        objects: 'always-multiline', // 'never'
        imports: 'always-multiline', // 'never'
        exports: 'always-multiline', // 'never'
        functions: 'never',
      },
    ],
    '@stylistic/dot-location': [
      'error',
      'property', // 'object'
    ],
    '@stylistic/function-call-argument-newline': [
      'error',
      'consistent', // 'always'
    ],
    '@stylistic/function-paren-newline': [
      'off', // 'error'
      'consistent', // 'multiline'
    ],
    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: true,
        after: true, // false
      },
    ],
    '@stylistic/implicit-arrow-linebreak': [
      'off', // 'error'
      'beside',
    ],
    '@stylistic/indent': [
      'error',
      2, // 4
      {
        ignoredNodes: [],
        SwitchCase: 1, // 0
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
      },
    ],
    '@stylistic/line-comment-position': [
      'off', // 'error'
      {
        position: 'above',
        applyDefaultIgnorePatterns: true,
        ignorePattern: '',
      },
    ],
    '@stylistic/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowArrayStart: true, // false
        allowArrayEnd: false,
        allowBlockStart: true, // false
        allowBlockEnd: false,
        allowClassStart: true, // false
        allowClassEnd: false,
        allowObjectStart: true, // false
        allowObjectEnd: false,
        ignorePattern: '',
        applyDefaultIgnorePatterns: true,
        afterHashbangComment: false,
      },
    ],
    '@stylistic/max-len': [
      'off', // 'error'
      {
        code: 80,
        tabWidth: 4,
      },
    ],
    '@stylistic/multiline-comment-style': [
      'off', // 'error'
      'starred-block',
    ],
    '@stylistic/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 1, // 2
      },
    ],
    '@stylistic/no-extra-parens': [
      'off', // 'error'
      'all',
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'none',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
        allowParensAfterCommentPattern: '',
      },
    ],
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 1, // 2
        maxBOF: 0, // 2
        maxEOF: 0, // 2
      },
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always', // 'never'
      {
        arraysInObjects: true, // false
        objectsInObjects: true, // false
      },
    ],
    '@stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true, // false
      },
    ],
    '@stylistic/operator-linebreak': [
      'error',
      'before', // 'after'
      {
        overrides: { // {}
          '=': 'after',
          '+=': 'after',
          '-=': 'after',
          '*=': 'after',
          '/=': 'after',
          '%=': 'after',
          '**=': 'after',
          '<<=': 'after',
          '>>=': 'after',
          '>>>=': 'after',
          '&=': 'after',
          '|=': 'after',
          '^=': 'after',
        },
      },
    ],
    '@stylistic/padded-blocks': [
      'error',
      'never', // 'always'
      {
        allowSingleLineBlocks: false,
      },
    ],
    '@stylistic/padding-line-between-statements': [
      'error',
      // There are 0 or more rest parameters in the array
      // { blankLine: string, prev: string, next: string }
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'break',
          'class',
          'continue',
          'function',
          'return',
          'throw',
          'try',
        ],
      },
    ],
    '@stylistic/quote-props': [
      'error',
      'as-needed', // 'always'
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    '@stylistic/quotes': [
      'error',
      'single', // 'double'
      {
        avoidEscape: true,
        allowTemplateLiterals: 'never',
      },
    ],
    '@stylistic/semi': [
      'error',
      'never', // 'always'
      // When 2nd item of options is 'always', used below object as 3rd item.
      // {
      //   omitLastInOneLineBlock: true,
      //   omitLastInOneLineClassBody: true,
      // },
      // When 2nd item of options is 'never', used below object as 3rd item.
      {
        beforeStatementContinuationChars: 'never', // 'any'
      },
    ],
    '@stylistic/semi-style': [
      'error',
      'first', // 'last'
    ],
    '@stylistic/template-tag-spacing': [
      'error',
      'always', // 'never'
    ],
    '@stylistic/wrap-iife': [
      'error',
      'inside', // 'outside'
      {
        functionPrototypeMethods: true, // false
      },
    ],
    '@stylistic/wrap-regex': [
      'off', // 'error'
    ],
    '@stylistic/yield-star-spacing': [
      'error',
      {
        before: true, // false
        after: true,
      },
    ],
  },
}
