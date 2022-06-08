const Sequelize = require("sequelize");

const db = new Sequelize("studu", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
