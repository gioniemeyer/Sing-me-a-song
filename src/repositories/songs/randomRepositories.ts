/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import connection from "../../database";

export async function getSongs() {
	const response = await connection.query(`
        SELECT * FROM songs   
    `);
	return response.rows;
}