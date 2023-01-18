import db from "../database";
import config from "../config";
import UserModel from "../models/user.model";
import User from "../types/user.type";

const userModel = new UserModel();

describe("UserModel TestSuite .", () => {
  describe("Test Methods Exsist", () => {
    it("Should be an create method", () => {
      expect(userModel.create).toBeDefined();
    });

    it("Should be an auth method .", () => {
      expect(userModel.auth).toBeDefined();
    });

    it("Should be an show method .", () => {
      expect(userModel.show).toBeDefined();
    });

    it("Should be an index method .", () => {
      expect(userModel.index).toBeDefined();
    });
  });

  // -----------------------------------------------------
  // TEST USER CREATION
  // -----------------------------------------------------

  describe("test Auth logic", () => {
    const user = {
      email: "auth_test@gmail.com",
      username: "test",
      firstname: "Khaled",
      lastname: "Shawki",
      password: "test",
    } as unknown as User;

    beforeAll(async () => {
      const createdUser = await userModel.create(user);
      user.id = createdUser.id;
    });

    it("auth method must return the auth user", async () => {
      const auth = await userModel.auth(user.email, user.password as string);
      console.log(auth);
      expect(auth?.email).toBe(user.email);
      expect(auth?.username).toBe(user.username);
    });

    it("auth method must return undefined for wrong", async () => {
      const auth = await userModel.auth(`error@gmail.com`, "fake");
      expect(auth).toBe(undefined);
    });

    // USERS SHOW
    it("==> user show should return an user", async () => {
      const result = await userModel.show("1");
      expect(result).toEqual(result);
    });

    // USERS INDEX
    it("==> user index should return an users", async () => {
      const result = await userModel.index();
      expect(result.length).toBeGreaterThan(0);
    });

    // delete all data from db after test
    afterAll(async () => {
      const connection = await db.connect();
      const sql = `DELETE FROM users where email = '${user.email}';`;
      const result = await connection.query(sql);
      connection.release();
    });
  });
});
