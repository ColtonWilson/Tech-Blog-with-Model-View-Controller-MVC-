//Skeleton from Module 14 lesson 20 /models/gallery.js
//Note: This is one post that is acting like a gallery and the comments are the paintings
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8,50]
        }
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        post_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8,500]
        }
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
    }
);

module.exports = Post;