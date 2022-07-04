import config from "config";
import { Users } from "../entities/users.entity";
import nodemailer from "nodemailer";
import { convert } from "html-to-text";
import pug from "pug";

const smtp = config.get<{
  host: string;
  user: string;
  pass: string;
  port: number;
}>("smtp");

export class Email {
  firstName: string;
  to: string;
  from: string;
  constructor(public user: Users, public url: string) {
    this.firstName = user.firstName;
    this.to = user.email;
    this.from = `Dionysus Streaming ${config.get<string>("emailFrom")}`;
  }

  private newTransport() {
    if (process.env.NODE_ENV === "production")
      console.log("Hello from email class");
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
      firstName: this.firstName,
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

  async sendVerificationCode() {
    await this.send("verificationCode", "Your account verification code");
  }

  async sendPasswordResetToken() {
    await this.send(
      "resetPassword",
      "Your password reset token (valid for only 10 minutes)"
    );
  }
}
