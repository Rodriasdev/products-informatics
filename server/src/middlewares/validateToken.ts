import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config/conf';
import UserService from '../service/User.service';


export const validateToken = (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers['authorization'];

  
  if (!authHeader) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  
  jwt.verify(authHeader, SECRET!, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido' });
    }

  

    next();
  });
};
