import * as songRepository from "../../repositories/songs/songRepository";
import * as voteRepository from "../../repositories/songs/voteRepository"

export async function upgradeScore(id:number) {
    const music = await songRepository.findSong(id);

    if(!music) return false;

    const score:number = music.score;

    await voteRepository.upVote(id, score);

    return true;
}

export async function downgradeScore(id:number) {
    const music = await songRepository.findSong(id);

    if(!music) return false;

    const score:number = music.score;

    if(score === -5) {
        await songRepository.deleteSong(id);
    } else {
        await voteRepository.downVote(id, score);
    }

    return true;
}
