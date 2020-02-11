module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js', 'plugin:cypress/recommended'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    semi: ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
