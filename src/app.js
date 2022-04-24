import express from "express";
import db from "./config/dbConect.js";
import routes from "./routes/index.js";

import chalk from "chalk";

db.on("error",console.log.bind(console,'Erro de conexão'))
db.once("open",()=>{
    console.log(chalk.bgBlackBright.greenBright("conexão com o banco feito com sucesso"))
})

const app = express();
app.use(express.json());
routes(app);
 
export default app
