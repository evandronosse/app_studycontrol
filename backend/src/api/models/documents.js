import conn from '../../database'
import sequelize from 'sequelize';

const documents = conn.define(
    "tab_documents",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize.STRING,
        },
        file: {
            type: sequelize.BLOB,
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_documents",
        createdAt: false,
        updatedAt: false,
    }
);

export default documents;
