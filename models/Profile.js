const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Profile = db.define("Profile", {
  bio: {
    type: DataTypes.STRING,
  },
  profilePicture: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.STRING, // Consider DataTypes.DATE if you want to handle it as a date
  },
});

module.exports = Profile;
