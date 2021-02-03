import type {
  Association,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
} from 'sequelize';
import { Model } from 'sequelize';
import { ID, ObjectType, Field } from 'type-graphql';
import type { IUser, IUserCreationAttributes } from './types';
import Task from '../Task';

@ObjectType()
class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  @Field(() => ID)
  public id!: string;
  @Field()
  public username!: string;
  @Field()
  public password!: string;
  @Field()
  public readonly createdAt!: Date;
  @Field()
  public readonly updatedAt!: Date;

  @Field(() => [Task])
  public get tasks() {
    return this.getTasks();
  }

  public getTasks!: HasManyGetAssociationsMixin<Task>;
  public addTask!: HasManyAddAssociationMixin<Task, string>;
  public hasTask!: HasManyHasAssociationMixin<Task, string>;
  public countTasks!: HasManyCountAssociationsMixin;
  public createTask!: HasManyCreateAssociationMixin<Task>;

  public static associations: {
    tasks: Association<User, Task>;
  };
}

export default User;
