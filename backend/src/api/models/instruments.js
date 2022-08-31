import conn from '../../database'
import sequelize from 'sequelize';
import users from './users';

const instruments = conn.define(
    "tab_instruments",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
        },
        image: {
            type: sequelize.BLOB,
        },
        users_id: {
            type: sequelize.INTEGER,
            references: {
                model: users,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_instruments",
        createdAt: false,
        updatedAt: false,
    }
);

export default instruments;