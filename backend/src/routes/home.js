import LoginController from '../api/controllers/login';
import AuthMiddleware from '../api/middlewares/auth';
// aqui é exportado uma função arrow anonima que necessita do parametro server para funcionar corretamente 
export default server => {
    // rota de login
    server
        .route('/')
        //aqui contem um middleware de autenticação 
        //de usuário e em seguida ações de login
        // .post(AuthMiddleware.local, LoginController.login)
        // aqui são as opções cors da rota
        // .options(LoginController.options);
};