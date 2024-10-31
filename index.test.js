const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  // Write your tests here

  test("replace with your test", function () {
    expect(true).toBe(true);
  });

  // Test association User and Profile
  test("User and Profile association is set", async () => {
    const user = await User.create({
      username: "JohnDoe",
      email: "john@example.com",
    });
    const profile = await Profile.create({ bio: "Hello World", userId: user.id });

    const userProfile = await user.getProfile();
    expect(userProfile).toBeDefined();
    expect(userProfile.userId).toEqual(user.id);
  });

  // Test association User and Post
  test("User can have many Posts", async () => {
    const user = await User.create({
      username: "JaneDoe",
      email: "jane@example.com",
    });
    const post1 = await Post.create({ title: "First Post", userId: user.id });
    const post2 = await Post.create({ title: "Second Post", userId: user.id });

    const userPosts = await user.getPosts();
    expect(userPosts).toHaveLength(2);
  });

  // Test association Post and Comments
  test("Post can have many Comments", async () => {
    const post = await Post.create({ title: "Lonely Post" });
    await Comment.create({ body: "First Comment", postId: post.id });
    await Comment.create({ body: "Second Comment", postId: post.id });

    const postComments = await post.getComments();
    expect(postComments).toHaveLength(2);
  });

  // Test association User and Like
  test("User can have many Likes and Likes can have many Users", async () => {
    const user = await User.create({
      username: "CoolUser",
      email: "cool@example.com",
    });
    const like = await Like.create({ reactionType: "Like" });

    await user.addLike(like);

    const userLikes = await user.getLikes();
    const likeUsers = await like.getUsers();

    expect(userLikes).toHaveLength(1);
    expect(likeUsers).toHaveLength(1);
  });
});
