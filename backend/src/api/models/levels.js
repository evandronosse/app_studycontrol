import conn from '../../database'
import sequelize from 'sequelize';
 
const levels = conn.define('tab_level', {
    id: {
        type: sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    level: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.STRING
    },
},
{
    freezeTableName: true,
    tableName: 'tab_level',
    createdAt: false,
    updatedAt: false
})

export default levels;