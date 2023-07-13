import express, { Express, Request, Response } from "express"
const port = 8000;

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("EXPRESS IS RUNNING")
});

app.listen(port, () => {
    console.log(`now listening on port ${port}`)
})