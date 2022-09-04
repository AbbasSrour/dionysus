import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import { User } from '@prisma/client-hercules';
import * as pug from 'pug';
import { convert } from 'html-to-text';
import * as Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailService {
  from = 'Dionysus Streaming';
  private nodemailerTransport: Mail;

  constructor(private readonly config: ConfigService) {
    this.nodemailerTransport = createTransport({
      secure: false,
      service: config.getOrThrow<string>('smtp.service'),
      auth: {
        user: config.getOrThrow('smtp.user'),
        pass: config.getOrThrow('smtp.pass'),
      },
    });
  }

  //todo
  async sendVerificationCode(user: User, token: string) {
    const html = pug.renderFile(
      `../../../template/email/assets/verificationCode.pug`,
      {
        userName: user.userName,
        subject: 'Account Verification Code',
        url: `${this.config.get('origin')}/verify-email/${token}`,
      }
    );
    await this.send({
      to: user.email,
      subject: 'Your account verification code',
      html,
      text: convert(html),
    });
  }

  //todo
  async sendPasswordResetToken(user: User, token: string) {
    const html = pug.renderFile(`../../../template/resetPassword.pug`, {
      userName: user.userName,
      subject: 'Reset Password',
      url: `${this.config.get('origin')}/reset-password/${token}`,
    });
    await this.send({
      to: user.email,
      subject: 'Reset Password',
      html,
      text: convert(html),
    });
  }

  private send(options: Mail.Options) {
    options.from = this.from;
    return this.nodemailerTransport.sendMail(options);
  }
}
