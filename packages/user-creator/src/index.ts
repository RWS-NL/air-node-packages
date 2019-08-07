/* eslint-disable no-console */
import readYaml from '@favware/yamlreader';
import chalk from 'chalk';
import { stripIndent } from 'common-tags';
import fetch from 'node-fetch';
import path from 'path';
import yargs from 'yargs';

type User = {
  email: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  roles: string[];
};

type ResponseData = {
  id: string;
  privileges: string[];
} & User;

class UsermanagementAdder {
  private file: string;
  private username: string;
  private password: string;
  private url: string;

  public constructor(file: string, user: string, pass: string, url: string) {
    this.file = file;
    this.username = user;
    this.password = pass;
    this.url = url;
  }

  public async run() {
    const users: User[] = readYaml(this.file);
    for (const user of users) await this.addUserToAPI(user);
  }

  private async addUserToAPI(user: User) {
    try {
      const response = await fetch(`${this.url}/api/v1/users`, {
        body: JSON.stringify({
          email: user.email,
          firstName: user.firstname,
          lastName: user.lastname,
          middleName: user.middlename ? user.middlename : '',
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`,
        },
      });
      const data: ResponseData = await response.json();

      console.log(`Added user with email ${user.email}, they got ID ${data.id}`);

      for (const role of user.roles) await this.addRoleToUser(data.id, role);
    } catch (err) {
      console.error(err);
    }
  }

  private async addRoleToUser(userId: string, role: string) {
    console.log(`Adding ${role} to user with ID ${userId}`);

    try {
      await fetch(`${this.url}/api/v1/users/${userId}/roles`, {
        body: JSON.stringify({ name: role }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`,
        },
      });

      console.log(`Added role ${role} to user with id ${userId}`);
      console.log('');
    } catch (err) {
      console.error(chalk.red(`an error occurred adding ${role} to user with ID ${userId}. Stacktrace:`));
      console.error(err);
    }
  }
}


(() => {
  const argv = yargs
    .usage(stripIndent`
            ${chalk.yellow('Usermanagement user adding script')}

            Usage:
                usercreator -f /path/to/yaml/file -u <username> -p <password> --url <url>
                usercreator --help`
    )
    .example('', 'usercreator -f users.yaml -u root -p root --url http://localhost:9003')
    .option('file', {
      alias: 'f',
      describe: 'The YAML file to use as users list',
      type: 'string',
      demand: true,
    })
    .option('username', {
      alias: 'u',
      describe: 'The username to use as "root" user when uploading',
      type: 'string',
      demand: true,
    })
    .option('password', {
      alias: 'p',
      describe: 'The password to use as "root" user when uploading',
      type: 'string',
      demand: true,
    })
    .option('url', {
      alias: 's',
      describe: 'The url to upload to',
      type: 'string',
      demand: true,
    })
    .argv;

  if (argv.url.slice(-1) === '/') argv.url = argv.url.slice(0, -1);

  try {
    new UsermanagementAdder(path.resolve(argv.file), argv.username, argv.password, argv.url).run();
  } catch (err) {
    console.error(err);
  }
})();