import conn from '../../database'
import sequelize from 'sequelize';
import documents_links from './documents-links';
import lesson from './lesson';

const documentsLesson = conn.define(
  "tab_lesson_documents_links",
  {
    documents_links: {
      type: sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: documents_links,
        key: "id",
      },
    },
    lesson_id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: lesson,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    tableName: "tab_lesson_documents_links",
    createdAt: false,
    updatedAt: false,
  }
);

export default documentsLesson;
