import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { IUserRepository } from '#SqlDatabase/types';
import { IJsonWebToken, IUserInput, IUserService } from './types';

@injectable()
class UserService implements IUserService {
  @inject(DependencyTypes.IUserRepository)
  private _userRepository!: IUserRepository;
  @inject(DependencyTypes.IJsonWebToken)
  private _jwtActions!: IJsonWebToken;

  async login({ username, password }: IUserInput) {
    const user = await this._userRepository.getUser({ username, password });

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this._jwtActions.sign(user.id);
  }

  async register({ username, password }: IUserInput) {
    // TODO: Check if valid data

    const userExists = await this._userRepository.getUser({ username });
    if (userExists) {
      throw new Error('User with this username already exists!');
    }

    const user = await this._userRepository.createUser(username, password);

    return user;
  }
}

export default UserService;
