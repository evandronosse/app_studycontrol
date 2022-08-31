import UserService from '../services/user'

class User {
    //metodo post(browser/axios)
    async create(req, res, next) {
        const data = req.body;
        try {
            const user = new UserService(data);
            await user.create();

            const response = "Usuário adicionado com sucesso!"
            res.json({ message: response })

        } catch (err) {
            next(err)
        }
    }
    async list(req, res) {
        try {
            //list() é uma propriedade da classe  UserService
            //toda vez que eu uso UserService.list() estou epgando essa classe e utilizando neste fragmento do codigo
            const user = await UserService.list();
            res.json(user)
        } catch (err) {
            console.log("ERRO");
        }
    }
    async show(req, res, next) {
        try {
            const id  = req.params.id;
            const user = await UserService.show(id);
            return res.json(user);
          } catch (error) {
            console.log("deu ruim");
            next(error)
          }
    }
};
//new porque tenho que exportar um objeto da classe
export default new User();