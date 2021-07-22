import express from "express";
import cors from "cors";
import * as songController from "./controllers/songController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", songController.postSong);

export default app;
