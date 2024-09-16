import jwt from 'jsonwebtoken';
import { SECRET } from '../config/conf';

export const createJWT = (payload:any) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET!, (err:any, token:any) => {
      if (err) {
        reject('Error al firmar el token');
      }

      resolve({token});
    });
  });
};