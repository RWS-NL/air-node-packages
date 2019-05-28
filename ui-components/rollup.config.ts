import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';

const defaultOutputOptions = {
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@material-ui/core': '@material-ui/core',
    },
    sourcemap: true,
};

export default {
    input: './src/index.ts',
    external: ['react', 'react-dom', '@material-ui/core'],

    output: [
        {
            ...defaultOutputOptions,
            name: 'AIRComponents',
            format: 'umd',
            file: './lib/index.js',
        },
        {
            ...defaultOutputOptions,
            name: 'AIRComponents-es',
            format: 'cjs',
            file: './lib/index.module.js',
        }
    ],

    plugins: [
        typescript(),
        postcss({
            modules: true,
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        resolve(),
        commonjs()
    ],
};