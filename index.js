const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here

// A User can have one Profile and vice versa
User.hasOne(Profile, { foreignKey: "userId" });
Profile.belongsTo(User, { foreignKey: "userId" });

// A User can have many Posts, but a Post can only belong to one User
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

// A Post can have many Comments, but a Comment can only belong to one Post
Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

// A User can have many Likes and vice versa
User.belongsToMany(Like, { through: "UserLikes", foreignKey: "userId" });
Like.belongsToMany(User, { through: "UserLikes", foreignKey: "likeId" });

module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
