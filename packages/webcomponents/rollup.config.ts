import commonjs from '@rollup/plugin-commonjs';
import resolveNode from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { resolve as resolveDir } from 'path';
import cleaner from 'rollup-plugin-cleaner';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    cleaner({
      targets: ['./dist/']
    }),
    progress(),
    external(),
    typescript({ tsconfig: resolveDir(__dirname, 'src', 'tsconfig.json') }),
    resolveNode({ preferBuiltins: true }),
    commonjs({ extensions: ['.js', 'ts', '.jsx', '.tsx'] }),
    postcss({
      modules: true,
      minimize: true,
      inject: { insertAt: 'top' }
    }),
    url(),
    svgr(),
    terser({
      ecma: 5,
      // This will ensure that whenever Rollup is in watch (dev) mode, console logs will not be removed
      compress: { drop_console: !Reflect.has(process.env, 'ROLLUP_WATCH') }, // eslint-disable-line @typescript-eslint/camelcase
      output: { comments: false }
    })
  ]
};
