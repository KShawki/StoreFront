import supertest from "supertest";
import app from "../index";
import db from "../database";

const req = supertest(app);

describe("EndPoints Test Suites", () => {
  // test main page
  it("test main page", async () => {
    const res = await req.get("/api/users/index");
    console.log(res);
    expect(res.status).toBe(200);
    // expect()
  });

  it("==> test get all users ", async () => {
    const res = await req.get("/api/users/index");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("==> test get specific user ", async () => {
    const res = await req.get("/api/users/show/1");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("==> test get all prodcuts ", async () => {
    const res = await req.get("/api/products/index");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("==> test get specific product ", async () => {
    const res = await req.get("/api/products/show/1");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("==> test get all orders ", async () => {
    const res = await req.get("/api/orders/index");
    console.log(res);
    expect(res.status).toBe(200);
  });


  it("==> test create user", async () => {
    const res = await req.post("/api/users/create").send({
      email: "test_createUser@gmail.com",
      username: "test",
      firstname: "test",
      lastname: "test",
      password: "test",
    });
    console.log(res);
    expect(res.status).toBe(200);
  });

  afterAll(async () => {
    const connection = await db.connect();
    const sql = `DELETE FROM users where email = 'test_createUser@gmail.com';`;
    const result = await connection.query(sql);
    connection.release();
  });

  it("==> test create product ", async () => {
    const res = await req.post("/api/products/create").send({
      name: "Macbook Air M2",
      price: 1200,
      category: "Laptop",
    });
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("==> test create order ", async () => {
    const res = await req.post("/api/orders/create").send({
      user_id: 1,
      product_id: 1,
      status: "active",
    });
    console.log(res);
    expect(res.status).toBe(200);
  });
});
