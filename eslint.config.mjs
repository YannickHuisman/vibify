import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(...tseslint.configs.recommended, {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react'],
          ['^@?\\w'],
          ['^@components/', '^@hooks/', '^@lib/', '^@/'],
          ['^\\.\\./', '^\\./', '^/'],
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
});
