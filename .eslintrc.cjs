module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    env: {
        node: true,
    },
    rules: {
        'max-lines-per-function': ['warn', {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
        }],
        'max-depth': ['warn', 3],
        'max-params': ['warn', 3],
        'complexity': ['warn', 6],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ImportDeclaration[source.value="lodash"][type="ImportDeclaration"] > ImportSpecifier',
                message: '不允许按需引入 lodash，请使用全局引入方式: import _ from "lodash"',
            },
        ],
        'vue/html-indent': ['error', 4],
        'vue/attribute-hyphenation': ['error', 'never', {
            ignore: ['flex-item'],
        }],
        'vue/v-on-event-hyphenation': ['error', 'never'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
    },
};


