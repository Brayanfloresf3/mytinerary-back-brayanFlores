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

// // middlewares/bad_request_handler.js

// const badRequestHandler = (req, res, next) => {
    
//     const { body } = req;

//     // Ejemplo básico de validación
//     if (!body || Object.keys(body).length === 0) {
//         return res.status(400).json({
//             success: false,
//             message: 'Bad Request: Missing or invalid request body'
//         });
//     }

//     // Puedes agregar más validaciones aquí según tu necesidad
//     // if (!body.name || typeof body.name !== 'string') { ... }

//     next();  // Si pasa la validación, continúa al siguiente middleware o controlador
// };

// export default badRequestHandler;

