import Express from "express";
import { fileURLToPath } from "url";
import path from "node:path";
import cookieParser from "cookie-parser";
import { createRequire } from "node:module";
import type {CorsOptions} from "cors";
import { create } from "node:domain";
import router from "./routes";

const app = Express();
const port = 3000;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const require = createRequire(import.meta.url);
const cors: typeof import('cors') = require('cors');

//N'autorise que les origines définies et active les cookies (credentials)
const CORS_OPTIONS: CorsOptions = {
    origin: [process.env.CORS_ALLOWED ?? ''],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}

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
