module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    uni: 'readonly'
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-unused-vars':'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/name-property-casing': 'off',
    // 'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'eqeqeq': 'off',
    'no-tabs': 'off',
    'no-new': 'off',
    'no-undef': 'off',
    'no-sparse-arrays': 'off',
    'camelcase': 'off',
    'no-return-assign': 'off',
    'prefer-promise-reject-errors': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
