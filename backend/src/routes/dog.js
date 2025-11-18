import express from "express"
import ControllerDog from "../controllers/dog.js"

const routerDog = express.Router()

routerDog.get("/dogs", ControllerDog.FindAll)
routerDog.get("/dog/:index", ControllerDog.FindOne)
routerDog.post("/dog", ControllerDog.Create)
routerDog.put("/dog/:index", ControllerDog.Update)
routerDog.delete("/dog/:index", ControllerDog.Delete)

export default routerDog