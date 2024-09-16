import express, {Application} from "express";
import { PORT } from "./config/conf";
import cors from 'cors';
import morgan from "morgan";
import { sequelize } from "./db/connection";

class Server {

    private app: Application;
    private port: number | undefined

    constructor(){
        
        this.port = +PORT!
        this.app = express()
        

        this.dbconnect()
        this.middlewares()
    }

    async dbconnect():Promise<void>{
        try {
            await sequelize.authenticate()
            await sequelize.sync()

            console.log("database connected");
            
        } catch (error) {
            console.log(error);       
        }
    }

    
    middlewares():void{
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    Routes():void{

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening in the port ${this.port}`);
            
        })
    }

}


new Server().listen()