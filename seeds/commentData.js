const { Comment } = require('../models');

const commentData = [
  {
    comment_date: 'May 4, 2022',
    comment_desc: 'This was a great post! Glad to read it.',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_date: 'April 15, 2022',
    comment_desc: 'I did not know this. Thank you!',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_date: 'June 26, 2022',
    comment_desc: 'You are awesome!',
    user_id: 1,
    post_id: 3,
  },
    {
    comment_date: 'July 4, 2022',
    comment_desc: 'Happy fourth of July!',
    user_id: 1,
    post_id: 2,
  },

];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
