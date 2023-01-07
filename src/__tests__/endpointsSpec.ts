import supertest from "supertest";
import app from "../index";

const req = supertest(app);

describe("EndPoints Test Suites", () => {
  // test main page
  it("test main page", async () => {
    const res = await req.get("/api/users/index");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test create user page", async () => {
    const res = await req.post("/api/users/create");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test get all users page", async () => {
    const res = await req.get("/api/users/index");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test get specific user page", async () => {
    const res = await req.get("/api/users/show/1");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test create product page", async () => {
    const res = await req.post("/api/products/create");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test get all prodcuts page", async () => {
    const res = await req.get("/api/products/index");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test get specific product page", async () => {
    const res = await req.get("/api/products/show/1");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test get all orders page", async () => {
    const res = await req.get("/api/orders/index");
    console.log(res);
    expect(res.status).toBe(200);
  });

  it("test create order page", async () => {
    const res = await req.post("/api/orders/create");
    console.log(res);
    expect(res.status).toBe(200);
  });
});
