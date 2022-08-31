import conn from '../../database'
import sequelize from 'sequelize';
import cities from './cities';
import levels from './levels';
import churches from './churches';

const users = conn.define(
  "tab_users",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    phone: {
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
    levels_id: {
      type: sequelize.INTEGER,
      references: {
        model: levels,
        key: "id",
      },
    },
    permission: {
      type: sequelize.STRING,
    },
    data: {
      type: sequelize.DATE,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    church_id: {
      type: sequelize.INTEGER,
      references: {
        model: churches,
        key: "id",
      },  
    },
    session: {
      type: sequelize.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
    tableName: "tab_users",
    createdAt: false,
    updatedAt: false,
  }
);

export default users;