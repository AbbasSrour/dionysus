using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using engine.api.Models;

namespace engine.api.Context
{
    public partial class DionysusDbContext : DbContext
    {
        public DionysusDbContext()
        {
        }

        public DionysusDbContext(DbContextOptions<DionysusDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Actor> Actors { get; set; } = null!;
        public virtual DbSet<Director> Directors { get; set; } = null!;
        public virtual DbSet<Episode> Episodes { get; set; } = null!;
        public virtual DbSet<Genre> Genres { get; set; } = null!;
        public virtual DbSet<GenreRating> GenreRatings { get; set; } = null!;
        public virtual DbSet<History> Histories { get; set; } = null!;
        public virtual DbSet<ImdbMovie> ImdbMovies { get; set; } = null!;
        public virtual DbSet<ImdbSeries> ImdbSeries { get; set; } = null!;
        public virtual DbSet<Movie> Movies { get; set; } = null!;
        public virtual DbSet<MovieCast> MovieCasts { get; set; } = null!;
        public virtual DbSet<MovieDirector> MovieDirectors { get; set; } = null!;
        public virtual DbSet<MovieGenre> MovieGenres { get; set; } = null!;
        public virtual DbSet<MovieHistory> MovieHistories { get; set; } = null!;
        public virtual DbSet<MovieProductionCompany> MovieProductionCompanies { get; set; } = null!;
        public virtual DbSet<MovieRating> MovieRatings { get; set; } = null!;
        public virtual DbSet<MovieServer> MovieServers { get; set; } = null!;
        public virtual DbSet<MovieWriter> MovieWriters { get; set; } = null!;
        public virtual DbSet<ProductionCompany> ProductionCompanies { get; set; } = null!;
        public virtual DbSet<Season> Seasons { get; set; } = null!;
        public virtual DbSet<Series> Series { get; set; } = null!;
        public virtual DbSet<SeriesCast> SeriesCasts { get; set; } = null!;
        public virtual DbSet<SeriesDirector> SeriesDirectors { get; set; } = null!;
        public virtual DbSet<SeriesGenre> SeriesGenres { get; set; } = null!;
        public virtual DbSet<SeriesHistory> SeriesHistories { get; set; } = null!;
        public virtual DbSet<SeriesProductionCompany> SeriesProductionCompanies { get; set; } = null!;
        public virtual DbSet<SeriesRating> SeriesRatings { get; set; } = null!;
        public virtual DbSet<SeriesServer> SeriesServers { get; set; } = null!;
        public virtual DbSet<SeriesWriter> SeriesWriters { get; set; } = null!;
        public virtual DbSet<Server> Servers { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Writer> Writers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Server=localhost; Database=test; Port=5432; User Id=ares; Password=7142");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Actor>(entity =>
            {
                entity.ToTable("actor", "dionysus");

                entity.Property(e => e.ActorId).HasColumnName("actor_id");

                entity.Property(e => e.ActorFirstName)
                    .HasMaxLength(100)
                    .HasColumnName("actor_first_name");

                entity.Property(e => e.ActorImage)
                    .HasMaxLength(480)
                    .HasColumnName("actor_image");

                entity.Property(e => e.ActorLastName)
                    .HasMaxLength(100)
                    .HasColumnName("actor_last_name");
            });

            modelBuilder.Entity<Director>(entity =>
            {
                entity.ToTable("directors", "dionysus");

                entity.Property(e => e.DirectorId).HasColumnName("director_id");

                entity.Property(e => e.DirectorFirstName)
                    .HasMaxLength(100)
                    .HasColumnName("director_first_name");

                entity.Property(e => e.DirectorImage)
                    .HasMaxLength(480)
                    .HasColumnName("director_image");

                entity.Property(e => e.DirectorLastName)
                    .HasMaxLength(100)
                    .HasColumnName("director_last_name");
            });

            modelBuilder.Entity<Episode>(entity =>
            {
                entity.ToTable("episode", "dionysus");

                entity.HasIndex(e => new { e.EpisodeNumber, e.SeasonId, e.SeriesId }, "episode_episode_number_season_id_series_id_key")
                    .IsUnique();

                entity.Property(e => e.EpisodeId).HasColumnName("episode_id");

                entity.Property(e => e.EpisodeLength).HasColumnName("episode_length");

                entity.Property(e => e.EpisodeName)
                    .HasMaxLength(100)
                    .HasColumnName("episode_name");

                entity.Property(e => e.EpisodeNumber).HasColumnName("episode_number");

                entity.Property(e => e.EpisodeWallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("episode_wallpaper");

                entity.Property(e => e.ReleaseDate).HasColumnName("release_date");

                entity.Property(e => e.SeasonId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("season_id");

                entity.Property(e => e.SeriesId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("series_id");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.HasOne(d => d.Season)
                    .WithMany(p => p.Episodes)
                    .HasForeignKey(d => d.SeasonId)
                    .HasConstraintName("fk_episode_season");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.Episodes)
                    .HasForeignKey(d => d.SeriesId)
                    .HasConstraintName("fk_episode_series");
            });

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.ToTable("genre", "dionysus");

                entity.HasIndex(e => e.GenreName, "unique_genre_name")
                    .IsUnique();

                entity.Property(e => e.GenreId).HasColumnName("genre_id");

                entity.Property(e => e.GenreName)
                    .HasMaxLength(100)
                    .HasColumnName("genre_name");
            });

            modelBuilder.Entity<GenreRating>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("genre_rating", "dionysus");

                entity.Property(e => e.GenreId)
                    .HasColumnName("genre_id")
                    .HasDefaultValueSql("nextval('dionysus.genre_genre_id_seq'::regclass)");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasDefaultValueSql("nextval('dionysus.users_user_id_seq'::regclass)");

                entity.HasOne(d => d.Genre)
                    .WithMany()
                    .HasForeignKey(d => d.GenreId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_genre_rating_genre");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_genre_rating_users");
            });

            modelBuilder.Entity<History>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("history", "dionysus");

                entity.Property(e => e.EpisodeId).HasColumnName("episode_id");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.WatchDate).HasColumnName("watch_date");

                entity.Property(e => e.WatchTime).HasColumnName("watch_time");
            });

            modelBuilder.Entity<ImdbMovie>(entity =>
            {
                entity.HasKey(e => e.ImdbId)
                    .HasName("pk_imdb_movie");

                entity.ToTable("imdb_movie", "dionysus");

                entity.Property(e => e.ImdbId)
                    .HasMaxLength(100)
                    .HasColumnName("imdb_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.Vote).HasColumnName("vote");
            });

            modelBuilder.Entity<ImdbSeries>(entity =>
            {
                entity.HasKey(e => e.ImdbId)
                    .HasName("pk_imdb_series");

                entity.ToTable("imdb_series", "dionysus");

                entity.Property(e => e.ImdbId)
                    .HasMaxLength(100)
                    .HasColumnName("imdb_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.Vote).HasColumnName("vote");
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.ToTable("movie", "dionysus");

                entity.HasIndex(e => new { e.MovieName, e.MovieReleaseDate }, "movie_movie_name_movie_release_year_key")
                    .IsUnique();

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.Budget).HasColumnName("budget");

                entity.Property(e => e.ImdbId)
                    .HasMaxLength(100)
                    .HasColumnName("imdb_id");

                entity.Property(e => e.MovieLength).HasColumnName("movie_length");

                entity.Property(e => e.MovieName)
                    .HasMaxLength(100)
                    .HasColumnName("movie_name");

                entity.Property(e => e.MovieReleaseDate).HasColumnName("movie_release_date");

                entity.Property(e => e.MovieWallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("movie_wallpaper");

                entity.Property(e => e.OgLanguage)
                    .HasMaxLength(20)
                    .HasColumnName("og_language");

                entity.Property(e => e.PgRating)
                    .HasMaxLength(20)
                    .HasColumnName("pg_rating");

                entity.Property(e => e.Revenue).HasColumnName("revenue");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.Trailer)
                    .HasMaxLength(480)
                    .HasColumnName("trailer");

                entity.HasOne(d => d.Imdb)
                    .WithMany(p => p.Movies)
                    .HasForeignKey(d => d.ImdbId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_imdb_movie");
            });

            modelBuilder.Entity<MovieCast>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_cast", "dionysus");

                entity.HasIndex(e => new { e.ActorId, e.MovieId, e.ActorRole }, "unique_role")
                    .IsUnique();

                entity.Property(e => e.ActorId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("actor_id");

                entity.Property(e => e.ActorRole)
                    .HasMaxLength(100)
                    .HasColumnName("actor_role");

                entity.Property(e => e.MovieId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("movie_id");

                entity.HasOne(d => d.Actor)
                    .WithMany()
                    .HasForeignKey(d => d.ActorId)
                    .HasConstraintName("fk_movie_cast_actor");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("fk_movie_cast_movie");
            });

            modelBuilder.Entity<MovieDirector>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_directors", "dionysus");

                entity.Property(e => e.DirectorId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("director_id");

                entity.Property(e => e.MovieId)
                    .HasColumnName("movie_id")
                    .HasDefaultValueSql("nextval('dionysus.movie_movie_id_seq'::regclass)");

                entity.HasOne(d => d.Director)
                    .WithMany()
                    .HasForeignKey(d => d.DirectorId)
                    .HasConstraintName("fk_movie_directors_directors");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_directors_movie");
            });

            modelBuilder.Entity<MovieGenre>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_genres", "dionysus");

                entity.HasIndex(e => new { e.GenreId, e.MovieId }, "movie_genres_genre_id_movie_id_key")
                    .IsUnique();

                entity.Property(e => e.GenreId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("genre_id");

                entity.Property(e => e.MovieId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("movie_id");

                entity.HasOne(d => d.Genre)
                    .WithMany()
                    .HasForeignKey(d => d.GenreId)
                    .HasConstraintName("fk_movie_genres_genre");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("fk_movie_genres_movie");
            });

            modelBuilder.Entity<MovieHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_history", "dionysus");

                entity.Property(e => e.MinutesWatched).HasColumnName("minutes_watched");

                entity.Property(e => e.MovieId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("movie_id");

                entity.Property(e => e.UserId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("user_id");

                entity.Property(e => e.WatchDate)
                    .HasColumnName("watch_date")
                    .HasDefaultValueSql("CURRENT_DATE");

                entity.Property(e => e.WatchTime)
                    .HasColumnName("watch_time")
                    .HasDefaultValueSql("CURRENT_TIME");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("fk_movie_history_movie");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("fk_movie_history_users");
            });

            modelBuilder.Entity<MovieProductionCompany>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_production_company", "dionysus");

                entity.Property(e => e.MovieId)
                    .HasColumnName("movie_id")
                    .HasDefaultValueSql("nextval('dionysus.movie_movie_id_seq'::regclass)");

                entity.Property(e => e.ProductionCompanyId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("production_company_id");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_production_company_movie");

                entity.HasOne(d => d.ProductionCompany)
                    .WithMany()
                    .HasForeignKey(d => d.ProductionCompanyId)
                    .HasConstraintName("fk_movie_production_company_production_company");
            });

            modelBuilder.Entity<MovieRating>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_rating", "dionysus");

                entity.Property(e => e.MovieId)
                    .HasColumnName("movie_id")
                    .HasDefaultValueSql("nextval('dionysus.movie_movie_id_seq'::regclass)");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasDefaultValueSql("nextval('dionysus.users_user_id_seq'::regclass)");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_rating_movie");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_rating_users");
            });

            modelBuilder.Entity<MovieServer>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_servers", "dionysus");

                entity.Property(e => e.MovieId)
                    .HasColumnName("movie_id")
                    .HasDefaultValueSql("nextval('dionysus.movie_movie_id_seq'::regclass)");

                entity.Property(e => e.ServerId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("server_id");

                entity.Property(e => e.Url)
                    .HasMaxLength(480)
                    .HasColumnName("url");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_servers_movie");

                entity.HasOne(d => d.Server)
                    .WithMany()
                    .HasForeignKey(d => d.ServerId)
                    .HasConstraintName("fk_movie_servers_servers");
            });

            modelBuilder.Entity<MovieWriter>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("movie_writers", "dionysus");

                entity.Property(e => e.MovieId)
                    .HasColumnName("movie_id")
                    .HasDefaultValueSql("nextval('dionysus.movie_movie_id_seq'::regclass)");

                entity.Property(e => e.WriterId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("writer_id");

                entity.HasOne(d => d.Movie)
                    .WithMany()
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_movie_writers_movie");

                entity.HasOne(d => d.Writer)
                    .WithMany()
                    .HasForeignKey(d => d.WriterId)
                    .HasConstraintName("fk_movie_writers_writers");
            });

            modelBuilder.Entity<ProductionCompany>(entity =>
            {
                entity.ToTable("production_company", "dionysus");

                entity.Property(e => e.ProductionCompanyId).HasColumnName("production_company_id");

                entity.Property(e => e.Image)
                    .HasMaxLength(480)
                    .HasColumnName("image");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Season>(entity =>
            {
                entity.ToTable("season", "dionysus");

                entity.HasIndex(e => new { e.SeasonNumber, e.SeriesId }, "season_season_number_series_id_key")
                    .IsUnique();

                entity.Property(e => e.SeasonId).HasColumnName("season_id");

                entity.Property(e => e.SeasonNumber).HasColumnName("season_number");

                entity.Property(e => e.SeasonWallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("season_wallpaper");

                entity.Property(e => e.SeriesId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("series_id");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.Trailer)
                    .HasMaxLength(480)
                    .HasColumnName("trailer");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.Seasons)
                    .HasForeignKey(d => d.SeriesId)
                    .HasConstraintName("fk_season_series");
            });

            modelBuilder.Entity<Series>(entity =>
            {
                entity.ToTable("series", "dionysus");

                entity.HasIndex(e => new { e.SeriesName, e.ReleaseDate }, "series_series_name_series_release_year_key")
                    .IsUnique();

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.OgLanguage)
                    .HasMaxLength(20)
                    .HasColumnName("og_language");

                entity.Property(e => e.PgRating)
                    .HasMaxLength(20)
                    .HasColumnName("pg_rating");

                entity.Property(e => e.ReleaseDate).HasColumnName("release_date");

                entity.Property(e => e.SeriesName)
                    .HasMaxLength(100)
                    .HasColumnName("series_name");

                entity.Property(e => e.SeriesWallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("series_wallpaper");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.Trailer)
                    .HasMaxLength(480)
                    .HasColumnName("trailer");
            });

            modelBuilder.Entity<SeriesCast>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_cast", "dionysus");

                entity.HasIndex(e => new { e.ActorId, e.ActorRole, e.SeriesId }, "series_cast_actor_id_actor_role_series_id_key")
                    .IsUnique();

                entity.Property(e => e.ActorId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("actor_id");

                entity.Property(e => e.ActorRole)
                    .HasMaxLength(100)
                    .HasColumnName("actor_role");

                entity.Property(e => e.SeriesId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("series_id");

                entity.HasOne(d => d.Actor)
                    .WithMany()
                    .HasForeignKey(d => d.ActorId)
                    .HasConstraintName("fk_series_cast_actor");

                entity.HasOne(d => d.Series)
                    .WithMany()
                    .HasForeignKey(d => d.SeriesId)
                    .HasConstraintName("fk_series_cast_episode");
            });

            modelBuilder.Entity<SeriesDirector>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_directors", "dionysus");

                entity.Property(e => e.DirectorId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("director_id");

                entity.Property(e => e.SeriesId)
                    .HasColumnName("series_id")
                    .HasDefaultValueSql("nextval('dionysus.series_series_id_seq'::regclass)");

                entity.HasOne(d => d.Director)
                    .WithMany()
                    .HasForeignKey(d => d.DirectorId)
                    .HasConstraintName("fk_series_directors_directors");

                entity.HasOne(d => d.Series)
                    .WithMany()
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_series_directors_series");
            });

            modelBuilder.Entity<SeriesGenre>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_genres", "dionysus");

                entity.HasIndex(e => new { e.GenreId, e.SeriesId }, "series_genres_genre_id_series_id_key")
                    .IsUnique();

                entity.Property(e => e.GenreId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("genre_id");

                entity.Property(e => e.SeriesId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("series_id");

                entity.HasOne(d => d.Genre)
                    .WithMany()
                    .HasForeignKey(d => d.GenreId)
                    .HasConstraintName("fk_series_genres_genre");

                entity.HasOne(d => d.Series)
                    .WithMany()
                    .HasForeignKey(d => d.SeriesId)
                    .HasConstraintName("fk_series_genres_series");
            });

            modelBuilder.Entity<SeriesHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_history", "dionysus");

                entity.Property(e => e.EpisodeId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("episode_id");

                entity.Property(e => e.MinutesWatched).HasColumnName("minutes_watched");

                entity.Property(e => e.UserId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("user_id");

                entity.Property(e => e.WatchDate)
                    .HasColumnName("watch_date")
                    .HasDefaultValueSql("CURRENT_DATE");

                entity.Property(e => e.WatchTime)
                    .HasColumnName("watch_time")
                    .HasDefaultValueSql("CURRENT_TIME");

                entity.HasOne(d => d.Episode)
                    .WithMany()
                    .HasForeignKey(d => d.EpisodeId)
                    .HasConstraintName("fk_series_history_episode");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("fk_series_history_users");
            });

            modelBuilder.Entity<SeriesProductionCompany>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_production_company", "dionysus");

                entity.Property(e => e.ProductionCompanyId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("production_company_id");

                entity.Property(e => e.SeriesId)
                    .HasColumnName("series_id")
                    .HasDefaultValueSql("nextval('dionysus.series_series_id_seq'::regclass)");

                entity.HasOne(d => d.ProductionCompany)
                    .WithMany()
                    .HasForeignKey(d => d.ProductionCompanyId)
                    .HasConstraintName("fk_series_production_company_production_company");

                entity.HasOne(d => d.Series)
                    .WithMany()
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_series_production_company_series");
            });

            modelBuilder.Entity<SeriesRating>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_rating", "dionysus");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.SeriesId)
                    .HasColumnName("series_id")
                    .HasDefaultValueSql("nextval('dionysus.series_series_id_seq'::regclass)");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasDefaultValueSql("nextval('dionysus.users_user_id_seq'::regclass)");

                entity.HasOne(d => d.Series)
                    .WithMany()
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_series_rating_series");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_series_rating_users");
            });

            modelBuilder.Entity<SeriesServer>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_servers", "dionysus");

                entity.Property(e => e.EpisodeId)
                    .HasColumnName("episode_id")
                    .HasDefaultValueSql("nextval('dionysus.episode_episode_id_seq'::regclass)");

                entity.Property(e => e.ServerId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("server_id");

                entity.Property(e => e.Url)
                    .HasMaxLength(480)
                    .HasColumnName("url");

                entity.HasOne(d => d.Episode)
                    .WithMany()
                    .HasForeignKey(d => d.EpisodeId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_series_servers_episode");

                entity.HasOne(d => d.Server)
                    .WithMany()
                    .HasForeignKey(d => d.ServerId)
                    .HasConstraintName("fk_series_servers_servers");
            });

            modelBuilder.Entity<SeriesWriter>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("series_writers", "dionysus");

                entity.Property(e => e.SeriesId)
                    .HasColumnName("series_id")
                    .HasDefaultValueSql("nextval('dionysus.series_series_id_seq'::regclass)");

                entity.Property(e => e.WriterId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("writer_id");

                entity.HasOne(d => d.Series)
                    .WithMany()
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("fk_series_writers_series");

                entity.HasOne(d => d.Writer)
                    .WithMany()
                    .HasForeignKey(d => d.WriterId)
                    .HasConstraintName("fk_series_writers_writers");
            });

            modelBuilder.Entity<Server>(entity =>
            {
                entity.ToTable("servers", "dionysus");

                entity.Property(e => e.ServerId).HasColumnName("server_id");

                entity.Property(e => e.ServerName)
                    .HasMaxLength(100)
                    .HasColumnName("server_name");

                entity.Property(e => e.ServerUrl)
                    .HasMaxLength(480)
                    .HasColumnName("server_url");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users", "dionysus");

                entity.HasIndex(e => e.UserEmail, "users_user_email_key")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(480)
                    .HasColumnName("user_email");

                entity.Property(e => e.UserName)
                    .HasMaxLength(100)
                    .HasColumnName("user_name");

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(480)
                    .HasColumnName("user_password");
            });

            modelBuilder.Entity<Writer>(entity =>
            {
                entity.ToTable("writers", "dionysus");

                entity.Property(e => e.WriterId).HasColumnName("writer_id");

                entity.Property(e => e.WriterFirstName)
                    .HasMaxLength(100)
                    .HasColumnName("writer_first_name");

                entity.Property(e => e.WriterImage)
                    .HasMaxLength(480)
                    .HasColumnName("writer_image");

                entity.Property(e => e.WriterLastName)
                    .HasMaxLength(100)
                    .HasColumnName("writer_last_name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
