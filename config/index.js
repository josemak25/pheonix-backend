require("dotenv").config();
const { Joi } = require("celebrate");

const envVarsSchema = Joi.object({
  HOST: Joi.string().default("localhost"),
  PORT: Joi.string().default("5000"),
  NODE_ENV: Joi.string()
    .valid("development", "production", "staging", "testing")
    .default("development"),
  MONGOOSE_DEBUG: Joi.string()
    .required()
    .description("Mongoose debugger"),
  MONGO_HOST: Joi.string()
    .required()
    .default("mongodb://localhost")
    .description("Database host name")
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  host: envVars.HOST,
  port: envVars.PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  mongoUri: envVars.MONGO_HOST
};

module.exports = config;
