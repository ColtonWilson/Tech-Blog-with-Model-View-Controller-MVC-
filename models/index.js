//Skeleton code from Module 14 lesson 20 /models/index.js
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

//User can have more than one comment
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

//Each comment belongs to a User, on delete also delete comments under
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

//User can have more than one Post
User.hasMany(Post, {
  foreignKey: 'user_id',
});

//Each post belongs to a User, on delete also delete comments under
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

//Post can have more than one comment
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

//Each comment belongs to a Post, on delete also delete comments under
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});


module.exports = { User, Comment, Post };