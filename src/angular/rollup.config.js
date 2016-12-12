const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonJS = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

//rollup plugins
var plugins = [
	nodeResolve({ module: true }),
  commonJS(),
  patchHack(),
  uglify(),

]

rollup.rollup({
	entry: 'src/angular/lib/main.js',
	plugins: plugins,
  context: 'window'
})
.then(bundle => {
  return bundle.write({
    format: 'iife',
    moduleName: 'app',
    dest: 'dist/angular/app.js'
  })
})
.catch(err => console.log(err));
