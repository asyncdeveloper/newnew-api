import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

import errors from "./middlewares/errors";
import routes from "./routes/index";
import path from "path";
import { NotFound } from "./utils/errors";

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

        // Handle 404 
        this.express.use((req, res) => {
            throw new NotFound("not_found");           
        });
        
        this.express.use(errors);        
    }

}

export default new App();