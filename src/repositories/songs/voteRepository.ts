import connection from "../../database";

export async function upVote(id:number) {
    await connection.query(`
        UPDATE songs
        SET score = score + 1
        WHERE id = $1
    `, [id])
};

export async function downVote(id:number) {
    await connection.query(`
        UPDATE songs
        SET score = score - 1
        WHERE id = $1
    `, [id])
}