import { AuthenticationError } from 'apollo-server-express';
import { UserRole } from '#Entities/User/types';
import type { IContext, Root } from './types';
import { AuthorizationType } from './types';

export default ({ root, context: { user } }: { root: Root; context: IContext }, roles: AuthorizationType[]) => {
  if (roles.includes(AuthorizationType.ONLY_USER) && root && 'userId' in root) {
    const { userId } = root as { userId: string };
    return userId === user.userId;
  }

  if (!roles.length || roles.includes(AuthorizationType.USER)) {
    if (!user) {
      if (!root) {
        throw new AuthenticationError(`Access denied! You don't have permission for this action!`);
      }
      return false;
    }
  }

  if (roles.includes(AuthorizationType.ADMIN)) {
    const isNotAdmin = !user || user.role !== UserRole.ADMIN;
    if (isNotAdmin) {
      if (!root) {
        throw new AuthenticationError(`Access denied! You don't have permission for this action!`);
      }
      return false;
    }
  }

  return true;
};
