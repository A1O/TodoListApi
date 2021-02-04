import { Optional } from 'sequelize';

export interface ITask {
  taskId: string;
  title: string;
  description?: string;
  userId: string;
}

export type ITaskCreationAttributes = Optional<ITask, 'taskId' | 'description'>;
