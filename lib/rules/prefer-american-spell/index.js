/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce American spell',
      recommended: false,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        additionalProperties: {
          type: 'string',
        },
      },
    ],
    messages: {
      useAmericanSpelling: 'Use American spell "{{ americanWord }}" instead of "{{ badWord }}"',
    },
  },

  /**
   * Create rule body.
   *
   * @param {import('eslint').Rule.RuleContext} context - ESLint rule context.
   * @returns {import('eslint').Rule.RuleListener} Rule listener.
   * @throws {Error} Invalid configuration for prefer-american-spell rule.
   */
  create (context) {
    const restrictedWordHash = context.options.at(0)
      ?? {}

    const entries = Object.entries(restrictedWordHash)
    if (entries.length === 0) {
      return {}
    }

    const isValid = entries.every(
      ([badWord, americanWord]) =>
        badWord
        && americanWord
    )
    if (!isValid) {
      throw new Error('Invalid configuration for prefer-american-spell rule.')
    }

    const containsUpperCase = entries.every(
      ([badWord, americanWord]) =>
        badWord.toLowerCase() !== badWord
        && americanWord.toLowerCase() !== americanWord
    )
    if (containsUpperCase) {
      throw new Error('Set prohibiting word to lowercase.')
    }

    const badWordsJoinedString = entries.map(([badWord]) => badWord)
      .join('|')

    const regex = new RegExp(
      `(?:${badWordsJoinedString})`,
      'ui'
    )

    const identifierSelector = `Identifier[name=/${badWordsJoinedString}/i]`
    const literalSelector = `Literal[value=/${badWordsJoinedString}/i]`
    const templateElementSelector = `TemplateElement[value.raw=/${badWordsJoinedString}/i]`

    return {
      [identifierSelector] (node) {
        const matched = node.name.match(regex)

        if (matched === null) {
          return
        }

        const badWord = matched.at(0)
          .toLowerCase()
        const americanWord = restrictedWordHash[badWord]

        context.report({
          node,
          messageId: 'useAmericanSpelling',
          data: {
            badWord,
            americanWord,
          },
        })
      },

      [literalSelector] (node) {
        const matched = node.value.match(regex)

        if (matched === null) {
          return
        }

        const badWord = matched.at(0)
          .toLowerCase()
        const americanWord = restrictedWordHash[badWord]

        context.report({
          node,
          messageId: 'useAmericanSpelling',
          data: {
            badWord,
            americanWord,
          },
        })
      },

      [templateElementSelector]: node => {
        const matched = node.value.raw.match(regex)

        if (matched === null) {
          return
        }

        const badWord = matched.at(0)
          .toLowerCase()
        const americanWord = restrictedWordHash[badWord]

        context.report({
          node,
          messageId: 'useAmericanSpelling',
          data: {
            badWord,
            americanWord,
          },
        })
      },
    }
  },
}
