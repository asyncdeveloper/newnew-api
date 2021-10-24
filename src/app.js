import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

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
    }

}

export default new App();