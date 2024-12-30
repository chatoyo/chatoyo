module.exports = {
	extends: [
		'./.eslintrc-auto-import.json',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true
		}
	},
}