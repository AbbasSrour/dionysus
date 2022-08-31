const login = {
  post: {
    tags: ["User Authentication"],
    description: "User Login",
    operationId: "loginUser",
    parameters: [],
    requestBody: {
      content: {
        'application': {
          schema: {
            $ref: "#/components/schemas/LoginInput"
          }
        }
      }
    },
    responses: {
      '201': {
        description: "Success a verification link was sent to your email address"
      },
      '409': {
        description: "User with that email already exist",
      },
      '500': {
        description: "There was an error sending email, please try again"
      }
    }
  }
}
export default login;
