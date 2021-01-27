import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { IControllers, IUserController } from './types';
import UserController from './UserController';

@injectable()
class Controllers implements IControllers {
  @inject(DependencyTypes.IUserController)
  private _userController!: IUserController;

  loadControllersOnExpress() {
    this._userController.loadUserControllerOnExpress();
  }
}

export default Controllers;
export { UserController };
