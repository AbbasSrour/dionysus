const registerSchema = {
  RegisterInput: {
    type: "object",
    properties: {
      userName: {
        type: "string",
        description: "The new user username, case sensitive and unique",
        example: "MovieBoy",
      },
      firstName: {
        type: "string",
        description: "The user's first name",
        example: "Mark",
      },
      lastName: {
        type: "string",
        description: "The user's last name",
        example: "Heart",
      },
      age: {
        type: "number",
        description: "The user's age, integer",
        example: 18,
      },
      email: {
        type: "string",
        description: "The user's email, unique, valid, and case insensitive",
        example: "mark.heart@gmail.com"
      },
      password: {
        type: "string",
        description: "A valid utf8 string with a minimum of 2 and a max of 32",
        // example: false,
      },
      passwordConfirm: {
        type: "string",
        description: "A valid utf8 string with a minimum of 2 and a max of 32 identical to password",
        // example: false,
      }
    },
  },
}

export default registerSchema;
