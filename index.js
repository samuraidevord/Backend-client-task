import express from "express"
import { router } from "./routes/index.routes.js";
import morgan from "morgan"
import { PORT } from "./config.js";
const app = express();
app.use(morgan());
//Midlewares

//Datos Json 
app.use(express.json());
//Datas form 
app.use(express.urlencoded({extended: true}))
//Routes
app.use(router);

app.listen(PORT, () => (
    console.log(`Servidor corriento en: http://localhost:${PORT}`)
))