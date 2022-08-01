import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import Genre from "./genre.entity";
import { Users } from "./users.entity";

@Entity("genre_rating", { schema: "dionysus" })
@Unique("UNIQUE_USER_ID_GENRE_ID", ["userId", "genreId"])
export class GenreRating extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "genre_rating" })
  genreRatingId: number;

  @ManyToOne(() => Users, (users) => users.genreRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  userId: Users;

  @ManyToOne(() => Genre, (genre) => genre.genreRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "genre_id", referencedColumnName: "genreId" }])
  genreId: Genre;

  @Column("integer", { name: "rating" })
  rating: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
