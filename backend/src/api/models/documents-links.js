import conn from '../../database'
import sequelize from 'sequelize';
import documents from './documents';
import links from './links';

const documentsLink = conn.define(
    "tab_documents_links",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        documents_id: {
            type: sequelize.INTEGER,
            references: {
                model: documents,
                key: "id",
            },
        },
        links_id: {
            type: sequelize.INTEGER,
            references: {
                model: links,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_documents_links",
        createdAt: false,
        updatedAt: false,
    }
);

export default documentsLink;
