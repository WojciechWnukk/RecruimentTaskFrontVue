module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
      ],
    plugins: ['babel', 'html'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: false, // Set to false for Vue.js
        },
    },
  }