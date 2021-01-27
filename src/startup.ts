import container from '#Container';
import { DependencyTypes } from '#Container/types';
import { ITodoListApi } from '#TodoListApi/types';

const todoListApi = container.get<ITodoListApi>(DependencyTypes.ITodoListApi);
todoListApi.start();
