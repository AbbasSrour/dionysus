const logout = {
  post: {
    tags: ["User Authentication"],
    description: "Logout current user",
    operationId: "logoutUser",
    parameters: [],
    requestBody: {
    },
    responses: {
      '401': {
        description: ["You are not logged in", "Invalid token or user doesn't exist"],
      },
    }
  }
}

export default logout;
