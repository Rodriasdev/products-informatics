import express, {Application} from "express";
import cors from 'cors';
import morgan from "morgan";

class Server {

    private app: Application;
    private port: number | undefined

    constructor(){
        
        this.port = +process.env.PORT! || 4000
        this.app = express()
    }

    

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening in the port ${this.port}`);
            
        })
    }

}


new Server().listen()