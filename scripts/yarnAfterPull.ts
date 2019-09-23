import path from 'path';
import { execSync, spawnSync } from 'child_process';
import chalk from 'chalk';

const ROOT_DIR = path.join(__dirname, '..');
const log = console.log; // eslint-disable-line no-console, @typescript-eslint/unbound-method

const lastCommitFiles = execSync('git show --name-only', { cwd: ROOT_DIR }).toString().split('\n').slice(6).join('\n');

const hasLockfileInCommit = lastCommitFiles.includes('yarn.lock');

if (hasLockfileInCommit) {
  log(chalk.cyan('Yarn lockfile was updated, running Yarn for you'));
  const commandExec = spawnSync('yarn', { cwd: ROOT_DIR });
  commandExec.output.forEach(part => {
    if (part) log(chalk.green(part.toString()));
  });
}

process.exit(0);