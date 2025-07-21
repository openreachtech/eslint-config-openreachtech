import configAll from './lib/eslint.config.js'

export { default as coreConfig } from './lib/configurations/core.js'
export { default as jestPluginConfig } from './lib/configurations/plugins/jest.js'
export { default as jsdocPluginConfig } from './lib/configurations/plugins/jsdoc.js'
export { default as openreachtechPluginConfig } from './lib/configurations/plugins/openreachtech.js'
export { default as stylisticPluginConfig } from './lib/configurations/plugins/stylistic.js'

export default configAll
