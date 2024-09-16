import { sequelize } from "../db/connection";
import { DataTypes } from "sequelize";

export const Product = sequelize.define('product', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
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
    },
    dateLastMaintenance: {
        type: DataTypes.DATE,
        allowNull: true
    },

})