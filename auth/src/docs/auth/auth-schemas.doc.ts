import registerSchema from "./schemas/register-schema.doc";
import loginSchema from "./schemas/login-schema.doc";

const authSchemas = {
  ...registerSchema,
  ...loginSchema,
}

export default authSchemas;
