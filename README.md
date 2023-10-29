# ESLint Config for Open Reach Tech inc.

* ESLint shareable config for Open Reach Tech inc.

## Installation of ESLint

* Create a `.npmrc` file in the root directory of your project and add any necessary configurations. This might be required for installing certain npm packages.

* Please add the following line to your `.npmrc` file.
  ```
  @openreachtech:registry=https://npm.pkg.github.com
  ```

* Run `npm install` in each project.

  ```
  npm install --save-dev \
    eslint \
    @openreachtech/eslint-config
  ```

## Usage

* After the `eslint-config-openreachtech` package is installed, you can use it by specifying `'@openreachtech'` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

* Example as `.eslintrc.yml`.
  ```yml
  extends
    - '@openreachtech'
  ```

## License

* MIT © [Open Reach Tech inc.](https://openreach.tech)

## Branch Operation

* Use Git Flow.
