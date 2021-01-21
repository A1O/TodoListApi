import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { IUser } from '#types';

interface IUserCreationAttributes extends Optional<IUser, 'id'> {}

class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  public id!: string;
  public username!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const setUserModelOnSequelize = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
    }
  );

  return User;
};

export default User;
