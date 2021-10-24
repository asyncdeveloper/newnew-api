import { Router } from "express";
import file from "./file";

const routes = Router();

routes.use("/api/files", file);

routes.get("/", (_, res) => {
    res.json({ message: "Hello World. Its NewNew Api." });
});

export default routes;