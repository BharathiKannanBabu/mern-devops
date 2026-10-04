const request = require("supertest");
const { server, app } = require("../index");
const mongoose = require("mongoose");

describe("GET /api/tasks", () => {
  it("it should return 200 ok", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
  });
  it("it should return an array ok", async () => {
    const res = await request(app).get("/api/tasks");
    expect(Array.isArray(res.body)).toBe(true);
    console.log(res.body);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});
