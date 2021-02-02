import { Sequelize } from 'sequelize';
import setTaskModelOnSequelize from './Task.model';
import setUserModelOnSequelize from './User.model';
import User from '#Entities/User';
import Task from '#Entities/Task';

const setAssociations = () => {
  User.hasMany(Task, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'tasks',
  });
};

export default (sequelize: Sequelize) => {
  setUserModelOnSequelize(sequelize);
  setTaskModelOnSequelize(sequelize);
  setAssociations();
};

export { User, Task };
