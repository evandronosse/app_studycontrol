import LevelModel from '../models/levels';

class Levels {
    list() {
        return LevelModel.findAll()
    }
    create(data) {
        return LevelModel.create(data)

    }
}

export default new Levels();