import User, { setUserModelOnSequelize } from './User.model';
import { Sequelize } from 'sequelize';

export default class SequelizeModels {
  User: typeof User;

  constructor(sequelize: Sequelize) {
    this.User = setUserModelOnSequelize(sequelize);
  }
}
