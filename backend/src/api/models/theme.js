import conn from '../../database'
import sequelize from 'sequelize';

const theme = conn.define(
    "tab_theme",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        theme: {
            type: sequelize.STRING,
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_theme",
        createdAt: false,
        updatedAt: false,
    }
);

export default theme;
