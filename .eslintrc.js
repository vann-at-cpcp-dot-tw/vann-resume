const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  globals: {
    _: 'readonly',
    lodash: 'readonly',
  },
  extends: ["plugin:@docusaurus/recommended"],
  plugins: ["import", "@docusaurus", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true,
    }
  },
  // settings: {
  //   tailwindcss: {
  //     removeDuplicates: true,
  //     officialSorting: true,
  //     prependCustom: true,
  //   }
  // },
  rules: {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute', 'TemplateLiteral'],
        SwitchCase: 1,
        VariableDeclarator: 'first',
        // MemberExpression: 0,
        // FunctionDeclaration: { body: 1, parameters: 1 },
        // FunctionExpression: { body: 1, parameters: 1 },
        // CallExpression: { arguments: 1 },
      },
    ],

    // from eslint-plugin-tailwind
    // 'tailwindcss/no-custom-classname': 'off',
    // 'tailwindcss/classnames-order': ['warn']
  }
})