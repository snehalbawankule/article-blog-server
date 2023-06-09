import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";
const bcrypt = require("bcrypt");

const UserModel = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
UserModel.beforeCreate((user: any) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash: any) => {
      user.password = hash;
    })
    .catch((err: any) => {
      throw new Error();
    });
});
UserModel.afterCreate((user: any, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash: any) => {
      user.password = hash;
      return user.save({ fields: ["password"], returning: true });
    })
    .catch((err: any) => {
      throw new Error();
    });
});

export { UserModel };
