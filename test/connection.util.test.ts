import { sequelize } from "../src/util/connection.util";

describe("Sequelize connection", () => {
  test("connect to the database", async () => {
    try {
      await sequelize.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      expect(false).toBe(true);
    }
  });
});
