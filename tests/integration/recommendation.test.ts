import supertest from "supertest";
import app from "../../src/app";
import connection from "../../src/database";

import {Body} from "./bodies" 
import {WrongBody} from "./bodies" 

beforeEach(async () => {
  await connection.query("DELETE FROM songs");
});

afterAll(() => {
  connection.end();
});

describe("POST /recommendation", () => {
  it("should answer with status 201 when added recommendation", async () => {
    const response = await supertest(app).post("/recommendations").send(Body);
    expect(response.status).toBe(201);
  });

  it("should answer with status 403 when incorrect body", async () => {
    const response = await supertest(app).post("/recommendations").send(WrongBody);
    expect(response.status).toBe(403);
  });

  it("should answer with status 409 when link already exists", async () => {
    await supertest(app).post("/recommendations").send(Body);
    const response = await supertest(app).post("/recommendations").send(Body);
    expect(response.status).toBe(409);
  });
});

describe("GET /recommendations/top/:amount", () => {
  it("Should return status 200 when there's musics on DB", async() => {
    await supertest(app).post("/recommendations").send(Body);
    const response = await supertest(app).get(`/recommendations/top/1`);
    expect(response.status).toBe(200);
  });

  it("Should return an array with length <= amount from req.params", async() => {
    await supertest(app).post("/recommendations").send(Body);
    const response = await supertest(app).get(`/recommendations/top/1`);
    expect(response.body).toEqual(
      expect.arrayContaining([{
        id: expect.any(Number),
        name: expect.any(String),
        youtubeLink: expect.any(String),
        score: expect.any(Number)
      }])
    );
    expect(response.body.length).toBe(1);
  })

  it("Should return 401 when there isn't musics on DB", async () => {
    const response = await supertest(app).get("/recommendations/top/1");
    expect(response.status).toBe(401);
  });

  it("Should return 404 when invalid amount", async () => {
    const response = await supertest(app).get("/recommendations/top/-1");
    expect(response.status).toBe(404);
  })

})