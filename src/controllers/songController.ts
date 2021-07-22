import {Request, Response} from 'express';

import connection from '../database';

export async function postSong(req: Request, res: Response) {
    try {
        return res.sendStatus(201);
    } catch(err) {
        return res.status(500).send(err);
    }
} 