import container from '#Inversify';
import { DependencyTypes } from '#Inversify/types';
import { ITodoListApi } from '#TodoListApi/types';

const todoListApi = container.get<ITodoListApi>(DependencyTypes.ITodoListApi);
todoListApi.start();
