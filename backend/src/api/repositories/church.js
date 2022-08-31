import ChurchModel from '../models/churches';

class Church {
    list() {
        return ChurchModel.findAll()
    }
}

export default new Church();