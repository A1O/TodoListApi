import { User } from '#SqlDatabase/Models';

export interface UserInput {
  id?: string;
  username?: string;
  password?: string;
}

export interface IUserRepository {
  createUser: (username: string, password: string) => Promise<User>;
  getUser: (userInput: UserInput) => Promise<User | null>;
}
