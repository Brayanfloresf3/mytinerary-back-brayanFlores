import joi from "joi-oid";

const schemaUsersCreated = joi.object({
  name: joi
    .string()
    .trim()
    .pattern(/^[^\s]+(\s[^\s]+)*$/)
    .alphanum() 
    .required()
    .messages({
      "string.alphanum": "Name can only contain letters and numbers",
      "string.empty": "Name is required",
      "string.pattern.base": "Name cannot contain only spaces",
      "any.required": "Name is required",
    }),
    lastname: joi
    .string()
    .trim()
    .pattern(/^[^\s]+(\s[^\s]+)*$/)
    .alphanum()
    .required()
    .messages({
      "string.alphanum": "Last name can only contain letters and numbers",
      "string.empty": "Last name is required",
      "string.pattern.base": "Last name cannot contain only spaces",
      "any.required": "Last name is required",
    }),
  email: joi
    .string()
    .email()
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),
  password: joi
    .string()
    .min(8)
    .max(16)
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must not exceed 16 characters",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
  photoUrl: joi
    .string()
    .uri()
    .required()
    .messages({
      "string.uri": "Photo URL must be a valid URI",
      "string.empty": "Photo URL is required",
      "any.required": "Photo URL is required",
    }),
  country: joi
    .string()
    .required()
    .messages({
      "string.empty": "Country is required",
      "any.required": "Country is required",
    }),
  isOnline: joi.boolean().default(false),
});

export default schemaUsersCreated;
