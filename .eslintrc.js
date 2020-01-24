module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/flowtype", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ],

    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react/prefer-stateless-function': 'off',

    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
