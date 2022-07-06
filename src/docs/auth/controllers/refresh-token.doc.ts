const refreshToken = {
  get: {
    tags: ["User Authentication"],
    description: "Refresh user access token",
    operationId: "refreshAccessToken",
    parameters: [],
    requestBody: {},
    responses: {
      "403": { description: "Could not access the refresh token" },
    },
  },
};
export default refreshToken;
