import usersController from '../api/controllers/users';
// aqui é exportado uma função arrow anonima que necessita do parametro server para funcionar corretamente 

export default app => {
    app
        .route('/usuario/novo')
        .post(usersController.create)
        .get(usersController.list)
    //     .options(usersController.options);

    app
        .route('/usuario/:id')
        .get(usersController.show)
    //     .delete(usersController.delete)
    //     .put(usersController.update)
    //     .options(usersController.options);
};