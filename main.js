const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());
$("#post").on("click", function () {
  let newPost = $("input").val();
  renderer.renderPosts(tweeter.addPost(newPost));
  renderer.renderPosts(tweeter.getPosts());
  $("input").val("");
});
$("#posts").on("click", ".commet", function () {
  let postID = $(this).closest(".post").attr("id");
  let text = $(this).siblings(".inputComeent").val();
  renderer.renderPosts(tweeter.addComment(text, postID));
  renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".delete", function () {
  let postID = $(this).closest(".post").attr("id");
  renderer.renderPosts(tweeter.removePost(postID));
  renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".delete-Comment", function () {
  let PostId = $(this).closest(".post").attr("id");
  let deleteCommentId = $(this).data("cid");
  tweeter.removeComment(PostId, deleteCommentId);
  renderer.renderPosts(tweeter.getPosts());
});
