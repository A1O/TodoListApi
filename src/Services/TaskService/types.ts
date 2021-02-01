import { ITask } from '#types';

export interface IContext {
  userId: string;
}

export interface ITaskInput {
  title: string;
  description?: string;
}

export interface ITaskService {
  createTask: (input: ITaskInput, userId: string | null) => Promise<ITask>;
  getUserTasks: (userId: string | null) => Promise<ITask[]>;
}
