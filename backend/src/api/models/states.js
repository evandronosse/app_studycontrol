//MINHAS TABELAS PARA O BANCO DE DADOS

import conn from '../../database'
import sequelize from 'sequelize';

const states =
  conn.define('tab_states', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: sequelize.STRING
    },
    uf: {
      type: sequelize.STRING
    },
  },
    {
      freezeTableName: true,
      tableName: 'tab_states',
      createdAt: false,
      updatedAt: false
    })

export default states;