import { Dialect } from 'sequelize/types';

export interface DatabaseParams {
  database: string;
  user: string;
  password: string;
  host: string;
  dialect?: Dialect;
}
