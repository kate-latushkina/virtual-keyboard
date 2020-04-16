module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single", { allowTemplateLiterals: true }],
    semi: ["error", "never"],
    "no-use-before-define": ["error", { functions: false, variables: false }],
    "operator-linebreak": [2, "before"],
    "no-restricted-syntax": [
      "error",
      "WithStatement",
      "BinaryExpression[operator='in']"
    ],
    "no-unused-expressions": [2, { allowTernary: true }],
    "import/extensions": [2, "ignorePackages", { js: "always" }],
    "object-curly-newline": ["error", { multiline: true }],
  },
};
