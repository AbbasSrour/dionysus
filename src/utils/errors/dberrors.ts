export default class DatabaseError extends Error {
  constructor(message: string) {
    if (!message) super("SQL Command Didn't Work.");
    else super(message);
    this.name = this.constructor.name;
  }
}

export class InsertionError extends DatabaseError {
  constructor(message: string) {
    if (!message) super("Insertion Did Not Work, Inserted Wrong Values");
    else super(message);
  }
}

export class UserNameError extends InsertionError {
  constructor(message: string) {
    if (!message) super("The Username Inserted Is Not Valid");
    else super(message);
  }
}

export class EmailError extends InsertionError {
  constructor(message: string) {
    if (!message) super("The Email Inserted Is Not Valid");
    else super(message);
  }
}

export class PasswordError extends InsertionError {
  constructor(message: string) {
    if (!message) super("The Password Inserted Is Not Valid");
    else super(message);
  }
}
