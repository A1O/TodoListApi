import type {
  Association,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
} from 'sequelize';
import { Model } from 'sequelize';
import { ID, ObjectType, Field, registerEnumType } from 'type-graphql';
import { IUser, IUserCreationAttributes, UserRole } from './types';
import Task from '../Task';

@ObjectType()
class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  @Field(() => ID)
  public userId!: string;
  @Field()
  public username!: string;
  @Field()
  public password!: string;

  @Field(() => UserRole)
  public role!: UserRole;

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

registerEnumType(UserRole, {
  name: 'UserRole',
});

export default User;
