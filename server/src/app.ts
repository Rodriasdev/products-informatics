import express, {Application} from "express";
import { PORT } from "./config/conf";
import cors from 'cors';
import morgan from "morgan";
import { createTables } from "./db/relations";
import routerUser from "./routes/auth.routes";
import routerProduct from "./routes/product.routes";


class Server {

    private app: Application;
    private port: number | undefined

    constructor(){
        
        this.port = +PORT!
        this.app = express()
        

        this.dbconnect()
        this.middlewares()
        this.Routes()
    }

    async dbconnect():Promise<void>{
        try {
            await createTables()

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
        this.app.use('/api', routerUser)
        this.app.use('/api', routerProduct)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening in the port ${this.port}`);
            
        })
    }

}


new Server().listen()