class MongooseErrorHandler {

    logErrors(err, req, res, next) {

        if (!err) {
            return next(err, req, res, net);
        }

        console.log('Error Inserting New Data');
        if (err.name === "InvalidIdError") {
            res.status(404).send("route not found");
        }

        if (err.name === 'ValidationError') {
            const errors = [];

            Object.keys(err.errors).forEach(f => {
                console.log(err.errors[f].message);
                errors.push(err.errors[f].message);
            });
            res.status(500).send(errors);
        } else if (err.name === "MongoError") {
            res.status(500).json(err.toJSON());
        }
        return next(err, req, res, next);
    }

}

module.exports = new MongooseErrorHandler().logErrors;