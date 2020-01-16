import chalk from 'chalk';
import eslintConfig from '../packages/eslint-config/src/';
import { writeJSONAtomic } from 'fs-nextra';
import path from 'path';

(async () => {
  try {
    const webcomponentConfigPath = path.join(__dirname, '../packages/webcomponents/.eslintrc');
    const localComponentConfigPath = path.join(__dirname, '../packages/local-components-test/.eslintrc');
    const rootConfigPath = path.join(__dirname, '../.eslintrc');

    await writeJSONAtomic(webcomponentConfigPath, eslintConfig);
    await writeJSONAtomic(localComponentConfigPath, eslintConfig);
    await writeJSONAtomic(rootConfigPath, eslintConfig);

    // eslint-disable-next-line no-console
    console.log(chalk.green('Duplicated ESLint config'));
    process.exit(0);
  } catch (error) {
    console.error(chalk.red(error));
    process.exit(1);
  }
})();
