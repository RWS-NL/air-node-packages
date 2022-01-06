#!/usr/bin/env node
import { readYaml } from '@favware/yamlreader';
import fetch from 'node-fetch';
import path from 'path';
import yargs from 'yargs';

export interface User {
  /** The e-mail for this user */
  email: string;
  /** The firstname for this user */
  firstname: string;
  /** The optional middle name for this user */
  middlename?: string;
  /** The lastname for this user */
  lastname: string;
  /** Any roles to assign to the user */
  roles: string[];
}

interface ResponseData extends User {
  /** ID of the user in the database */
  id: string;
  /** Privileges the user has */
  privileges: string[];
}

export class UsermanagementAdder {
  private file: string;
  private username: string;
  private password: string;
  private url: string;

  /**
   * Constructs a new {@link UsermanagementAdder}
   * @param file The YAML file of userdata to read
   * @param user The admin user name to create users with
   * @param pass The password for the admin user
   * @param url The URL of the usermanagement backend
   */
  public constructor(file: string, user: string, pass: string, url: string) {
    this.file = file;
    this.username = user;
    this.password = pass;
    this.url = url;
  }

  /**
   * Runs the {@link UsermanagementAdder}
   */
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
          middleName: user.middlename ? user.middlename : ''
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`
        }
      });
      const data: ResponseData = await response.json() as ResponseData;

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
          Authorization: `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`
        }
      });

      console.log(`Added role ${role} to user with id ${userId}`);
      console.log('');
    } catch (err) {
      console.error(`an error occurred adding ${role} to user with ID ${userId}. Stacktrace:`);
      console.debug(err);
    }
  }
}

/**
 * Executes the usermanagement usercreator
 * Uses yargs to parse arguments
 */
export const exec = () => {
  const argv = yargs
    .usage(
      [
        'Usermanagement user adding script',
        '',
        '\tUsage:',
        '\t\tusercreator -f /path/to/yaml/file -u <username> -p <password> --url <url>',
        '\t\tusercreator --help'
      ].join('')
    )
    .example('', 'usercreator -f users.yaml -u root -p root --url http://localhost:9003')
    .option('file', {
      alias: 'f',
      describe: 'The YAML file to use as users list',
      type: 'string',
      demand: true
    })
    .option('username', {
      alias: 'u',
      describe: 'The username to use as "root" user when uploading',
      type: 'string',
      demand: true
    })
    .option('password', {
      alias: 'p',
      describe: 'The password to use as "root" user when uploading',
      type: 'string',
      demand: true
    })
    .option('url', {
      alias: 's',
      describe: 'The url to upload to',
      type: 'string',
      demand: true
    }).argv;

  if (argv instanceof Promise) {
    console.error('argv is of type Promise which is not supported yet');
  } else {
    if (argv.url.slice(-1) === '/') argv.url = argv.url.slice(0, -1);

    try {
      new UsermanagementAdder(path.resolve(argv.file), argv.username, argv.password, argv.url).run();
    } catch (err) {
      console.error(err);
    }
  }
};

exec();

export default exec;
