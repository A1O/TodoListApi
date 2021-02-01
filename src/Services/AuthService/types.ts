import { IUser } from '#types';

export interface IUserInput {
  username: string;
  password: string;
}

export interface IAuthService {
  login: (input: IUserInput) => Promise<string>;
  register: (input: IUserInput) => Promise<IUser>;
  getUserIdByToken: (token: string) => Promise<string>;
}

export interface IJsonWebToken {
  secretKey: string;
  sign: (id: string) => string;
  decode: (token: string) => unknown | string;
}
