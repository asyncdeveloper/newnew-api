class FileController {

    async create (req, res, next) {
        try {
            return res.json({
                
            });
        } catch (err) {
            next(err);
        }
    }

}

export default new FileController();