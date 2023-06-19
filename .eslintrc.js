module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	
  setting: {
    react: {
      version: 'detect'
    }
  }
  
  extends: ['standard', 'eslint-config-prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
