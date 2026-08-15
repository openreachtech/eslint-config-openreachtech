import {
  Linter,
} from 'eslint'

export const coreConfig: Linter.FlatConfig

export const eslintCommentsPluginConfig: Linter.FlatConfig
export const jestPluginConfig: Linter.FlatConfig
export const jsdocPluginConfig: Linter.FlatConfig
export const openreachtechPluginConfig: Linter.FlatConfig
export const stylisticPluginConfig: Linter.FlatConfig

declare const configurations: Array<Linter.FlatConfig>

export default configurations
