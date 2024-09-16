import * as dotenv from 'dotenv';
dotenv.config();

export type vr = string | undefined

export const PORT :vr= process.env.PORT;
export const URI :vr= process.env.URI;
export const DB_NAME : vr= process.env.DB_NAME
export const DB_HOST:vr=process.env.DB_HOST
export const DB_PASSWORD :vr= process.env.DB_PASSWORD
export const DB_PORT:vr=process.env.DB_PORT
export const DB_DIALECT: string | undefined=process.env.DB_DIALECT
export const DB_USERNAME:vr=process.env.DB_USERNAME