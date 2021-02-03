import { Optional } from 'sequelize';

export interface ITask {
  id: string;
  title: string;
  description?: string;
  userId: string;
}

export type ITaskCreationAttributes = Optional<ITask, 'id' | 'description'>;
