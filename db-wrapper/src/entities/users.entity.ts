import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenreRating } from "./genre-rating.entity";
import { MovieHistory } from "./movie-history.entity";
import { MovieRating } from "./movie-rating.entity";
import { SeriesHistory } from "./series-history.entity";
import { SeriesRating } from "./series-rating.entity";

import {
  EncryptPassword,
  DecryptPassword,
  HashPassword,
  VerifyPassword,
} from "../utils/cryptography.util";

import crypto from "crypto";
import { env } from "../utils/validate-env.util";

@Entity("users", { schema: "dionysus" })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "user_id" })
  userId: number;

  @Column("character varying", {
    name: "user_name",
    unique: true,
    length: 100,
  })
  userName: string;

  @Column("character varying", {
    name: "email",
    unique: true,
    length: 480,
  })
  email: string;

  @Column("character varying", {
    name: "user_password",
    default: "default",
    length: 400,
  })
  password: string;

  @Column("character varying", {
    name: "first_name",
    length: 100,
  })
  firstName: string;

  @Column("character varying", {
    name: "last_name",
    length: 100,
  })
  lastName: string;

  @Column()
  age: number;

  @Column("character varying", {
    name: "image",
    default: "default.png",
    length: 280,
  })
  image: string;

  @Column({
    default: false,
  })
  verified: boolean;

  @Index('verificationCode_index')
  @Column({
    name: "verification_code",
    type: 'text',
    nullable: true,
  })
  verificationCode!: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => GenreRating, (genreRating) => genreRating.userId)
  genreRatings: GenreRating[];

  @OneToMany(() => MovieHistory, (movieHistory) => movieHistory.userId)
  movieHistory: MovieHistory[];

  @OneToMany(() => MovieRating, (movieRating) => movieRating.userId)
  movieRatings: MovieRating[];

  @OneToMany(() => SeriesHistory, (seriesHistory) => seriesHistory.userId)
  seriesHistory: SeriesHistory[];

  @OneToMany(() => SeriesRating, (seriesRating) => seriesRating.userId)
  seriesRatings: SeriesRating[];

  @BeforeInsert()
  async securePassword(): Promise<string | null> {
    if (this.password) {
      const hashedPassword: string = await HashPassword(this.password);
      this.password = await EncryptPassword(
        hashedPassword,
        env.ENC_KEY
      );
    }
    return this.password;
  }

  //  Validate password
  static async comparePasswords(
    candidatePassword: string,
    encryptedPassword: string
  ) {
    candidatePassword = await HashPassword(candidatePassword);
    const decryptedPassword = await DecryptPassword(
      encryptedPassword,
      env.ENC_KEY
    );
    return await VerifyPassword(candidatePassword, decryptedPassword);
  }

  static createVerificationCode() {
    const verificationCode = crypto.randomBytes(32).toString("hex");
    const hashedVerificationCode = crypto
      .createHash("sha256")
      .update(verificationCode)
      .digest("hex");
    return { verificationCode, hashedVerificationCode };
  }
}
