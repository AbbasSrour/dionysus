import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("imdb", { schema: "dionysus" })
export default class Imdb extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "imdb_id" })
  imdbId: number;

  @Column("real", { name: "rating", nullable: true, precision: 24 })
  rating: number | null;

  @Column("integer", { name: "vote", nullable: true })
  vote: number | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
