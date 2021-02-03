import type User from '#Entities/User';

export interface IUserInput {
  username: string;
  password: string;
}

export interface IAuthService {
  login: (input: IUserInput) => Promise<string>;
  register: (input: IUserInput) => Promise<User>;
  getUserByToken: (token: string) => Promise<User | null>;
}

export interface IJsonWebToken {
  secretKey: string;
  sign: (userId: string) => string;
  decode: (token: string) => unknown | string;
}
