import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Genre } from "./Genre";
import { Users } from "./Users";

@Entity("genre_rating", { schema: "dionysus" })
export class GenreRating {
  @Column("integer", { name: "rating", nullable: true })
  rating: number | null;

  @ManyToOne(() => Genre, (genre) => genre.genreRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "genre_id", referencedColumnName: "genreId" }])
  genre: Genre;

  @ManyToOne(() => Users, (users) => users.genreRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
