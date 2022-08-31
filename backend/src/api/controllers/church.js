import ChurchService from '../services/church'

class Church {
    async list(req, res) {
        try {
            //list() é uma propriedade da classe  UserService
            //toda vez que eu uso UserService.list() estou epgando essa classe e utilizando neste fragmento do codigo
            const church = await ChurchService.list();
            res.json(church)
        } catch (err) {
            console.log(err);
        }
    }
}

export default new Church();