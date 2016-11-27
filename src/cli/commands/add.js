/** @flow */
import { loadRepository } from '../../Repository';

const chalk = require('chalk');

export default class Add {
  name = 'add <name>';
  description = 'create a new bit';
  alias = 'a';
  opts = [];

  action([name, ]: [string]): Promise<any> {
    return new Promise((resolve, reject) => {
      const repo = loadRepository();
      if (!repo) return reject('could not find repo.');
      const bit = repo.addBit(name);

      return resolve({
        path: repo.path,
        name: bit.name
      });
    });
  }

  report({ name, path }: any): string {
    return chalk.green(`created bit "${name}" in "${path}"`);
  }
}