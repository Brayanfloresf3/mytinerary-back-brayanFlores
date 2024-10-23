const bad_request_handler = (requiredFields) => (req, res, next) => {
    // Verifica si el cuerpo de la solicitud es un array; si no, 
    //lo convierte en un array con un solo elemento
    const data = Array.isArray(req.body) ? req.body : [req.body]; 
    for (const item of data) {
        // Recorre cada campo requerido
        for (const field of requiredFields) {
            // Verifica si el campo requerido no está presente en el elemento
            if (!item[field]) {
                return res.status(400).json({
                    success: false,
                    errorName: 'BadRequestError',
                    apiRoute: req.originalUrl,
                    requestMethod: req.method,
                    message: `Missing required field: ${field}`
                });
            }
        }
    }
    next();
};

export default bad_request_handler;
