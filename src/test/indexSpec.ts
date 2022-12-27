import supertest from "supertest";
import app from "../index";

const req = supertest(app);

describe("API Test End Points ", (): void => {
  it("basic endpoint", async () => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
  });
});
