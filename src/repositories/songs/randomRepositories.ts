import connection from "../../database";
import { Song } from "../../repositories/songs/interfaces";


export async function getSongs(): Promise<Song[]> {
    const response = await connection.query(`
        SELECT * FROM songs ORDER BY RANDOM() 
    `)
    return response.rows
}