import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';

// Database Repositories
import { IUserRepository } from '#SqlDatabase/types';
import { UserRepository } from '#SqlDatabase';

// Services
import JsonWebToken from '#Services/UserService/JsonWebToken';
import { IJsonWebToken, ITaskService, IUserService } from '#Services/types';
import { TaskService, UserService } from '#Services';

const container = new Container();

// Api
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();

// Services
container.bind<IUserService>(DependencyTypes.IUserService).to(UserService).inSingletonScope();
container.bind<ITaskService>(DependencyTypes.ITaskService).to(TaskService).inSingletonScope();
container.bind<IJsonWebToken>(DependencyTypes.IJsonWebToken).to(JsonWebToken).inSingletonScope();

export default container;
