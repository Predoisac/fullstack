import ModelDog from "../models/dog.js"

class ServiceDog {
    FindAll() {
        return ModelDog.FindAll()
    }
    FindOne(index) {
        return ModelDog.FindOne(index)
    }
    Create(name) {
        return ModelDog.Create(name)
    }
    Update(index, name) {
        return ModelDog.Update(index, name)
    }
    Delete(index) {
        return ModelDog.Delete(index)
    }
}

export default new ServiceDog()