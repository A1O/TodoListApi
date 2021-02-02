import { Model, Optional } from 'sequelize';
import { ITask } from '#Entities/types';

type ITaskCreationAttributes = Optional<ITask, 'id' | 'description'>;

class Task extends Model<ITask, ITaskCreationAttributes> implements ITask {
  public id!: string;
  public title!: string;
  public description!: string;
  public userId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Task;
