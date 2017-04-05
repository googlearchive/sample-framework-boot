const rollup = require('rollup').rollup;
const buble = require('rollup-plugin-buble');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');

rollup({
	entry: 'src/csr.js',
	plugins: [
		commonjs(),
		buble(),
		uglify(),
	]
}).then(bundle => bundle.write({
	dest: 'dist/bundle-csr.js',
	format: 'iife'
})).catch(err => console.log(err.stack));


rollup({
	entry: 'src/ssr.js',
	plugins: [
		commonjs(),
		buble(),
		uglify(),
	]
}).then(bundle => bundle.write({
	dest: 'dist/bundle-ssr.js',
	format: 'iife'
})).catch(err => console.log(err.stack));