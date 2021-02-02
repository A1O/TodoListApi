import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import type { IUserRepository } from '#SqlDatabase/types';
import type { IJsonWebToken, IUserInput, IAuthService } from './types';

@injectable()
class AuthService implements IAuthService {
  @inject(DependencyTypes.IUserRepository)
  private _userRepository!: IUserRepository;
  @inject(DependencyTypes.IJsonWebToken)
  private _jsonWebToken!: IJsonWebToken;

  async login({ username, password }: IUserInput) {
    const user = await this._userRepository.getUser({ username, password });

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this._jsonWebToken.sign(user.id);
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

  async getUserByToken(token: string) {
    const data = this._jsonWebToken.decode(token);

    if (typeof data !== 'object' || !data || !('userId' in data)) {
      throw new Error('Not valid token');
    }

    const { userId } = data as { userId: string };
    return this._userRepository.getUser({ id: userId });
  }
}

export default AuthService;
