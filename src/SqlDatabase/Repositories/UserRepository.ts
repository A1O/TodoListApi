import { injectable } from 'inversify';
import { IUserRepository, UserInput } from './types';
import { User } from '../Models';

@injectable()
class UserRepository implements IUserRepository {
  User: typeof User;

  constructor() {
    this.User = User;
  }

  async createUser(username: string, password: string) {
    return this.User.create({ username, password });
  }

  async getUser({ id, username, password }: UserInput) {
    const where: { id?: string; username?: string; password?: string } = {};

    if (id) {
      where.id = id;
    }

    if (username) {
      where.username = username;
    }

    if (password) {
      where.password = password;
    }

    return this.User.findOne({ where: where || undefined });
  }
}

export default UserRepository;
