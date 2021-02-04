import { Optional } from 'sequelize';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IUser {
  userId: string;
  username: string;
  password: string;
  role: UserRole;
}

export type IUserCreationAttributes = Optional<IUser, 'userId'>;
