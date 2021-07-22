import express from "express";
import cors from "cors";
import * as songController from "./controllers/songController";
import * as voteController from "./controllers/voteController"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommendations", songController.postSong);

app.post("/recommendations/:id/upvote", voteController.upVote);

export default app;