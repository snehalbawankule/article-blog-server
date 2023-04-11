import {
  getAllUsers,
  createUser,
  userCheck,
} from "../../src/service/user.service";
const bcrypt = require("bcrypt");
import {
  getAll,
  addUser,
  checkUser,
} from "../../src/controller/user.controller";

//jest.mock("../service/user.service");
jest.mock("bcrypt");

describe("getAll()", () => {
  test("should return all users", async () => {
    const mockUsers = [{ name: "John Doe", email: "john.doe@example.com" }];
    const mockReq = {};
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    jest.fn().mockResolvedValue(mockUsers);
    await getAll(mockReq, mockRes);
    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(mockRes.json).toHaveBeenCalledWith(mockUsers);
    expect(mockRes.status).not.toHaveBeenCalled();
  });
});

// import { getAll, addUser } from "../../src/controller/user.controller";

// const mockUsers = [
//   {
//     name: "snehal",
//     email: "snehal@gmail.com",
//     profile: "user",
//     password: "password123",
//   },
//   {
//     name: "sana",
//     email: "sana@gmail.com",
//     profile: "user",
//     password: "password1234",
//   },
// ];
// describe("getAll", () => {
//   test("getAllUsers()", async () => {
//     const req = {};
//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis(),
//     };
//     const getAllUsersMock = jest.fn().mockResolvedValue(mockUsers);
//     await getAll(getAllUsersMock, res);
//     expect(getAllUsersMock).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledWith(mockUsers);
//     expect(res.status).not.toHaveBeenCalled();
//   });
//   test("return error message if getAllUsers() throws an error", async () => {
//     const req = {};
//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis(),
//     };
//     const error = new Error("Internal Server Error");
//     const getAllUsersMock = jest.fn().mockRejectedValue(error);
//     await getAll(req, res);
//     expect(getAllUsersMock).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledWith({ err: error });
//   });
// });
// describe("addUser", () => {
//   test("createUser", async () => {
//     const req = {
//       body: {
//         email: "test@example.com",
//         name: "Test User",
//         profile: "test",
//         password: "password",
//       },
//     };
//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis(),
//     };
//     const result = {
//       id: 1,
//       email: "test@example.com",
//       name: "Test User",
//       profile: "test",
//     };
//     const createUserMock = jest.fn().mockResolvedValue(result);

//     await addUser(req, res);

//     expect(createUserMock).toHaveBeenCalledTimes(1);
//     expect(createUserMock).toHaveBeenCalledWith(
//       "test@example.com",
//       "Test User",
//       "test",
//       "password"
//     );
//     expect(res.json).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledWith(result);
//     expect(res.status).not.toHaveBeenCalled();
//   });

//   test("if createUser() throws an error", async () => {
//     const req = {
//       body: {
//         email: "test@example.com",
//         name: "Test User",
//         profile: "test",
//         password: "password",
//       },
//     };
//     const res = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis(),
//     };
//     const error = new Error("Internal Server Error");
//     const createUserMock = jest.fn().mockRejectedValue(error);

//     await addUser(req, res);

//     expect(createUserMock).toHaveBeenCalledTimes(1);
//     expect(createUserMock).toHaveBeenCalledWith(
//       "test@example.com",
//       "Test User",
//       "test",
//       "password"
//     );
//     expect(res.status).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledTimes(1);
//     expect(res.json).toHaveBeenCalledWith({ message: "Server Error" });
//   });
