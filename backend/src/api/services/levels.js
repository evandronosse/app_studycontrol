import LevelsRepositories from "../repositories/levels"


class Levels {
    constructor(level) {
        this.id = level.id;
        this.level = level.level;
        this.description = level.description;
    
    }
    static async list() {
        const levelList = await LevelsRepositories.list()
        return levelList;
    }
    async create() {
        return LevelsRepositories.create(this);
    }
}

export default Levels;