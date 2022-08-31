import conn from '../../database'
import sequelize from 'sequelize';
import states from './states';

const cities = conn.define(
    "tab_cities",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
        },
        states_id: {
            type: sequelize.INTEGER,
            references: {
                model: states,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_cities",
        createdAt: false,
        updatedAt: false,
    }
);

export default cities