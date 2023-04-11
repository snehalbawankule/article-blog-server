import {
  getAllUsers,
  createUser,
  userCheck,
} from "../../src/service/user.service";
import { UserModel } from "../../src/models/user.model";

//jest.mock("../../src/models/user.model");
const mockUsers = [
  {
    name: "snehal",
    email: "snehal@gmail.com",
    profile: "user",
    password: "password123",
  },
  {
    name: "sana",
    email: "sana@gmail.com",
    profile: "user",
    password: "password1234",
  },
];
const mockUser = {
  name: "sita",
  email: "sita@gmail.com",
  profile: "user",
  password: "password12345",
};

describe("User model functions", () => {
  test("get all users", async () => {
    UserModel.findAll = jest.fn().mockResolvedValue(mockUsers);
    let result = await getAllUsers();
    expect(result).toBe(mockUsers);
  });

  test("create a new user", async () => {
    UserModel.create = jest.fn().mockResolvedValue(mockUser);
    const result = await createUser(
      mockUser.name,
      mockUser.email,
      mockUser.profile,
      mockUser.password
    );
    expect(result).toBeDefined();
    expect(result).toBe(mockUser);
  });

  test("check user", async () => {
    const email = "sita@gmail.com";
    UserModel.findOne = jest.fn().mockResolvedValue(email);
    const result = await userCheck(mockUser.email);
    expect(result).toBe(mockUser.email);
  });
  test("user not found", async () => {
    UserModel.findOne = jest.fn().mockResolvedValue(null);
    const result = await userCheck("xyz@gmail.com");
    expect(result).toEqual(null);
  });
});
