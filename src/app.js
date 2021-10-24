import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

class App {

    constructor () {
        this.express = express();

        this.setUpRoutes();         
    }

    setUpRoutes() {        
        this.express.use(express.json());
    }

}

export default new App();