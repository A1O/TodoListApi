import { injectable } from 'inversify';
import { Dialect, Sequelize } from 'sequelize';
import { IDatabase } from './types';
import setSequelizeModels from './Models';
import { UserRepository } from './Repositories';

@injectable()
class SqlDatabase implements IDatabase {
  private sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      <string>process.env.DB_NAME,
      <string>process.env.DB_USER,
      <string>process.env.DB_PASS,
      {
        host: <string>process.env.DB_HOST,
        dialect: <Dialect>process.env.DB_DIALECT,
        logging: false,
      }
    );
    setSequelizeModels(this.sequelize);
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.sequelize
        .sync()
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
    return this.sequelize.close();
  }
}

export default SqlDatabase;
export { UserRepository };
