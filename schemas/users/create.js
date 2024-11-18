import joi from "joi-oid";

const schemaUsersCreated = joi.object({
  name: joi.string().alphanum().required().messages({
    "string.alphanum": "Name only letters and numbers",
    "string.empty": "Name is required",
    "any.required": "Name is required",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  address: joi.string().required().messages({
    "string.empty": "Address is required",
    "any.required": "Address is required",
  }),
  phone: joi
    .number()
    .integer()
    .min(1000000000)
    .max(9999999999)
    .required()
    .messages({
      "number.base": "Phone must be a number",
      "number.min": "Phone must be exactly 10 digits",
      "number.max": "Phone must be exactly 10 digits",
      "any.required": "Phone is required",
    }),
  password: joi.string().min(8).max(16).required().messages({
    "string.min": "Password must be at least 8 characters",
    "string.max": "Password must not exceed 16 characters",
    "any.required": "Password is required",
  }),
  isOnline: joi.boolean().default(false),
});

export default schemaUsersCreated;
