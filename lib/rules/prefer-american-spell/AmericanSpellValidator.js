/**
 * American spell validator.
 */
export default class AmericanSpellValidator {
  /**
   * Constructor.
   *
   * @param {AmericanSpellValidatorParams} params - Parameters for constructor.
   */
  constructor ({
    context,
    wordHash,
  }) {
    this.context = context
    this.wordHash = wordHash
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof AmericanSpellValidator ? X : never} T, X
   * @param {AmericanSpellValidatorFactoryParams} params - Parameters for factory method.
   * @returns {InstanceType<T>} Instance of AmericanSpellValidator.
   * @this {T}
   */
  static create ({
    context,
  }) {
    const wordHash = this.extractWordHash({
      context,
    })

    return /** @type {InstanceType<T>} */ (
      new this({
        context,
        wordHash,
      })
    )
  }

  /**
   * Extract word hash from context.
   *
   * @param {{
   *   context: import('eslint').Rule.RuleContext
   * }} params - Parameters of this method.
   * @returns {Record<string, string>} Word hash.
   */
  static extractWordHash ({
    context,
  }) {
    return context.options.at(0)
      ?? {}
  }

  /**
   * Build rule.
   *
   * @returns {import('eslint').Rule.RuleListener} Rule listener.
   * @throws {Error} Invalid configuration for prefer-american-spell rule.
   * @throws {Error} Set prohibiting word to lowercase.
   */
  buildRuleListener () {
    const entries = Object.entries(this.wordHash)
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
      [identifierSelector]: node => {
        const matched = node.name.match(regex)

        if (matched === null) {
          return
        }

        const badWord = matched.at(0)
          .toLowerCase()
        const americanWord = this.wordHash[badWord]

        this.context.report({
          node,
          messageId: 'useAmericanSpelling',
          data: {
            badWord,
            americanWord,
          },
        })
      },

      [literalSelector]: node => {
        const matched = node.value.match(regex)

        if (matched === null) {
          return
        }

        const badWord = matched.at(0)
          .toLowerCase()
        const americanWord = this.wordHash[badWord]

        this.context.report({
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
        const americanWord = this.wordHash[badWord]

        this.context.report({
          node,
          messageId: 'useAmericanSpelling',
          data: {
            badWord,
            americanWord,
          },
        })
      },
    }
  }
}

/**
 * @typedef {{
 *   context: import('eslint').Rule.RuleContext
 *   wordHash: Record<string, string>
 * }} AmericanSpellValidatorParams
 */

/**
 * @typedef {{
 *   context: import('eslint').Rule.RuleContext
 * }} AmericanSpellValidatorFactoryParams
 */
