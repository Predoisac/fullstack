import express from "express"
import router from "./routes/user.js";
import database from "./config/database.js";
import cors from "cors"

const app = express();  //inicalizando api through express
app.use(cors())
app.use(express.json())
app.use("/api", router)

const port = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info("Servidor rodando na porta 3000");
        })
    })
    .catch((e) => {
        console.log("no conectou")
    }) 
