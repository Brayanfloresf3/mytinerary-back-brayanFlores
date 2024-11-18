import joi from "joi-oid";

const schemaItineraryCreated = joi.object({
    author: joi
    .object({
      name: joi
        .string()
        .trim()
        .pattern(/^[^\s]+(\s[^\s]+)*$/) 
        .required()
        .messages({
          "string.empty": "Author name is required",
          "string.pattern.base": "Author name cannot be just spaces",
          "any.required": "Author name is required",
        }),
      photo: joi
        .string()
        .uri()
        .required()
        .messages({
          "string.uri": "Author photo must be a valid URL",
          "string.empty": "Author photo is required",
          "any.required": "Author photo is required",
        }),
    })
    .required()
    .messages({
      "object.base": "Author must be an object with name and photo",
    }),
  city: joi.objectId().required().messages({
    "string.pattern.name": "City must be a valid ObjectId",
    "any.required": "City is required",
  }),
  price: joi.number().min(0).required().messages({
    "number.base": "Price must be a number",
    "number.min": "Price cannot be negative",
    "any.required": "Price is required",
  }),
  duration: joi.number().min(1).required().messages({
    "number.base": "Duration must be a number",
    "number.min": "Duration must be at least 1 hour",
    "any.required": "Duration is required",
  }),
  likes: joi.number().min(0).default(0).messages({
    "number.base": "Likes must be a number",
    "number.min": "Likes cannot be negative",
  }),
  hashtags: joi.array()
    .items(joi.string().pattern(/^#[a-zA-Z0-9]+$/).messages({
      "string.pattern.base": "Each hashtag must start with # and contain only alphanumeric characters",
    }))
    .max(4)
    .messages({
      "array.base": "Hashtags must be an array",
      "array.max": "You can only have up to 4 hashtags",
    }),
  comments: joi.array()
    .items(
      joi.object({
        user: joi.string().optional().messages({
          "string.base": "User must be a string",
        }),
        text: joi.string().optional().messages({
          "string.base": "Comment text must be a string",
        }),
        date: joi.date().default(Date.now).messages({
          "date.base": "Date must be a valid date",
        }),
      })
    )
    .optional()
    .messages({
      "array.base": "Comments must be an array of objects",
    }),
  activities: joi.array()
    .items(
      joi.object({
        name: joi.string().required().messages({
          "string.empty": "Activity name is required",
          "any.required": "Activity name is required",
        }),
        description: joi.string().required().messages({
          "string.empty": "Activity description is required",
          "any.required": "Activity description is required",
        }),
        photo: joi.string().uri().required().messages({
          "string.uri": "Activity photo must be a valid URL",
          "string.empty": "Activity photo is required",
          "any.required": "Activity photo is required",
        }),
      })
    )
    .required()
    .messages({
      "array.base": "Activities must be an array of objects",
      "any.required": "At least one activity is required",
    }),
});

export default schemaItineraryCreated;
