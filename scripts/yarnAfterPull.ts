import { exec } from '@klasa/utils';
import { resolve } from 'path';
import kConsole from './scriptUtils';

async function main() {
  const ROOT_DIR = resolve(__dirname, '..');

  const { stdout } = await exec('git show --name-only', { cwd: ROOT_DIR });
  const lastCommitFiles = stdout.split('\n').slice(6);

  const hasLockfileInCommit = lastCommitFiles.some((commitFile) => commitFile.toLowerCase() === 'yarn.lock');

  if (!hasLockfileInCommit) {
    kConsole.log('Yarn lockfile was updated, running Yarn for you');

    const { stdout, stderr } = await exec('yarn', { cwd: ROOT_DIR });

    if (stderr) {
      kConsole.error('An error occurred while running "yarn install"!');
      kConsole.error(stderr);
    } else {
      kConsole.log(stdout);
      kConsole.log('Successfully ran yarn for you!');
    }
  }
}

main();
