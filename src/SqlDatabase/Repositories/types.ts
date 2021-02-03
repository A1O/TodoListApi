import type { UserRole } from '#Entities/User/types';
import type { User } from '#SqlDatabase/Models';

export interface UserInput {
  userId?: string;
  username?: string;
  password?: string;
}

export interface IUserRepository {
  createUser: (username: string, password: string, role?: UserRole) => Promise<User>;
  getUser: (userInput: UserInput) => Promise<User | null>;
}
