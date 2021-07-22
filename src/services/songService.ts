import * as songRepository from "../repositories/songRepository";
import * as voteRepository from "../repositories/voteRepository"

export async function createSong(name:string, link:string) {

    const music = await songRepository.checkSong(link)

    if(music.length > 0) return false;

    await songRepository.createSong(name, link);

    return true;
}

export async function voteSong(id:number) {
    const music = await songRepository.findSong(id);

    if(!music) return false;

    const score:number = music.score;

    await voteRepository.upVote(id, score);

    return true;
}