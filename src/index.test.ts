// index.test.ts
import request from "supertest";
import app from ".";

describe("GET /", () => {
  it('responds with "Hello from Express + TypeScript!"', async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello from Express + TypeScript!");
  });
  it('responds with "Hello from Express + TypeScript!"', async () => {
    const res = await request(app).get("/test");
    expect(res.status).toBe(200);
    expect(res.text).toBe("test file setup!");
  });
});
