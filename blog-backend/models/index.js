const sequelize = require('../config/db');
const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

// Define associations
User.hasMany(Blog);
Blog.belongsTo(User);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Blog,
  Comment,
};
