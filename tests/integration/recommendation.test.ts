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
