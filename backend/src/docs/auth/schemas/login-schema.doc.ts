const loginSchema = {
  LoginInput: {
    type: "object",
    properties: {
      email: {
        type: "string",
        description: "User email should verified",
        example: "mark.heart@gmail.com",
      },
      password: {
        type: "string",
        description: "User password",
        example: "helloworld"
      }
    }

  }
}
export default loginSchema;
