//skeleton from Module 14 lesson 20 /seeds/index.js
const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedComment = require('./commentData');
const seedPosts = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPosts();

  await seedComment();

  process.exit(0);
};

seedAll();