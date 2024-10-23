const notFoundHandler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `The request with method ${req.method} and route ${req.originalUrl} does not exist`
    });
}

export default notFoundHandler;