import * as genreRepository from "../../repositories/genres/genreRepository"

export async function checkGenre(name:string) {
    const invalidGenre = await genreRepository.checkGenre(name);

    if(invalidGenre) return false;

    await genreRepository.create(name);

    return true;
}