import { IUser } from '#types';
import User from '../Models/User.model';

class UserRepository {
  private User: typeof User;

  constructor(userModel: typeof User) {
    this.User = userModel;
  }

  async createUser(username: string, password: string) {
    return this.User.create({ username, password });
  }

  async getUser({ username, password }: { username?: string; password?: string }) {
    return this.User.findOne({ where: { username, password } });
  }
}

export default UserRepository;
