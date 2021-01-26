import 'reflect-metadata';
import { Container } from 'inversify';
import { DependencyTypes } from './types';
import TodoListApi from '#TodoListApi';
import ExpressServer from '#ExpressServer';
import { ITodoListApi } from '#TodoListApi/types';
import { IExpressServer } from '#ExpressServer/types';
import { IDatabase } from '#SqlDatabase/types';
import SqlDatabase from '#SqlDatabase';

const container = new Container();

container.bind<ITodoListApi>(DependencyTypes.ITodoListApi).to(TodoListApi);
container.bind<IExpressServer>(DependencyTypes.IExpressServer).to(ExpressServer);
container.bind<IDatabase>(DependencyTypes.IDatabase).to(SqlDatabase);

export default container;
