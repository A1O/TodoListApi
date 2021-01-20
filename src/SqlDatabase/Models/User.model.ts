import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface UserAttributes {
  id: string;
  username: string;
  password: string;
}

interface IUserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, IUserCreationAttributes> implements UserAttributes {
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
