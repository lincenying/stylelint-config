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

