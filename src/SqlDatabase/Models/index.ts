import { Sequelize } from 'sequelize';
import Task, { setTaskModelOnSequelize } from './Task.model';
import User, { setUserModelOnSequelize } from './User.model';

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
