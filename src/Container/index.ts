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
import { IUserService } from '#TodoListApi/Services/UserService/types';
import UserService from '#TodoListApi/Services/UserService';
import { IServices } from '#TodoListApi/Services/types';
import Services from '#TodoListApi/Services';

const container = new Container();

container.bind<ITodoListApi>(DependencyTypes.ITodoListApi).to(TodoListApi).inSingletonScope();
container.bind<IExpressServer>(DependencyTypes.IExpressServer).to(ExpressServer).inSingletonScope();
container.bind<IDatabase>(DependencyTypes.IDatabase).to(SqlDatabase).inSingletonScope();
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();
container.bind<IUserService>(DependencyTypes.IUserService).to(UserService).inSingletonScope();
container.bind<IServices>(DependencyTypes.IServices).to(Services).inSingletonScope();

export default container;
