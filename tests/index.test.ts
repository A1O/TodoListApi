import UserService from '../src/Services/UserService';
import SqlDatabase from '../src/SqlDatabase';

jest.mock('../src/SqlDatabase');

let sqlDatabase: SqlDatabase;
let userService: UserService;

beforeAll(() => {
  sqlDatabase = new SqlDatabase({ database: '', user: '', password: '', host: '' });
  userService = new UserService(sqlDatabase);
});

describe('UserRepository register() method', () => {
  it('should create a user successfully', async () => {
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
