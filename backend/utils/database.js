const Sequelize = require("sequelize");

const db = new Sequelize("studu", "root", "", {
  host: "34.132.71.8",
  dialect: "mysql",
});

module.exports = db;
