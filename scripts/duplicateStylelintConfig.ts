import chalk from 'chalk';
import stylelintConfig from '../packages/stylelint-config/src/';
import { writeJSONAtomic } from 'fs-nextra';
import path from 'path';

(async () => {
  try {
    const webcomponentConfigPath = path.join(__dirname, '../packages/webcomponents/.stylelintrc');
    const localComponentConfigPath = path.join(__dirname, '../packages/local-components-test/.stylelintrc');

    await writeJSONAtomic(webcomponentConfigPath, stylelintConfig);
    await writeJSONAtomic(localComponentConfigPath, stylelintConfig);

    // eslint-disable-next-line no-console
    console.log(chalk.green('Duplicated StyleLint config'));
    process.exit(0);
  } catch (error) {
    console.error(chalk.red(error));
    process.exit(1);
  }
})();
