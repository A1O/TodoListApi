import type User from '#Entities/User';

export interface IUserInput {
  username: string;
  password: string;
}

export interface IAuthService {
  login: (input: IUserInput) => Promise<string>;
  register: (input: IUserInput) => Promise<User>;
  getUserIdByToken: (token: string) => Promise<string>;
}

export interface IJsonWebToken {
  secretKey: string;
  sign: (id: string) => string;
  decode: (token: string) => unknown | string;
}
