const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./configDB.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;