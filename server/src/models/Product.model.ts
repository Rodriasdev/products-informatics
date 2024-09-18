import { sequelize } from "../db/connection";
import { DataTypes } from "sequelize";

export const ProductModel = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    acquisition_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.ENUM("Reparación", "Disponible", "Fuera de servicio"),
        defaultValue: "Disponible",
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
})