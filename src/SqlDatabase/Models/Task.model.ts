import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ITask } from '#types';

type ITaskCreationAttributes = Optional<ITask, 'id' | 'description'>;

class Task extends Model<ITask, ITaskCreationAttributes> implements ITask {
  public id!: string;
  public title!: string;
  public description!: string;
  public userId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const setTaskModelOnSequelize = (sequelize: Sequelize) => {
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

export default Task;
