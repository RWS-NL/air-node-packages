import configure from '../../rollup.config';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import postcss from 'rollup-plugin-postcss';

export default configure({
  input: 'src/index.ts',
  plugins: [
    postcss({
      modules: true,
      minimize: true,
    }),
    url(),
    svgr()
  ],
});