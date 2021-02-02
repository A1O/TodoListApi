import { Optional } from 'sequelize';

export interface IUser {
  id: string;
  username: string;
  password: string;
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  userId: string;
}

export type ITaskCreationAttributes = Optional<ITask, 'id' | 'description'>;

export type IUserCreationAttributes = Optional<IUser, 'id'>;
