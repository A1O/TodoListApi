import { Sequelize } from 'sequelize';
import { DatabaseParams } from './types';

class SequelizeConnection extends Sequelize {
  constructor({ database, user, password, host, dialect = 'mysql' }: DatabaseParams) {
    super(database, user, password, {
      host,
      dialect,
      logging: false,
    });
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.sync()
        .then(() => {
          console.log('Mysql connection established...');
          resolve();
        })
        .catch((err) => {
          console.error('Can not connect to MySQL database', err);
          reject(err);
        });
    });
  }

  disconnect() {
    return this.close();
  }
}

export default SequelizeConnection;
