import ChurchController from '../api/controllers/church';
// aqui é exportado uma função arrow anonima que necessita do parametro server para funcionar corretamente 

export default app => {
    app
        .route('/igrejas')
        // .post(ChurchController.create)
        .get(ChurchController.list)
    //     .options(ChurchController.options);

    app
        // .route('/igrejas/:id')
        // .get(ChurchController.show)
    //     .delete(ChurchController.delete)
    //     .put(ChurchController.update)
    //     .options(ChurchController.options);
};