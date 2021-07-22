import connection from "../database";

export async function upVote(id:number, score:number) {
    await connection.query(`
        UPDATE songs
        SET score = $1
        WHERE id = $2
    `, [score + 1, id])
};

export async function downVote(id:number, score:number) {
    await connection.query(`
        UPDATE songs
        SET score = $1
        WHERE id = $2
    `, [score - 1, id])
}