import UserService from "../service/User.service";
import { Request, Response } from "express";
import { createJWT } from "../helpers/jwt";
import { SECRET } from "../config/conf";
import  Jwt, {JwtPayload}  from "jsonwebtoken";
import { UserDto } from "../types/user.dto";

class UserController{
    
    constructor(){}

    async register(req: Request,res: Response){
        try {
            
            const user = await UserService.create(req.body)
            const token = await createJWT({user})

            const data = {
                token,
                user
            }

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    };

    async login(req: Request, res: Response){
        try {
            const user = await UserService.getUserByEmailAndPassword(req.body);
        
            if (user === null) {
              const token = null
              res.status(200).json(token);
            } else {
              const token = await createJWT({user});
        
              const data = {
                token,
                user
              }
              res.status(200).json(data);
            }
          } catch (error) {
            console.log(error);
            res.sendStatus(500);
          }
    }

    async getUserByToken(req:Request,res:Response){
        const token = req.headers.authorization;
        
        if (!token) {
          return res.sendStatus(404);
        }

        let decodedToken: string | JwtPayload | UserDto
      
        try {
            decodedToken = Jwt.verify(token, SECRET!);
        } catch (error) {
            return res.status(401).send('Invalid token');
        }

        const userId = (decodedToken as JwtPayload).user.id
      
        const user = await UserService.findOne(userId);
      
        if (!user) {
          return res.sendStatus(404);
        }
      
        res.status(200).json(
          user
        );
    }

};

export default new UserController()