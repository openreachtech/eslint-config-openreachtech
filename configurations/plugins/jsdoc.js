'use strict'

const jsdocConfiguration = require('@openreachtech/eslint-rules-default-jsdoc')

export default {
  ...jsdocConfiguration,

  rules: {
    ...jsdocConfiguration.rules,

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
        minLineCount: undefined,
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
}
