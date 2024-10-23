import City from '../../models/City.js'

let getAllCities = async (req, res) => {
    try {
        
        let allCities = await City.find();
        return res.status(200).json({
            response: allCities
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

let getCityById = async (req, res) => {
    try {
        let city = await City.findById(req.params.id)
        if (!city) {
            return res.status(404).json({ message: 'City not found' })
        }
        res.json(city)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { getAllCities, getCityById }