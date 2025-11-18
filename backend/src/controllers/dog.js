import ServiceDog from "../services/dog.js"

class ControllerDog {
    FindAll(req, res) {
        try {
            const result = ServiceDog.FindAll()

            res.status(200).send({ dogs: result })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    FindOne(req, res) {
        try {
            const index = req.params.index
            const result = ServiceDog.FindOne(index)

            res.status(200).send({ dog: result })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    Create(req, res) {
        try {
            const name = req.body.name
            ServiceDog.Create(name)

            res.status(201).send()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    Update(req, res) {
        try {
            const index = req.params.index
            const name = req.body.name
            ServiceDog.Update(index, name)
            res.status(200).send()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    Delete(req, res) {
        try {
            const index = req.params.index
            ServiceDog.Delete(index)

            res.status(204).send()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

export default new ControllerDog()