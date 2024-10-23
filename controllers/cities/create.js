import City from "../../models/City.js";

let createCities = async (req, res, next) => {
    try {
        console.log(req.body);
        const newCities = req.body;

        // Verificar si es un array
        if (Array.isArray(newCities)) {
            // Insertar múltiples ciudades
            const savedCities = await City.insertMany(newCities);
            return res.status(201).json({
                response: savedCities,
                message: 'Cities created successfully',
            });
        } else {
            // Crear una sola ciudad
            const savedCity = await City.create(newCities);
            return res.status(201).json({
                response: savedCity,
                message: 'City created successfully',
            });
        }
    } catch (error) {
        next(error);
    }
};

export default createCities;
