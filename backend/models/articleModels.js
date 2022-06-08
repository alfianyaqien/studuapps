const Sequelize = require("sequelize");
const db = require("../utils/database");

const { DataTypes } = Sequelize;

const Articles = db.define(
  "articles",
  {
    title: {
      type: DataTypes.STRING,
    },
    writer: {
      type: DataTypes.STRING,
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
    content: {
      type: DataTypes.TEXT("long"),
    },
    abstract: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = Articles;
