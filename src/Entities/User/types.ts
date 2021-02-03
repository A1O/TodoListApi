import { Optional } from 'sequelize';

export interface IUser {
  id: string;
  username: string;
  password: string;
}

export type IUserCreationAttributes = Optional<IUser, 'id'>;
