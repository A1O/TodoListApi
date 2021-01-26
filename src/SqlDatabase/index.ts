import { inject, injectable } from 'inversify';
import setSequelizeModels from './Models';
import { IDatabase } from './types';
import SequelizeConnection from './SequelizeConnection';
import { IUserRepository } from './Repositories/types';
import { DependencyTypes } from '#Container/types';

@injectable()
export default class SqlDatabase extends SequelizeConnection implements IDatabase {
  @inject(DependencyTypes.IUserRepository)
  _userRepository!: IUserRepository;

  constructor() {
    super();
    setSequelizeModels(this.sequelize);
  }
}
