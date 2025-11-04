import 'dotenv/config';
import Express from "express";
import { fileURLToPath } from "url";
import path from "node:path";
import cookieParser from "cookie-parser";
import { createRequire } from "node:module";
import type {CorsOptions} from "cors";
import { create } from "node:domain";
import dotenv from 'dotenv';
import router from "./src/routes";

dotenv.config({ path: path.resolve(__dirname, '.env.dev') });

const env = process.env.NODE_ENV;

const app = Express();
const port = 3000;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const require = createRequire(import.meta.url);
const cors: typeof import('cors') = require('cors');

//N'autorise que les origines définies et active les cookies (credentials)
const CORS_OPTIONS: CorsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}


app.use(cors(CORS_OPTIONS));

app.use(Express.static(path.join(_dirname, 'public')));
//Permet de décoder le corps des requêttes
app.use(Express.urlencoded({extended:true}))
//Permet de lire le corps des requêttes en JSON
app.use(Express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Running on port : ${port}`)
})

export default app;
