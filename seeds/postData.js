const { Post } = require('../models');

const postData = [
  {
    title: 'How to work in C++',
    post_date: 'January 13, 2022',
    post_desc: 'Did you know you can print to the terminal with cout. It helps alot!',
    user_id: 1,
  },
  {
    title: 'I just graduated',
    post_date: 'March 17, 2022',
    post_desc: 'Just graduated with my Degree in CS, can"t wait to work!',
    user_id: 2,
  },
  {
    title: 'Have a great Day!',
    post_date: 'April 23, 2022',
    post_desc: 'Everyone have a fantastic day!',
    user_id: 2,
  },

];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
