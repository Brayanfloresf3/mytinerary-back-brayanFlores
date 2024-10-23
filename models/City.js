import { Schema, model } from "mongoose";

let collection = "Cities"

let citySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // Evita ciudades duplicadas
    },
    photo: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    currency: {
        code: {
            type: String,
            default: 'USD'
        },
        symbol: {
            type: String,
            default: '$'
        }
    },
    languages: {
        type: String,
        required: true
    },
    timeZone: {
        type: String  // Ejemplo: "UTC+1"
    },
    weather: {
        climate: String,  // Ejemplo: "Mediterranean"
        averageTemperature: Number,  // En Celsius
        bestTimeToVisit: String
    },
    transportation: {
        hasAirport: {
            type: Boolean,
            default: false
        }
    },
    safety: {
        safetyIndex: {
            type: Number,
            min: 0,
            max: 100
        },
        travelAdvisory: String
    },
    costs: {
        averageHotelPrice: Number,
        averageMealPrice: Number,
        transportationPrice: Number,
    },
    isCapital: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

let City = model(collection, citySchema);
export default City;