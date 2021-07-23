import * as songRepository from "../../repositories/songs/songRepository";

export async function createSong(name:string, link:string) {

    const music = await songRepository.checkSong(link)

    if(music.length > 0) return false;

    await songRepository.createSong(name, link);

    return true;
};

export async function filterSongs(amount:number) {
    const musics = await songRepository.getSongs(amount);
    return musics;
};