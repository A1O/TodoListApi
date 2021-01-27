import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';
import TodoListApi from '#TodoListApi';
import ExpressServer from '#ExpressServer';
import { ITodoListApi } from '#TodoListApi/types';
import { IExpressServer } from '#ExpressServer/types';
import { IDatabase, IUserRepository } from '#SqlDatabase/types';
import SqlDatabase from '#SqlDatabase';
import { UserRepository } from '#SqlDatabase/Repositories';
import { IJsonWebToken, IUserService } from '#TodoListApi/Services/UserService/types';
import UserService from '#TodoListApi/Services/UserService';
import { IServices } from '#TodoListApi/Services/types';
import Services from '#TodoListApi/Services';
import JsonWebToken from '#TodoListApi/Services/UserService/JsonWebToken';

const container = new Container();

// Api
container.bind<ITodoListApi>(DependencyTypes.ITodoListApi).to(TodoListApi).inSingletonScope();
container.bind<IExpressServer>(DependencyTypes.IExpressServer).to(ExpressServer).inSingletonScope();

// Database
container.bind<IDatabase>(DependencyTypes.IDatabase).to(SqlDatabase).inSingletonScope();
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();

// Services
container.bind<IServices>(DependencyTypes.IServices).to(Services).inSingletonScope();
container.bind<IUserService>(DependencyTypes.IUserService).to(UserService).inSingletonScope();
container.bind<IJsonWebToken>(DependencyTypes.IJsonWebToken).to(JsonWebToken).inSingletonScope();

export default container;
