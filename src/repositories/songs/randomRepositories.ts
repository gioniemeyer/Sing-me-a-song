/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import connection from "../../database";
import SongInterface from "../../interfaces/SongInterface";

export async function getSongs(): Promise<SongInterface[]> {
	const response = await connection.query(`
        SELECT * FROM songs   
    `);
	return response.rows;
}