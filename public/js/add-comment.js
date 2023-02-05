const addCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-desc').value.trim();
  const date = new Date();
  const user = 1
  const post = 1

  if (content && date && user && post) {
    const response = await fetch('/api/users/add-comment', {
      method: 'POST',
      body: JSON.stringify({ date, content, user, post }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/post/:id');
    } else {
      alert('Failed to add comment.');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', addCommentHandler);