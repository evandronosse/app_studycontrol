import conn from '../../database'
import sequelize from 'sequelize';
import cities from './cities';

const churches = conn.define(
    "tab_churches",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
        },
        address: {
            type: sequelize.STRING,
        },
        cities_id: {
            type: sequelize.INTEGER,
            references: {
                model: cities,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_churches",
        createdAt: false,
        updatedAt: false,
    }
);
export default churches;

