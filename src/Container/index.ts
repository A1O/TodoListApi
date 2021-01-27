import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';

// Api
import TodoListApi from '#TodoListApi';
import ExpressServer from '#ExpressServer';
import { ITodoListApi } from '#TodoListApi/types';
import { IExpressServer } from '#ExpressServer/types';

// Database
import { IDatabase, IUserRepository } from '#SqlDatabase/types';
import SqlDatabase, { UserRepository } from '#SqlDatabase';

// Controllers
import { IControllers, ITaskController, IUserController } from '#TodoListApi/Controllers/types';
import Controllers, { TaskController, UserController } from '#TodoListApi/Controllers';

// Services
import JsonWebToken from '#TodoListApi/Services/UserService/JsonWebToken';
import { IJsonWebToken, ITaskService, IUserService } from '#TodoListApi/Services/types';
import { TaskService, UserService } from '#TodoListApi/Services';

const container = new Container();

// Api
container.bind<ITodoListApi>(DependencyTypes.ITodoListApi).to(TodoListApi).inSingletonScope();
container.bind<IExpressServer>(DependencyTypes.IExpressServer).to(ExpressServer).inSingletonScope();

// Database
container.bind<IDatabase>(DependencyTypes.IDatabase).to(SqlDatabase).inSingletonScope();
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();

// Controllers
container.bind<IUserController>(DependencyTypes.IUserController).to(UserController).inSingletonScope();
container.bind<ITaskController>(DependencyTypes.ITaskController).to(TaskController).inSingletonScope();
container.bind<IControllers>(DependencyTypes.IControllers).to(Controllers).inSingletonScope();

// Services
container.bind<IUserService>(DependencyTypes.IUserService).to(UserService).inSingletonScope();
container.bind<ITaskService>(DependencyTypes.ITaskService).to(TaskService).inSingletonScope();
container.bind<IJsonWebToken>(DependencyTypes.IJsonWebToken).to(JsonWebToken).inSingletonScope();

export default container;
