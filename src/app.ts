import express from "express";
import cors from "cors";
import * as songController from "./controllers/songs/songController"
import * as voteController from "./controllers/songs/voteController";
import * as randomController from "./controllers/songs/randomController";
import * as genreController from "./controllers/genres/genreController"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommendations", songController.postSong);

app.post("/recommendations/:id/upvote", voteController.upVote);

app.post("/recommendations/:id/downvote", voteController.downVote);

app.get("/recommendations/random", randomController.sendRecommendation);

app.get("/recommendations/top/:amount", songController.getSong);

app.post("/genres", genreController.create);

app.get("/genres", genreController.getGenres);

export default app;