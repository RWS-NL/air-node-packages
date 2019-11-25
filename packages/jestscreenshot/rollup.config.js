import configure from '../../rollup.config';
import builtins from '@joseph184/rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';

export default configure({
  input: 'src/index.ts',
  plugins: [
    json({
      preferConst: true,
      compact: true,
    })
  ],
  externalConfig: builtins,
});