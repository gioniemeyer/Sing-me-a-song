import supertest from "supertest";
import app from "../../src/app";
import connection from "../../src/database";

const body = {
  name: "Luísa Sonza - Penhasco",
  link: "https://www.youtube.com/watch?v=HsCUsBVlmgQ"
}
const wrongBody = {
  name: "Luísa Sonza - Penhasco",
  link: "https://www.globo.com/"
}

beforeEach(async () => {
  await connection.query("DELETE FROM songs");
});

afterAll(() => {
  connection.end();
});

describe("POST /recommendation", () => {
  it("should answer with status 201 when added recommendation", async () => {
    const response = await supertest(app).post("/recommendations").send(body);
    expect(response.status).toBe(201);
  });

  it("should answer with status 403 when incorrect body", async () => {
    const response = await supertest(app).post("/recommendations").send(wrongBody);
    expect(response.status).toBe(403);
  });

  it("should answer with status 409 when link already exists", async () => {
    await supertest(app).post("/recommendations").send(body);
    const response = await supertest(app).post("/recommendations").send(body);
    expect(response.status).toBe(409);
  });
});
