export default {
    plugins: [
        "@stylistic/stylelint-plugin",
        "stylelint-scss",
        "stylelint-order",
    ],
    extends: ["stylelint-config-standard-scss"],
    rules: {
        "alpha-value-notation": null,
        "color-function-notation": "legacy",
        "media-feature-range-notation": null,
        "no-descending-specificity": null,
        "selector-type-no-unknown": null,
        "selector-class-pattern": null,
        "unit-no-unknown": [true, { ignoreUnits: ["rpx", "upx"] }],

        "scss/dollar-variable-pattern": null,

        "order/properties-order": [
            // 定位
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            // 布局
            "display",
            "justify-items",
            "justify-content",
            "align-items",
            "align-content",
            "flex",
            "flex-flow",
            "flex-direction",
            "float",
            // 盒子尺寸
            "width",
            "height",
            "max-width",
            "max-height",
            "min-width",
            "min-height",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin-collapse",
            "margin-top-collapse",
            "margin-right-collapse",
            "margin-bottom-collapse",
            "margin-left-collapse",
            // 盒子显示
            "overflow",
            "overflow-x",
            "overflow-y",
            "clip",
            "clear",
            // 文本样式
            "font",
            "font-family",
            "font-size",
            "font-smoothing",
            "osx-font-smoothing",
            "font-style",
            "font-weight",
            "line-height",
            "letter-spacing",
            "word-spacing",
            "color",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-rendering",
            "text-size-adjust",
            "text-shadow",
            "text-transform",
            "word-break",
            "word-wrap",
            "white-space",
            "vertical-align",
            "list-style",
            "list-style-type",
            "list-style-position",
            "list-style-image",
            "pointer-events",
            "cursor",
            "background",
            "background-color",
            "border",
            "border-radius",
            "content",
            "outline",
            "outline-offset",
            "opacity",
            "filter",
            "visibility",
            "size",
            "transform",
        ],

        // 指定 at 规则名称的小写或大写。
        "@stylistic/at-rule-name-case": "lower",
        // at 规则名称后需要一个空格。
        "@stylistic/at-rule-name-space-after": "always-single-line",
        // at 规则的分号后需要换行符。
        "@stylistic/at-rule-semicolon-newline-after": "always",
        // 要求或禁止在块的右大括号之前有空行。
        "@stylistic/block-closing-brace-empty-line-before": "never",
        // 在块的右大括号后面需要换行符或不允许有空格。
        "@stylistic/block-closing-brace-newline-after": "always",
        // 在块的右大括号之前需要换行符或不允许有空格。
        "@stylistic/block-closing-brace-newline-before": "always-multi-line",
        // 在块的右大括号之前需要一个空格或不允许有空格。
        "@stylistic/block-closing-brace-space-before": "always-single-line",
        // 需要在块的左大括号后换行。
        "@stylistic/block-opening-brace-newline-after": "always-multi-line",
        // 在块的右大括号后面需要一个空格或不允许有空格。
        "@stylistic/block-opening-brace-space-after": "always-single-line",
        // 在块的左大括号之前需要换行符或不允许有空格。
        "@stylistic/block-opening-brace-space-before": "always",
        // 指定十六进制颜色的小写或大写。 ("lower"|"upper")
        "@stylistic/color-hex-case": "lower",
        // 声明后需要一个空格或不允许有空格。 ("always"|"never")
        "@stylistic/declaration-bang-space-after": "never",
        // 声明前需要一个空格或不允许有空格。
        "@stylistic/declaration-bang-space-before": "always",
        // 声明块的分号后需要换行符或不允许有空格。
        "@stylistic/declaration-block-semicolon-newline-after":
            "always-multi-line",
        // 声明块的分号后需要一个空格或不允许有空格。
        "@stylistic/declaration-block-semicolon-space-after":
            "always-single-line",
        // 声明块的分号之前需要一个空格或不允许有空格。
        "@stylistic/declaration-block-semicolon-space-before": "never",
        // 要求或禁止声明块中使用尾随分号。
        "@stylistic/declaration-block-trailing-semicolon": "always",
        // 声明冒号后需要换行符或不允许有空格。
        "@stylistic/declaration-colon-newline-after": "always-multi-line",
        // 声明的冒号后需要一个空格或不允许有空格。
        "@stylistic/declaration-colon-space-after": "always-single-line",
        // 声明的冒号之前需要一个空格或不允许有空格。
        "@stylistic/declaration-colon-space-before": "never",
        // 函数的逗号后需要换行符或不允许有空格。 ("always"|"always-multi-line"|"never-multi-line")
        "@stylistic/function-comma-newline-after": "always-multi-line",
        // 函数的逗号后面需要一个空格或不允许有空格。 ("always"|"never"|"always-single-line"|"never-single-line")
        "@stylistic/function-comma-space-after": "always-single-line",
        // 函数的逗号之前需要一个空格或不允许有空格。 ("always"|"never"|"always-single-line"|"never-single-line")
        "@stylistic/function-comma-space-before": "never",
        // 限制函数内相邻空行的数量。
        "@stylistic/function-max-empty-lines": 0,
        // 函数括号内部需要换行符或不允许有空格。 ("always"|"always-multi-line"|"never-multi-line")
        "@stylistic/function-parentheses-newline-inside": "always-multi-line",
        // 函数括号内部需要一个空格或不允许有空格。 ("always"|"never"|"always-single-line"|"never-single-line")
        "@stylistic/function-parentheses-space-inside": "never-single-line",
        // 要求或禁止函数后有空格。 ("always"|"never")
        "@stylistic/function-whitespace-after": "always",
        // 指定缩进。
        "@stylistic/indentation": 4,
        // 限制相邻空行的数量。
        "@stylistic/max-empty-lines": 1,
        // 限制线的长度。
        "@stylistic/max-line-length": 500,
        // 在媒体功能中，冒号后需要一个空格或不允许有空格。
        "@stylistic/media-feature-colon-space-after": "always",
        // 在媒体功能中，冒号之前需要一个空格或不允许有空格。
        "@stylistic/media-feature-colon-space-before": "never",
        // 指定媒体功能名称的小写或大写。
        "@stylistic/media-feature-name-case": "lower",
        // 媒体功能中括号内部需要单个空格或不允许有空格。
        "@stylistic/media-feature-parentheses-space-inside": "never",
        // 在媒体功能中，范围运算符后面需要一个空格或不允许有空格。
        "@stylistic/media-feature-range-operator-space-after": "always",
        // 在媒体功能中，范围运算符之前需要一个空格或不允许有空格。
        "@stylistic/media-feature-range-operator-space-before": "always",
        // 媒体查询列表的逗号后需要换行符或不允许有空格。
        "@stylistic/media-query-list-comma-newline-after": "always-multi-line",
        // 媒体查询列表的逗号后需要一个空格或不允许有空格。
        "@stylistic/media-query-list-comma-space-after": "always-single-line",
        // 媒体查询列表的逗号之前需要一个空格或不允许有空格。
        "@stylistic/media-query-list-comma-space-before": "never",
        // 禁止第一行为空。
        "@stylistic/no-empty-first-line": true,
        // 禁止行尾空格。
        "@stylistic/no-eol-whitespace": true,
        // 禁止使用额外的分号。
        "@stylistic/no-extra-semicolons": true,
        // 不允许丢失源尾换行符。
        "@stylistic/no-missing-end-of-source-newline": true,
        // 要求或不允许小于 1 的小数有前导零。
        "@stylistic/number-leading-zero": "always",
        // 不允许数字中出现尾随零。
        "@stylistic/number-no-trailing-zeros": true,
        // 指定属性的小写或大写。
        "@stylistic/property-case": "lower",
        // 属性选择器中的括号内部需要一个空格或不允许有空格。
        "@stylistic/selector-attribute-brackets-space-inside": "never",
        // 属性选择器中的运算符后面需要一个空格或不允许有空格。
        "@stylistic/selector-attribute-operator-space-after": "never",
        // 属性选择器中的运算符之前需要一个空格或不允许有空格。
        "@stylistic/selector-attribute-operator-space-before": "never",
        // 选择器组合符后面需要一个空格或不允许有空格。
        "@stylistic/selector-combinator-space-after": "always",
        // 选择器组合符之前需要一个空格或不允许有空格。
        "@stylistic/selector-combinator-space-before": "always",
        // 禁止选择器的后代组合符使用非空格字符。
        "@stylistic/selector-descendant-combinator-no-non-space": true,
        // 选择器列表的逗号后需要换行符或不允许有空格。
        "@stylistic/selector-list-comma-newline-after": "always",
        // 选择器列表的逗号之前需要一个空格或不允许有空格。
        "@stylistic/selector-list-comma-space-before": "never",
        // 限制选择器内相邻空行的数量。
        "@stylistic/selector-max-empty-lines": 0,
        // 为伪类选择器指定小写或大写。
        "@stylistic/selector-pseudo-class-case": "lower",
        // 伪类选择器中括号内部需要一个空格或不允许有空格。
        "@stylistic/selector-pseudo-class-parentheses-space-inside": "never",
        // 为伪元素选择器指定小写或大写。
        "@stylistic/selector-pseudo-element-case": "lower",
        // 在字符串周围指定单引号或双引号。 ("single"|"double")
        "@stylistic/string-quotes": "single",
        // 指定单位的小写或大写。
        // "@stylistic/unit-case": "lower",
        // 需要换行符或不允许在值列表的逗号后有空格。 ("always"|"always-multi-line"|"never-multi-line")
        "@stylistic/value-list-comma-newline-after": "always-multi-line",
        // 值列表的逗号后面需要一个空格或不允许有空格。	("always"|"never"|"always-single-line"|"never-single-line")
        "@stylistic/value-list-comma-space-after": "always-single-line",
        // 值列表的逗号之前需要一个空格或不允许有空格。 ("always"|"never"|"always-single-line"|"never-single-line")
        "@stylistic/value-list-comma-space-before": "never",
        // 限制值列表中相邻空行的数量。
        "@stylistic/value-list-max-empty-lines": 0,

        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply"
                ],
            },
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                "except": ["after-same-name"],
                ignoreAtRules: ["else", "include"],
            },
        ],
    },
};
