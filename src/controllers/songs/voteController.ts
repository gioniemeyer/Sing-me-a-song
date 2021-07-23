import {Request, Response} from 'express';
import * as voteService from '../../services/songs/voteService';

export async function upVote(req: Request, res: Response) {
    try {
        let id = parseInt(req.params.id);

        if(!id) return res.sendStatus(403);

        const foundMusic = await voteService.upgradeScore(id);

        if(!foundMusic) return res.sendStatus(404);
        
        return res.sendStatus(201);
        
    } catch(err) {
        return res.status(500).send(err);
    }
}

export async function downVote(req: Request, res: Response) {
    try {
        let id = parseInt(req.params.id);

        if(!id) return res.sendStatus(403);

        const foundMusic = await voteService.downgradeScore(id);

        if(!foundMusic) return res.sendStatus(404);
        
        return res.sendStatus(201);
        
    } catch(err) {
        return res.status(500).send(err);
    }
}
