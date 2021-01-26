import { injectable } from 'inversify';
import setSequelizeModels, { User } from './Models';
import { UserRepository } from './Repositories';
import { IDatabase } from './types';
import SequelizeConnection from './SequelizeConnection';
import { IUserRepository } from './Repositories/types';

@injectable()
export default class SqlDatabase extends SequelizeConnection implements IDatabase {
  UserRepository: IUserRepository;

  constructor() {
    super();
    setSequelizeModels(this.sequelize);
    this.UserRepository = new UserRepository(User);
  }
}
