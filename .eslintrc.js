module.exports = {
  extends: ["./node_modules/poetic/config/eslint/eslint-config.js"],
  // Add custom rules here
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "semi": ["warn", "always"],
    "object-curly-spacing": ["warn", "always"],
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
