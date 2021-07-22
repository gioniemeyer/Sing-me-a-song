import express from "express";
import cors from "cors";
import * as songController from "./controllers/songController";
import * as voteController from "./controllers/voteController";
import * as randomController from "./controllers/randomController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommendations", songController.postSong);

app.post("/recommendations/:id/upvote", voteController.upVote);

app.post("/recommendations/:id/downvote", voteController.downVote);

app.get("/recommendations/random", randomController.sendRecommendation);

export default app;