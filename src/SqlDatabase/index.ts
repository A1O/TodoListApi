import setSequelizeModels, { User } from './Models';
import { UserRepository } from './Repositories';
import { DatabaseParams } from './types';
import SequelizeConnection from './SequelizeConnection';

export default class SqlDatabase extends SequelizeConnection {
  UserRepository: UserRepository;

  constructor({ database, user, password, host, dialect = 'mysql' }: DatabaseParams) {
    super({ database, user, password, host, dialect });
    setSequelizeModels(this);
    this.UserRepository = new UserRepository(User);
  }
}
