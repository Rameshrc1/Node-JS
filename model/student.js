const Sequelize = require('sequelize');
const db = require('../config/database');

const Student = db.define(
    'student',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            AllowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            AllowNull: true
        },
        city: {
            type: Sequelize.STRING,
            AllowNull: true
        },
        mobile: {
            type: Sequelize.STRING,
            AllowNull: true
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    },
    {
        tableName: 'student'
    }
);

module.exports = Student;