import { injectable } from 'inversify';
import { UserRole } from '#Entities/User/types';
import { User } from '../Models';
import type { IUserRepository, UserInput } from './types';

@injectable()
class UserRepository implements IUserRepository {
  User: typeof User;

  constructor() {
    this.User = User;
  }

  async createUser(username: string, password: string, role = UserRole.USER) {
    return this.User.create({ username, password, role });
  }

  async getUser({ userId, username, password }: UserInput) {
    const where: { userId?: string; username?: string; password?: string } = {};

    if (userId) {
      where.userId = userId;
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
