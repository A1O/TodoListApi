import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';
import TodoListApi from '#TodoListApi';
import ExpressServer from '#ExpressServer';
import { ITodoListApi } from '#TodoListApi/types';
import { IExpressServer } from '#ExpressServer/types';
import { IDatabase, IUserRepository } from '#SqlDatabase/types';
import SqlDatabase, { UserRepository } from '#SqlDatabase';
import UserService from '#TodoListApi/Services/UserService';
import { IJsonWebToken, IUserService } from '#TodoListApi/Services/types';
import JsonWebToken from '#TodoListApi/Services/UserService/JsonWebToken';
import { IControllers, IUserController } from '#TodoListApi/Controllers/types';
import Controllers, { UserController } from '#TodoListApi/Controllers';

const container = new Container();

// Api
container.bind<ITodoListApi>(DependencyTypes.ITodoListApi).to(TodoListApi).inSingletonScope();
container.bind<IExpressServer>(DependencyTypes.IExpressServer).to(ExpressServer).inSingletonScope();

// Database
container.bind<IDatabase>(DependencyTypes.IDatabase).to(SqlDatabase).inSingletonScope();
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();

// Controllers
container.bind<IUserController>(DependencyTypes.IUserController).to(UserController).inSingletonScope();
container.bind<IControllers>(DependencyTypes.IControllers).to(Controllers).inSingletonScope();

// Services
container.bind<IUserService>(DependencyTypes.IUserService).to(UserService).inSingletonScope();
container.bind<IJsonWebToken>(DependencyTypes.IJsonWebToken).to(JsonWebToken).inSingletonScope();

export default container;
