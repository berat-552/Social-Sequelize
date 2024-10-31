const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Like = db.define("Like", {
  reactionType: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.STRING,
  },
});

module.exports = Like;
