import nodemailer from "nodemailer";
import { convert } from "html-to-text";
import pug from "pug";
import { env } from "./validate-env.util";
import { User } from "../../prisma/client";

const smtp = {
  host: env.EMAIL_HOST,
  user: env.EMAIL_USER,
  pass: env.EMAIL_PASS,
  port: env.EMAIL_PORT,
};

export class Email {
  userName: string;
  to: string;
  from: string;

  constructor(public user: User, public url: string) {
    this.userName = user.userName;
    this.to = user.email;
    // BUG: Email from not defined
    // this.from = `Dionysus Streaming ${}`;
  }

  async sendVerificationCode() {
    await this.send("verificationCode", "Your account verification code");
  }

  async sendPasswordResetToken() {
    await this.send(
      "resetPassword",
      "Your password reset token (valid for only 10 minutes)"
    );
  }

  private newTransport() {
    if (env.NODE_ENV === "production") console.log("Hello from email class");
    return nodemailer.createTransport({
      ...smtp,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });
  }

  private async send(template: string, subject: string) {
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      userName: this.userName,
      subject,
      url: this.url,
    });
    // Create mailOptions
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: convert(html),
      html,
    };

    // Send email
    const info = await this.newTransport().sendMail(mailOptions);
    console.log(nodemailer.getTestMessageUrl(info));
  }
}
