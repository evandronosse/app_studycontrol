
import sessionController from '../api/controllers/session'
// aqui é exportado uma função arrow anonima que necessita do parametro server para funcionar corretamente 
export default server => {
    // rota de login
    server
        .route('/logout/:id')
        //aqui contem um middleware de autenticação 
        //de usuário e em seguida ações de login
        .post(sessionController.logout);

};