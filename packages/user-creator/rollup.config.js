import configure from '../../rollup.config';
import banner from 'rollup-plugin-banner';
import json from 'rollup-plugin-json';
import builtins from '@joseph184/rollup-plugin-node-builtins';

export default configure({
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      exports: 'named',
    }
  ],
  plugins: [
    json({
      preferConst: true,
      compact: true,
    }),
    banner('#!/usr/bin/env node')
  ],
  externalConfig: builtins,
});