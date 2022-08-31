import conn from '../../database'
import sequelize from 'sequelize';
import levels from './levels';
import theme from './theme';
import users from './users';


const lesson = conn.define(
  "tab_lesson",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: sequelize.STRING,
    },
    number: {
      type: sequelize.STRING,
    },
    levels_id: {
        type: sequelize.INTEGER,
        references: {
          model: levels,
          key: "id",
        },
      },
      description: {
        type: sequelize.STRING,
      },
      theme: {
        type: sequelize.INTEGER,
        references: {
          model: theme,
          key: "id",
        },
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
    tableName: "tab_lesson",
    createdAt: false,
    updatedAt: false,
  }
);

export default lesson;

