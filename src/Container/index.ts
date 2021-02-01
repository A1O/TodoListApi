import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';

// Database Repositories
import { IUserRepository } from '#SqlDatabase/types';
import { UserRepository } from '#SqlDatabase';

// Services
import JsonWebToken from '#Services/AuthService/JsonWebToken';
import { IJsonWebToken, ITaskService, IAuthService } from '#Services/types';
import { TaskService, AuthService } from '#Services';

const container = new Container();

// Database Repositories
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();

// Services
container.bind<IAuthService>(DependencyTypes.IAuthService).to(AuthService).inSingletonScope();
container.bind<ITaskService>(DependencyTypes.ITaskService).to(TaskService).inSingletonScope();
container.bind<IJsonWebToken>(DependencyTypes.IJsonWebToken).to(JsonWebToken).inSingletonScope();

export default container;
