import { ITask } from '#types';

export interface ITaskInput {
  title: string;
  description?: string;
}

export interface ITaskService {
  createTask: (input: ITaskInput) => Promise<ITask>;
  getUserTasks: () => Promise<ITask[]>;
}
