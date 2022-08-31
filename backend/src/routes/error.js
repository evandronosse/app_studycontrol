import errors from '../error'

export default app => {
    app.use((error, req, res, next) => {

        if (!error.status) {
            error = new errors.InternalServerError(error.message,error.stack)
        }
        // log dos erross
        if (error instanceof errors.InternalServerError) {
            console.log(req.url);
            console.log(req.headers);
            console.log(error.errorId);
            console.log(error.stack);
        }   

        res.status(error.status).json(
            {
                id: error.errorId,
                message: error.message
            }
        )
    })
}