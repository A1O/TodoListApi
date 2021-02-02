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
import { TaskQueries } from '#GraphQL/Resolvers/Query';
import { AuthMutations, TaskMutations } from '#GraphQL/Resolvers/Mutation';

const container = new Container();

// Database Repositories
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository).inSingletonScope();

// Services
container.bind<IAuthService>(DependencyTypes.IAuthService).to(AuthService).inSingletonScope();
container.bind<ITaskService>(DependencyTypes.ITaskService).to(TaskService).inSingletonScope();
container.bind<IJsonWebToken>(DependencyTypes.IJsonWebToken).to(JsonWebToken).inSingletonScope();

// GraphQL Resolvers
container.bind<TaskQueries>(TaskQueries).to(TaskQueries).inSingletonScope();
container.bind<AuthMutations>(AuthMutations).to(AuthMutations).inSingletonScope();
container.bind<TaskMutations>(TaskMutations).to(TaskMutations).inSingletonScope();

export default container;
