import configure from '../../rollup.config';
import builtins from 'rollup-plugin-node-builtins';

export default configure({
  input: 'src/index.ts',
  externalConfig: builtins,
});