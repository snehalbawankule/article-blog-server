import {
  getAllComments,
  createComment,
} from "../../src/service/comments.service";
import { CommentModel } from "../../src/models/comments.model";

//jest.mock("../../src/models/user.model");
const mockComments = [
  {
    id: "1",
    commentId: "12jk3hkjh4",
    userName: "snehal",
    userProfile: "xyzjgjhh",
    rating: 5,
    comment: "nice article",
    isReply: false,
    replyTo: "",
  },
  {
    id: "1",
    commentId: "12345jhgjyhg",
    userName: "xyz",
    userProfile: "xyzjgjhh",
    rating: 0,
    comment: "thank you",
    isReply: true,
    replyTo: "12jk3hkjh4",
  },
];
const mockComment = {
  id: "1",
  commentId: "12yutrf",
  userName: "snehal",
  userProfile: "xyzjgjhh",
  rating: 5,
  comment: "nice art",
  isReply: false,
  replyTo: "",
};

describe("User model functions", () => {
  test("get all comments", async () => {
    CommentModel.findAll = jest.fn().mockResolvedValue(mockComments);
    let result = await getAllComments();
    expect(result).toBe(mockComments);
  });

  test("create a new article", async () => {
    CommentModel.create = jest.fn().mockResolvedValue(mockComment);
    const result = await createComment(
      mockComment.id,
      mockComment.commentId,
      mockComment.userName,
      mockComment.userProfile,
      mockComment.rating,
      mockComment.comment,
      mockComment.isReply,
      mockComment.replyTo
    );

    expect(result).toBeDefined();
    expect(result).toBe(mockComment);
  });
});
