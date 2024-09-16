import { Dialect, Sequelize } from "sequelize";
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_DIALECT, DB_USERNAME } from "../config/conf";

export const sequelize = new Sequelize(
    DB_NAME ?? "",
    DB_USERNAME ?? "",
    DB_PASSWORD,
    {
        host:DB_HOST,
        dialect: DB_DIALECT as Dialect
    }
) 
