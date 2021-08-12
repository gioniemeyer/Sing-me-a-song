/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import connection from "../../src/database";

export async function clearDatabase () {
	await connection.query("TRUNCATE genres RESTART IDENTITY");
	await connection.query("TRUNCATE songs RESTART IDENTITY");
}

export async function endConnection () {
	await clearDatabase();
	await connection.end();
}