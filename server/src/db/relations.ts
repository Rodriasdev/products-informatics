import { sequelize } from "./connection";
import { UserModel } from "../models/User.model";
import { ProductModel } from "../models/Product.model";


export async function createTables() {
    await sequelize.sync({force: false});
}
