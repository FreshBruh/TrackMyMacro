import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world !");
});

app.get;

app.listen(8085, () => console.info("Port 8085"));
