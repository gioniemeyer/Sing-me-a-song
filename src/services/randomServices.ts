import * as randomRepositories from "../repositories/randomRepositories"

export async function getRandom() {
    const scoreLimit = 10;
    const musics:any[] = await randomRepositories.getSongs();
    let topMusics:any[] = [];
    let underMusics:any[] = [];

    musics.map(music => {
        if(music.score > scoreLimit) {
            topMusics.push(music)
        } else {
            underMusics.push(music)
        }
    });

    if(topMusics.length === 0) {
        return underMusics[0]
    }

    if(underMusics.length === 0) {
        return topMusics[0]
    }

    const choose = Math.random()
    if(choose <= 0.7) {
        topMusics = topMusics.sort(() => Math.random() - 0.5);
        return topMusics[0];
    } else {
        underMusics = underMusics.sort(() => Math.random() - 0.5);
        return underMusics[0];
    }
}