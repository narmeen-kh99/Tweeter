const Tweeter = function () {
  let postIdCounter = 3;
  let commentIdCounter = 6;
  let arrayPosts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  const getPosts = function () {
    return arrayPosts;
  };
  const addPost = function (text) {
    postIdCounter += 1;
    arrayPosts.push({
      text: text,
      id: "p" + postIdCounter,
      comments: [],
    });
    return getPosts();
  };
  const removePost = function (postID) {
    for (let postIndex in arrayPosts) {
      if (postID === arrayPosts[postIndex].id) {
        arrayPosts.splice(postIndex, 1);
      }
    }
    return getPosts();
  };
  const addComment = function (commentText, postID) {
    commentIdCounter += 1;
    for (post of arrayPosts) {
      if (postID === post.id) {
        post.comments.push({
          id: "c" + commentIdCounter,
          text: commentText,
        });
      }
    }
    return getPosts();
  };
  const removeComment = function (postID, commentID) {
    for (postIndex in arrayPosts) {
      if (postID === arrayPosts[postIndex].id) {
        for (commentIndex in arrayPosts[postIndex].comments) {
          if (arrayPosts[postIndex].comments[commentIndex].id === commentID) {
            arrayPosts[postIndex].comments.splice(commentIndex, 1);
          }
        }
      }
    }
    return getPosts();
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
