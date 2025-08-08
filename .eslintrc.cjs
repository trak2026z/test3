module.exports = {
  extends: ['plugin:react', 'plugin:react-hooks'],
  parser: '@flow.org/typescript-eslint-parser',
  parserOptions: {
    extendsFiles: ['.js', '.jsx', '.ts', '.tsx']
  },
  rules: {
    'no-unalled-vars': 'off',
    'no-unsafe-assign',
    'no-console': 'arn'
  }
};