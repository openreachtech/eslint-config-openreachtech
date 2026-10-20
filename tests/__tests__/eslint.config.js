import {
  ESLint,
} from 'eslint'

describe('ESLint config', () => {
  describe('default export', () => {
    describe('when a test file is linted', () => {
      describe('should allow `data` as an identifier', () => {
        const eslint = new ESLint({
          overrideConfigFile: 'lib/eslint.config.js',
        })

        const cases = [
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'export default {\n  data: null,\n}\n',
            },
          },
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'export default {\n  data: {\n    user: null,\n  },\n  errors: null,\n}\n',
            },
          },
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'const data = null\n\nexport default data\n',
            },
          },
        ]

        test.each(cases)('code: $input.code', async ({ input }) => {
          const [lintResult] = await eslint.lintText(input.code, {
            filePath: input.filePath,
          })
          const received = lintResult.messages

          expect(received)
            .toHaveLength(0)
        })
      })

      describe('should report the other denied identifiers', () => {
        const eslint = new ESLint({
          overrideConfigFile: 'lib/eslint.config.js',
        })

        const cases = [
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'export default {\n  list: null,\n}\n',
            },
            expected: [
              { message: "Identifier 'list' is restricted." },
            ],
          },
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'export default {\n  item: null,\n}\n',
            },
            expected: [
              { message: "Identifier 'item' is restricted." },
            ],
          },
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'export default {\n  callback: null,\n}\n',
            },
            expected: [
              { message: "Identifier 'callback' is restricted." },
            ],
          },
          {
            input: {
              filePath: 'tests/__tests__/sample.js',
              code: 'export default {\n  data: null,\n  list: null,\n}\n',
            },
            expected: [
              { message: "Identifier 'list' is restricted." },
            ],
          },
        ]

        test.each(cases)('code: $input.code', async ({ input, expected }) => {
          const [lintResult] = await eslint.lintText(input.code, {
            filePath: input.filePath,
          })
          const received = lintResult.messages

          expect(received)
            .toMatchObject(expected)
        })
      })
    })

    describe('when a file outside the tests is linted', () => {
      describe('should report `data` as an identifier', () => {
        const eslint = new ESLint({
          overrideConfigFile: 'lib/eslint.config.js',
        })

        const cases = [
          {
            input: {
              filePath: 'lib/sample.js',
              code: 'export default {\n  data: null,\n}\n',
            },
            expected: [
              { message: "Identifier 'data' is restricted." },
            ],
          },
          {
            input: {
              filePath: 'src/sample.js',
              code: 'export default {\n  data: {\n    user: null,\n  },\n  errors: null,\n}\n',
            },
            expected: [
              { message: "Identifier 'data' is restricted." },
            ],
          },
          {
            input: {
              filePath: 'src/sample.js',
              code: 'const data = null\n\nexport default data\n',
            },
            expected: [
              { message: "Identifier 'data' is restricted." },
              { message: "Identifier 'data' is restricted." },
            ],
          },
        ]

        test.each(cases)('code: $input.code', async ({ input, expected }) => {
          const [lintResult] = await eslint.lintText(input.code, {
            filePath: input.filePath,
          })
          const received = lintResult.messages

          expect(received)
            .toMatchObject(expected)
        })
      })
    })
  })
})
