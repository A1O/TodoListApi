import type Task from '#Entities/Task';
import type User from '#Entities/User';

export interface ITaskInput {
  title: string;
  description?: string;
}

export interface ITaskService {
  createTask: (input: ITaskInput, user: User) => Promise<Task>;
  getUserTasks: (user: User) => Promise<Task[]>;
}
