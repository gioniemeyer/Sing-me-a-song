import {Request, Response} from "express";
import * as genreService from "../../services/genres/genreService";

export async function create(req:Request, res: Response) {
    try {
        const {name} = req.body

        if(!name) return res.sendStatus(403);
        
        const genreAdd = await genreService.checkGenre(name);
    
        if (!genreAdd) {
            return res.sendStatus(401);
        } else {
            return res.sendStatus(201);
        }    
    } catch(err) {
        return res.status(500).send(err);
    }
}