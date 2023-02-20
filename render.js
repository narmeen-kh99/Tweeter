const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      $("#posts").append(
        `<div class='post', id=${post.id}><p class=post-text>"${post.text}"</p></div>`
      );
      const createList = `<div id=pc${post.id}></div>`;
      $(`#${post.id}`).append(createList);
      for (let comment of post.comments) {
        $(`#pc${post.id}`).append(
          `<button data-cid=${comment.id} id=${comment.id} class='delete-Comment' >x</button>`
        );
        $(`#pc${post.id}`).append(
          `<div data-cid=${comment.id} class='comments'>${comment.text}</div>`
        );
      }
      $(`#${post.id}`).append(
        "<input type='text'  placeholder='Got something to say?' class='inputComeent'>"
      );
      $(`#${post.id}`).append("<button class='commet'>comment</button>");
      $(`#${post.id}`).append(
        `<p><button data-pid=${post.id} class='delete'>Delete post</button></p>`
      );
    }
  };
  return {
    renderPosts: renderPosts,
  };
};
