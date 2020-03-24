import chalk from 'chalk';
import { writeJSONAtomic } from 'fs-nextra';
import { sync as glob } from 'glob';
import { join } from 'path';
import stylelintConfig from '../packages/stylelint-config/src/';

(async () => {
  try {
    await Promise.all(
      glob('**/.stylelintrc', {
        cwd: join(__dirname, '../'),
        ignore: ['node_modules/**', '**/packages/cra-template-air/**'],
        dot: true
      })
        .map((file) => join(__dirname, '../', file))
        .map((file) => writeJSONAtomic(file, stylelintConfig))
    );

    // eslint-disable-next-line no-console
    console.log(chalk.green('Duplicated StyleLint config'));
    process.exit(0);
  } catch (error) {
    console.error(chalk.red(error));
    process.exit(1);
  }
})();
