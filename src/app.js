import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

import errors from "./middlewares/errors";
import routes from "./routes/index";
import path from "path";

dotenv.config();

class App {

    constructor () {
        this.express = express();

        this.setUpRoutes();         
    }

    setUpRoutes() {                        
        this.express.use(express.json());            
        
        this.express.use("/public", express.static(path.resolve("./public")));
        
        this.express.use("/", routes);        
        
        this.express.use(errors);
    }

}

export default new App();