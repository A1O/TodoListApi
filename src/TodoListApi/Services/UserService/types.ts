import { IUser } from '#types';

export interface IUserInput {
  username: string;
  password: string;
}

export interface IUserService {
  login: (input: IUserInput) => Promise<string>;
  register: (input: IUserInput) => Promise<IUser>;
}

export interface IJsonWebToken {
  secretKey: string;
  sign: (id: string) => string;
  decode: (token: string) => unknown | string;
}
