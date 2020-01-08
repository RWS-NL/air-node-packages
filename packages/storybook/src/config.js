import { configure } from '@storybook/react';
import './src/utils/styles/base.scss';

// Automatically import all files ending in *.stories.js
configure(require.context('./stories', true, /\.stories\.tsx?$/), module);