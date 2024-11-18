import joi from "joi-oid";

const schemaCityCreated = joi.object({
  name: joi
    .string()
    .trim()
    .pattern(/^[^\s]+(\s[^\s]+)*$/)
    .required()
    .messages({
      "string.empty": "City name is required",
      "string.pattern.base": "City name cannot contain only spaces",
      "any.required": "City name is required",
    }),
  photo: joi.string().uri().required().messages({
    "string.empty": "Photo URL is required",
    "string.uri": "Photo must be a valid URL",
    "any.required": "Photo URL is required",
  }),
  country: joi
    .string()
    .trim()
    .pattern(/^[^\s]+(\s[^\s]+)*$/)
    .required()
    .messages({
      "string.empty": "Country is required",
      "string.pattern.base": "Country name cannot contain only spaces",
      "any.required": "Country is required",
    }),
  continent: joi
    .string()
    .trim()
    .pattern(/^[^\s]+(\s[^\s]+)*$/)
    .required()
    .messages({
      "string.empty": "Continent is required",
      "string.pattern.base": "Continent name cannot contain only spaces",
      "any.required": "Continent is required",
    }),
  population: joi.number().min(0).default(0).messages({
    "number.base": "Population must be a number",
    "number.min": "Population cannot be negative",
  }),
  description: joi.string().default("").messages({
    "string.base": "Description must be a string",
  }),
  currency: joi
    .object({
      code: joi.string().default("USD").messages({
        "string.base": "Currency code must be a string",
      }),
      symbol: joi.string().default("$").messages({
        "string.base": "Currency symbol must be a string",
      }),
    })
    .default({ code: "USD", symbol: "$" }),
  languages: joi.string().required().messages({
    "string.empty": "Languages are required",
    "any.required": "Languages are required",
  }),
  timeZone: joi.string().optional().messages({
    "string.base": "Time zone must be a string",
  }),
  weather: joi
    .object({
      climate: joi.string().optional().messages({
        "string.base": "Climate must be a string",
      }),
      averageTemperature: joi.number().optional().messages({
        "number.base": "Average temperature must be a number",
      }),
      bestTimeToVisit: joi.string().optional().messages({
        "string.base": "Best time to visit must be a string",
      }),
    })
    .optional(),
  transportation: joi
    .object({
      hasAirport: joi.boolean().default(false).messages({
        "boolean.base": "HasAirport must be true or false",
      }),
    })
    .default({ hasAirport: false }),
  safety: joi
    .object({
      safetyIndex: joi.number().min(0).max(100).optional().messages({
        "number.base": "Safety index must be a number",
        "number.min": "Safety index must be at least 0",
        "number.max": "Safety index cannot exceed 100",
      }),
      travelAdvisory: joi.string().optional().messages({
        "string.base": "Travel advisory must be a string",
      }),
    })
    .optional(),
  costs: joi
    .object({
      averageHotelPrice: joi.number().optional().messages({
        "number.base": "Average hotel price must be a number",
      }),
      averageMealPrice: joi.number().optional().messages({
        "number.base": "Average meal price must be a number",
      }),
      transportationPrice: joi.number().optional().messages({
        "number.base": "Transportation price must be a number",
      }),
    })
    .optional(),
  isCapital: joi.boolean().default(false).messages({
    "boolean.base": "IsCapital must be true or false",
  }),
});

export default schemaCityCreated;
