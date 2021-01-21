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
    this.sequelize.sync();
    console.log('Mysql connection established...');
  }

  disconnect() {
    return this.sequelize.close();
  }
}

export default SqlDatabase;
