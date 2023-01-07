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

  // describe("test Auth logix", () => {
  //   const user = {
  //     email: "tset@khalid.com",
  //     username: "test",
  //     first_name: "Test",
  //     last_name: "User",
  //     password: "test1234",
  //   } as unknown as User;

  //   beforeAll(async () => {
  //     const createdUser = await userModel.create(user);
  //     user.id = createdUser.id;
  //   });

  //   // delete all data from db after test
  //   afterAll(async () => {
  //     const connection = await db.connect();
  //     const sql = `DELETE FROM users;`;
  //     await connection.query(sql);
  //     connection.release();
  //   });

  //   it("auth method must return the auth user", async () => {
  //     const auth = await userModel.auth(user.email, user.password as string);
  //     expect(auth?.email).toBe(user.email);
  //     expect(auth?.username).toBe(user.username);
  //     expect(auth?.firstname).toBe(user.firstname);
  //     expect(auth?.lastname).toBe(user.lastname);
  //     expect(auth?.password).toBe(user.password);
  //   });

  //   it("auth method must return undefined for wrong", async () => {
  //     const auth = await userModel.auth(`error@gmail.com`, "fake");
  //     expect(auth).toBe(undefined);
  //   });
  // });
});
