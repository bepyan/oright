module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // https://nextjs.org/docs/basic-features/eslint
    'react-hooks/exhaustive-deps': 0,
    '@next/next/no-img-element': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [['^\\u0000', '^@?\\w'], ['^@types', '^@/'], ['^\\.']],
          },
        ],
      },
    },
  ],
};
