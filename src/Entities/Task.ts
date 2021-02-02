import { Model } from 'sequelize';
import { Field, ID, ObjectType } from 'type-graphql';
import { ITask, ITaskCreationAttributes } from '#Entities/types';

@ObjectType()
class Task extends Model<ITask, ITaskCreationAttributes> implements ITask {
  @Field(() => ID)
  public id!: string;

  @Field()
  public title!: string;

  @Field({ nullable: true })
  public description?: string;

  @Field(() => ID)
  public userId!: string;

  @Field()
  public readonly createdAt!: Date;

  @Field()
  public readonly updatedAt!: Date;
}

export default Task;
