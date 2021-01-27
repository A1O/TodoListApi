import { ITask, IUser } from '#types';

export interface IUserInput {
  username: string;
  password: string;
}

export interface ITaskInput {
  title: string;
  description?: string;
}

export interface IUserService {
  login: (input: IUserInput) => Promise<string>;
  register: (input: IUserInput) => Promise<IUser>;
  createTask: (input: ITaskInput) => Promise<ITask>;
  getUserTasks: () => Promise<ITask[]>;
}

export interface IJsonWebToken {
  secretKey: string;
  sign: (id: string) => string;
  decode: (token: string) => unknown | string;
}
