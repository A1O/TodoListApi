import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';
import TodoListApi from '#TodoListApi';
import ExpressServer from '#ExpressServer';
import { ITodoListApi } from '#TodoListApi/types';
import { IExpressServer } from '#ExpressServer/types';

const container = new Container();

container.bind<ITodoListApi>(DependencyTypes.ITodoListApi).to(TodoListApi);
container.bind<IExpressServer>(DependencyTypes.IExpressServer).to(ExpressServer);

export default container;
