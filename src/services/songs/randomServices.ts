/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as randomRepositories from "../../repositories/songs/randomRepositories";

export async function getRandom() {
	const scoreLimit = 10;
	const musics:any[] = await randomRepositories.getSongs();
	let topMusics:any[] = [];
	let underMusics:any[] = [];

	musics.map(music => {
		if(music.score > scoreLimit) {
			topMusics.push(music);
		} else {
			underMusics.push(music);
		}
	});

	const choose = Math.random();
	if(choose <= 0.7) {
		if(topMusics.length === 0) {
			underMusics = underMusics.sort(() => Math.random() - 0.5);
			return underMusics[0];
		}
		topMusics = topMusics.sort(() => Math.random() - 0.5);
		return topMusics[0];
	} else {
		if(underMusics.length === 0) {
			topMusics = topMusics.sort(() => Math.random() - 0.5);
			return topMusics[0];
		}
		underMusics = underMusics.sort(() => Math.random() - 0.5);
		return underMusics[0];
	}
}