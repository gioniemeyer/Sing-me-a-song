import {Request, Response} from 'express';
import * as songService from '../services/songService';

export async function upVote(req: Request, res: Response) {
    try {
        let id = parseInt(req.params.id);

        if(!id) return res.sendStatus(403);

        const foundMusic = await songService.voteSong(id);

        if(!foundMusic) return res.sendStatus(404);
        
        return res.sendStatus(201);
        
    } catch(err) {
        return res.status(500).send(err);
    }
}

