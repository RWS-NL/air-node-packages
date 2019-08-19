import chalk from 'chalk';
import eslintConfig from '../packages/eslint-config/src/';
import { writeFileSync as writeJson } from 'jsonfile';
import path from 'path';

const webcomponentConfigPath = path.join(__dirname, '../packages/webcomponents/.eslintrc');
const localComponentConfigPath = path.join(__dirname, '../packages/local-components-test/.eslintrc');

writeJson(webcomponentConfigPath, eslintConfig);
writeJson(localComponentConfigPath, eslintConfig);

// eslint-disable-next-line no-console
console.log(chalk.green('Duplicated ESLint config'));
process.exit(0);