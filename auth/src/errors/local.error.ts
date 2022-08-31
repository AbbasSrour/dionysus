export default class LocalError extends Error {
  status: string;
  isOperational: boolean;

  constructor(public errorCode: number, public message: string) {
    super(message);
    // this.status = `${errorCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
