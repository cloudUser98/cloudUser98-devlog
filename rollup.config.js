import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'dist/index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [resolve()]
};
