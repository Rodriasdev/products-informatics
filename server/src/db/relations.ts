import { sequelize } from "./connection";
import { UserModel } from "../models/User.model";


export async function createTables() {
    await sequelize.sync({force: true});
}
