import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

import errors from "./middlewares/errors";
import routes from "./routes/index";

dotenv.config();

class App {

    constructor () {
        this.express = express();

        this.setUpRoutes();         
    }

    setUpRoutes() {        
        this.express.use(express.json());
        this.express.use("/", routes);
        this.express.use(errors);
    }

}

export default new App();