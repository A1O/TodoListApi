import { Sequelize } from 'sequelize';
import { setUserModelOnSequelize } from '../Models';
import UserRepository from './UserRepository';

export default class Repositories {
  UserRepository: UserRepository;

  constructor(sequelize: Sequelize) {
    this.UserRepository = new UserRepository(setUserModelOnSequelize(sequelize));
  }
}
