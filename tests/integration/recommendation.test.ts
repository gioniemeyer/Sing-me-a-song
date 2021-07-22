import supertest from "supertest";
import app from "../../src/app";

const body = {
  name: "Luísa Sonza - Penhasco",
  youtubeLink: "https://www.youtube.com/watch?v=HsCUsBVlmgQ"
}
const wrongBody = {
  name: "Luísa Sonza - Penhasco",
  youtubeLink: "https://www.globo.com/"
}

describe("POST /recommendation", () => {
  it("should answer with status 201 when added recommendation", async () => {
    const response = await supertest(app).post("/recommendations").send(body);
    expect(response.status).toBe(201);
  });

  it("should answer with status 403 when incorrect body", async () => {
    const response = await supertest(app).post("/recommendations").send(wrongBody);
    expect(response.status).toBe(403);
  });

  // it("should answer with status 409 when link already exists", async () => {
  //   await supertest(app).post("/recommendations").send(body);
  //   const response = await supertest(app).post("/recommendations").send(body);
  //   expect(response.status).toBe(201);
  // });
});
