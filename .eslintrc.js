module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['accum', 'acc', 'e', 'state'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'no-unused-vars': 'off',
        'no-restricted-globals': 'off',
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
