import conn from '../../database'
import sequelize from 'sequelize';
import lesson from './lesson';
import users from './users';

const attendanceList = conn.define(
    "tab_attendanceList",
    {
        users_id: {
            type: sequelize.INTEGER,
            references: {
                model: users,
                key: "id",
            },
        },
        lesson_id: {
            type: sequelize.INTEGER,
            references: {
                model: lesson,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "tab_attendanceList",
        createdAt: false,
        updatedAt: false,
    }
);

export default attendanceList;
