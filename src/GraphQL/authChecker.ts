import type { IContext } from './types';
import { AuthorizationType } from './types';

export default ({ context: { user } }: { context: IContext }, roles: AuthorizationType[]) => {
  if (!roles.length) {
    return !!user;
  }

  return true;
};
