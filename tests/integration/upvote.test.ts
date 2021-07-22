import supertest from "supertest";
import app from "../../src/app";
import connection from "../../src/database";

import {Body} from "./bodies" 

beforeEach(async() => {
    await connection.query(`DELETE FROM songs`);
})

afterAll(() => {
    connection.end();
})

describe("POST /recommendation/:id/upvote", () => {
    it("should return 201 when song is correctly upvoted", async () => {
        await supertest(app).post("/recommendations").send(Body);
        const music = await connection.query(`
            SELECT * FROM songs
        `);
        const id = music.rows[0].id;
        const result = await supertest(app).post(`/recommendations/${id}/upvote`)
        expect(result.status).toBe(201);
    });

    it("should return 404 when music id does not exist", async () => {
        const result = await supertest(app).post(`/recommendations/1/upvote`)
        expect(result.status).toBe(404);

    })

    it("should return 403 when req.params.id is not a number", async () => {
        const result = await supertest(app).post(`/recommendations/id_sting/upvote`)
        expect(result.status).toBe(403);
    })
})