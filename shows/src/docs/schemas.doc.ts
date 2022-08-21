import authSchemas from "./auth/auth-schemas.doc";

const components = {
  components: {
    definitions: {
      Error: {
        type: "object",
        properties: {
          status: {
            type: "integer",
          },
          errtype: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
    schemas: {
      ...authSchemas,
    },
  },
};

export default components;
