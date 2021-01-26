import { Dialect, Sequelize } from 'sequelize/types';
import { IUserRepository } from './Repositories/types';

export interface DatabaseParams {
  database: string;
  user: string;
  password: string;
  host: string;
  dialect?: Dialect;
}

export interface IDatabaseConnection {
  sequelize: Sequelize;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface IDatabase extends IDatabaseConnection {
  UserRepository: IUserRepository;
}
