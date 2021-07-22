import connection from "../database";

export async function getSongs() {
    const response = await connection.query(`
        SELECT * FROM songs   
    `)
    return response.rows
}