/* eslint-disable class-methods-use-this */
class UserRepository {
  getUser() {
    return null;
  }

  createUser(username: string, password: string) {
    return {
      id: 'test',
      username,
      password,
    };
  }
}

export default UserRepository;
