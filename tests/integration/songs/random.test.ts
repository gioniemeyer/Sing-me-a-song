import app from "../../../src/app";
import connection from "../../../src/database";
import supertest from "supertest";
import { Body } from "../../factories/bodies";
import { clearDatabase, endConnection } from "../../utils/database";

beforeEach(async() => {
	await clearDatabase();
});

afterAll(() => {
	endConnection();
});

describe("GET /recommendations/random", () => {
	it("should return status 404 when there's no song in DB", async() => {
		const result = await supertest(app).get("/recommendations/random");
		expect(result.status).toBe(404);
	});

	it("should return status 200 and an object with a song recommendation", async () => {
		await supertest(app).post("/recommendations").send(Body);
		const result = await supertest(app).get("/recommendations/random");
		expect(result.body).toEqual(
			expect.objectContaining({
				id: expect.any(Number),
				name: expect.any(String),
				youtubeLink: expect.any(String),
				score: expect.any(Number)
			})
		);
		expect(result.status).toBe(200);
	});
});