using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using scrapper.api.Entities;

namespace scrapper.api.Context
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
        public virtual DbSet<Imdb> Imdbs { get; set; } = null!;
        public virtual DbSet<Migration> Migrations { get; set; } = null!;
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
        public virtual DbSet<TypeormMetadatum> TypeormMetadata { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Writer> Writers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Host=localhost;Database=dionysus_test;Username=ares;Password=7142");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Actor>(entity =>
            {
                entity.ToTable("actor", "dionysus");

                entity.Property(e => e.ActorId).HasColumnName("actor_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .HasColumnName("first_name");

                entity.Property(e => e.Image)
                    .HasMaxLength(480)
                    .HasColumnName("image");

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .HasColumnName("last_name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<Director>(entity =>
            {
                entity.ToTable("director", "dionysus");

                entity.Property(e => e.DirectorId).HasColumnName("director_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .HasColumnName("first_name");

                entity.Property(e => e.Image)
                    .HasMaxLength(480)
                    .HasColumnName("image");

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .HasColumnName("last_name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<Episode>(entity =>
            {
                entity.ToTable("episode", "dionysus");

                entity.HasIndex(e => new { e.Number, e.SeasonId, e.SeriesId }, "UQ_2eb03720c3cb40a595bf1fe1479")
                    .IsUnique();

                entity.Property(e => e.EpisodeId).HasColumnName("episode_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.EpisodeLength).HasColumnName("episode_length");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Number).HasColumnName("number");

                entity.Property(e => e.ReleaseDate).HasColumnName("release_date");

                entity.Property(e => e.SeasonId).HasColumnName("season_id");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Wallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("wallpaper");

                entity.HasOne(d => d.Season)
                    .WithMany(p => p.Episodes)
                    .HasForeignKey(d => d.SeasonId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_d8790eefed71394952672828c1c");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.Episodes)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_f20e08420f85a1e8c5a9ce349f0");
            });

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.ToTable("genre", "dionysus");

                entity.HasIndex(e => e.GenreName, "UQ_35a95dd11ad0db6e9684ca50df0")
                    .IsUnique();

                entity.Property(e => e.GenreId).HasColumnName("genre_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.GenreName)
                    .HasMaxLength(100)
                    .HasColumnName("genre_name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<GenreRating>(entity =>
            {
                entity.HasKey(e => e.GenreRating1)
                    .HasName("PK_ec2035dc506c12e74b7c7dd7125");

                entity.ToTable("genre_rating", "dionysus");

                entity.HasIndex(e => new { e.UserId, e.GenreId }, "UQ_0863ea40c5e130f7c0e2c89dc1e")
                    .IsUnique();

                entity.Property(e => e.GenreRating1).HasColumnName("genre_rating");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.GenreId).HasColumnName("genre_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Genre)
                    .WithMany(p => p.GenreRatings)
                    .HasForeignKey(d => d.GenreId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_a83c4f0ef39ac81ea94e156af01");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.GenreRatings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_744d451d9203ade60ca413ac9b2");
            });

            modelBuilder.Entity<Imdb>(entity =>
            {
                entity.ToTable("imdb", "dionysus");

                entity.Property(e => e.ImdbId).HasColumnName("imdb_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Vote).HasColumnName("vote");
            });

            modelBuilder.Entity<Migration>(entity =>
            {
                entity.ToTable("migrations");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnType("character varying")
                    .HasColumnName("name");

                entity.Property(e => e.Timestamp).HasColumnName("timestamp");
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.ToTable("movie", "dionysus");

                entity.HasIndex(e => new { e.Name, e.ReleaseYear }, "UQ_8b55a4927daccdbe2aaa836d7c6")
                    .IsUnique();

                entity.HasIndex(e => e.ReleaseYear, "UQ_ac5ba27d45bdde554c904bf8e06")
                    .IsUnique();

                entity.HasIndex(e => e.ImdbId, "UQ_f05604ea5d74a15426885d74e27")
                    .IsUnique();

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.Budget).HasColumnName("budget");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.ImdbId).HasColumnName("imdb_id");

                entity.Property(e => e.Length).HasColumnName("length");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.OgLanguage)
                    .HasMaxLength(20)
                    .HasColumnName("og_language");

                entity.Property(e => e.PgRating)
                    .HasMaxLength(20)
                    .HasColumnName("pg_rating");

                entity.Property(e => e.ReleaseYear).HasColumnName("release_year");

                entity.Property(e => e.Revenue).HasColumnName("revenue");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.Trailer)
                    .HasMaxLength(480)
                    .HasColumnName("trailer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Wallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("wallpaper");

                entity.HasOne(d => d.Imdb)
                    .WithOne(p => p.Movie)
                    .HasForeignKey<Movie>(d => d.ImdbId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_f05604ea5d74a15426885d74e27");
            });

            modelBuilder.Entity<MovieCast>(entity =>
            {
                entity.ToTable("movie_cast", "dionysus");

                entity.HasIndex(e => new { e.ActorId, e.MovieId, e.Role }, "UQ_c87c534235ac750c4636e0f49ec")
                    .IsUnique();

                entity.Property(e => e.MovieCastId).HasColumnName("movie_cast_id");

                entity.Property(e => e.ActorId).HasColumnName("actor_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.Role)
                    .HasMaxLength(100)
                    .HasColumnName("role");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Actor)
                    .WithMany(p => p.MovieCasts)
                    .HasForeignKey(d => d.ActorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_c50bb0e4209901efcc193be54d9");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieCasts)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_a6c0ed450412f8365639b5a700b");
            });

            modelBuilder.Entity<MovieDirector>(entity =>
            {
                entity.ToTable("movie_directors", "dionysus");

                entity.HasIndex(e => new { e.DirectorId, e.MovieId }, "UQ_3b0d1b1abe6178bf8bf96ef3b4e")
                    .IsUnique();

                entity.Property(e => e.MovieDirectorId).HasColumnName("movieDirectorId");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.DirectorId).HasColumnName("director_id");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Director)
                    .WithMany(p => p.MovieDirectors)
                    .HasForeignKey(d => d.DirectorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_eb573a92cde28f2e760b49bc9a0");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieDirectors)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_cddab269ba4fc7f435682e5f879");
            });

            modelBuilder.Entity<MovieGenre>(entity =>
            {
                entity.ToTable("movie_genres", "dionysus");

                entity.HasIndex(e => new { e.GenreId, e.MovieId }, "UQ_ec45eae1bc95d1461ad55713ffc")
                    .IsUnique();

                entity.Property(e => e.MovieGenreId).HasColumnName("movie_genre_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.GenreId).HasColumnName("genre_id");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Genre)
                    .WithMany(p => p.MovieGenres)
                    .HasForeignKey(d => d.GenreId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_bbbc12542564f7ff56e36f5bbf6");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieGenres)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_ae967ce58ef99e9ff3933ccea48");
            });

            modelBuilder.Entity<MovieHistory>(entity =>
            {
                entity.ToTable("movie_history", "dionysus");

                entity.HasIndex(e => new { e.MovieId, e.UserId }, "UQ_09823499547badebad51545f43e")
                    .IsUnique();

                entity.Property(e => e.MovieHistoryId).HasColumnName("movie_history_id");

                entity.Property(e => e.MinutesWatched).HasColumnName("minutes_watched");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.WatchDate)
                    .HasColumnName("watch_date")
                    .HasDefaultValueSql("('now'::text)::date");

                entity.Property(e => e.WatchTime)
                    .HasColumnName("watch_time")
                    .HasDefaultValueSql("('now'::text)::time with time zone");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieHistories)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_96b014753f2e458a3e7dc8bf383");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.MovieHistories)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_c86a01a76183b40cc6f26b2570e");
            });

            modelBuilder.Entity<MovieProductionCompany>(entity =>
            {
                entity.ToTable("movie_production_company", "dionysus");

                entity.HasIndex(e => new { e.MovieId, e.ProductionCompanyId }, "UQ_231ba172259aa3db1b9e8010cf9")
                    .IsUnique();

                entity.Property(e => e.MovieProductionCompanyId).HasColumnName("movie_production_company_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.ProductionCompanyId).HasColumnName("production_company_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieProductionCompanies)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_7cc44b65cefb3dbd3ad26da73a8");

                entity.HasOne(d => d.ProductionCompany)
                    .WithMany(p => p.MovieProductionCompanies)
                    .HasForeignKey(d => d.ProductionCompanyId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_92a96d35c38bb1228a407b945df");
            });

            modelBuilder.Entity<MovieRating>(entity =>
            {
                entity.ToTable("movie_rating", "dionysus");

                entity.HasIndex(e => new { e.UserId, e.MovieId }, "UQ_e7eadbc5a32defa4d7dc7da35ea")
                    .IsUnique();

                entity.Property(e => e.MovieRatingId).HasColumnName("movie_rating_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieRatings)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_480930884cf2618d2b678f69189");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.MovieRatings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_634ac661eca500eb84bd825ecb3");
            });

            modelBuilder.Entity<MovieServer>(entity =>
            {
                entity.HasKey(e => e.MovieServersId)
                    .HasName("PK_ecfd36c0ab98f565f05e0889517");

                entity.ToTable("movie_servers", "dionysus");

                entity.HasIndex(e => new { e.MovieId, e.ServerId }, "UQ_36e4a064e169b00ec22fda2edbb")
                    .IsUnique();

                entity.Property(e => e.MovieServersId).HasColumnName("movie_servers_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.ServerId).HasColumnName("server_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Url)
                    .HasMaxLength(480)
                    .HasColumnName("url");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieServers)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_5166d616f4a6c9e5cd2a6d453d5");

                entity.HasOne(d => d.Server)
                    .WithMany(p => p.MovieServers)
                    .HasForeignKey(d => d.ServerId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_5359e7e13d49abe1e91dddd8912");
            });

            modelBuilder.Entity<MovieWriter>(entity =>
            {
                entity.ToTable("movie_writers", "dionysus");

                entity.HasIndex(e => new { e.MovieId, e.WriterId }, "UQ_7539c1248b52942451872c3273f")
                    .IsUnique();

                entity.Property(e => e.MovieWriterId).HasColumnName("movie_writer_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.WriterId).HasColumnName("writer_id");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieWriters)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_ebb25bbec454cb03cfcaa2acc70");

                entity.HasOne(d => d.Writer)
                    .WithMany(p => p.MovieWriters)
                    .HasForeignKey(d => d.WriterId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_4d376637da7b4905119de222338");
            });

            modelBuilder.Entity<ProductionCompany>(entity =>
            {
                entity.ToTable("production_company", "dionysus");

                entity.HasIndex(e => e.Name, "UQ_4d8510d463ec5e3893c807bde97")
                    .IsUnique();

                entity.Property(e => e.ProductionCompanyId).HasColumnName("production_company_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Image)
                    .HasMaxLength(480)
                    .HasColumnName("image");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");
            });

            modelBuilder.Entity<Season>(entity =>
            {
                entity.ToTable("season", "dionysus");

                entity.HasIndex(e => new { e.SeriesId, e.Number }, "UQ_529038e0b7e04f5278568dfd65d")
                    .IsUnique();

                entity.Property(e => e.SeasonId).HasColumnName("season_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Number).HasColumnName("number");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.Trailer)
                    .HasMaxLength(480)
                    .HasColumnName("trailer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Wallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("wallpaper");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.Seasons)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_4efcc05beed4bfa3079a3a1a99a");
            });

            modelBuilder.Entity<Series>(entity =>
            {
                entity.ToTable("series", "dionysus");

                entity.HasIndex(e => e.ImdbId, "UQ_1a97e396b0d21b0b2ec4deccb28")
                    .IsUnique();

                entity.HasIndex(e => new { e.Name, e.ReleaseYear }, "UQ_583b9dae4c0c02311449db727a1")
                    .IsUnique();

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.ImdbId).HasColumnName("imdb_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.OgLanguage)
                    .HasMaxLength(20)
                    .HasColumnName("og_language");

                entity.Property(e => e.PgRating)
                    .HasMaxLength(20)
                    .HasColumnName("pg_rating");

                entity.Property(e => e.ReleaseYear).HasColumnName("release_Year");

                entity.Property(e => e.Summery)
                    .HasMaxLength(480)
                    .HasColumnName("summery");

                entity.Property(e => e.Trailer)
                    .HasMaxLength(480)
                    .HasColumnName("trailer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Wallpaper)
                    .HasMaxLength(480)
                    .HasColumnName("wallpaper");

                entity.HasOne(d => d.Imdb)
                    .WithOne(p => p.Series)
                    .HasForeignKey<Series>(d => d.ImdbId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_1a97e396b0d21b0b2ec4deccb28");
            });

            modelBuilder.Entity<SeriesCast>(entity =>
            {
                entity.ToTable("series_cast", "dionysus");

                entity.HasIndex(e => new { e.ActorId, e.SeriesId, e.ActorRole }, "UQ_8989dc31bf5f3dd91a4e8e7b29d")
                    .IsUnique();

                entity.Property(e => e.SeriesCastId).HasColumnName("series_cast_id");

                entity.Property(e => e.ActorId).HasColumnName("actor_id");

                entity.Property(e => e.ActorRole)
                    .HasMaxLength(100)
                    .HasColumnName("actor_role");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Actor)
                    .WithMany(p => p.SeriesCasts)
                    .HasForeignKey(d => d.ActorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_5603e6fb3d4a5120e452925455e");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.SeriesCasts)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_0df029204e4113011c5a7ee3827");
            });

            modelBuilder.Entity<SeriesDirector>(entity =>
            {
                entity.ToTable("series_directors", "dionysus");

                entity.HasIndex(e => new { e.SeriesId, e.DirectorId }, "UQ_b3b8283efa246e3b7d4b97121a1")
                    .IsUnique();

                entity.Property(e => e.SeriesDirectorId).HasColumnName("series_director_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.DirectorId).HasColumnName("director_id");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Director)
                    .WithMany(p => p.SeriesDirectors)
                    .HasForeignKey(d => d.DirectorId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_2c1e82147a6d7838c0e4759305c");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.SeriesDirectors)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_17e99ff7097800371c4452c7de8");
            });

            modelBuilder.Entity<SeriesGenre>(entity =>
            {
                entity.HasKey(e => e.SeriesGenres)
                    .HasName("PK_454fa11c935eee4f19895498711");

                entity.ToTable("series_genres", "dionysus");

                entity.HasIndex(e => new { e.GenreId, e.SeriesId }, "UQ_1f058e1ca636a3229ff47b8b27b")
                    .IsUnique();

                entity.Property(e => e.SeriesGenres).HasColumnName("series_genres");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.GenreId).HasColumnName("genre_id");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.Genre)
                    .WithMany(p => p.SeriesGenres)
                    .HasForeignKey(d => d.GenreId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_76732559d297ad04639b3fc75a1");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.SeriesGenres)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_74ac52950bb624b4e2437b3db7d");
            });

            modelBuilder.Entity<SeriesHistory>(entity =>
            {
                entity.ToTable("series_history", "dionysus");

                entity.HasIndex(e => new { e.EpisodeId, e.UserId }, "UQ_47263c7f08b9ae8c909f4b91b0f")
                    .IsUnique();

                entity.Property(e => e.SeriesHistoryId).HasColumnName("series_history_id");

                entity.Property(e => e.EpisodeId).HasColumnName("episode_id");

                entity.Property(e => e.MinutesWatched).HasColumnName("minutes_watched");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.WatchDate)
                    .HasColumnName("watch_date")
                    .HasDefaultValueSql("('now'::text)::date");

                entity.Property(e => e.WatchTime)
                    .HasColumnName("watch_time")
                    .HasDefaultValueSql("('now'::text)::time with time zone");

                entity.HasOne(d => d.Episode)
                    .WithMany(p => p.SeriesHistories)
                    .HasForeignKey(d => d.EpisodeId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_d1fe211d68a81b84936eed85be9");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SeriesHistories)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_2d932cf49ecea52111535b356c7");
            });

            modelBuilder.Entity<SeriesProductionCompany>(entity =>
            {
                entity.ToTable("series_production_company", "dionysus");

                entity.HasIndex(e => new { e.SeriesId, e.ProductionCompanyId }, "UQ_2c3aff80ec5aa8b07eab21df0c7")
                    .IsUnique();

                entity.Property(e => e.SeriesProductionCompanyId).HasColumnName("series_production_company_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.ProductionCompanyId).HasColumnName("production_company_id");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.HasOne(d => d.ProductionCompany)
                    .WithMany(p => p.SeriesProductionCompanies)
                    .HasForeignKey(d => d.ProductionCompanyId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_3ea58edf35aa1c2f27af45fd14a");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.SeriesProductionCompanies)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_c2374c7e7f35cf0b271456a7961");
            });

            modelBuilder.Entity<SeriesRating>(entity =>
            {
                entity.ToTable("series_rating", "dionysus");

                entity.HasIndex(e => new { e.SeriesId, e.UserId }, "UQ_46b0228032420ac3d8317725d84")
                    .IsUnique();

                entity.Property(e => e.SeriesRatingId).HasColumnName("series_rating_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.SeriesRatings)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_65bcbee63896fad41d9cef1eba0");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SeriesRatings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_98a48a1e0521cbd0be8d5303cab");
            });

            modelBuilder.Entity<SeriesServer>(entity =>
            {
                entity.ToTable("series_servers", "dionysus");

                entity.HasIndex(e => new { e.EpisodeId, e.ServerId }, "UQ_afa10bc3a1fb8a28e97666bce09")
                    .IsUnique();

                entity.Property(e => e.SeriesServerId).HasColumnName("series_server_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.EpisodeId).HasColumnName("episode_id");

                entity.Property(e => e.ServerId).HasColumnName("server_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Url)
                    .HasMaxLength(480)
                    .HasColumnName("url");

                entity.HasOne(d => d.Episode)
                    .WithMany(p => p.SeriesServers)
                    .HasForeignKey(d => d.EpisodeId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_deaafeb41a72533c1c754c71524");

                entity.HasOne(d => d.Server)
                    .WithMany(p => p.SeriesServers)
                    .HasForeignKey(d => d.ServerId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_635158cd5a62ff26b84568b126b");
            });

            modelBuilder.Entity<SeriesWriter>(entity =>
            {
                entity.HasKey(e => e.SeriesWritersId)
                    .HasName("PK_4216da3ca181dd864561405618f");

                entity.ToTable("series_writers", "dionysus");

                entity.HasIndex(e => new { e.SeriesId, e.WriterId }, "UQ_9fa746f0d2e0fcd076db0040f18")
                    .IsUnique();

                entity.Property(e => e.SeriesWritersId).HasColumnName("series_writers_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.SeriesId).HasColumnName("series_id");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.WriterId).HasColumnName("writer_id");

                entity.HasOne(d => d.Series)
                    .WithMany(p => p.SeriesWriters)
                    .HasForeignKey(d => d.SeriesId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_7086b69311c574c5157f1def51e");

                entity.HasOne(d => d.Writer)
                    .WithMany(p => p.SeriesWriters)
                    .HasForeignKey(d => d.WriterId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_0c121bba561f23f5d88f77b6496");
            });

            modelBuilder.Entity<Server>(entity =>
            {
                entity.HasKey(e => e.ServersId)
                    .HasName("PK_bab7295995274fe8359fa16af1c");

                entity.ToTable("servers", "dionysus");

                entity.HasIndex(e => e.Name, "UQ_555671bf0b4b7ec59c9985532e1")
                    .IsUnique();

                entity.Property(e => e.ServersId).HasColumnName("servers_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Url)
                    .HasMaxLength(480)
                    .HasColumnName("url");
            });

            modelBuilder.Entity<TypeormMetadatum>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("typeorm_metadata");

                entity.Property(e => e.Database)
                    .HasColumnType("character varying")
                    .HasColumnName("database");

                entity.Property(e => e.Name)
                    .HasColumnType("character varying")
                    .HasColumnName("name");

                entity.Property(e => e.Schema)
                    .HasColumnType("character varying")
                    .HasColumnName("schema");

                entity.Property(e => e.Table)
                    .HasColumnType("character varying")
                    .HasColumnName("table");

                entity.Property(e => e.Type)
                    .HasColumnType("character varying")
                    .HasColumnName("type");

                entity.Property(e => e.Value).HasColumnName("value");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users", "dionysus");

                entity.HasIndex(e => e.UserName, "UQ_074a1f262efaca6aba16f7ed920")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ_97672ac88f789774dd47f7c8be3")
                    .IsUnique();

                entity.HasIndex(e => e.VerificationCode, "verificationCode_index");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.Email)
                    .HasMaxLength(480)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .HasColumnName("first_name");

                entity.Property(e => e.Image)
                    .HasMaxLength(280)
                    .HasColumnName("image")
                    .HasDefaultValueSql("'default.png'::character varying");

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .HasColumnName("last_name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.UserName)
                    .HasMaxLength(100)
                    .HasColumnName("user_name");

                entity.Property(e => e.UserPassword)
                    .HasMaxLength(400)
                    .HasColumnName("user_password")
                    .HasDefaultValueSql("'default'::character varying");

                entity.Property(e => e.VerificationCode).HasColumnName("verification_code");

                entity.Property(e => e.Verified).HasColumnName("verified");
            });

            modelBuilder.Entity<Writer>(entity =>
            {
                entity.ToTable("writers", "dionysus");

                entity.Property(e => e.WriterId).HasColumnName("writer_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .HasColumnName("first_name");

                entity.Property(e => e.Image)
                    .HasMaxLength(480)
                    .HasColumnName("image");

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .HasColumnName("last_name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("now()");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
