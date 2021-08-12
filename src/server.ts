import "./setup";
import app from "./app";

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const port:number = Number(process.env.PORT);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`);
});
