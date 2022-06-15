class DatabaseError extends Error {
  constructor(message) {
    if (!message) super("SQL Command Didn't Work.");
    else super(message);
    this.name = this.constructor.name;
  }
}

class InsertionError extends DatabaseError {
  constructor(message) {
    if (!message) super("Insertion Did Not Work, Inserted Wrong Values");
    else super(message);
  }
}

class UserNameError extends InsertionError {
  constructor(message) {
    if (!message) super("The Username Inserted Is Not Valid");
    else super(message);
  }
}

class EmailError extends InsertionError {
  constructor(message) {
    if (!message) super("The Email Inserted Is Not Valid");
    else super(message);
  }
}

class PasswordError extends InsertionError {
  constructor(message) {
    if (!message) super("The Password Inserted Is Not Valid");
    else super(message);
  }
}

module.exports = {
  DatabaseError,
  InsertionError,
  UserNameError,
  EmailError,
  PasswordError,
};
