const Sequelize = require("sequelize");

const db = new Sequelize("studu", "root", "", {
  host: "34.122.19.214",
  dialect: "mysql",
});

module.exports = db;
