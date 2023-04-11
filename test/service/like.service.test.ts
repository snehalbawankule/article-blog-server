import { getAllLikes, addLike, unlike } from "../../src/service/like.service";
import { LikeModel } from "../../src/models/like.model";

//jest.mock("../../src/models/user.model");
const mockLikes = [
  {
    id: "1",
    email: "snehal@gmail.com",
  },
  {
    id: "2",
    email: "sana@gmail.com",
  },
];
const mockLike = {
  id: "2",
  email: "sita@gmail.com",
};

describe("Like model functions", () => {
  test("get all likes", async () => {
    LikeModel.findAll = jest.fn().mockResolvedValue(mockLikes);
    let result = await getAllLikes();
    expect(result).toBe(mockLikes);
  });

  test("add a new like", async () => {
    LikeModel.create = jest.fn().mockResolvedValue(mockLike);
    const result = await addLike(mockLike.id, mockLike.email);
    expect(result).toBeDefined();
    expect(result).toBe(mockLike);
  });
});
