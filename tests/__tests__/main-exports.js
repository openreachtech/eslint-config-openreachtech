import {
  default as exportedDefault,
  coreConfig,

  jestPluginConfig,
  jsdocPluginConfig,
  openreachtechPluginConfig,
  stylisticPluginConfig,
} from '../../index.js'

import configAll from '../../lib/eslint.config.js'

import expectedCoreConfig from '../../lib/configurations/core.js'
import expectedJestConfig from '../../lib/configurations/plugins/jest.js'
import expectedJsdocConfig from '../../lib/configurations/plugins/jsdoc.js'
import expectedOpenreachtechConfig from '../../lib/configurations/plugins/openreachtech.js'
import expectedStylisticConfig from '../../lib/configurations/plugins/stylistic.js'

describe('main exports', () => {
  describe('export default', () => {
    test('should export the Open Reach Tech ESLint config', () => {
      expect(exportedDefault)
        .toBe(configAll)
    })
  })

  describe('export coreConfig', () => {
    test('should export core config of the Open Reach Tech ESLint config', () => {
      expect(coreConfig)
        .toBe(expectedCoreConfig)
    })
  })

  describe('export jestPluginConfig', () => {
    test('should export the Jest plugin config', () => {
      expect(jestPluginConfig)
        .toBe(expectedJestConfig)
    })
  })

  describe('export jsdocPluginConfig', () => {
    test('should export the JSDoc plugin config', () => {
      expect(jsdocPluginConfig)
        .toBe(expectedJsdocConfig)
    })
  })

  describe('export openreachtechPluginConfig', () => {
    test('should export the Open Reach Tech plugin config', () => {
      expect(openreachtechPluginConfig)
        .toBe(expectedOpenreachtechConfig)
    })
  })

  describe('export stylisticPluginConfig', () => {
    test('should export the stylistic plugin config', () => {
      expect(stylisticPluginConfig)
        .toBe(expectedStylisticConfig)
    })
  })
})
