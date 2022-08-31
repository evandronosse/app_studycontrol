import conn from '../../database'
import sequelize from 'sequelize';

const links = conn.define(
  "tab_links",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: sequelize.STRING,
    },
    link: {
        type: sequelize.STRING,
      },
  },
  {
    freezeTableName: true,
    tableName: "tab_links",
    createdAt: false,
    updatedAt: false,
  }
);

export default links;
