const dogs = new Array("Rufus", "Buddy", "Tofu")

class ModelDog {
    FindAll() {
        return dogs
    }
    FindOne(index) {
        return dogs[index]
    }
    Create(value) {
        dogs.push(value)
    }
    Update(index, value) {
        dogs[index] = value
    }
    Delete(index) {
        dogs.splice(index, 1)
    }
}

export default new ModelDog()