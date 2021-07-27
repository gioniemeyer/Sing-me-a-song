import * as songRepository from "../../repositories/songs/songRepository";
import * as voteRepository from "../../repositories/songs/voteRepository"

export async function upgradeScore(id:number) {
    const music = await songRepository.findSong(id);

    if(!music) return false;

    await voteRepository.upVote(id);

    return true;
}

export async function downgradeScore(id:number) {
    const music = await songRepository.findSong(id);

    if(!music) return false;

    const score = music.score;

    if(score === -5) {
        await songRepository.deleteSong(id);
    } else {
        await voteRepository.downVote(id);
    }

    return true;
}
