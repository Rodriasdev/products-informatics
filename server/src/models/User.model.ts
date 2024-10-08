import { sequelize } from "../db/connection";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define('user',{
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});