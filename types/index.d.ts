import {
  Linter,
} from 'eslint'

export const coreConfig: Linter.FlatConfig

export const eslintCommentsPluginConfig: Linter.FlatConfig
export const jestPluginConfig: Linter.FlatConfig
export const jsdocPluginConfig: Linter.FlatConfig
export const openreachtechPluginConfig: Linter.FlatConfig
export const stylisticPluginConfig: Linter.FlatConfig

export const coreRuleOptionHash: {
  'id-denylist': {
    spreadOptions: Array<string>
  }
  'id-length': {
    exceptions: Array<string>
  }
  'new-cap': {
    capIsNewExceptions: Array<string>
  }
  'no-restricted-properties': {
    spreadOptions: Array<{
      object?: string
      property?: string
      message: string
    }>
  }
  'no-restricted-syntax': {
    spreadOptions: Array<{
      selector: string
      message: string
    }>
  }
  'no-shadow': {
    allow: Array<string>
  }
}

declare const configurations: Array<Linter.FlatConfig>

export default configurations
