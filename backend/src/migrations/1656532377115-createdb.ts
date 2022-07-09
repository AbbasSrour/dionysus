import { MigrationInterface, QueryRunner } from "typeorm";

export class createdb1656532377115 implements MigrationInterface {
  name = "createdb1656532377115";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE SCHEMA dionysus");
    await queryRunner.query(`
            CREATE TABLE "dionysus"."imdb" (
                "imdb_id" SERIAL NOT NULL,
                "rating" real,
                "vote" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_1dc76341a17a08abb5a894f67e9" PRIMARY KEY ("imdb_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."season" (
                "season_id" SERIAL NOT NULL,
                "number" integer NOT NULL,
                "summery" character varying(480),
                "wallpaper" character varying(480),
                "trailer" character varying(480),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "series_id" integer,
                CONSTRAINT "UQ_529038e0b7e04f5278568dfd65d" UNIQUE ("series_id", "number"),
                CONSTRAINT "PK_3b43f8b4429c26d79b572a3cc19" PRIMARY KEY ("season_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_genres" (
                "movie_genre_id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "genre_id" integer,
                "movie_id" integer,
                CONSTRAINT "UQ_ec45eae1bc95d1461ad55713ffc" UNIQUE ("genre_id", "movie_id"),
                CONSTRAINT "PK_db819f26367ce5cd7aa691e0c31" PRIMARY KEY ("movie_genre_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_genres" (
                "series_genres" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "genre_id" integer,
                "series_id" integer,
                CONSTRAINT "UQ_1f058e1ca636a3229ff47b8b27b" UNIQUE ("genre_id", "series_id"),
                CONSTRAINT "PK_454fa11c935eee4f19895498711" PRIMARY KEY ("series_genres")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."genre" (
                "genre_id" SERIAL NOT NULL,
                "genre_name" character varying(100) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_35a95dd11ad0db6e9684ca50df0" UNIQUE ("genre_name"),
                CONSTRAINT "PK_af0c9d11cb69b909fd91dd33009" PRIMARY KEY ("genre_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."genre_rating" (
                "genre_rating" SERIAL NOT NULL,
                "rating" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" integer,
                "genre_id" integer,
                CONSTRAINT "UQ_0863ea40c5e130f7c0e2c89dc1e" UNIQUE ("user_id", "genre_id"),
                CONSTRAINT "PK_ec2035dc506c12e74b7c7dd7125" PRIMARY KEY ("genre_rating")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_history" (
                "movie_history_id" SERIAL NOT NULL,
                "watch_date" date NOT NULL DEFAULT ('now'::text)::date,
                "watch_time" TIME NOT NULL DEFAULT ('now'::text)::time with time zone,
                "minutes_watched" integer,
                "movie_id" integer,
                "user_id" integer,
                CONSTRAINT "UQ_09823499547badebad51545f43e" UNIQUE ("movie_id", "user_id"),
                CONSTRAINT "PK_1699bc85901173b8ea28e97c8ac" PRIMARY KEY ("movie_history_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_rating" (
                "movie_rating_id" SERIAL NOT NULL,
                "rating" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" integer,
                "movie_id" integer,
                CONSTRAINT "UQ_e7eadbc5a32defa4d7dc7da35ea" UNIQUE ("user_id", "movie_id"),
                CONSTRAINT "PK_eb7c7a1d11886a50058c2a2df48" PRIMARY KEY ("movie_rating_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_rating" (
                "series_rating_id" SERIAL NOT NULL,
                "rating" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "series_id" integer,
                "user_id" integer,
                CONSTRAINT "UQ_46b0228032420ac3d8317725d84" UNIQUE ("series_id", "user_id"),
                CONSTRAINT "PK_5861643f9e970db2338c16600a6" PRIMARY KEY ("series_rating_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."users" (
                "user_id" SERIAL NOT NULL,
                "user_name" character varying(100) NOT NULL,
                "email" character varying(480) NOT NULL,
                "user_password" character varying(200),
                "first_name" character varying(100) NOT NULL,
                "last_name" character varying(100) NOT NULL,
                "age" integer NOT NULL,
                "image" character varying(280) NOT NULL DEFAULT 'default.png',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" UNIQUE ("user_name"),
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_history" (
                "series_history_id" SERIAL NOT NULL,
                "minutes_watched" integer,
                "watch_date" date NOT NULL DEFAULT ('now'::text)::date,
                "watch_time" TIME NOT NULL DEFAULT ('now'::text)::time with time zone,
                "user_id" integer,
                "episode_id" integer,
                CONSTRAINT "UQ_47263c7f08b9ae8c909f4b91b0f" UNIQUE ("episode_id", "user_id"),
                CONSTRAINT "PK_7ec28792d7315cea16d43c2817d" PRIMARY KEY ("series_history_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_servers" (
                "movie_servers_id" SERIAL NOT NULL,
                "url" character varying(480) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "movie_id" integer,
                "server_id" integer,
                CONSTRAINT "UQ_36e4a064e169b00ec22fda2edbb" UNIQUE ("movie_id", "server_id"),
                CONSTRAINT "PK_ecfd36c0ab98f565f05e0889517" PRIMARY KEY ("movie_servers_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."servers" (
                "servers_id" SERIAL NOT NULL,
                "name" character varying(100) NOT NULL,
                "url" character varying(480) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_555671bf0b4b7ec59c9985532e1" UNIQUE ("name"),
                CONSTRAINT "PK_bab7295995274fe8359fa16af1c" PRIMARY KEY ("servers_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_servers" (
                "series_server_id" SERIAL NOT NULL,
                "url" character varying(480) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "episode_id" integer,
                "server_id" integer,
                CONSTRAINT "UQ_afa10bc3a1fb8a28e97666bce09" UNIQUE ("episode_id", "server_id"),
                CONSTRAINT "PK_a1ba86f8daefc8a648e4dd8985d" PRIMARY KEY ("series_server_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."episode" (
                "episode_id" SERIAL NOT NULL,
                "number" integer NOT NULL,
                "name" character varying(100),
                "wallpaper" character varying(480),
                "summery" character varying(480),
                "release_date" integer,
                "episode_length" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "season_id" integer,
                "series_id" integer,
                CONSTRAINT "UQ_2eb03720c3cb40a595bf1fe1479" UNIQUE ("number", "season_id", "series_id"),
                CONSTRAINT "PK_d176084fe3652ecdc6ad94c0e39" PRIMARY KEY ("episode_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_cast" (
                "series_cast_id" SERIAL NOT NULL,
                "actor_role" character varying(100),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "series_id" integer,
                "actor_id" integer,
                CONSTRAINT "UQ_8989dc31bf5f3dd91a4e8e7b29d" UNIQUE ("actor_id", "series_id", "actor_role"),
                CONSTRAINT "PK_8fc9e2f9ad75ea0838cc26efb0b" PRIMARY KEY ("series_cast_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_production_company" (
                "movie_production_company_id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "production_company_id" integer,
                "movie_id" integer,
                CONSTRAINT "UQ_231ba172259aa3db1b9e8010cf9" UNIQUE ("movie_id", "production_company_id"),
                CONSTRAINT "PK_6d0d71b08a4cf6202f31625fde0" PRIMARY KEY ("movie_production_company_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."production_company" (
                "production_company_id" SERIAL NOT NULL,
                "name" character varying(100) NOT NULL,
                "image" character varying(480),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_4d8510d463ec5e3893c807bde97" UNIQUE ("name"),
                CONSTRAINT "PK_0c3441115ffcf93748362327632" PRIMARY KEY ("production_company_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_production_company" (
                "series_production_company_id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "production_company_id" integer,
                "series_id" integer,
                CONSTRAINT "UQ_2c3aff80ec5aa8b07eab21df0c7" UNIQUE ("series_id", "production_company_id"),
                CONSTRAINT "PK_ff6dbbd51b93e2a63594ee992c0" PRIMARY KEY ("series_production_company_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_writers" (
                "movie_writer_id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "writer_id" integer,
                "movie_id" integer,
                CONSTRAINT "UQ_7539c1248b52942451872c3273f" UNIQUE ("movie_id", "writer_id"),
                CONSTRAINT "PK_b2ee5b143ffb028be9cd9142097" PRIMARY KEY ("movie_writer_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."writers" (
                "writer_id" SERIAL NOT NULL,
                "first_name" character varying(100) NOT NULL,
                "last_name" character varying(100) NOT NULL,
                "image" character varying(480),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_da4eedf2644b12c1eb6214a00b4" PRIMARY KEY ("writer_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_writers" (
                "series_writers_id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "writer_id" integer,
                "series_id" integer,
                CONSTRAINT "UQ_9fa746f0d2e0fcd076db0040f18" UNIQUE ("series_id", "writer_id"),
                CONSTRAINT "PK_4216da3ca181dd864561405618f" PRIMARY KEY ("series_writers_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series" (
                "series_id" SERIAL NOT NULL,
                "name" character varying(100) NOT NULL,
                "release_Year" integer NOT NULL,
                "wallpaper" character varying(480),
                "summery" character varying(480),
                "trailer" character varying(480),
                "pg_rating" character varying(20),
                "og_language" character varying(20),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "imdb_id" integer,
                CONSTRAINT "UQ_583b9dae4c0c02311449db727a1" UNIQUE ("name", "release_Year"),
                CONSTRAINT "UQ_1a97e396b0d21b0b2ec4deccb28" UNIQUE ("imdb_id"),
                CONSTRAINT "REL_1a97e396b0d21b0b2ec4deccb2" UNIQUE ("imdb_id"),
                CONSTRAINT "PK_7b8ecbc6f9a0a7a948dc41040c6" PRIMARY KEY ("series_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."series_directors" (
                "series_director_id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "director_id" integer,
                "series_id" integer,
                CONSTRAINT "UQ_b3b8283efa246e3b7d4b97121a1" UNIQUE ("series_id", "director_id"),
                CONSTRAINT "PK_90b38d66ceac189cb556eb7258e" PRIMARY KEY ("series_director_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."director" (
                "director_id" SERIAL NOT NULL,
                "first_name" character varying(100) NOT NULL,
                "last_name" character varying(100) NOT NULL,
                "image" character varying(480),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_cac4b275903e625d8459fe08eb8" PRIMARY KEY ("director_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_directors" (
                "movieDirectorId" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "director_id" integer,
                "movie_id" integer,
                CONSTRAINT "UQ_3b0d1b1abe6178bf8bf96ef3b4e" UNIQUE ("director_id", "movie_id"),
                CONSTRAINT "PK_29b6f4fe20283d9234355e59dc3" PRIMARY KEY ("movieDirectorId")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie" (
                "movie_id" SERIAL NOT NULL,
                "name" character varying(100) NOT NULL,
                "release_year" integer,
                "wallpaper" character varying(480),
                "summery" character varying(480),
                "trailer" character varying(480),
                "pg_rating" character varying(20),
                "length" integer,
                "budget" integer,
                "revenue" bigint,
                "og_language" character varying(20),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "imdb_id" integer,
                CONSTRAINT "UQ_ac5ba27d45bdde554c904bf8e06" UNIQUE ("release_year"),
                CONSTRAINT "UQ_f05604ea5d74a15426885d74e27" UNIQUE ("imdb_id"),
                CONSTRAINT "UQ_8b55a4927daccdbe2aaa836d7c6" UNIQUE ("name", "release_year"),
                CONSTRAINT "REL_f05604ea5d74a15426885d74e2" UNIQUE ("imdb_id"),
                CONSTRAINT "PK_f38244c6e76d8e50e1a590f6744" PRIMARY KEY ("movie_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."movie_cast" (
                "movie_cast_id" SERIAL NOT NULL,
                "role" character varying(100),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "movie_id" integer,
                "actor_id" integer,
                CONSTRAINT "UQ_c87c534235ac750c4636e0f49ec" UNIQUE ("actor_id", "movie_id", "role"),
                CONSTRAINT "PK_5d4816af1fd48048ee756f682db" PRIMARY KEY ("movie_cast_id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "dionysus"."actor" (
                "actor_id" SERIAL NOT NULL,
                "first_name" character varying(100) NOT NULL,
                "last_name" character varying(100) NOT NULL,
                "image" character varying(480),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_4faabcb28eb548caa2404261e4f" PRIMARY KEY ("actor_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."season"
            ADD CONSTRAINT "FK_4efcc05beed4bfa3079a3a1a99a" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_genres"
            ADD CONSTRAINT "FK_bbbc12542564f7ff56e36f5bbf6" FOREIGN KEY ("genre_id") REFERENCES "dionysus"."genre"("genre_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_genres"
            ADD CONSTRAINT "FK_ae967ce58ef99e9ff3933ccea48" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_genres"
            ADD CONSTRAINT "FK_76732559d297ad04639b3fc75a1" FOREIGN KEY ("genre_id") REFERENCES "dionysus"."genre"("genre_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_genres"
            ADD CONSTRAINT "FK_74ac52950bb624b4e2437b3db7d" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."genre_rating"
            ADD CONSTRAINT "FK_744d451d9203ade60ca413ac9b2" FOREIGN KEY ("user_id") REFERENCES "dionysus"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."genre_rating"
            ADD CONSTRAINT "FK_a83c4f0ef39ac81ea94e156af01" FOREIGN KEY ("genre_id") REFERENCES "dionysus"."genre"("genre_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_history"
            ADD CONSTRAINT "FK_96b014753f2e458a3e7dc8bf383" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_history"
            ADD CONSTRAINT "FK_c86a01a76183b40cc6f26b2570e" FOREIGN KEY ("user_id") REFERENCES "dionysus"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_rating"
            ADD CONSTRAINT "FK_634ac661eca500eb84bd825ecb3" FOREIGN KEY ("user_id") REFERENCES "dionysus"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_rating"
            ADD CONSTRAINT "FK_480930884cf2618d2b678f69189" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_rating"
            ADD CONSTRAINT "FK_65bcbee63896fad41d9cef1eba0" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_rating"
            ADD CONSTRAINT "FK_98a48a1e0521cbd0be8d5303cab" FOREIGN KEY ("user_id") REFERENCES "dionysus"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_history"
            ADD CONSTRAINT "FK_2d932cf49ecea52111535b356c7" FOREIGN KEY ("user_id") REFERENCES "dionysus"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_history"
            ADD CONSTRAINT "FK_d1fe211d68a81b84936eed85be9" FOREIGN KEY ("episode_id") REFERENCES "dionysus"."episode"("episode_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_servers"
            ADD CONSTRAINT "FK_5166d616f4a6c9e5cd2a6d453d5" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_servers"
            ADD CONSTRAINT "FK_5359e7e13d49abe1e91dddd8912" FOREIGN KEY ("server_id") REFERENCES "dionysus"."servers"("servers_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_servers"
            ADD CONSTRAINT "FK_deaafeb41a72533c1c754c71524" FOREIGN KEY ("episode_id") REFERENCES "dionysus"."episode"("episode_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_servers"
            ADD CONSTRAINT "FK_635158cd5a62ff26b84568b126b" FOREIGN KEY ("server_id") REFERENCES "dionysus"."servers"("servers_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."episode"
            ADD CONSTRAINT "FK_d8790eefed71394952672828c1c" FOREIGN KEY ("season_id") REFERENCES "dionysus"."season"("season_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."episode"
            ADD CONSTRAINT "FK_f20e08420f85a1e8c5a9ce349f0" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_cast"
            ADD CONSTRAINT "FK_0df029204e4113011c5a7ee3827" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_cast"
            ADD CONSTRAINT "FK_5603e6fb3d4a5120e452925455e" FOREIGN KEY ("actor_id") REFERENCES "dionysus"."actor"("actor_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_production_company"
            ADD CONSTRAINT "FK_92a96d35c38bb1228a407b945df" FOREIGN KEY ("production_company_id") REFERENCES "dionysus"."production_company"("production_company_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_production_company"
            ADD CONSTRAINT "FK_7cc44b65cefb3dbd3ad26da73a8" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_production_company"
            ADD CONSTRAINT "FK_3ea58edf35aa1c2f27af45fd14a" FOREIGN KEY ("production_company_id") REFERENCES "dionysus"."production_company"("production_company_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_production_company"
            ADD CONSTRAINT "FK_c2374c7e7f35cf0b271456a7961" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_writers"
            ADD CONSTRAINT "FK_4d376637da7b4905119de222338" FOREIGN KEY ("writer_id") REFERENCES "dionysus"."writers"("writer_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_writers"
            ADD CONSTRAINT "FK_ebb25bbec454cb03cfcaa2acc70" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_writers"
            ADD CONSTRAINT "FK_0c121bba561f23f5d88f77b6496" FOREIGN KEY ("writer_id") REFERENCES "dionysus"."writers"("writer_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_writers"
            ADD CONSTRAINT "FK_7086b69311c574c5157f1def51e" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series"
            ADD CONSTRAINT "FK_1a97e396b0d21b0b2ec4deccb28" FOREIGN KEY ("imdb_id") REFERENCES "dionysus"."imdb"("imdb_id") ON DELETE RESTRICT ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_directors"
            ADD CONSTRAINT "FK_2c1e82147a6d7838c0e4759305c" FOREIGN KEY ("director_id") REFERENCES "dionysus"."director"("director_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_directors"
            ADD CONSTRAINT "FK_17e99ff7097800371c4452c7de8" FOREIGN KEY ("series_id") REFERENCES "dionysus"."series"("series_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_directors"
            ADD CONSTRAINT "FK_eb573a92cde28f2e760b49bc9a0" FOREIGN KEY ("director_id") REFERENCES "dionysus"."director"("director_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_directors"
            ADD CONSTRAINT "FK_cddab269ba4fc7f435682e5f879" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie"
            ADD CONSTRAINT "FK_f05604ea5d74a15426885d74e27" FOREIGN KEY ("imdb_id") REFERENCES "dionysus"."imdb"("imdb_id") ON DELETE RESTRICT ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_cast"
            ADD CONSTRAINT "FK_a6c0ed450412f8365639b5a700b" FOREIGN KEY ("movie_id") REFERENCES "dionysus"."movie"("movie_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_cast"
            ADD CONSTRAINT "FK_c50bb0e4209901efcc193be54d9" FOREIGN KEY ("actor_id") REFERENCES "dionysus"."actor"("actor_id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_cast" DROP CONSTRAINT "FK_c50bb0e4209901efcc193be54d9"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_cast" DROP CONSTRAINT "FK_a6c0ed450412f8365639b5a700b"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie" DROP CONSTRAINT "FK_f05604ea5d74a15426885d74e27"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_directors" DROP CONSTRAINT "FK_cddab269ba4fc7f435682e5f879"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_directors" DROP CONSTRAINT "FK_eb573a92cde28f2e760b49bc9a0"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_directors" DROP CONSTRAINT "FK_17e99ff7097800371c4452c7de8"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_directors" DROP CONSTRAINT "FK_2c1e82147a6d7838c0e4759305c"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series" DROP CONSTRAINT "FK_1a97e396b0d21b0b2ec4deccb28"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_writers" DROP CONSTRAINT "FK_7086b69311c574c5157f1def51e"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_writers" DROP CONSTRAINT "FK_0c121bba561f23f5d88f77b6496"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_writers" DROP CONSTRAINT "FK_ebb25bbec454cb03cfcaa2acc70"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_writers" DROP CONSTRAINT "FK_4d376637da7b4905119de222338"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_production_company" DROP CONSTRAINT "FK_c2374c7e7f35cf0b271456a7961"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_production_company" DROP CONSTRAINT "FK_3ea58edf35aa1c2f27af45fd14a"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_production_company" DROP CONSTRAINT "FK_7cc44b65cefb3dbd3ad26da73a8"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_production_company" DROP CONSTRAINT "FK_92a96d35c38bb1228a407b945df"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_cast" DROP CONSTRAINT "FK_5603e6fb3d4a5120e452925455e"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_cast" DROP CONSTRAINT "FK_0df029204e4113011c5a7ee3827"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."episode" DROP CONSTRAINT "FK_f20e08420f85a1e8c5a9ce349f0"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."episode" DROP CONSTRAINT "FK_d8790eefed71394952672828c1c"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_servers" DROP CONSTRAINT "FK_635158cd5a62ff26b84568b126b"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_servers" DROP CONSTRAINT "FK_deaafeb41a72533c1c754c71524"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_servers" DROP CONSTRAINT "FK_5359e7e13d49abe1e91dddd8912"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_servers" DROP CONSTRAINT "FK_5166d616f4a6c9e5cd2a6d453d5"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_history" DROP CONSTRAINT "FK_d1fe211d68a81b84936eed85be9"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_history" DROP CONSTRAINT "FK_2d932cf49ecea52111535b356c7"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_rating" DROP CONSTRAINT "FK_98a48a1e0521cbd0be8d5303cab"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_rating" DROP CONSTRAINT "FK_65bcbee63896fad41d9cef1eba0"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_rating" DROP CONSTRAINT "FK_480930884cf2618d2b678f69189"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_rating" DROP CONSTRAINT "FK_634ac661eca500eb84bd825ecb3"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_history" DROP CONSTRAINT "FK_c86a01a76183b40cc6f26b2570e"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_history" DROP CONSTRAINT "FK_96b014753f2e458a3e7dc8bf383"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."genre_rating" DROP CONSTRAINT "FK_a83c4f0ef39ac81ea94e156af01"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."genre_rating" DROP CONSTRAINT "FK_744d451d9203ade60ca413ac9b2"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_genres" DROP CONSTRAINT "FK_74ac52950bb624b4e2437b3db7d"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."series_genres" DROP CONSTRAINT "FK_76732559d297ad04639b3fc75a1"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_genres" DROP CONSTRAINT "FK_ae967ce58ef99e9ff3933ccea48"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."movie_genres" DROP CONSTRAINT "FK_bbbc12542564f7ff56e36f5bbf6"
        `);
    await queryRunner.query(`
            ALTER TABLE "dionysus"."season" DROP CONSTRAINT "FK_4efcc05beed4bfa3079a3a1a99a"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."actor"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_cast"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_directors"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."director"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_directors"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_writers"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."writers"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_writers"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_production_company"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."production_company"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_production_company"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_cast"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."episode"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_servers"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."servers"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_servers"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_history"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."users"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_rating"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_rating"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_history"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."genre_rating"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."genre"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."series_genres"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."movie_genres"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."season"
        `);
    await queryRunner.query(`
            DROP TABLE "dionysus"."imdb"
        `);
  }
}
