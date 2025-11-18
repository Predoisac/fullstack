const temperatures = new Array(30.9, 27.5, 10.0)

class ModelTemp {
    FindAll() {
        return temperatures
    }
    FindOne(index) {
        return temperatures[index]
    }
    Create(name) {
        temperatures.push(name)
    }
    Update(index, name) {
        temperatures[index] = name
    }
    Delete(index) {
        temperatures.splice(index, 1)
    }
}

export default new ModelTemp()