import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'dist/main.js',
  dest: 'dist/build.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({jsnext: true, module: true}),
  ]
}