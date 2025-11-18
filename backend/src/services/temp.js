import ModelTemp from "../models/temp.js"

class ServiceTemp {
    FindAll() {
        return ModelTemp.FindAll()
    }
    FindOne(index) {
        return ModelTemp.FindOne(index)
    }
    Create(value) {
        return ModelTemp.Create(value)
    }
    Update(index, value) {
        return ModelTemp.Update(index, value)
    }
    Delete(index) {
        return ModelTemp.Delete(index)
    }
}

export default new ServiceTemp()