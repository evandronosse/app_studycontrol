import conn from '../../database'
import sequelize from 'sequelize';

const control = conn.define(
    "tab_control",
    {
        category: {
            type: sequelize.STRING,
            primaryKey: true,
        },
        id: {
            type: sequelize.INTEGER,
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_control",
        createdAt: false,
        updatedAt: false,
    }
);

export default control;

