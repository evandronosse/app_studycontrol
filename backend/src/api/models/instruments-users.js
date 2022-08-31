import conn from '../../database'
import sequelize from 'sequelize';
import users from './users';
import instruments from './instruments';

const instrumentsUsers = conn.define(
    "tab_instruments_users",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        users_id: {
            type: sequelize.INTEGER,
            references: {
                model: users,
                key: "id",
            },
        },
        date: {
            type: sequelize.DATEONLY,
        },
        instruments_id: {
            type: sequelize.INTEGER,
            references: {
                model: instruments,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_instruments_users",
        createdAt: false,
        updatedAt: false,
    }
);

export default instrumentsUsers;
