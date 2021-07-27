import * as randomRepositories from "../../repositories/songs/randomRepositories"
import { Song } from "../../repositories/songs/interfaces";

export async function getRandom() {
    const scoreLimit = 10;
    const musics:Song[] = await randomRepositories.getSongs();
    let topMusics:Song[] = [];
    let underMusics:Song[] = [];

    musics.map(music => {
        if(music.score > scoreLimit) {
            topMusics.push(music)
        } else {
            underMusics.push(music)
        }
    });

    const choose = Math.random()
    if(choose <= 0.7) {
        return underMusics[0] || topMusics[0];
    } else {
        return topMusics[0] || underMusics[0];
    }
}