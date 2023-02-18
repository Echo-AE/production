module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignore: ['en', 'ru'],
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{js,jsx,ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
