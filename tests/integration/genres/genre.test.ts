import supertest from "supertest";
import app from "../../../src/app";
import connection from "../../../src/database";
import { clearDatabase, endConnection } from "../../utils/database";

const body = {name: "funk carioca"};

beforeEach(async() => {
	await clearDatabase();
});

afterAll(() => {
	endConnection();
});

describe("POST /genres", () => {
	it("Should return 201 for valid name", async() => {
		const response = await supertest(app).post("/genres").send(body);
		expect(response.status).toBe(201);    
	});

	it("Should return 401 for invalid name", async() => {
		await supertest(app).post("/genres").send(body);
		const response = await supertest(app).post("/genres").send(body);
		expect(response.status).toBe(401);    
	});

	it("Should return 403 for wrong body", async() => {
		const response = await supertest(app).post("/genres").send({name: null});
		expect(response.status).toBe(403);    
	});
});

describe("GET /genres", () => {
	it("Should return status 201 and an array of objects if exists genres in DB", async() => {
		await supertest(app).post("/genres").send(body);
		const response = await supertest(app).get("/genres");
		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.arrayContaining([{
				id: expect.any(Number),
				name: expect.any(String)
			}])
		);
	});

	it("Should return status 401 if there isn't genres in DB", async() => {
		const response = await supertest(app).get("/genres");
		expect(response.status).toBe(401);
	});
});
