import levelsController from '../api/controllers/levels';
// aqui é exportado uma função arrow anonima que necessita do parametro server para funcionar corretamente 

export default app => {
    app
        .route('/nivel')
        .post(levelsController.create)
        .get(levelsController.list)
    //     .options(levelsController.options);

    app
        // .route('/usuario/:id')
        // .get(levelsController.show)
    //     .delete(levelsController.delete)
    //     .put(levelsController.update)
    //     .options(levelsController.options);
};