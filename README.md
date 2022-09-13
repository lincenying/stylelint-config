# stylelint-config-lcy

## Installation

```shell
npm install --save-dev stylelint-config-lcy
```

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-lcy"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/dollar-variable-pattern` rule:

```json
{
  "extends": "stylelint-config-lcy",
  "rules": {
    "scss/dollar-variable-pattern": null
  }
}
```

