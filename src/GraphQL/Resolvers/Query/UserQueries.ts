/* eslint-disable class-methods-use-this */
import { injectable } from 'inversify';
import { Authorized, Ctx, Query, Resolver } from 'type-graphql';
import type { IContext } from '#GraphQL/types';
import User from '#Entities/User';

@injectable()
@Resolver()
class UserQueries {
  @Authorized()
  @Query(() => User, { nullable: true })
  myUser(@Ctx() { user }: IContext): User {
    return user;
  }
}

export default UserQueries;
