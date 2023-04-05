import { getAll, addUser, checkUser } from "../controller/user.controller";
import { Express } from "express";
const userRoute = (app: Express) => {
  app.get("/user", getAll);
  app.post("/postuser", addUser);
  app.post("/checkuser", checkUser);
};
export { userRoute };
