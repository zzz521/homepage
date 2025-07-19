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
        // 代码质量规则
        'max-lines-per-function': ['warn', {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
        }],
        'max-depth': ['warn', 3],
        'max-params': ['warn', 3],
        'complexity': ['warn', 6],
        
        // 代码风格规则（与Prettier协作）
        'quotes': ['error', 'single', { avoidEscape: true }],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        
        // 导入规则
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ImportDeclaration[source.value="lodash"][type="ImportDeclaration"] > ImportSpecifier',
                message: '不允许按需引入 lodash，请使用全局引入方式: import _ from "lodash"',
            },
        ],
        
        // Vue特定规则
        'vue/html-indent': ['error', 4],
        'vue/attribute-hyphenation': ['error', 'never', {
            ignore: ['flex-item'],
        }],
        'vue/v-on-event-hyphenation': ['error', 'never'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/max-attributes-per-line': ['warn', { 
            singleline: 3,
            multiline: 1,
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'always',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        
        // TypeScript规则
        '@typescript-eslint/no-unused-vars': ['error', { 
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
};


