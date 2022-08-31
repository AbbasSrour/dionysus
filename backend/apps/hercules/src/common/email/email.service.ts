import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import { User } from '@prisma/client-hercules';

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

  async sendVerificationCode(user: User) {
    await this.send({
      to: user.email,
      subject: 'Your account verification code',
      text: 'verification code',
      html: `<p>hello world ${user.verificationCode}</p>`,
    });
  }

  async sendPasswordResetToken(user: User) {
    await this.send({
      to: user.email,
      subject: 'Password reset token',
      text: 'Password reset',
      html: `<p>hello world ${user.userId}</p>`,
    });
  }

  private send(options: Mail.Options) {
    options.from = this.from;
    return this.nodemailerTransport.sendMail(options);
  }
}
