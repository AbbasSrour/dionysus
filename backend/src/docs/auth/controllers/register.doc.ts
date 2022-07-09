const register = {
  post: {
    tags: ["User Authentication"],
    description: "Create User",
    operationId: "registerUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/RegisterInput",
          },
        },
      },
    },
    responses: {
      "201": {
        description:
          "Success a verification link was sent to your email address",
      },
      "409": {
        description: "User with that email already exist",
      },
      "500": {
        description: "There was an error sending email, please try again",
      },
    },
  },
};

export default register;
