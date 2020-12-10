import { resolve } from 'path';
import { command } from 'execa';

async function main() {
  const ROOT_DIR = resolve(__dirname, '..');

  const { stdout } = await command('git show --name-only', { cwd: ROOT_DIR });
  const lastCommitFiles = stdout.split('\n').slice(6);

  const hasLockfileInCommit = lastCommitFiles.some((commitFile) => commitFile.toLowerCase() === 'yarn.lock');

  if (!hasLockfileInCommit) {
    console.log('Yarn lockfile was updated, running Yarn for you');

    const { stdout, stderr } = await command('yarn', { cwd: ROOT_DIR });

    if (stderr) {
      console.error('An error occurred while running "yarn install"!');
      console.error(stderr);
    } else {
      console.log(stdout);
      console.log('Successfully ran yarn for you!');
    }
  }
}

main();
