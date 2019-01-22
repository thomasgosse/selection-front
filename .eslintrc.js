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
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-unused-expressions': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
