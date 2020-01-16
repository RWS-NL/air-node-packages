
import chalk from 'chalk';
import stylelintConfig from '../packages/stylelint-config/src/';
import { writeJSONAtomic } from 'fs-nextra';
import path from 'path';

const patternRegex = /^[a-z](?:[A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])?[A-Za-z0-9]*$/;
const webcomponentConfigPath = path.join(__dirname, '../packages/webcomponents/.stylelintrc');
const localComponentConfigPath = path.join(__dirname, '../packages/local-components-test/.stylelintrc');

(stylelintConfig.rules['scss/at-mixin-pattern'] as unknown as string) = patternRegex.toString().replace(/\//g, '');
(stylelintConfig.rules['scss/dollar-variable-pattern'] as unknown as string) = patternRegex.toString().replace(/\//g, '');
(stylelintConfig.rules['scss/percent-placeholder-pattern'] as unknown as string) = patternRegex.toString().replace(/\//g, '');
(stylelintConfig.rules['selector-class-pattern'] as unknown as string) = patternRegex.toString().replace(/\//g, '');

writeJSONAtomic(webcomponentConfigPath, stylelintConfig);
writeJSONAtomic(localComponentConfigPath, stylelintConfig);

// eslint-disable-next-line no-console
console.log(chalk.green('Duplicated StyleLint config'));
process.exit(0);