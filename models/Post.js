const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Post = db.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Post;
