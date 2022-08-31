import User from "../repositories/user";
import errors from '../../error'


class SessionController {
    //metodo post(browser/axios)
    async create(req, res, next) {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            const user = await User.showEmail(email);

            //verificar se o usuario existe
            if (!user) {
                // return res.status(401).json({ error: "User / password invalid" });
                throw new errors.IncorrectUsernameOrPassword()
            }

            //verifica se o usuario usou a senha correta
            if (password != user.password) {
                // return res.status(401).json({ error: "User / password invalid" });
                throw new errors.IncorrectUsernameOrPassword()
            }
            
            //logica para indicar que o user está logado
            await User.update({
                session: true
            },user.id)
            
            //enviando o id do usuario
            res.status(200).json({ id: user.id });
        }
        catch (err) {
            next(err)
        }
    }
    async logout(req, res, next) {
        try {
            const userId = req.params.id;
            const user = await User.showId(userId);
            await User.update({
                session: false
            },user.id)
            //obrigatorio
            res.status(204).send();
        }catch (err){
            next(err)
        }
    }
}
export default new SessionController();
