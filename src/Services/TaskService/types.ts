import type Task from '#Entities/Task';

export interface IContext {
  userId: string;
}

export interface ITaskInput {
  title: string;
  description?: string;
}

export interface ITaskService {
  createTask: (input: ITaskInput, userId: string | null) => Promise<Task>;
  getUserTasks: (userId: string | null) => Promise<Task[]>;
}
