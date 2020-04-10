import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import cleaner from 'rollup-plugin-cleaner';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    dir: './dist',
    format: 'esm',
    exports: 'named',
    sourcemap: true
  },
  plugins: [
    cleaner({
      targets: ['./dist/']
    }),
    progress(),
    external(),
    typescript(),
    resolve({ preferBuiltins: true }),
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
      // eslint-disable-next-line @typescript-eslint/camelcase
      compress: { drop_console: true },
      output: { comments: false }
    })
  ]
};
