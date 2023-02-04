import {config} from "dotenv"
config();

const PORT = process.env.PORT || 5000;
const db = {
    host : process.env.HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT

}
export { PORT, db}