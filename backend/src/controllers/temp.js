import ServiceTemp from "../services/temp.js"

class ControllerTemp {
    FindAll(_, res) {
        try {
            const result = ServiceTemp.FindAll()

            res.status(200).send({temperatures: result})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    FindOne(req, res) {
        try {
            const index = req.params.index
            const result = ServiceTemp.FindOne(index)

            res.status(200).send({temperature: result})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    Create(req, res) {
        try {
            const value = req.body.value
            ServiceTemp.Create(value)

            res.status(201).send()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    Update(req, res) {
        try {
            const index = req.params.index
            const value = req.body.value
            ServiceTemp.Update(index, value)

            res.status(200).send()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    Delete(req, res) {
        try {
            const index = req.params.index
            ServiceTemp.Delete(index)

            res.status(204).send()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

export default new ControllerTemp()