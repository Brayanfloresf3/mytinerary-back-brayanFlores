import 'dotenv/config.js';
import "../../config/dataBase.js"
import City from "../City.js"

const cities = [
  {
      name: "Paris",
      photo: "https://example.com/paris.jpg",
      country: "France",
      continent: "Europe",
      population: 2140526,
      description: "Known as the City of Light, Paris is famous for its iconic Eiffel Tower, world-class cuisine, and charming streets.",
      currency: {
          code: "EUR",
          symbol: "€"
      },
      languages: "French",
      timeZone: "UTC+1",
      weather: {
          climate: "Oceanic",
          averageTemperature: 12,
          bestTimeToVisit: "April to October"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 78,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 150,
          averageMealPrice: 30,
          transportationPrice: 10
      },
      isCapital: true
  },
  {
      name: "New York City",
      photo: "https://example.com/nyc.jpg",
      country: "United States",
      continent: "North America",
      population: 8336817,
      description: "The Big Apple is known for its towering skyscrapers, diverse culture, and bustling streets.",
      currency: {
          code: "USD",
          symbol: "$"
      },
      languages: "English",
      timeZone: "UTC-5",
      weather: {
          climate: "Humid subtropical",
          averageTemperature: 13,
          bestTimeToVisit: "April to June or September to November"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 70,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 200,
          averageMealPrice: 25,
          transportationPrice: 15
      },
      isCapital: false
  },
  {
      name: "Tokyo",
      photo: "https://example.com/tokyo.jpg",
      country: "Japan",
      continent: "Asia",
      population: 13929286,
      description: "A unique blend of ultra-modern and traditional, Tokyo is known for its technology, cuisine, and pop culture.",
      currency: {
          code: "JPY",
          symbol: "¥"
      },
      languages: "Japanese",
      timeZone: "UTC+9",
      weather: {
          climate: "Humid subtropical",
          averageTemperature: 16,
          bestTimeToVisit: "March to May or September to November"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 85,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 120,
          averageMealPrice: 15,
          transportationPrice: 8
      },
      isCapital: true
  },
  {
      name: "London",
      photo: "https://example.com/london.jpg",
      country: "United Kingdom",
      continent: "Europe",
      population: 8982000,
      description: "A city steeped in history, London offers iconic landmarks, world-class museums, and diverse neighborhoods.",
      currency: {
          code: "GBP",
          symbol: "£"
      },
      languages: "English",
      timeZone: "UTC+0",
      weather: {
          climate: "Temperate oceanic",
          averageTemperature: 11,
          bestTimeToVisit: "May to September"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 75,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 180,
          averageMealPrice: 25,
          transportationPrice: 12
      },
      isCapital: true
  },
  {
      name: "Rome",
      photo: "https://example.com/rome.jpg",
      country: "Italy",
      continent: "Europe",
      population: 4342212,
      description: "The Eternal City is a living museum of ancient history, art, and delicious cuisine.",
      currency: {
          code: "EUR",
          symbol: "€"
      },
      languages: "Italian",
      timeZone: "UTC+1",
      weather: {
          climate: "Mediterranean",
          averageTemperature: 15,
          bestTimeToVisit: "April to June or September to October"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 68,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 130,
          averageMealPrice: 20,
          transportationPrice: 9
      },
      isCapital: true
  },
  {
      name: "Sydney",
      photo: "https://example.com/sydney.jpg",
      country: "Australia",
      continent: "Oceania",
      population: 5312163,
      description: "Known for its stunning harbor, beautiful beaches, and iconic Opera House, Sydney is a vibrant coastal city.",
      currency: {
          code: "AUD",
          symbol: "A$"
      },
      languages: "English",
      timeZone: "UTC+10",
      weather: {
          climate: "Temperate",
          averageTemperature: 18,
          bestTimeToVisit: "September to November or March to May"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 82,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 140,
          averageMealPrice: 22,
          transportationPrice: 11
      },
      isCapital: false
  },
  {
      name: "Dubai",
      photo: "https://example.com/dubai.jpg",
      country: "United Arab Emirates",
      continent: "Asia",
      population: 3331420,
      description: "A city of superlatives, Dubai is known for its modern architecture, luxury shopping, and desert adventures.",
      currency: {
          code: "AED",
          symbol: "د.إ"
      },
      languages: "Arabic, English",
      timeZone: "UTC+4",
      weather: {
          climate: "Desert",
          averageTemperature: 28,
          bestTimeToVisit: "November to March"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 83,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 180,
          averageMealPrice: 30,
          transportationPrice: 14
      },
      isCapital: false
  },
  {
      name: "Rio de Janeiro",
      photo: "https://example.com/rio.jpg",
      country: "Brazil",
      continent: "South America",
      population: 6320446,
      description: "Famous for its Carnival, beautiful beaches, and the iconic Christ the Redeemer statue.",
      currency: {
          code: "BRL",
          symbol: "R$"
      },
      languages: "Portuguese",
      timeZone: "UTC-3",
      weather: {
          climate: "Tropical savanna",
          averageTemperature: 24,
          bestTimeToVisit: "December to March"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 55,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 100,
          averageMealPrice: 15,
          transportationPrice: 7
      },
      isCapital: false
  },
  {
      name: "Barcelona",
      photo: "https://example.com/barcelona.jpg",
      country: "Spain",
      continent: "Europe",
      population: 1620343,
      description: "A city known for its unique architecture, vibrant culture, and beautiful beaches.",
      currency: {
          code: "EUR",
          symbol: "€"
      },
      languages: "Spanish, Catalan",
      timeZone: "UTC+1",
      weather: {
          climate: "Mediterranean",
          averageTemperature: 18,
          bestTimeToVisit: "May to June or September to October"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 72,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 120,
          averageMealPrice: 20,
          transportationPrice: 8
      },
      isCapital: false
  },
  {
      name: "Amsterdam",
      photo: "https://example.com/amsterdam.jpg",
      country: "Netherlands",
      continent: "Europe",
      population: 872680,
      description: "Famous for its canals, cycling culture, and rich history in art and architecture.",
      currency: {
          code: "EUR",
          symbol: "€"
      },
      languages: "Dutch",
      timeZone: "UTC+1",
      weather: {
          climate: "Oceanic",
          averageTemperature: 10,
          bestTimeToVisit: "April to May or September to November"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 76,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 140,
          averageMealPrice: 25,
          transportationPrice: 9
      },
      isCapital: true
  },
  {
      name: "Istanbul",
      photo: "https://example.com/istanbul.jpg",
      country: "Turkey",
      continent: "Europe/Asia",
      population: 15460000,
      description: "A city straddling two continents, known for its rich history, stunning mosques, and vibrant bazaars.",
      currency: {
          code: "TRY",
          symbol: "₺"
      },
      languages: "Turkish",
      timeZone: "UTC+3",
      weather: {
          climate: "Mediterranean",
          averageTemperature: 14,
          bestTimeToVisit: "April to May or September to November"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 65,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 80,
          averageMealPrice: 10,
          transportationPrice: 5
      },
      isCapital: false
  },
  {
      name: "Singapore",
      photo: "https://example.com/singapore.jpg",
      country: "Singapore",
      continent: "Asia",
      population: 5685807,
      description: "A modern city-state known for its cleanliness, efficient public transport, and diverse food scene.",
      currency: {
          code: "SGD",
          symbol: "S$"
      },
      languages: "English, Malay, Mandarin, Tamil",
      timeZone: "UTC+8",
      weather: {
          climate: "Tropical rainforest",
          averageTemperature: 27,
          bestTimeToVisit: "February to April"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 90,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 160,
          averageMealPrice: 20,
          transportationPrice: 7
      },
      isCapital: true
  },
  {
      name: "Prague",
      photo: "https://example.com/prague.jpg",
      country: "Czech Republic",
      continent: "Europe",
      population: 1324277,
      description: "Known for its beautiful architecture, rich history, and famous beer culture.",
      currency: {
          code: "CZK",
          symbol: "Kč"
      },
      languages: "Czech",
      timeZone: "UTC+1",
      weather: {
          climate: "Oceanic",
          averageTemperature: 9,
          bestTimeToVisit: "May to September"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 77,
          travelAdvisory: "Exercise normal precautions"
      },
      costs: {
          averageHotelPrice: 90,
          averageMealPrice: 15,
          transportationPrice: 6
      },
      isCapital: true
  },
  {
      name: "San Francisco",
      photo: "https://example.com/sanfrancisco.jpg",
      country: "United States",
      continent: "North America",
      population: 883305,
      description: "Known for its iconic Golden Gate Bridge, diverse neighborhoods, and thriving tech scene.",
      currency: {
          code: "USD",
          symbol: "$"
      },
      languages: "English",
      timeZone: "UTC-8",
      weather: {
          climate: "Mediterranean",
          averageTemperature: 14,
          bestTimeToVisit: "September to November"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 68,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 220,
          averageMealPrice: 30,
          transportationPrice: 18
      },
      isCapital: false
  },
  {
      name: "Cairo",
      photo: "https://example.com/cairo.jpg",
      country: "Egypt",
      continent: "Africa",
      population: 9539673,
      description: "Home to ancient pyramids and rich history, Cairo is a bustling metropolis on the Nile River.",
      currency: {
          code: "EGP",
          symbol: "£"
      },
      languages: "Arabic",
      timeZone: "UTC+2",
      weather: {
          climate: "Hot desert",
          averageTemperature: 22,
          bestTimeToVisit: "October to April"
      },
      transportation: {
          hasAirport: true
      },
      safety: {
          safetyIndex: 58,
          travelAdvisory: "Exercise increased caution"
      },
      costs: {
          averageHotelPrice: 70,
          averageMealPrice: 8,
          transportationPrice: 3
      },
      isCapital: true
  }
];

City.insertMany(cities)
  .then(() => {
    console.log("dateses inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  })

