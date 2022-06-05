const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE, process.env.PASSWORD, '', {
    host: process.env.HOST,
    dialect: 'mysql'
});

module.exports = db;