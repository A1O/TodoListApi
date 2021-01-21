import UserService from '../src/Services/UserService';

describe('UserRepository register() method', () => {
  it('should create a user successfully', async () => {
    const UserRepository = {
      getUser: () => null,
      createUser: (username: string, password: string) => ({
        id: 'test',
        username,
        password,
      }),
    };
    const sqlDatabase = {
      UserRepository,
    };
    const userService = new UserService(sqlDatabase as any);

    const result = await userService.register({
      username: 'Testas',
      password: 'TestoPW',
    });
    const expectedResult = {
      id: 'test',
      username: 'Testas',
      password: 'TestoPW',
    };

    expect(result).toStrictEqual(expectedResult);
  });
});
