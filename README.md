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

* Add this package to your `.eslintrc.yml` file:

  ```
  extends
    - '@openreachtech'
  ```

## License

* MIT © [Open Reach Tech inc.](https://openreach.tech)

## Branch Operation

* Use Git Flow.
