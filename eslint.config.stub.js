'use strict'

const allRules = require('@openreachtech/eslint-rules-default')
const jestPlugin = require('@openreachtech/eslint-rules-default-jest')
const jsdocPlugin = require('@openreachtech/eslint-rules-default-jsdoc')
const openreachtechPlugin = require('eslint-plugin-openreachtech')

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
module.exports = [
  {
    languageOptions: {
      globals: {
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
      sourceType: 'commonjs',
    },
  },

  /*
   * If ignores is used without any other keys in the configuration object, then the patterns act as global ignores. Here’s an example:
   *
   * https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
   */
  {
    ignores: [
      '**/node_modules/**',
    ],
  },

  {
    rules: {
      ...allRules.core.rules,
      ...allRules.disableCoreStylistic.rules,

      'no-console': [
        'error',
        // { allow: [] }
      ],

      'no-param-reassign': [
        'error',
        {
          props: true, // false
          // FIXME: below does not work
          // ignorePropertyModificationsFor: [],
          // ignorePropertyModificationsForRegex: [],
        },
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
          // FIXME: below does not work
          // decoration: [],
        },
      ],

      /////////////////////////////////////////////////////////////////////////

      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: true, // false
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
          max: 8, // 20
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
            'DATE',
            'STRING',
            'TINYINT',
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
      'no-restricted-properties': [
        'error',
        // There are 0 or more rest parameters in the array
        // { object?: string, property: string, message?: string }
        {
          object: 'expect',
          property: 'anything',
          message: 'Never use `expect.anything()`',
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
          selector: 'Identifier[name=/.+(Data|Info|Item|List|Manager)$/]',
          message: 'Not allowed to use "Data", "Info", "Item", "List", and "Manager" as suffix of identifier.',
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
      'no-undefined': [
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
  },
  {
    ...allRules.stylisticJs,

    rules: {
      ...allRules.stylisticJs.rules,

      '@stylistic/semi': [
        'error',
        'never', // 'always'
        // {
        //   omitLastInOneLineBlock: true,
        //   omitLastInOneLineClassBody: true,
        // },
        {
          beforeStatementContinuationChars: 'never', // 'any'
        },
      ],

      /////////////////////////////////////////////////////////////////////////

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
          allowTemplateLiterals: false,
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
  },
  {
    ...jestPlugin,

    rules: {
      ...jestPlugin.rules,

      'jest/valid-title': [
        'error',
        {
          ignoreTypeOfDescribeName: false,
          disallowedWords: [],
          mustMatch: {},
          mustNotMatch: [ // {}
            '\\.$',
            'Titles should not end with a full-stop (.)',
          ],
        },
      ],

      /////////////////////////////////////////////////////////////////////////

      'jest/consistent-test-it': [
        'error',
        {
          fn: 'test',
          withinDescribe: 'test', // 'it'
        },
      ],
      'jest/no-hooks': [
        'off', // 'error'
        {
          allow: [
            'beforeAll',
            'beforeEach',
            'afterAll',
            'afterEach',
          ],
        },
      ],
      'jest/no-identical-title': [
        'off', // 'error'
      ],
      'jest/prefer-expect-assertions': [
        'off', // 'error'
      ],
      'jest/prefer-lowercase-title': [
        'off', // 'error'
        {
          ignore: [],
          allowedPrefixes: [],
          ignoreTopLevelDescribe: true, // false
        },
      ],
      'jest/prefer-strict-equal': [
        'off', // 'error'
      ],
      'jest/require-hook': [
        'off', // 'error'
        {
          allowedFunctionCalls: [],
        },
      ],
    },
  },
  {
    ...jsdocPlugin,

    rules: {
      ...jsdocPlugin.rules,

      'jsdoc/require-jsdoc': [
        'error',
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          contexts: [
            // 'ArrowFunctionExpression',
            // 'ClassDeclaration',
            // 'ClassExpression',
            'FunctionDeclaration',
            // 'FunctionExpression',
            'MethodDefinition',
          ],
          enableFixer: true,
          exemptEmptyConstructors: false, // true
          exemptEmptyFunctions: false,
          fixerMessage: '',
          minLineCount: undefined, // 'undefined' // FIXME: confirm this
          publicOnly: false,
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: false,
            ClassExpression: false,
            FunctionDeclaration: true,
            FunctionExpression: false,
            MethodDefinition: true, // false
          },
        },
      ],

      /////////////////////////////////////////////////////////////////////////

      'jsdoc/imports-as-dependencies': [
        'off', // 'error'
      ],
      'jsdoc/informative-docs': [
        'off', // 'error'
        {
          aliases: [
            'an',
            'our',
          ],
          uselessWords: [
            'a',
            'an',
            'i',
            'in',
            'of',
            's',
            'the',
          ],
        },
      ],
      'jsdoc/match-description': [
        'off', // 'error'
        {
          mainDescription: true,
          matchDescription: '^\\n?([A-Z`\\d_][\\s\\S]*[.?!`]\\s*)?$',
          message: 'JSDoc description must start with a capital letter.', // 'JSDoc description does not satisfy the regex pattern.'
          nonemptyTags: true,
          tags: {},
        },
      ],
      'jsdoc/multiline-blocks': [
        'error',
        {
          allowMultipleTags: true,
          minimumLengthForMultiline: Infinity,
          multilineTags: [
            '*',
          ],
          noFinalLineText: true,
          noMultilineBlocks: false,
          noSingleLineBlocks: true, // false // FIXME: confirm this
          noZeroLineText: true,
          singleLineTags: [
            'lends',
            'type',
            'inheritdoc',
            'override',
          ],
        },
      ],
      'jsdoc/no-multi-asterisks': [
        'error',
        {
          allowWhitespace: true, // false
          preventAtEnd: true,
          preventAtMiddleLines: true,
        },
      ],
      'jsdoc/no-types': [
        'off', // 'error'
        {
          contexts: [
            'ArrowFunctionExpression',
            'FunctionDeclaration',
            'FunctionExpression',
          ],
        },
      ],
      'jsdoc/require-description': [
        // Since exists `jsdoc/no-blank-blocks`, so this rule is unnecessary.
        'off', // 'error'
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          contexts: [
            'ArrowFunctionExpression',
            'FunctionDeclaration',
            'FunctionExpression',
          ],
          descriptionStyle: 'body',
          exemptedBy: [
            'inheritdoc',
          ],
        },
      ],
      'jsdoc/require-description-complete-sentence': [
        'off', // 'error'
        {
          abbreviations: [],
          newlineBeforeCapsAssumesBadSentenceEnd: false,
          tags: [],
        },
      ],
      'jsdoc/require-example': [
        'off', // 'error'
        {
          checkConstructors: true,
          checkGetters: false,
          checkSetters: false,
          contexts: [
            'ArrowFunctionExpression',
            'FunctionDeclaration',
            'FunctionExpression',
          ],
          enableFixer: true,
          exemptedBy: [
            'inheritdoc',
          ],
          exemptNoArguments: false,
        },
      ],
      'jsdoc/require-file-overview': [
        'off', // 'error'
        {
          tags: {
            file: {
              initialCommentsOnly: true,
              mustExist: true,
              preventDuplicates: true,
            },
          },
        },
      ],
      'jsdoc/require-param-description': [
        'off', // 'error'
        {
          defaultDestructuredRootDescription: 'The root object',
          setDefaultDestructuredRootDescription: false,
        },
      ],
      'jsdoc/require-returns-description': [
        'off', // 'error'
        {
          contexts: [
            'ArrowFunctionExpression',
            'FunctionDeclaration',
            'FunctionExpression',
          ],
        },
      ],
      'jsdoc/sort-tags': [
        'error',
        {
          alphabetizeExtras: false,
          linesBetween: 0, // 1
          reportIntraTagGroupSpacing: false, // true
          reportTagGroupSpacing: true,
          // See https://github.com/gajus/eslint-plugin-jsdoc/blob/main/src/defaultTagOrder.js
          tagSequence: [
            {
              tags: [
                // Brief descriptions
                'summary',
                'typeSummary',

                // Module/file-level
                'module',
                'exports',
                'file',
                'fileoverview',
                'overview',
                'import',

                // Identifying (name, type)
                'typedef',
                'interface',
                'record',
                'template',
                'name',
                'kind',
                'type',
                'alias',
                'external',
                'host',
                'callback',
                'func',
                'function',
                'method',
                'class',
                'constructor',

                // Relationships
                'modifies',
                'mixes',
                'mixin',
                'mixinClass',
                'mixinFunction',
                'namespace',
                'borrows',
                'constructs',
                'lends',
                'implements',
                'requires',

                // Long descriptions
                'desc',
                'description',
                'classdesc',
                'tutorial',
                'copyright',
                'license',

                // Simple annotations

                // TypeScript
                'internal',
                'overload',

                'const',
                'constant',
                'final',
                'global',
                'readonly',
                'abstract',
                'virtual',
                'var',
                'member',
                'memberof',
                'memberof!',
                'inner',
                'instance',
                'inheritdoc',
                'inheritDoc',
                'override',
                'hideconstructor',

                // Core function/object info
                'param',
                'arg',
                'argument',
                'prop',
                'property',
                'return',
                'returns',

                // Important behavior details
                'async',
                'generator',
                'default',
                'defaultvalue',
                'enum',
                'augments',
                'extends',
                'throws',
                'exception',
                'yield',
                'yields',
                'event',
                'fires',
                'emits',
                'listens',
                'this',

                // TypeScript
                'satisfies',

                // Access
                'static',
                'private',
                'protected',
                'public',
                'access',
                'package',

                '-other',

                // Supplementary descriptions
                'see',
                'example',

                // METADATA

                // Other Closure (undocumented) metadata
                'closurePrimitive',
                'customElement',
                'expose',
                'hidden',
                'idGenerator',
                'meaning',
                'ngInject',
                'owner',
                'wizaction',

                // Other Closure (documented) metadata
                'define',
                'dict',
                'export',
                'externs',
                'implicitCast',
                'noalias',
                'nocollapse',
                'nocompile',
                'noinline',
                'nosideeffects',
                'polymer',
                'polymerBehavior',
                'preserve',
                'struct',
                'suppress',
                'unrestricted',

                // @homer0/prettier-plugin-jsdoc metadata
                'category',

                // Non-Closure metadata
                'ignore',
                'author',
                'version',
                'variation',
                'since',
                'deprecated',
                'todo',
              ],
            },
          ],
        },
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
          startLines: 1, // 0
          endLines: 0,
          applyToEndTag: true,
          tags: {},
        },
      ],
      'jsdoc/text-escaping': [
        'off', // 'error'
        // Must include either `escapeHTML` or `escapeMarkdown` (or both).
        {
          escapeHTML: false,
          escapeMarkdown: false,
        },
      ],
    },
  },
  {
    plugins: {
      openreachtech: openreachtechPlugin,
    },
    rules: {
      'openreachtech/empty-line-after-super': [
        'error',
      ],
      'openreachtech/indent-in-infix-expression': [
        'error',
      ],
      'openreachtech/newline-per-parameter': [
        'error',
      ],
      'openreachtech/no-if-in-oneline': [
        'error',
      ],
      'openreachtech/no-unexpected-multiline': [
        'error',
      ],
    },
  },
]
