/**
 * Advisories `npm run audit:npm` lets through until the lockfile no longer reports them.
 *
 * @type {Array<{id: string, package: string, path: string, reason: string, removeWhen: string}>}
 */
const IGNORED_ADVISORIES = [
  {
    id: 'GHSA-gcqx-w48m-w2h4',
    package: 'deepmerge',
    path: 'jest > @jest/core > jest-config > deepmerge',
    reason: 'No patched release: the advisory covers deepmerge >=4.2.0 <=4.3.1, and 4.3.1 is the latest. deepmerge is reached by jest-config alone, and jest is a devDependency of this package.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-gcqx-w48m-w2h4',
  },
  {
    id: 'GHSA-3g3m-2fjr-6pw4',
    package: 'glob',
    path: 'jest > @jest/core > @jest/reporters > glob | jest > @jest/core > jest-config > glob | jest > @jest/core > jest-runtime > glob',
    reason: 'Patched in glob 14.0.2, but the lockfile holds glob 10.5.0, and jest 30.5.2, the latest, still pins glob ^13.0.6 in @jest/reporters, jest-config and jest-runtime. No jest release admits a patched glob, and jest is a devDependency of this package.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-3g3m-2fjr-6pw4',
  },
  {
    id: 'GHSA-g3hv-75wg-m249',
    package: 'minimatch',
    path: '@openreachtech/eslint-rules-default-jest > eslint-plugin-jest > @typescript-eslint/utils > @typescript-eslint/typescript-estree > minimatch | jest > @jest/core > @jest/reporters > glob > minimatch',
    reason: 'Patched in minimatch 11.0.1, but the lockfile holds minimatch 10.2.6 under typescript-estree and 9.0.9 under the glob 10 of jest. typescript-estree 8.72.2, the latest, pins minimatch ^10.2.2, and jest pins glob 13 (see the entry above). No release on either path admits minimatch 11.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-g3hv-75wg-m249',
  },
]

export default IGNORED_ADVISORIES
