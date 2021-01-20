import { Sequelize } from 'sequelize';
import SequelizeModels from './Models';
import { DatabaseParams } from './types';

class SqlDatabase extends SequelizeModels {
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
