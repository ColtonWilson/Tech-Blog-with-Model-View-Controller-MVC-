//Skeleton from Module 14 lesson 20 /models/painting.js
//Note: This is one comment that is acting like a painting in the gallery of posts
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comment_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
            len: [8,500]
        }
    },
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    post_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;