import {Request, Response} from "express";
import * as randomServices from "../services/randomServices"

export async function sendRecommendation(req: Request, res: Response) {
    try {
        const music = await randomServices.getRandom();
        console.log(music);

        if(!music) return res.sendStatus(404);
    
        return res.status(200).send(music);
    } catch(err) {
        return res.status(500).send(err);
    }

}