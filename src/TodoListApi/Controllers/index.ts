import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { IControllers, ITaskController, IUserController } from './types';
import UserController from './UserController';
import TaskController from './TaskController';

@injectable()
class Controllers implements IControllers {
  @inject(DependencyTypes.IUserController)
  private _userController!: IUserController;
  @inject(DependencyTypes.ITaskController)
  private _taskController!: ITaskController;

  loadControllersOnExpress() {
    this._userController.loadUserControllerOnExpress();
    this._taskController.loadTaskControllerOnExpress();
    console.log('Controllers loaded successfully...');
  }
}

export default Controllers;
export { UserController, TaskController };
