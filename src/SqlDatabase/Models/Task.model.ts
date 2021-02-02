import { DataTypes } from 'sequelize';
import type { Sequelize } from 'sequelize';
import Task from '#Entities/Task';

export default (sequelize: Sequelize) => {
  Task.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      description: {
        type: new DataTypes.STRING(128),
      },
      userId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      tableName: 'tasks',
    }
  );

  return Task;
};
