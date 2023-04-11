import {
  getAllArticles,
  createArticle,
  updateArticle,
} from "../../src/service/articles.service";
import { ArticleModel } from "../../src/models/articles.model";

//jest.mock("../../src/models/user.model");
const mockArticles = [
  {
    id: "4",
    title: "hello",
    description: "how are you",
    content: "abc def ghi jkl mno pqr stu vwxyz",
    url: "ytwyeuidj",
  },
  {
    id: "2",
    title: "hello",
    description: "how are you",
    content: "abc def ghi jkl mno pqr stu vwxyz",
    url: "ytwyeuidj",
  },
];
const mockArticle = {
  id: "1",
  title: "hello",
  description: "how are you",
  content: "abc def ghi jkl mno pqr stu vwxyz",
  url: "ytwyeuidj",
};

describe("User model functions", () => {
  test("get all users", async () => {
    ArticleModel.findAll = jest.fn().mockResolvedValue(mockArticles);
    let result = await getAllArticles(1, 2, "id", "asc");
    expect(result).toBe(mockArticles);
  });

  test("create a new article", async () => {
    ArticleModel.create = jest.fn().mockResolvedValue(mockArticle);
    const result = await createArticle(
      mockArticle.title,
      mockArticle.description,
      mockArticle.content,
      mockArticle.url
    );
    expect(result).toBeDefined();
    expect(result).toBe(mockArticle);
  });

  test("update article", async () => {
    ArticleModel.update = jest.fn().mockResolvedValueOnce([1]);
    const result = await updateArticle(
      mockArticle.id,
      "Updated title",
      "Updated Description",
      "Updated Content",
      "updated-url"
    );
    expect(result).toEqual([1]);
  });
});
