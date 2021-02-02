import {
  Association,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  Model,
} from 'sequelize';
import { ID, ObjectType, Field } from 'type-graphql';
import { IUser, IUserCreationAttributes } from '#Entities/types';
import Task from './Task';

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

  public getTasks!: HasManyGetAssociationsMixin<Task>;
  public addTask!: HasManyAddAssociationMixin<Task, string>;
  public hasTask!: HasManyHasAssociationMixin<Task, string>;
  public countTasks!: HasManyCountAssociationsMixin;
  public createTask!: HasManyCreateAssociationMixin<Task>;

  public readonly tasks?: Task[];

  public static associations: {
    tasks: Association<User, Task>;
  };
}

export default User;
