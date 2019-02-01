module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'semi': ['error', 'never'],
    'comma-dangle': [2, 'never'],
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    'indent': 'off',
    'max-len': ["error", { code: 3000 }],
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    'no-bitwise': ["error", { allow: ["|", "<<"] }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
