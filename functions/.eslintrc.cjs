module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    "quotes": ["error", "double"],
    'max-len': ["error", { "code": 120, "ignoreStrings": true}],
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
      "sourceType": "module",
      "requireConfigFile": false,
  },
};
