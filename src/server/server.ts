import express, { Request, Response } from "express";
import cors from "cors";
import { router as dataRouter } from "./routes/dataRoute";

export class ExpressServer {
  public app: express.Application;
  public port: number = 9342;

  constructor() {
    console.log("server starting");
    this.app = express();
    this.app.use(express.json({ limit: "5mb" }));
    this.app.use(express.urlencoded({ limit: "5mb" }));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.listen(this.port, () => {
      console.log(`server started at ${this.port}`);
    });

    this.app.use("/data", dataRouter);

    this.app.get("/healthCheck", (_req: Request, res: Response) => {
      res.status(200).send(true);
    });

    this.app.use("/file", express.static("src/uploads"));

    this.app.get("/test/:xx", (req: any, res: any) => {
      let data = req.params;
      res.send("Data Received: " + JSON.stringify(data));
    });

    this.app.post("/test", (req: any, res: any) => {
      let data = req.body;
      res.send("Data Received: " + JSON.stringify(data));
    });
  }
}
