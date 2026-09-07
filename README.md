# @lincy/stylelint-config

## Installation

```shell
npm install --save-dev @lincy/stylelint-config
pnpm install -D @lincy/stylelint-config
```

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "@lincy/stylelint-config"
}
```

This config lints CSS, SCSS, and `<style>` blocks inside Vue SFCs (`lang="scss"`, `scoped`, and `module`).

Run Stylelint on Vue files as well:

```shell
npx stylelint "**/*.{css,scss,vue}"
```

### VS Code / Cursor

Install the official [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension. The extension does **not** check `.vue` files by default — add `vue` to `stylelint.validate`.

Example `.vscode/settings.json`:

```json
{
  "stylelint.validate": ["css", "scss", "vue"],
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/dollar-variable-pattern` rule:

```json
{
  "extends": "@lincy/stylelint-config",
  "rules": {
    "scss/dollar-variable-pattern": null
  }
}
```

