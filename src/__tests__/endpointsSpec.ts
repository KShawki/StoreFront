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
});
