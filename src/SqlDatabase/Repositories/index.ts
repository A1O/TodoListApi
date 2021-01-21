import Task from '#SqlDatabase/Models/Task.model';
import User from '#SqlDatabase/Models/User.model';
import { Sequelize } from 'sequelize';
import { setUserModelOnSequelize, setTaskModelOnSequelize } from '../Models';
import UserRepository from './UserRepository';

export default class Repositories {
  private User: typeof User;
  private Task: typeof Task;
  UserRepository: UserRepository;

  constructor(sequelize: Sequelize) {
    this.User = setUserModelOnSequelize(sequelize);
    this.Task = setTaskModelOnSequelize(sequelize);
    this.setAssociations();

    this.UserRepository = new UserRepository(this.User);
  }

  setAssociations() {
    this.User.hasMany(Task, {
      sourceKey: 'id',
      foreignKey: 'taskId',
      as: 'tasks',
    });
  }
}
