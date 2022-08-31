import LevelsService from '../services/levels'

class Levels {
    async list(req, res) {
        try {
            //list() é uma propriedade da classe  UserService
            //toda vez que eu uso UserService.list() estou epgando essa classe e utilizando neste fragmento do codigo
            const level = await LevelsService.list();
            res.json(level)
        } catch (err) {
            console.log(err);
        }
    }
    async create(req, res) {
        const data = req.body;
        try {
            const levels = new LevelsService(data);
            await levels.create();

            const response = "Nível cadastrado com sucesso!"
            res.json({message: response})
        } catch (err) {
            next(err)
        }
    }
}

export default new Levels();