import {Request, Response} from 'express';
import getYouTubeID from 'get-youtube-id';

import connection from '../database';

export async function postSong(req: Request, res: Response) {
    try {
        const { name, youtubeLink } = req.body;
        
        if(!name || !getYouTubeID(youtubeLink)) {
            return res.sendStatus(403);
        }
        
        return res.sendStatus(201);
    } catch(err) {
        return res.status(500).send(err);
    }
}