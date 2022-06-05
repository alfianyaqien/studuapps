const Sequelize = require("sequelize");

const db = new Sequelize('studu', 'root', '', {
    host: process.env.HOST !== 'production' ? 'localhost' : '0.0.0.0',
    dialect: 'mysql'
});

module.exports = db;