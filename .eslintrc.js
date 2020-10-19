module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-empty": "error",
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error"
  }
};
