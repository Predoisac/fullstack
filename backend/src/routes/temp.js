import express from "express"
import ControllerTemp from "../controllers/temp.js"

const routerTemp = express.Router()

routerTemp.get("/temps", ControllerTemp.FindAll)
routerTemp.get("/temp/:index", ControllerTemp.FindOne)
routerTemp.post("/temp", ControllerTemp.Create)
routerTemp.put("/temp/:index", ControllerTemp.Update)
routerTemp.delete("/temp/:index", ControllerTemp.Delete)

export default routerTemp