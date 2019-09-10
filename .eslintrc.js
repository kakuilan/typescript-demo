module.exports = {
  //定义ESLint的解析器
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  //定义了该eslint文件所依赖的插件
  plugins: ['@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    //指定ESLint可以解析JSX语法
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/ignore': ['node_modules'],
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {}
}
