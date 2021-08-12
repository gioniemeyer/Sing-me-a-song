/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Request, Response} from "express";
import * as randomServices from "../../services/songs/randomServices";

export async function sendRecommendation(req: Request, res: Response) {
	try {
		const music = await randomServices.getRandom();

		if(!music) return res.sendStatus(404);
    
		return res.status(200).send(music);
	} catch(err) {
		console.log(err);
		return res.status(500).send(err);
	}
}