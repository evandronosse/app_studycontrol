import churchRepositories from "../repositories/church"


class Church {
    constructor(church) {
        this.id = church.id;
        this.name = church.name;
        this.address = church.address;
        this.cities_id = church.cities_id;
    
    }
    static async list() {
        const churchList = await churchRepositories.list()
        return churchList;
    }
}

export default Church;