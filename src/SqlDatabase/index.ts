import { Sequelize } from 'sequelize';
import Repositories from './Repositories';
import { DatabaseParams } from './types';

class SqlDatabase extends Repositories {
  private sequelize: Sequelize;

  constructor({ database, user, password, host, dialect = 'mysql' }: DatabaseParams) {
    const sequelize = new Sequelize(database, user, password, {
      host,
      dialect,
      logging: false,
    });
    super(sequelize);
    this.sequelize = sequelize;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.sequelize
        .sync()
        .then(() => {
          console.log('Mysql connection established...');
          resolve(null);
        })
        .catch((err) => {
          console.error('Can not connect to MySQL database', err);
          reject(err);
        });
    });
  }

  disconnect() {
    return this.sequelize.close();
  }
}

export default SqlDatabase;
