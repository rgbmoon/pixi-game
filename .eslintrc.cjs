module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.app.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier', 'react-refresh'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // JS/TS базовые
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-console': 'warn',
    'no-debugger': 'error',
    'object-shorthand': ['error', 'always'],

    // TypeScript
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false, functions: false, classes: false }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Import
    'import/no-unresolved': ['error', { ignore: ['^@/', '^/'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unused-modules': ['error', { unusedExports: true }],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-key': 'error',
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
    'react/self-closing-comp': ['error'],

    // React Hooks
    'react-hooks/exhaustive-deps': 'warn',

    // Prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.svg'],
        moduleDirectory: ['node_modules', 'src/', 'public/'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.svg'],
      },
    },
  },
};
