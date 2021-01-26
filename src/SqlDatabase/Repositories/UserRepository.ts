import User from '../Models/User.model';
import { IUserRepository, UserInput } from './types';

class UserRepository implements IUserRepository {
  private User: typeof User;

  constructor(userModel: typeof User) {
    this.User = userModel;
  }

  async createUser(username: string, password: string) {
    return this.User.create({ username, password });
  }

  async getUser({ username, password }: UserInput) {
    const where: { username?: string; password?: string } = {};

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
