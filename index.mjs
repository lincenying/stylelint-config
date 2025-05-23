export default {
    plugins: [
        "@stylistic/stylelint-plugin",
        "stylelint-scss",
        "stylelint-order",
    ],
    extends: ["stylelint-config-standard-scss"],
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.json',
        '**/*.md',
        '**/*.yaml',
        'dist/*',
        'node_modules/*',
        'uni_modules/*',
    ],
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
            // 展示
            'position',
			'inset',
			'inset-block',
			'inset-block-start',
			'inset-block-end',
			'inset-inline',
			'inset-inline-start',
			'inset-inline-end',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',
            // 展示模式
            'box-sizing',
            'display',
            // Flexible boxes
            'flex',
			'flex-grow',
			'flex-shrink',
			'flex-basis',
			'flex-flow',
			'flex-direction',
			'flex-wrap',
            // Grid
            'grid',
			'grid-area',
			'grid-template',
			'grid-template-areas',
			'grid-template-rows',
			'grid-template-columns',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-auto-rows',
			'grid-auto-columns',
			'grid-auto-flow',
			'grid-gap',
			'grid-row-gap',
			'grid-column-gap',
            'gap',
            'row-gap',
            'column-gap',
            // 布局对齐
            'place-content',
			'place-items',
			'place-self',
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'justify-items',
			'justify-self',
            'order',
            // 盒子模型
            'float',
			'inline-size',
			'min-inline-size',
			'max-inline-size',
			'width',
			'min-width',
			'max-width',
			'block-size',
			'min-block-size',
			'max-block-size',
			'height',
			'min-height',
			'max-height',
			'aspect-ratio',
			'padding',
			'padding-block',
			'padding-block-start',
			'padding-block-end',
			'padding-inline',
			'padding-inline-start',
			'padding-inline-end',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-block',
			'margin-block-start',
			'margin-block-end',
			'margin-inline',
			'margin-inline-start',
			'margin-inline-end',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'overflow',
			'overflow-block',
			'overflow-inline',
			'overflow-x',
			'overflow-y',
			'-webkit-overflow-scrolling',
			'-ms-overflow-x',
			'-ms-overflow-y',
			'-ms-overflow-style',
			'overscroll-behavior',
			'overscroll-behavior-inline',
			'overscroll-behavior-block',
			'overscroll-behavior-x',
			'overscroll-behavior-y',
			'clip',
			'clip-path',
			'clear',
            // 排版
            'font',
			'font-family',
			'font-size',
			'font-variation-settings',
			'font-style',
			'font-weight',
			'font-feature-settings',
			'font-optical-sizing',
			'font-kerning',
			'font-variant',
			'font-variant-ligatures',
			'font-variant-caps',
			'font-variant-alternates',
			'font-variant-numeric',
			'font-variant-east-asian',
			'font-variant-position',
			'font-size-adjust',
			'font-stretch',
			'font-effect',
			'font-emphasize',
			'font-emphasize-position',
			'font-emphasize-style',
			'-webkit-font-smoothing',
			'-moz-osx-font-smoothing',
			'font-smooth',
			'hyphens',
			'line-height',
			'color',
			'-webkit-text-fill-color',
			'-webkit-text-stroke',
			'-webkit-text-stroke-width',
			'-webkit-text-stroke-color',
			'text-align',
			'text-align-last',
			'text-emphasis',
			'text-emphasis-color',
			'text-emphasis-style',
			'text-emphasis-position',
			'text-decoration',
			'text-decoration-line',
			'text-decoration-thickness',
			'text-decoration-style',
			'text-decoration-color',
			'text-underline-position',
			'text-underline-offset',
			'text-indent',
			'text-justify',
			'text-outline',
			'text-overflow',
			'text-overflow-ellipsis',
			'text-overflow-mode',
			'-webkit-line-clamp',
			'line-clamp',
			'text-shadow',
			'text-transform',
			'text-wrap',
			'-webkit-text-size-adjust',
			'-ms-text-size-adjust',
			'letter-spacing',
			'word-break',
			'word-spacing',
			'word-wrap', // Legacy name for `overflow-wrap`
			'overflow-wrap',
			'tab-size',
			'white-space',
			'vertical-align',

			'list-style',
			'list-style-position',
			'list-style-type',
			'list-style-image',

			'src',
			'font-display',
			'unicode-range',
			'size-adjust',
			'ascent-override',
			'descent-override',
			'line-gap-override',
            // 可访问性和交互
            'appearance',
			'accent-color',
			'color-scheme',
			'pointer-events',
			'-ms-touch-action',
			'touch-action',
			'cursor',
			'caret-color',
			'visibility',
			'zoom',

			'table-layout',
			'empty-cells',
			'caption-side',
			'border-spacing',
			'border-collapse',

			'content',
			'quotes',
			'counter-reset',
			'counter-set',
			'counter-increment',
			'resize',

			'scroll-behaviour',
			'scroll-snap-type',
			'scroll-snap-align',
			'scroll-snap-stop',
			'scroll-padding',
			'scroll-padding-inline',
			'scroll-padding-inline-start',
			'scroll-padding-inline-end',
			'scroll-padding-block',
			'scroll-padding-block-start',
			'scroll-padding-block-end',
			'scroll-padding-top',
			'scroll-padding-right',
			'scroll-padding-bottom',
			'scroll-padding-left',
			'scroll-margin',
			'scroll-margin-inline',
			'scroll-margin-inline-start',
			'scroll-margin-inline-end',
			'scroll-margin-block',
			'scroll-margin-block-start',
			'scroll-margin-block-end',
			'scroll-margin-top',
			'scroll-margin-right',
			'scroll-margin-bottom',
			'scroll-margin-left',

			'scrollbar-color',
			'scrollbar-gutter',
			'scrollbar-width',

			'user-select',
			'-webkit-user-select',
			'nav-index',
			'nav-up',
			'nav-right',
			'nav-down',
			'nav-left',

            // 图像、背景和边框
            'object-fit',
			'object-position',
			'-ms-interpolation-mode',
			'image-orientation',
			'image-rendering',
			'image-resolution',

			'background',
			'background-color',
			'background-image',
			'filter',
			'background-repeat',
			'background-attachment',
			'background-position',
			'background-position-x',
			'background-position-y',
			'background-clip',
			'background-origin',
			'background-size',
			'background-blend-mode',
			'isolation',
			'backdrop-filter',
			'border',
			'border-color',
			'border-style',
			'border-width',
			'border-block',
			'border-block-start',
			'border-block-start-color',
			'border-block-start-style',
			'border-block-start-width',
			'border-block-end',
			'border-block-end-color',
			'border-block-end-style',
			'border-block-end-width',
			'border-inline',
			'border-inline-start',
			'border-inline-start-color',
			'border-inline-start-style',
			'border-inline-start-width',
			'border-inline-end',
			'border-inline-end-color',
			'border-inline-end-style',
			'border-inline-end-width',
			'border-top',
			'border-top-color',
			'border-top-style',
			'border-top-width',
			'border-right',
			'border-right-color',
			'border-right-style',
			'border-right-width',
			'border-bottom',
			'border-bottom-color',
			'border-bottom-style',
			'border-bottom-width',
			'border-left',
			'border-left-color',
			'border-left-style',
			'border-left-width',
			'border-radius',
			'border-start-start-radius',
			'border-start-end-radius',
			'border-end-start-radius',
			'border-end-end-radius',
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius',
			'border-image',
			'border-image-source',
			'border-image-slice',
			'border-image-width',
			'border-image-outset',
			'border-image-repeat',
			'outline',
			'outline-width',
			'outline-style',
			'outline-color',
			'outline-offset',
			'box-shadow',
			'mix-blend-mode',
			'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
			"-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
			'opacity',

            // Masking
            'mask-border',
			'mask-border-source',
			'mask-border-slice',
			'mask-border-width',
			'mask-border-outset',
			'mask-border-repeat',
			'mask-border-mode',
			'mask',
			'mask-image',
			'mask-mode',
			'mask-repeat',
			'mask-position',
			'mask-clip',
			'mask-origin',
			'mask-size',
			'mask-composite',

            // SVG属性
            'alignment-baseline',
			'baseline-shift',
			'dominant-baseline',
			'text-anchor',
			'word-spacing',
			'writing-mode',

			'fill',
			'fill-opacity',
			'fill-rule',
			'stroke',
			'stroke-dasharray',
			'stroke-dashoffset',
			'stroke-linecap',
			'stroke-linejoin',
			'stroke-miterlimit',
			'stroke-opacity',
			'stroke-width',

			'color-interpolation',
			'color-interpolation-filters',
			'color-profile',
			'color-rendering',
			'flood-color',
			'flood-opacity',
			'lighting-color',
			'marker-start',
			'marker-mid',
			'marker-end',
			'shape-rendering',
			'stop-color',
			'stop-opacity',

            // 过渡和动画
            'transition',
			'transition-delay',
			'transition-timing-function',
			'transition-duration',
			'transition-property',
			'transform',
			'transform-origin',
			'rotate',
			'scale',
			'translate',
			'perspective',
			'perspective-origin',
			'animation',
			'animation-name',
			'animation-duration',
			'animation-play-state',
			'animation-timing-function',
			'animation-delay',
			'animation-iteration-count',
			'animation-direction',
			'will-change',

            // 分页媒体
            'break-before',
			'break-inside',
			'break-after',
			'orphans',
			'widows',
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
