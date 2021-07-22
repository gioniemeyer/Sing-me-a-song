import * as songRepository from "../repositories/songRepository";

export async function createSong(name:string, link:string) {

    const music = await songRepository.checkSong(link)

    if(music.length > 0) return false;

    await songRepository.createSong(name, link);

    return true;
}