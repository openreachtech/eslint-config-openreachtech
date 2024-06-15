import {
  Linter,
} from 'eslint'

declare module '@openreachtech/eslint-config' {
  const configurations: Array<Linter.FlatConfig>

  export = configurations
}
