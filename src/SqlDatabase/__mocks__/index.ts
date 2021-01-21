import UserRepository from './Repositories/UserRepository';

export default class SqlDatabase {
  UserRepository: UserRepository;

  constructor() {
    this.UserRepository = new UserRepository();
  }
}
