import { Arg, Mutation, Resolver } from 'type-graphql';
import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import type { IAuthService } from '#Services/types';
import User from '#Entities/User';

@injectable()
@Resolver()
class AuthMutations {
  @inject(DependencyTypes.IAuthService)
  _authService!: IAuthService;

  @Mutation(() => User)
  register(@Arg('username') username: string, @Arg('password') password: string): Promise<User> {
    return this._authService.register({ username, password });
  }

  @Mutation(() => String)
  login(@Arg('username') username: string, @Arg('password') password: string): Promise<string> {
    return this._authService.login({ username, password });
  }
}

export default AuthMutations;
